/* ============================================================
   AUTHENTICATION
   Verifies username + password against USERS in data/credentials.js
   Stores session in localStorage so user stays logged in.
   ============================================================ */

const SESSION_KEY = "dm_logged_user";

function handleLogin() {
  const u = document.getElementById("usernameInput").value.trim();
  const p = document.getElementById("passwordInput").value;
  const errEl = document.getElementById("loginError");
  errEl.textContent = "";

  const match = USERS.find(x => x.u === u && x.p === p);
  if (!match) {
    errEl.textContent = "Invalid username or password.";
    return;
  }

  localStorage.setItem(SESSION_KEY, u);
  currentUser = u;
  showApp();
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
