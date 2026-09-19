/* ============================================================
   AUTHENTICATION
   Verifies ID + password against USERS in credentials.js
   Stores the logged-in ID in localStorage.
   ============================================================ */

const SESSION_KEY = "dm_logged_user";

let currentUser = null;

function handleLogin() {
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const errEl = document.getElementById("loginError");

  const enteredId = usernameInput.value.trim().toUpperCase();
  const enteredPassword = passwordInput.value;

  errEl.textContent = "";

  const match = USERS.find(
    user =>
      user.u.toUpperCase() === enteredId &&
      user.p === enteredPassword
  );

  if (!match) {
    errEl.textContent = "Invalid ID or password.";
    return;
  }

  currentUser = match.u;
  localStorage.setItem(SESSION_KEY, currentUser);

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
  const savedUser = localStorage.getItem(SESSION_KEY);

  const validUser = USERS.find(user => user.u === savedUser);

  if (validUser) {
    currentUser = validUser.u;
    return true;
  }

  localStorage.removeItem(SESSION_KEY);
  currentUser = null;
  return false;
}
