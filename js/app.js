/* ============================================================
   MAIN APP LOGIC — COMPLETE
   Features:
   - Session persistence
   - Language switching (en / hi / mr)
   - Category filtering
   - Search (across all languages)
   - Calendar sort: Today → Upcoming → Past → Undated
   - TODAY'S MESSAGES BOX
   - Per-message offer input
   - Per-message edit (base message only)
   - Per-message copy with placeholder replacement
   - Placeholders: {TODAY_DATE} {BUSINESS_NAME} {BUSINESS_PHONE}
                   {BUSINESS_WEBSITE} {BUSINESS_ADDRESS} {MAP_LINK}
   ============================================================ */

let currentUser = null;
let currentLang = "en";
let currentCategory = "all";
let currentSearch = "";
let clientDetails = { name: "", phone: "", website: "", address: "", mapLink: "" };
let messageOffers = {};
let messageEdits  = {};

/* -------- STARTUP -------- */
window.addEventListener("load", () => {
  if (checkExistingSession()) showApp();
  const pw = document.getElementById("passwordInput");
  if (pw) {
    pw.addEventListener("keydown", e => {
      if (e.key === "Enter") handleLogin();
    });
  }
});

function showApp() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");
  // Reset search on app load
  currentSearch = "";
  const sInput = document.getElementById("searchInput");
  if (sInput) sInput.value = "";
  const sClear = document.getElementById("clearSearchBtn");
  if (sClear) sClear.classList.add("hidden");

  loadClientDetails();
  loadOffersAndEdits();
  renderMessages();
}

/* -------- LANGUAGE -------- */
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  renderMessages();
}

/* -------- CATEGORY -------- */
function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll("[data-cat]").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });
  renderMessages();
}

/* -------- SEARCH -------- */
function onSearchInput(val) {
  currentSearch = (val || "").trim().toLowerCase();
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.toggle("hidden", !currentSearch);
  renderMessages();
}

function clearSearch() {
  currentSearch = "";
  const input = document.getElementById("searchInput");
  if (input) { input.value = ""; input.focus(); }
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");
  renderMessages();
}

function matchesSearch(msg, q) {
  if (!q) return true;
  const fields = [
    msg.title?.en, msg.title?.hi, msg.title?.mr,
    msg.message?.en, msg.message?.hi, msg.message?.mr
  ];
  return fields.some(f => f && f.toLowerCase().includes(q));
}

/* -------- CLIENT DETAILS -------- */
function toggleDetailsForm() {
  document.getElementById("detailsForm").classList.toggle("hidden");
}

function loadClientDetails() {
  const saved = localStorage.getItem("dm_details_" + currentUser);
  let parsed = null;
  if (saved) {
    try { parsed = JSON.parse(saved); }
    catch (e) { console.warn("Corrupted client details, resetting.", e); }
  }
  clientDetails = parsed && typeof parsed === "object"
    ? {
        name: parsed.name || "",
        phone: parsed.phone || "",
        website: parsed.website || "",
        address: parsed.address || "",
        mapLink: parsed.mapLink || ""
      }
    : { name: "", phone: "", website: "", address: "", mapLink: "" };

  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  setVal("bizName", clientDetails.name);
  setVal("bizPhone", clientDetails.phone);
  setVal("bizWebsite", clientDetails.website);
  setVal("bizAddress", clientDetails.address);
  setVal("bizMapLink", clientDetails.mapLink);
}

function saveDetails() {
  const getVal = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ""; };
  clientDetails = {
    name: getVal("bizName"),
    phone: getVal("bizPhone"),
    website: getVal("bizWebsite"),
    address: getVal("bizAddress"),
    mapLink: getVal("bizMapLink")
  };
  localStorage.setItem("dm_details_" + currentUser, JSON.stringify(clientDetails));
  showToast("✅ Details saved");
  renderMessages();
}

/* -------- PERSISTENCE -------- */
function loadOffersAndEdits() {
  const o = localStorage.getItem("dm_offers_" + currentUser);
  const e = localStorage.getItem("dm_edits_" + currentUser);

  try { messageOffers = o ? JSON.parse(o) : {}; }
  catch (err) { console.warn("Corrupted offers, resetting.", err); messageOffers = {}; }
  if (!messageOffers || typeof messageOffers !== "object") messageOffers = {};

  try { messageEdits = e ? JSON.parse(e) : {}; }
  catch (err) { console.warn("Corrupted edits, resetting.", err); messageEdits = {}; }
  if (!messageEdits || typeof messageEdits !== "object") messageEdits = {};
}
function saveOffers() { localStorage.setItem("dm_offers_" + currentUser, JSON.stringify(messageOffers)); }
function saveEdits()  { localStorage.setItem("dm_edits_"  + currentUser, JSON.stringify(messageEdits)); }

/* -------- SIGNATURE -------- */
function buildSignature() {
  if (!clientDetails.name && !clientDetails.phone && !clientDetails.website && !clientDetails.address) return "";
  let s = "";
  if (clientDetails.name)    s += "🏢 " + clientDetails.name + "\n";
  if (clientDetails.phone)   s += "📞 " + clientDetails.phone + "\n";
  if (clientDetails.website) s += "🌐 " + clientDetails.website + "\n";
  if (clientDetails.address) s += "📍 " + clientDetails.address;
  return s.trim();
}

/* -------- PLACEHOLDER REPLACEMENT -------- */
function getTodayFormatted() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${day} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function replacePlaceholders(text) {
  if (!text) return "";
  const mapFallback = "📍 (Add your Google review link in Business Details)";
  return text
    .replace(/\{TODAY_DATE\}/g, getTodayFormatted())
    .replace(/\{BUSINESS_NAME\}/g, clientDetails.name || "")
    .replace(/\{BUSINESS_PHONE\}/g, clientDetails.phone || "")
    .replace(/\{BUSINESS_WEBSITE\}/g, clientDetails.website || "")
    .replace(/\{BUSINESS_ADDRESS\}/g, clientDetails.address || "")
    .replace(/\{MAP_LINK\}/g, clientDetails.mapLink || mapFallback);
}

/* -------- GET BASE MESSAGE -------- */
function getBaseMessage(msg) {
  if (messageEdits[msg.id]) return messageEdits[msg.id];
  return msg.message[currentLang] || msg.message.en;
}

/* -------- BUILD FINAL MESSAGE -------- */
function buildFullMessage(msg) {
  let text = replacePlaceholders(getBaseMessage(msg));

  const offer = messageOffers[msg.id];
  if (msg.includeOffer && offer && offer.trim()) {
    text += "\n\n🎁 Special Offer: " + offer.trim();
  }

  if (msg.includeSignature) {
    const sig = buildSignature();
    if (sig) text += "\n\n" + sig;
  }
  return text;
}

/* -------- CALENDAR SORT -------- */
function getTodayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getDaysDiff(dateStr, todayStr) {
  const a = new Date(dateStr + "T00:00:00");
  const b = new Date(todayStr + "T00:00:00");
  return Math.round((a - b) / (1000 * 60 * 60 * 24));
}

function sortByCalendar(messages) {
  const today = getTodayStr();
  return messages.slice().sort((a, b) => {
    const aHas = !!a.date, bHas = !!b.date;
    if (!aHas && bHas) return 1;
    if (aHas && !bHas) return -1;
    if (!aHas && !bHas) return 0;

    const aDiff = getDaysDiff(a.date, today);
    const bDiff = getDaysDiff(b.date, today);

    if (aDiff === 0 && bDiff !== 0) return -1;
    if (bDiff === 0 && aDiff !== 0) return 1;

    const aUp = aDiff > 0, bUp = bDiff > 0;
    if (aUp && !bUp) return -1;
    if (!aUp && bUp) return 1;

    if (aUp && bUp) return aDiff - bDiff;
    return bDiff - aDiff;
  });
}

/* -------- RENDER -------- */
function renderMessages() {
  const list = document.getElementById("messageList");
  if (!list) return;
  const today = getTodayStr();

  let items = ALL_MESSAGES.slice();
  if (currentCategory !== "all") {
    items = items.filter(m => m.category === currentCategory);
  }
  if (currentSearch) {
    items = items.filter(m => matchesSearch(m, currentSearch));
  }
  items = sortByCalendar(items);

  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = `<p style="text-align:center;color:#666;padding:30px 0;">${
      currentSearch ? `No messages match "<b>${escapeHtml(currentSearch)}</b>"` : "No messages in this category."
    }</p>`;
    return;
  }

  const todayItems = items.filter(m => m.date === today);
  const restItems  = items.filter(m => m.date !== today);

  /* -------- TODAY'S MESSAGES BOX -------- */
  if (todayItems.length > 0) {
    const box = document.createElement("div");
    box.className = "today-box";

    const header = document.createElement("div");
    header.className = "today-box-header";
    header.innerHTML = '<span class="today-icon">🎯</span><span>Today\'s Messages</span>';
    box.appendChild(header);

    const sub = document.createElement("div");
    sub.className = "today-box-sub";
    sub.textContent = `${todayItems.length} message${todayItems.length > 1 ? "s" : ""} • ${getTodayFormatted()}`;
    box.appendChild(sub);

    todayItems.forEach(m => box.appendChild(buildCard(m, true)));
    list.appendChild(box);
  }

  /* -------- UPCOMING & OTHERS -------- */
  if (restItems.length > 0) {
    const sec = document.createElement("div");
    sec.className = "section-divider";
    sec.innerHTML = "📅 UPCOMING &amp; OTHERS";
    list.appendChild(sec);
    restItems.forEach(m => list.appendChild(buildCard(m, false)));
  }
}

/* -------- BUILD A CARD -------- */
function buildCard(msg, isToday) {
  const card = document.createElement("div");
  card.className = "card" + (isToday ? " today" : "");
  card.dataset.id = msg.id;

  const fullText = buildFullMessage(msg);
  const titleText = msg.title[currentLang] || msg.title.en;
  const offerText = messageOffers[msg.id] || "";
  const isEdited  = !!messageEdits[msg.id];

  let html = "";

  if (msg.date) {
    const diff = getDaysDiff(msg.date, getTodayStr());
    let label = msg.date;
    if (diff === 0) label += " • Today";
    else if (diff === 1) label += " • Tomorrow";
    else if (diff > 0) label += ` • in ${diff} days`;
    else if (diff === -1) label += " • Yesterday";
    else label += ` • ${Math.abs(diff)} days ago`;
    html += `<div class="date-badge ${isToday ? "today-badge" : ""}">${label}</div>`;
  } else {
    html += `<div class="date-badge">💼 Business Template</div>`;
  }

  html += `<div class="title">${escapeHtml(titleText)}${isEdited ? ' <span style="font-size:.7rem;color:#c62828;font-weight:600;">(edited)</span>' : ""}</div>`;

  if (msg.includeOffer) {
    html += `
      <div class="offer-input-wrap ${offerText ? "visible" : ""}" id="offerWrap-${msg.id}">
        <label>🎁 Add your offer (optional)</label>
        <input type="text" id="offerInput-${msg.id}" placeholder="e.g., 20% off till Sunday" value="${escapeAttr(offerText)}">
      </div>
      <div class="offer-box ${offerText ? "visible" : ""}" id="offerBox-${msg.id}">
        <div class="offer-label">🎁 Special Offer</div>
        <div class="offer-text" id="offerTextBox-${msg.id}">${escapeHtml(offerText)}</div>
      </div>
    `;
  }

  html += `<div class="message-body" id="msgBody-${msg.id}">${escapeHtml(fullText)}</div>`;

  if (msg.includeSignature) {
    const sig = buildSignature();
    if (sig) {
      html += `<div class="signature">${escapeHtml(sig).replace(/\n/g, "<br>")}</div>`;
    }
  }

  html += `
    <div class="actions">
      ${msg.includeOffer ? `<button onclick="toggleOffer('${msg.id}')">🎁 Offer</button>` : ""}
      <button class="copy" onclick="copyMessage('${msg.id}')">📋 Copy</button>
      <button onclick="editMessage('${msg.id}')">✏️ Edit</button>
      <button onclick="resetMessage('${msg.id}')">↺ Reset</button>
    </div>
  `;

  card.innerHTML = html;

  if (msg.includeOffer) {
    const input = card.querySelector("#offerInput-" + msg.id);
    if (input) {
      input.addEventListener("input", () => {
        messageOffers[msg.id] = input.value;
        saveOffers();
        const bodyEl = card.querySelector("#msgBody-" + msg.id);
        if (bodyEl) bodyEl.textContent = buildFullMessage(msg);
        const box = card.querySelector("#offerBox-" + msg.id);
        const boxText = card.querySelector("#offerTextBox-" + msg.id);
        if (input.value.trim()) {
          if (box) box.classList.add("visible");
          if (boxText) boxText.textContent = input.value;
        } else {
          if (box) box.classList.remove("visible");
        }
      });
    }
  }

  return card;
}

/* -------- OFFER TOGGLE -------- */
function toggleOffer(id) {
  const wrap = document.getElementById("offerWrap-" + id);
  if (wrap) wrap.classList.toggle("visible");
  const inp = document.getElementById("offerInput-" + id);
  if (inp) inp.focus();
}

/* -------- COPY -------- */
function copyMessage(id) {
  const msg = ALL_MESSAGES.find(m => m.id === id);
  if (!msg) return;
  const text = buildFullMessage(msg);

  navigator.clipboard.writeText(text)
    .then(() => showToast("📋 Copied to clipboard"))
    .catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      showToast("📋 Copied to clipboard");
    });
}

/* -------- EDIT (BASE MESSAGE ONLY) -------- */
function editMessage(id) {
  const msg = ALL_MESSAGES.find(m => m.id === id);
  if (!msg) return;

  const bodyEl = document.getElementById("msgBody-" + id);
  if (!bodyEl) return;

  const baseText = getBaseMessage(msg);

  const wrap = document.createElement("div");
  wrap.className = "edit-wrap";
  wrap.innerHTML = `<div class="edit-hint">✏️ Editing the base message. Offer &amp; signature will be added automatically when you copy.</div>`;

  const ta = document.createElement("textarea");
  ta.className = "edit-area";
  ta.value = baseText;
  wrap.appendChild(ta);

  bodyEl.replaceWith(wrap);
  ta.focus();

  const actions = wrap.closest(".card").querySelector(".actions");
  if (!actions) return;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 Save Edit";
  saveBtn.style.background = "#25d366";
  saveBtn.style.color = "#fff";
  saveBtn.onclick = () => {
    const trimmed = ta.value.trim();
    if (!trimmed || trimmed === (msg.message[currentLang] || msg.message.en)) {
      delete messageEdits[id];
    } else {
      messageEdits[id] = ta.value;
    }
    saveEdits();
    showToast("✅ Edit saved");
    renderMessages();
  };
  actions.prepend(saveBtn);
}

/* -------- RESET -------- */
function resetMessage(id) {
  delete messageEdits[id];
  delete messageOffers[id];
  saveEdits();
  saveOffers();
  showToast("↺ Reset done");
  renderMessages();
}

/* -------- HELPERS -------- */
function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
function showToast(msg) {
  let t = document.getElementById("toastEl");
  if (!t) {
    t = document.createElement("div");
    t.id = "toastEl";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 1800);
}
