/* script.js - final clean build for Petir Biru Store
   - Matches index.html structure you provided
   - Fixes: close sidebar, close history, close topup, music manual play, no doubled listeners
   - Put this file as script.js and load with defer
*/

/* ====== Data & helpers ====== */
const GAMES = [
  {id:"roblox", name:"Roblox", img:"aset/roblox.jpeg", prices:[
    {code:"R-80V", label:"80 Robux (VILOG)", oldPrice:18000, price:15000},
    {code:"R-160V", label:"160 Robux (VILOG)", oldPrice:34000, price:30000},
    {code:"R-240V", label:"240 Robux (VILOG)", oldPrice:48000, price:45000},
    {code:"R-320V", label:"320 Robux (VILOG)", oldPrice:64000, price:60000},
    {code:"R-500V", label:"500 Robux (VILOG)", oldPrice:80000, price:70000},
    {code:"R-1000V", label:"1000 Robux (VILOG)", oldPrice:150000, price:140000},
    {code:"R-1500V", label:"1500 Robux (VILOG)", oldPrice:225000, price:210000},
    {code:"R-2000V", label:"2000 Robux (VILOG)", oldPrice:300000, price:280000},
    {code:"R-2500V", label:"2500 Robux (VILOG)", oldPrice:375000, price:350000},
    {code:"R-3000V", label:"3000 Robux (VILOG)", oldPrice:450000, price:420000},
    {code:"R-4000V", label:"4000 Robux (VILOG)", oldPrice:600000, price:560000},
    {code:"R-5000V", label:"5000 Robux (VILOG)", oldPrice:750000, price:700000},
    {code:"R-10000V", label:"10000 Robux (VILOG)", oldPrice:1500000, price:1400000},
    {code:"R-100G", label:"100 Robux (Gamepass)", oldPrice:15000, price:13500},
    {code:"R-200G", label:"200 Robux (Gamepass)", oldPrice:30000, price:27000},
    {code:"R-300G", label:"300 Robux (Gamepass)", oldPrice:45000, price:40500},
    {code:"R-400G", label:"400 Robux (Gamepass)", oldPrice:60000, price:54000},
    {code:"R-500G", label:"500 Robux (Gamepass)", oldPrice:75000, price:67500},
    {code:"R-1000G", label:"1000 Robux (Gamepass)", oldPrice:140000, price:130000}
  ]},
  {id:"FF", name:"Free Fire", img:"aset/ff.jpeg", prices:[ {code:"DM-5", label:"5 Diamond", price:1000} ]},
  {id:"pubg", name:"PUBG Mobile", img:"aset/pubg.jpeg", prices:[
    {code:"P-60", label:"60 UC", price:10000},
    {code:"P-300", label:"300 UC", price:50000},
    {code:"P-600", label:"600 UC", price:100000}
  ]},
  {id:"undawn", name:"Undawn", img:"aset/undawn.jpeg", prices:[
    {code:"U-100", label:"100 Gold", price:10000},
    {code:"U-500", label:"500 Gold", price:50000},
    {code:"U-1000", label:"1000 Gold", price:100000}
  ]},
  {id:"ml", name:"Mobile Legends", img:"aset/ml.jpeg", prices:[
  {code:"ML-5", label:"5 Diamond", price:2500},
  {code:"ML-10", label:"10 Diamond", price:4900},
  {code:"ML-28", label:"28 Diamond", price:8946},
  {code:"ML-40", label:"40 Diamond", price:12200},
  {code:"ML-85", label:"85 Diamond", price:25000},
  {code:"ML-170", label:"170 Diamond", price:47500},
  {code:"ML-240", label:"240 Diamond", price:66400},
  {code:"ML-257", label:"257 Diamond", price:70500},
  {code:"ML-284", label:"284 Diamond", price:78100},
  {code:"ML-344", label:"344 Diamond", price:94600},
  {code:"ML-370", label:"370 Diamond", price:101800},
  {code:"ML-408", label:"408 Diamond", price:110160},
  {code:"ML-429", label:"429 Diamond", price:116802},
  {code:"ML-514", label:"514 Diamond", price:141350},
  {code:"ML-600", label:"600 Diamond", price:160040},
  {code:"ML-702", label:"702 Diamond", price:187000},

  {code:"ML-875", label:"875 Diamond", price:230730},
  {code:"ML-878", label:"878 Diamond", price:231792},
  {code:"ML-963", label:"963 Diamond", price:254232},
  {code:"ML-1050", label:"1050 Diamond", price:270770},
  {code:"ML-1220", label:"1220 Diamond", price:321200},
  {code:"ML-1412", label:"1412 Diamond", price:373758},
  {code:"ML-1750", label:"1750 Diamond", price:463750},
  {code:"ML-2010", label:"2010 Diamond", price:498200},
  {code:"ML-2195", label:"2195 Diamond", price:550945},
  {code:"ML-2901", label:"2901 Diamond", price:731052},
  {code:"ML-3688", label:"3688 Diamond", price:944128},
  {code:"ML-4394", label:"4394 Diamond", price:1085318},
  {code:"ML-5532", label:"5532 Diamond", price:1383000},
  {code:"ML-6238", label:"6238 Diamond", price:1528310},
  {code:"ML-7727", label:"7727 Diamond", price:1899842},
  {code:"ML-9288", label:"9288 Diamond", price:2290305},
  {code:"ML-12976", label:"12976 Diamond", price:3218048},
  {code:"ML-14820", label:"14820 Diamond", price:3665360},
  {code:"ML-18576", label:"18576 Diamond", price:4593848},
  {code:"ML-27864", label:"27864 Diamond", price:6882408}
  ]},
  {id:"zepeto", name:"Zepeto", img:"aset/zepeto.jpeg", prices:[
    {code:"Z-10K", label:"10.000 Coin", price:10000},
    {code:"Z-50K", label:"50.000 Coin", price:50000},
    {code:"Z-100K", label:"100.000 Coin", price:100000}
  ]},
  {id:"genshin", name:"Genshin Impact", img:"aset/genshin.jpeg", prices:[
    {code:"GI-60", label:"60 Genesis", price:10000},
    {code:"GI-330", label:"330 Genesis", price:50000},
    {code:"GI-980", label:"980 Genesis", price:100000}
  ]}
];

const PAYMENTS = [
  {id:"gopay", name:"GoPay", logo:"aset/gopay.jpeg"},
  {id:"dana", name:"Dana", logo:"aset/dana.jpeg"},
  {id:"qris", name:"QRIS", logo:"aset/qris.jpeg"},
  {id:"shopee", name:"ShopeePay", logo:"aset/shoope1.png"},
  {id:"ovo", name:"OVO", logo:"aset/ovo.jpeg"},
  {id:"seabank", name:"Seabank", logo:"aset/seabank.jpeg"}
];

const CS_PHONE = "6288279019829";
const HISTORY_KEY = "camelia_topup_history_v4";

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const formatRp = n => (typeof n === 'number') ? n.toLocaleString('id') : n;

/* ===== Banner ===== */
let bannerIdx = 0, bannerTimer = null;
function setupBanner(){
  const track = $("#bannerTrack"), dotsWrap = $("#bannerDots");
  if(!track || !dotsWrap) return;
  const slides = track.children.length;
  dotsWrap.innerHTML = "";
  for(let i=0;i<slides;i++){
    const d = document.createElement('div');
    d.className = "dot" + (i===0?" active":"");
    d.dataset.index = i;
    d.addEventListener("click", ()=> { goBanner(i); resetBannerInterval(); });
    dotsWrap.appendChild(d);
  }
  goBanner(0);
  resetBannerInterval();
}
function goBanner(i){
  const track = $("#bannerTrack");
  if(!track) return;
  const count = track.children.length;
  if(count===0) return;
  bannerIdx = ((i % count) + count) % count;
  track.style.transform = `translateX(-${bannerIdx*100}%)`;
  $$(".dot").forEach(d=> d.classList.toggle("active", Number(d.dataset.index)===bannerIdx));
}
function resetBannerInterval(){ clearInterval(bannerTimer); bannerTimer = setInterval(()=> goBanner(bannerIdx+1), 3000); }

/* ===== Render games ===== */
let currentGame = null, chosenPrice = null, chosenPayment = null;
function renderGames(list = GAMES){
  const root = $("#gameList");
  if(!root) return;
  root.innerHTML = list.map(g => `
    <div class="card-game" data-id="${g.id}" role="button" tabindex="0">
      <img src="${g.img}" alt="${g.name}" onerror="this.style.opacity=.25">
      <div class="gname">${g.name}</div>
      <div class="small" style="color:var(--muted)">Top-up cepat & aman</div>
      <div style="margin-top:12px"><button class="btn-primary buy-inline" data-id="${g.id}">Beli</button></div>
    </div>
  `).join('');
  $$(".card-game").forEach(card=>{
    card.addEventListener("click", (e)=>{
      if(e.target && e.target.classList.contains('buy-inline')) return;
      openTopup(card.dataset.id);
    });
    card.addEventListener("keydown", (e)=> { if(e.key === "Enter") openTopup(card.dataset.id); });
  });
  $$(".buy-inline").forEach(b => b.addEventListener("click", ev => { ev.stopPropagation(); openTopup(b.dataset.id); }));
}

/* ===== Search ===== */
function initSearch(){
  const input = $("#searchInput");
  if(!input) return;
  input.addEventListener("input", function(){
    const q = this.value.trim().toLowerCase();
    if(!q) return renderGames();
    const filtered = GAMES.filter(g => g.name.toLowerCase().includes(q));
    renderGames(filtered);
  });
}

/* ===== Overlay, sidebar helpers ===== */
function openSidebar(){
  const sb = $("#sidebar");
  const overlay = $("#overlay");
  if(!sb) return;
  sb.classList.add("open");
  sb.setAttribute("aria-hidden","false");
  if(overlay) overlay.classList.add("show");
  document.body.classList.add("no-scroll");
}
function closeSidebar(){
  const sb = $("#sidebar");
  const overlay = $("#overlay");
  if(!sb) return;
  sb.classList.remove("open");
  sb.setAttribute("aria-hidden","true");
  if(overlay) overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
}
$("#menuBtn")?.addEventListener("click", ()=> {
  const sb = $("#sidebar");
  if(!sb) return;
  sb.classList.toggle("open");
  sb.setAttribute("aria-hidden", sb.classList.contains("open") ? "false" : "true");
  $("#overlay")?.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

/* ===== Topup modal helpers ===== */
function showTopup(show){
  const tp = $("#topupPage");
  if(!tp) return;
  tp.classList.toggle("show", !!show);
  tp.setAttribute("aria-hidden", show ? "false":"true");
  if(show) $("#overlay")?.classList.add("show"); else $("#overlay")?.classList.remove("show");
  document.body.classList.toggle("no-scroll", !!show);
}
function showStep(n){
  $$(".tp-step").forEach(s=> s.classList.remove("active"));
  const el = $(`#tp-step-${n}`);
  if(el) el.classList.add("active");
  $$(".pstep").forEach(ps=> ps.classList.toggle("active", Number(ps.dataset.step) <= n));
  $("#orderMsg") && ($("#orderMsg").textContent = "");
}

/* ===== Roblox panel ===== */
function renderRobloxPanel(){
  const robloxFlow = $("#robloxFlow");
  if(!robloxFlow || !currentGame) return;
  robloxFlow.innerHTML = `
    <div class="roblox-panel" id="robloxPanelInner">
      <h3>1 Data Akun</h3>
      <label class="small">@Username / LINK GP</label>
      <input id="rb_username" class="roblox-input" placeholder="@username / link akun">
      <label class="small" style="margin-top:10px">Password (Khusus Robux Vilog)</label>
      <input id="rb_password" class="roblox-input" placeholder="Kosongkan jika tak perlu">
      <label class="small" style="margin-top:10px">Isi 3 Code Backup (Jika Ada / kosongin aja)</label>
      <input id="rb_codes" class="roblox-input" placeholder="Code1, Code2, Code3">
      <div class="roblox-note">
       <strong>Klo kaga tau tanya dlu nanti mendingan ya</strong>
       <ol style="margin:8px 0 0 16px; color:#b388f">
         <li>Buat link tutor dm bae dah ke wa admin yak</li>
          <li>Masukan id akun sama pw klo vilog (via login buat yg kaga tau)</li>
          <li>Ga perlu isi kolam password & codee buat robux gempas</li>
          <li>Regional pricenya matiin (WAJIB)</li>
          <li>Proses pending 2x24j Robux auto masuk 1-6 day</li>
          <li>Stok abis auto nanti di kasi tau pas cek ot</li> </div>
      <h3 style="margin-top:14px">2 Pilih Produk</h3>
      <div class="product-grid" id="rbProductGrid"></div>
    </div>
  `;
  robloxFlow.classList.remove('hide');
  const grid = $("#rbProductGrid");
  grid.innerHTML = currentGame.prices.map((p, idx)=> `
    <div class="product-card" data-idx="${idx}" data-code="${p.code}" data-price="${p.price}">
      <div style="height:36px"><img src="${currentGame.img}" alt="${currentGame.name}" style="height:36px;border-radius:6px"></div>
      <div class="product-price">${p.oldPrice ? `<s style="color:#999;font-size:13px;margin-right:6px">Rp ${formatRp(p.oldPrice)}</s>` : ""} Rp ${formatRp(p.price)}</div>
      <div class="product-label">${p.label}</div>
    </div>
  `).join('');
  // selection handlers
  $$(".product-card").forEach(pc=>{
    pc.addEventListener("click", ()=>{
      $$(".product-card").forEach(x=>x.classList.remove("active"));
      pc.classList.add("active");
      const price = Number(pc.dataset.price);
      chosenPrice = { code: pc.dataset.code, price, label: pc.querySelector('.product-label').textContent };
      updateRobloxBottom();
    });
  });
  createRobloxBottom();
  $("#rb_username")?.addEventListener("input", updateRobloxBottom);
  $("#rb_password")?.addEventListener("input", updateRobloxBottom);
  $("#rb_codes")?.addEventListener("input", updateRobloxBottom);
}

let robloxBottomEl = null;
function createRobloxBottom(){
  if(robloxBottomEl){ robloxBottomEl.remove(); robloxBottomEl = null; }
  const bar = document.createElement('div');
  bar.id = 'robloxBottom';
  bar.className = 'roblox-bottom-bar';
  // position above bottom nav
  bar.style.position = 'fixed';
  bar.style.left = '12px';
  bar.style.right = '12px';
  bar.style.bottom = '84px';
  bar.style.zIndex = '1199';
  bar.style.display = 'flex';
  bar.style.justifyContent = 'space-between';
  bar.style.alignItems = 'center';
  bar.style.padding = '12px';
  bar.style.borderRadius = '10px';
  bar.style.background = 'linear-gradient(180deg, rgba(0,12,30,0.95), rgba(0,6,18,0.98))';
  bar.innerHTML = `
    <div style="display:flex;flex-direction:column;">
      <div style="font-size:12px;opacity:.9">Total</div>
      <div id="rbTotal" style="font-weight:800;font-size:18px">Rp 0</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center">
      <button id="rbCancel" class="btn-ghost" style="border-radius:10px;padding:8px 10px">Batal</button>
      <button id="rbBuy" class="roblox-buy-btn" disabled style="border-radius:10px;padding:8px 12px">Beli Sekarang</button>
    </div>
  `;
  document.body.appendChild(bar);
  robloxBottomEl = bar;
  $("#rbCancel")?.addEventListener("click", ()=> closeRobloxPanel());
  $("#rbBuy")?.addEventListener("click", robloxBuyAction);
  updateRobloxBottom();
}
function updateRobloxBottom(){
  const username = $("#rb_username") ? $("#rb_username").value.trim() : "";
  const price = chosenPrice ? chosenPrice.price : 0;
  $("#rbTotal") && ($("#rbTotal").textContent = `Rp ${formatRp(price)}`);
  const buyBtn = $("#rbBuy");
  if(buyBtn) buyBtn.disabled = !(username.length>0 && chosenPrice);
}
function closeRobloxPanel(){
  $("#robloxFlow")?.classList.add('hide');
  $("#robloxFlow") && ($("#robloxFlow").innerHTML = "");
  if(robloxBottomEl){ robloxBottomEl.remove(); robloxBottomEl = null; }
  chosenPrice = null;
  showTopup(false);
}
function robloxBuyAction(){
  const username = $("#rb_username") ? $("#rb_username").value.trim() : "";
  const password = $("#rb_password") ? $("#rb_password").value.trim() : "";
  const codes = $("#rb_codes") ? $("#rb_codes").value.trim() : "";
  if(!username || !chosenPrice){ showToast('fail'); return; }

  const order = {
    id: 'ORD' + Date.now(),
    game: currentGame.name,
    product: chosenPrice.label,
    amount: chosenPrice.price,
    player: username,
    password: password,
    codes: codes,
    method: 'WA',
    date: new Date().toLocaleString()
  };

  saveHistory(order);

  let message = `Halo kak, saya mau top up:\nGame: ${order.game}\nUsername / Link: ${order.player}`;

  // tambahkan password dan codes jika diisi
  if (order.password) message += `\nPassword: ${order.password}`;
  if (order.codes) message += `\nBackup Codes: ${order.codes}`;

  message += `\nNominal: ${order.product}\nTotal: Rp ${formatRp(order.amount)}\n\nMohon diproses ya kak 🙏`;

  const wa = `https://wa.me/${CS_PHONE}?text=${encodeURIComponent(message)}`;
  showToast('success');
  setTimeout(()=> { window.open(wa, "_blank"); closeRobloxPanel(); }, 650);
}

/* ===== ML panel (similar) ===== */
let mlBottomEl = null;
function renderMLPanel(){
  const robloxFlow = $("#robloxFlow");
  if(!robloxFlow || !currentGame) return;
  robloxFlow.innerHTML = `
    <div class="roblox-panel" id="mlPanelInner">
      <h3>1 Data Akun</h3>
      <label class="small">ID</label>
      <input id="ml_id" class="roblox-input" placeholder="Masukkan ID Mobile Legends">
      <label class="small" style="margin-top:10px">Server ID</label>
      <input id="ml_server" class="roblox-input" placeholder="Contoh: 1234 (Server)">
      <div class="roblox-note">Pastikan ID & Server benar agar tidak salah kirim.</div>
      <h3 style="margin-top:14px">2 Pilih Produk</h3>
      <div class="product-grid" id="mlProductGrid"></div>
    </div>
  `;
  robloxFlow.classList.remove('hide');
  const grid = $("#mlProductGrid");
  grid.innerHTML = currentGame.prices.map((p, idx)=> `
    <div class="product-card" data-idx="${idx}" data-code="${p.code}" data-price="${p.price}">
      <div style="height:36px"><img src="${currentGame.img}" alt="${currentGame.name}" style="height:36px;border-radius:6px"></div>
      <div class="product-price">Rp ${formatRp(p.price)}</div>
      <div class="product-label">${p.label}</div>
    </div>
  `).join('');
  $$(".product-card").forEach(pc=>{
    pc.addEventListener("click", ()=>{
      $$(".product-card").forEach(x=>x.classList.remove("active"));
      pc.classList.add("active");
      const price = Number(pc.dataset.price);
      chosenPrice = { code: pc.dataset.code, price, label: pc.querySelector('.product-label').textContent };
      updateMLBottom();
    });
  });
  createMLBottom();
  $("#ml_id")?.addEventListener("input", updateMLBottom);
  $("#ml_server")?.addEventListener("input", updateMLBottom);
}
function createMLBottom(){
  if(mlBottomEl){ mlBottomEl.remove(); mlBottomEl = null; }
  const bar = document.createElement('div');
  bar.id = 'mlBottom';
  bar.className = 'roblox-bottom-bar';
  bar.style.position = 'fixed';
  bar.style.left = '12px';
  bar.style.right = '12px';
  bar.style.bottom = '84px';
  bar.style.zIndex = '1199';
  bar.style.display = 'flex';
  bar.style.justifyContent = 'space-between';
  bar.style.alignItems = 'center';
  bar.style.padding = '12px';
  bar.style.borderRadius = '10px';
  bar.style.background = 'linear-gradient(180deg, rgba(0,12,30,0.95), rgba(0,6,18,0.98))';
  bar.innerHTML = `
    <div style="display:flex;flex-direction:column;">
      <div style="font-size:12px;opacity:.9">Total</div>
      <div id="mlTotal" style="font-weight:800;font-size:18px">Rp 0</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center">
      <button id="mlCancel" class="btn-ghost">Batal</button>
      <button id="mlBuy" class="roblox-buy-btn" disabled>Beli Sekarang</button>
    </div>
  `;
  document.body.appendChild(bar);
  mlBottomEl = bar;
  $("#mlCancel")?.addEventListener("click", ()=> closeMLPanel());
  $("#mlBuy")?.addEventListener("click", mlBuyAction);
  updateMLBottom();
}
function updateMLBottom(){
  const idVal = $("#ml_id") ? $("#ml_id").value.trim() : "";
  const serverVal = $("#ml_server") ? $("#ml_server").value.trim() : "";
  $("#mlTotal") && ($("#mlTotal").textContent = `Rp ${formatRp(chosenPrice ? chosenPrice.price : 0)}`);
  const buyBtn = $("#mlBuy");
  if(buyBtn) buyBtn.disabled = !(idVal.length>0 && serverVal.length>0 && chosenPrice);
}
function closeMLPanel(){
  $("#robloxFlow")?.classList.add('hide');
  $("#robloxFlow") && ($("#robloxFlow").innerHTML = "");
  if(mlBottomEl){ mlBottomEl.remove(); mlBottomEl = null; }
  chosenPrice = null;
  showTopup(false);
}
function mlBuyAction(){
  const idVal = $("#ml_id") ? $("#ml_id").value.trim() : "";
  const serverVal = $("#ml_server") ? $("#ml_server").value.trim() : "";
  if(!idVal || !serverVal || !chosenPrice){ showToast('fail'); return; }
  const order = { id:'ORD'+Date.now(), game: currentGame.name, product: chosenPrice.label, amount: chosenPrice.price, player: idVal, method: 'WA', date: new Date().toLocaleString() };
  saveHistory(order);
  let message = `Halo kak, saya mau top up:\nGame: ${order.game}\nID: ${idVal}\nServer: ${serverVal}\nNominal: ${order.product}\nTotal: Rp ${formatRp(order.amount)}\n\nMohon diproses ya kak.`;
  const wa = `https://wa.me/${CS_PHONE}?text=${encodeURIComponent(message)}`;
  showToast('success');
  setTimeout(()=> { window.open(wa, "_blank"); closeMLPanel(); }, 650);
}

/* ===== Nominal select & pay grid ===== */
function populateNominalSelect(){
  const sel = $("#nominalSelect");
  if(!sel || !currentGame) return;
  sel.innerHTML = `<option value="">-- Pilih nominal --</option>` + currentGame.prices.map(p => `<option value="${p.code}" data-price="${p.price}" data-label="${p.label}">${p.label} — Rp ${formatRp(p.price)}</option>`).join('');
  $("#toStep3")?.setAttribute('disabled','true');
  $("#buyBtn")?.setAttribute('disabled','true');
  chosenPrice = null;
}
function renderPayGrid(){
  const grid = $("#payGrid");
  if(!grid) return;
  grid.innerHTML = PAYMENTS.map(p=> `
    <div class="pay-item" data-id="${p.id}">
      <img src="${p.logo}" alt="${p.name}" onerror="this.style.opacity=.3">
      <div class="pname">${p.name}</div>
    </div>
  `).join('');
  $$(".pay-item").forEach(pi=> pi.addEventListener("click", ()=>{
    $$(".pay-item").forEach(x=> x.classList.remove("active"));
    pi.classList.add("active");
    chosenPayment = pi.querySelector(".pname").textContent;
    updateBuyState();
  }));
}
function updateBuyState(){
  const playerFilled = $("#playerInput") ? $("#playerInput").value.trim().length>0 : false;
  const priceSel = !!chosenPrice;
  const paySel = !!chosenPayment;
  const buyBtn = $("#buyBtn");
  if(buyBtn) buyBtn.disabled = !(playerFilled && priceSel && paySel);
}

/* ===== History (localStorage) ===== */
function saveHistory(order){
  try{
    const arr = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    arr.unshift(order);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(arr));
    renderHistory();
  }catch(e){ console.error('saveHistory err', e); }
}
function renderHistory(){
  const el = $("#historyList");
  if(!el) return;
  const list = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  el.innerHTML = list.length ? list.map(it=> `
    <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
      <div style="max-width:70%">
        <div style="font-weight:700">${it.game} • ${it.product}</div>
        <div class="small" style="color:var(--muted)">${it.player} • ${it.date}</div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:700">Rp ${formatRp(it.amount)}</div>
        <div class="small" style="color:var(--muted)">${it.method}</div>
      </div>
    </div>
  `).join('') : "<div class='small' style='color:var(--muted)'>Belum ada transaksi.</div>";
}

/* ===== Toast helpers ===== */
const toastSuccess = $("#toastSuccess"), toastFail = $("#toastFail");
let toastTimer = null;
function showToast(type){
  clearTimeout(toastTimer);
  const el = type === 'success' ? toastSuccess : toastFail;
  const other = type === 'success' ? toastFail : toastSuccess;
  other && other.classList.remove('show','shake');
  el && el.classList.add('show','shake');
  if(navigator.vibrate) navigator.vibrate(120);
  toastTimer = setTimeout(()=> { el && el.classList.remove('show','shake'); }, 2000);
}

/* ===== Lightning effect (kept) ===== */
(function initLightning(){
  const lightning = document.getElementById('lightning');
  const svgContainer = document.getElementById('boltSvgContainer');
  if(!lightning || !svgContainer) return;
  function randomBoltPath(startX,startY,length,segments){
    const pts=[]; let x=startX,y=startY; pts.push([x,y]);
    const segH = length/segments;
    for(let i=1;i<=segments;i++){
      const jitter = Math.max(6,(segments-i)*1.8 + Math.random()*12);
      x += (Math.random()*jitter*2)-jitter;
      y += segH + (Math.random()*segH*0.35);
      pts.push([x,y]);
    }
    return pts;
  }
  function createSvgBolt(centerX,centerY){
    const w=window.innerWidth, h=window.innerHeight;
    const svgNS="http://www.w3.org/2000/svg";
    const svg=document.createElementNS(svgNS,'svg');
    svg.setAttribute('class','bolt-svg-instance');
    svg.setAttribute('width',w); svg.setAttribute('height',h);
    svg.style.position='absolute'; svg.style.left='0'; svg.style.top='0'; svg.style.pointerEvents='none';
    const length = 80 + Math.random()*(h*0.5);
    const segments = 6 + Math.floor(Math.random()*6);
    const startX = Math.max(8, Math.min(w-8, centerX));
    const startY = Math.max(8, Math.min(h-8, centerY));
    const points = randomBoltPath(startX,startY,length,segments);
    const ptsStr = points.map(p=>p.join(',')).join(' ');
    const glowPath = document.createElementNS(svgNS,'polyline');
    glowPath.setAttribute('points', ptsStr); glowPath.setAttribute('class','bolt-path-glow'); glowPath.style.opacity='0';
    svg.appendChild(glowPath);
    const path = document.createElementNS(svgNS,'polyline');
    path.setAttribute('points', ptsStr); path.setAttribute('class','bolt-path'); path.setAttribute('stroke','rgba(255,255,255,1)');
    svg.appendChild(path);
    svgContainer.appendChild(svg);
    const baseStroke = 2 + Math.random()*2.6;
    path.style.strokeWidth = baseStroke; glowPath.style.strokeWidth = baseStroke*3.2;
    path.style.animation = `bolt-draw .22s ease-out forwards`;
    glowPath.style.animation = `bolt-draw .26s ease-out forwards`;
    glowPath.style.opacity = '0.9'; path.style.opacity='1';
    setTimeout(()=> { try{path.style.opacity='0.95'; glowPath.style.opacity='0.85';}catch(e){} }, 30);
    setTimeout(()=> {
      path.style.transition = "opacity .12s linear"; glowPath.style.transition = "opacity .18s linear";
      path.style.opacity = "0"; glowPath.style.opacity = "0";
      setTimeout(()=> svg.remove(), 240);
    }, 360);
  }
  function doStrike(){
    lightning.classList.add('strike'); setTimeout(()=> lightning.classList.remove('strike'), 160 + Math.random()*100);
    const bolts = 1 + Math.floor(Math.random()*3);
    const baseX = Math.random()*window.innerWidth;
    const baseY = Math.random()*window.innerHeight*0.45;
    for(let i=0;i<bolts;i++){
      const offsetX = (Math.random()-0.5)*160;
      const offsetY = (Math.random()-0.5)*60;
      setTimeout(()=> createSvgBolt(baseX+offsetX, Math.max(20, baseY+offsetY)), i*60);
    }
  }
  function schedule(){ const delay = 5000 + Math.random()*5000; setTimeout(()=> { doStrike(); schedule(); }, delay); }
  function jitterBolts(){ const bolts = lightning.querySelectorAll('.light-bolt'); bolts.forEach(b=> { const dur = 8 + Math.random()*6; const delay = Math.random()*6; b.style.animationDuration = dur + 's'; b.style.animationDelay = delay + 's'; }); }
  schedule(); setInterval(jitterBolts, 15000);
  window.__triggerLightning = () => doStrike();
})();

/* ===== Music (manual only) ===== */
/* ===== Music (manual only, pakai link online) ===== */

const MUSIC_PLAYLIST = [
  { src: "https://files.catbox.moe/jy2mwq.mp3", title: "Petir Biru Theme" },
  { src: "https://files.catbox.moe/45t04k.mp3", title: "Blue Storm" },
  { src: "https://files.catbox.moe/4mbtmz.mp3", title: "Sky Vibes" },
  { src: "https://files.catbox.moe/sor9ua.mp3", title: "Atlantic" },
  { src: "https://files.catbox.moe/nhjx4i.mp3", title: "Dreamy" },
  { src: "https://files.catbox.moe/ps4hhx.mp3", title: "Supriz" },
  { src: "https://files.catbox.moe/ct7wby.mp3", title: "extention" },
  { src: "https://files.catbox.moe/d7ckqs.mp3", title: "kills" },
];

let APP_MUSIC = { audio: null, idx: 0, playing: false, muted: true };

function makeAudio(){
  if(APP_MUSIC.audio) return APP_MUSIC.audio;
  const a = document.createElement('audio');
  a.id = 'app-audio';
  a.preload = 'auto';
  a.src = MUSIC_PLAYLIST[APP_MUSIC.idx].src;
  a.loop = false;
  a.volume = 0.18;
  a.muted = true;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.addEventListener('ended', ()=>{
    APP_MUSIC.idx = (APP_MUSIC.idx + 1) % MUSIC_PLAYLIST.length;
    a.src = MUSIC_PLAYLIST[APP_MUSIC.idx].src;
    a.load();
    a.play().catch(()=>{ APP_MUSIC.playing = false; });
    APP_MUSIC.playing = true;
    updateMusicUI();
  });
  a.addEventListener('error', (e)=> console.error('audio error', e));
  APP_MUSIC.audio = a;
  return a;
}

function initMusic(){
  const audio = makeAudio();
  // actions
  const playFn = async (e) => {
    e && e.preventDefault();
    if(!audio) return;
    // on explicit user gesture, unmute so audio can play
    if(audio.muted) { audio.muted = false; APP_MUSIC.muted = false; }
    if(audio.paused){
      try { await audio.play(); APP_MUSIC.playing = true; } catch(err){ APP_MUSIC.playing = false; console.warn('play blocked', err); }
    } else {
      audio.pause(); APP_MUSIC.playing = false;
    }
    updateMusicUI();
  };
  const prevFn = (e)=>{ e && e.preventDefault(); if(!audio) return; audio.currentTime = 0; if(audio.paused){ audio.play().catch(()=>{}); APP_MUSIC.playing=true; } updateMusicUI(); };
  const nextFn = (e)=>{ e && e.preventDefault(); if(!audio) return; APP_MUSIC.idx = (APP_MUSIC.idx+1) % MUSIC_PLAYLIST.length; audio.src = MUSIC_PLAYLIST[APP_MUSIC.idx].src; audio.load(); audio.play().catch(()=>{}); APP_MUSIC.playing=true; updateMusicUI(); };
  const muteFn = (e)=>{ e && e.preventDefault(); if(!audio) return; audio.muted = !audio.muted; APP_MUSIC.muted = audio.muted; updateMusicUI(); };

  ['musicPlay','play','musicToggle'].forEach(id=>{ const el = document.getElementById(id); if(el){ el.removeEventListener('click', playFn); el.addEventListener('click', playFn); }});
  ['musicPrev','prev'].forEach(id=>{ const el = document.getElementById(id); if(el){ el.removeEventListener('click', prevFn); el.addEventListener('click', prevFn); }});
  ['musicNext','next'].forEach(id=>{ const el = document.getElementById(id); if(el){ el.removeEventListener('click', nextFn); el.addEventListener('click', nextFn); }});
  ['musicMuteBtn','musicMute'].forEach(id=>{ const el = document.getElementById(id); if(el){ el.removeEventListener('click', muteFn); el.addEventListener('click', muteFn); }});

  // open popup when nav music clicked
  const navBtn = document.getElementById('musicNavBtn') || document.querySelector('.nav-item.music') || document.querySelector('.music-item');
  if(navBtn){
    navBtn.removeEventListener('click', handleMusicNav);
    navBtn.addEventListener('click', handleMusicNav);
  }

  updateMusicUI();
  function handleMusicNav(e){
    e && e.preventDefault();
    const popup = $("#musicPopup");
    if(!popup) return;
    popup.classList.toggle('show');
    popup.setAttribute('aria-hidden', popup.classList.contains('show') ? 'false' : 'true');
    // overlay sync
    $("#overlay")?.classList.toggle('show', popup.classList.contains('show'));
    // we DO NOT auto-play here; user must press play
    updateMusicUI();
  }
}
function updateMusicUI(){
  const playBtn = document.getElementById('musicPlay') || document.getElementById('play');
  const prevBtn = document.getElementById('musicPrev') || document.getElementById('prev');
  const nextBtn = document.getElementById('musicNext') || document.getElementById('next');
  const muteBtn = document.getElementById('musicMuteBtn') || document.getElementById('musicMute');
  if(playBtn) playBtn.innerHTML = APP_MUSIC.playing ? '<i class="fa fa-pause"></i>' : '<i class="fa fa-play"></i>';
  if(prevBtn) prevBtn.innerHTML = '<i class="fa fa-backward"></i>';
  if(nextBtn) nextBtn.innerHTML = '<i class="fa fa-forward"></i>';
  if(muteBtn) muteBtn.innerHTML = APP_MUSIC.muted ? '<i class="fa fa-volume-xmark"></i>' : '<i class="fa fa-volume-high"></i>';
}

/* ===== Fix & attach close handlers for history/topup/sidebar ===== */
function attachCloseHandlers(){
  // Sidebar close button
  const closeSidebarBtn = document.getElementById('closeSidebar') || document.querySelector('#sidebar .close-btn button') || document.querySelector('.sidebar-close');
  if(closeSidebarBtn){
    closeSidebarBtn.style.pointerEvents = 'auto';
    closeSidebarBtn.style.zIndex = 1300;
    ['click','touchend'].forEach(evt=>{
      closeSidebarBtn.removeEventListener(evt, closeSidebar);
      closeSidebarBtn.addEventListener(evt, (e)=>{
        e && e.preventDefault();
        e && e.stopPropagation();
        closeSidebar();
      }, {passive:false});
    });
  }

  // History close
  const closeHistoryBtn = document.getElementById('closeHistory');
  if(closeHistoryBtn){
    ['click','touchend'].forEach(evt=>{
      closeHistoryBtn.removeEventListener(evt, closeHistoryPanel);
      closeHistoryBtn.addEventListener(evt, (e)=>{ e && e.preventDefault(); e && e.stopPropagation(); closeHistoryPanel(); }, {passive:false});
    });
  }

  // topup close
  const closeTopupBtn = document.getElementById('closeTopup');
  if(closeTopupBtn){
    ['click','touchend'].forEach(evt=>{
      closeTopupBtn.removeEventListener(evt, ()=> showTopup(false));
      closeTopupBtn.addEventListener(evt, (e)=>{ e && e.preventDefault(); e && e.stopPropagation(); if(robloxBottomEl){ robloxBottomEl.remove(); robloxBottomEl = null; } if(mlBottomEl){ mlBottomEl.remove(); mlBottomEl = null; } showTopup(false); }, {passive:false});
    });
  }
}

function closeHistoryPanel(){
  const panel = $("#historyPanel");
  if(!panel) return;
  panel.classList.remove('show');
  panel.classList.add('hide');
  panel.style.display = 'none';
  $("#overlay")?.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

/* ====== Main init ====== */
document.addEventListener("DOMContentLoaded", ()=>{
  renderGames();
  initSearch();
  setupBanner();
  initMusic();
  attachCloseHandlers();

  $("#allGamesBtn")?.addEventListener("click", ()=> { document.getElementById("games")?.scrollIntoView({behavior:"smooth"}); });
  $("#promoBtn")?.addEventListener("click", ()=> { document.getElementById("promo")?.scrollIntoView({behavior:"smooth"}); });

  // openTopup
  window.openTopup = function(id){
    currentGame = GAMES.find(x=> x.id === id);
    if(!currentGame){ alert("Game tidak ditemukan"); return; }
    $("#topupTitle") && ($("#topupTitle").textContent = `${currentGame.name} • Pilih nominal & metode`);
    chosenPrice = null; chosenPayment = null;
    if($("#playerInput")) $("#playerInput").value = "";
    if($("#orderMsg")) $("#orderMsg").textContent = "";

    if(currentGame.id === 'roblox'){
      $("#defaultFlow")?.classList.add('hide');
      $("#robloxFlow")?.classList.remove('hide');
      $("#topupBody")?.style && ($("#topupBody").style.paddingBottom = "92px");
      renderRobloxPanel();
      showTopup(true);
      $$(".pstep").forEach(ps=> ps.classList.toggle("active", Number(ps.dataset.step) <= 1));
      return;
    }

    if(currentGame.id === 'ml'){
      $("#defaultFlow")?.classList.add('hide');
      $("#robloxFlow")?.classList.remove('hide');
      $("#topupBody")?.style && ($("#topupBody").style.paddingBottom = "92px");
      renderMLPanel();
      showTopup(true);
      $$(".pstep").forEach(ps=> ps.classList.toggle("active", Number(ps.dataset.step) <= 1));
      return;
    }

    // normal flow
    $("#defaultFlow")?.classList.remove('hide');
    $("#robloxFlow")?.classList.add('hide');
    $("#topupBody")?.style && ($("#topupBody").style.paddingBottom = "0");
    populateNominalSelect();
    renderPayGrid();
    showTopup(true);
    showStep(1);
  };

  // steps
  $("#toStep2")?.addEventListener("click", ()=> {
    if(!$("#playerInput")?.value.trim()){ showToast('fail'); return; }
    showStep(2);
  });

  $("#nominalSelect")?.addEventListener("change", function(){
    if(!this) return;
    if(this.value === "") { chosenPrice = null; $("#toStep3")?.setAttribute('disabled','true'); }
    else {
      const opt = this.options[this.selectedIndex];
      chosenPrice = { code: opt.value, price: Number(opt.dataset.price), label: opt.dataset.label };
      $("#toStep3")?.removeAttribute('disabled');
    }
    updateBuyState();
  });

  $("#toStep3")?.addEventListener("click", ()=> {
    if(!chosenPrice){ showToast('fail'); return; }
    showStep(3);
  });

  $("#buyBtn")?.addEventListener("click", ()=> {
    const player = $("#playerInput") ? $("#playerInput").value.trim() : "";
    if(!player || !chosenPrice || !chosenPayment){ showToast('fail'); return; }
    const order = { id:'ORD'+Date.now(), game: currentGame.name, product: chosenPrice.label, amount: chosenPrice.price, player, method: chosenPayment, date: new Date().toLocaleString() };
    saveHistory(order);
    const message = `Halo kak, saya mau top up:\nGame: ${order.game}\nID: ${order.player}\nNominal: ${order.product}\nMetode: ${order.method}`;
    const wa = `https://wa.me/${CS_PHONE}?text=${encodeURIComponent(message)}`;
    showToast('success');
    setTimeout(()=> { window.open(wa, "_blank"); showTopup(false); }, 650);
  });

  $("#cancelTopup")?.addEventListener("click", ()=> showTopup(false));

// history open (moved to bottom navbar)
$("#historyNavBtn")?.addEventListener("click", ()=> {
  const panel = $("#historyPanel");
  if(!panel) return;
  panel.classList.remove('hide');
  panel.classList.add('show');
  panel.style.display = 'flex';
  $("#overlay")?.classList.add('show');
  renderHistory();
  attachCloseHandlers(); // reattach close (safe)
});

  // clear history
  $("#clearHistory")?.addEventListener("click", ()=> {
    if(confirm("Yakin mau hapus semua riwayat top-up?")){
      localStorage.removeItem(HISTORY_KEY);
      $("#historyList") && ($("#historyList").innerHTML = "<p style='text-align:center;opacity:.7'>Belum ada transaksi</p>");
    }
  });

  // overlay click -> close panels defensively
  $("#overlay")?.addEventListener("click", ()=> {
    // close sidebar
    closeSidebar();
    // close topup
    showTopup(false);
    // close history
    closeHistoryPanel();
    // close music popup
    const mp = $("#musicPopup"); if(mp && mp.classList.contains('show')){ mp.classList.remove('show'); mp.setAttribute('aria-hidden','true'); $("#overlay")?.classList.remove('show'); }
  });

  // bottom nav - exclude music-item
  const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item, .bottom-nav .music-item');
  bottomNavItems.forEach(item=>{
    item.addEventListener('click', (e)=>{
      if(item.classList.contains('music-item') || item.classList.contains('music')) return;
      bottomNavItems.forEach(x=> x.classList.remove('active'));
      item.classList.add('active');
      const target = item.dataset.target;
      if(target){
        const el = document.getElementById(target);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // escape closes modals/panels
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      closeSidebar();
      showTopup(false);
      closeHistoryPanel();
      const mp = $("#musicPopup"); if(mp && mp.classList.contains('show')){ mp.classList.remove('show'); mp.setAttribute('aria-hidden','true'); $("#overlay")?.classList.remove('show'); }
    }
  });

}); // DOMContentLoaded end
