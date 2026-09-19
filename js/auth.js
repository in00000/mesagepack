/* ============================================================
   AUTHENTICATION — PBKDF2 hashed passwords
   ============================================================ */

const SESSION_KEY = "dm_logged_user";
const PBKDF2_ITERATIONS = 300000;

function hexToBytes(hex) {
  const arr = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    arr[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return arr;
}

function bytesToHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function pbkdf2Hash(password, saltHex) {
  const enc = new TextEncoder();
  const salt = hexToBytes(saltHex);
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  return bytesToHex(new Uint8Array(bits));
}

async function handleLogin() {
  const u = document.getElementById("usernameInput").value.trim();
  const p = document.getElementById("passwordInput").value;
  const errEl = document.getElementById("loginError");
  const btn = document.querySelector("#loginScreen .btn-primary");

  errEl.textContent = "";

  const user = USERS.find(x => x.u === u);
  if (!user) {
    errEl.textContent = "Invalid username or password.";
    return;
  }

  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Verifying...";

  try {
    const computed = await pbkdf2Hash(p, user.s);
    if (computed === user.h) {
      localStorage.setItem(SESSION_KEY, u);
      currentUser = u;
      showApp();
    } else {
      errEl.textContent = "Invalid username or password.";
    }
  } catch (e) {
    console.error("Login error:", e);
    errEl.textContent = "Login error. Please try again.";
  } finally {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  currentUser = null;
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
  document.getElementById("usernameInput").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("loginError").textContent = "";
}

function checkExistingSession() {
  const saved = localStorage.getItem(SESSION_KEY);
  if (saved && USERS.some(x => x.u === saved)) {
    currentUser = saved;
    return true;
  }
  return false;
}
