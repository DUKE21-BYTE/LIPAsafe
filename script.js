const ALL_DATA = [
  { id:1, name:"KPLC Prepaid (Tokens)", type:"Paybill", number:"888880", account:"Meter Number", category:"Utilities", verified:true },
  { id:2, name:"KPLC Postpaid", type:"Paybill", number:"888888", account:"KPLC Account No", category:"Utilities", verified:true },
  { id:3, name:"Nairobi Water", type:"Paybill", number:"844440", account:"NWSC Account No", category:"Utilities", verified:true },
  { id:4, name:"Nairobi City Water (Prepaid)", type:"Paybill", number:"444400", account:"Meter Number", category:"Utilities", verified:true },
  { id:5, name:"Mombasa Water", type:"Paybill", number:"100200", account:"MOWASCO Acc No", category:"Utilities", verified:true },
  { id:6, name:"Eldoret Water", type:"Paybill", number:"200555", account:"ELDOWAS Acc No", category:"Utilities", verified:true },
  { id:7, name:"Kisumu Water", type:"Paybill", number:"300111", account:"KIWASCO Acc No", category:"Utilities", verified:true },
  { id:8, name:"Nakuru Water", type:"Paybill", number:"400333", account:"NAWASSCO Acc No", category:"Utilities", verified:true },
  { id:9, name:"Kenya Power (Refund)", type:"Paybill", number:"888886", account:"Meter/Account No", category:"Utilities", verified:true },
  { id:10, name:"Total Gas Delivery", type:"Paybill", number:"304555", account:"Phone Number", category:"Utilities", verified:true },
  { id:11, name:"Rubis Energy", type:"Paybill", number:"405600", account:"Account Number", category:"Utilities", verified:true },
  { id:12, name:"Hashi Energy Gas", type:"Paybill", number:"505333", account:"Phone Number", category:"Utilities", verified:true },
  { id:13, name:"ProGas", type:"Paybill", number:"567890", account:"Order Number", category:"Utilities", verified:false },
  { id:14, name:"Equity Bank", type:"Paybill", number:"247247", account:"Equity Account No", category:"Banking", verified:true },
  { id:15, name:"KCB Bank", type:"Paybill", number:"522522", account:"KCB Account No", category:"Banking", verified:true },
  { id:16, name:"Co-operative Bank", type:"Paybill", number:"400200", account:"Co-op Account No", category:"Banking", verified:true },
  { id:17, name:"NCBA Bank", type:"Paybill", number:"880100", account:"NCBA Account No", category:"Banking", verified:true },
  { id:18, name:"Family Bank", type:"Paybill", number:"222111", account:"Family Account No", category:"Banking", verified:true },
  { id:19, name:"I&M Bank", type:"Paybill", number:"542542", account:"I&M Account No", category:"Banking", verified:true },
  { id:20, name:"Stanbic Bank", type:"Paybill", number:"600100", account:"Stanbic Account No", category:"Banking", verified:true },
  { id:21, name:"Standard Chartered", type:"Paybill", number:"329329", account:"StanChart Acc No", category:"Banking", verified:true },
  { id:22, name:"ABSA Bank (Barclays)", type:"Paybill", number:"303030", account:"ABSA Account No", category:"Banking", verified:true },
  { id:23, name:"DTB Bank", type:"Paybill", number:"516516", account:"DTB Account No", category:"Banking", verified:true },
  { id:24, name:"Sidian Bank", type:"Paybill", number:"637637", account:"Sidian Account No", category:"Banking", verified:true },
  { id:25, name:"Bank of Africa", type:"Paybill", number:"972900", account:"BOA Account No", category:"Banking", verified:true },
  { id:26, name:"HFC Bank", type:"Paybill", number:"200400", account:"HFC Account No", category:"Banking", verified:true },
  { id:27, name:"Prime Bank", type:"Paybill", number:"111333", account:"Prime Account No", category:"Banking", verified:true },
  { id:28, name:"Victoria Commercial Bank", type:"Paybill", number:"828282", account:"VCB Account No", category:"Banking", verified:false },
  { id:29, name:"Gulf African Bank", type:"Paybill", number:"985050", account:"GAB Account No", category:"Banking", verified:true },
  { id:30, name:"M-Shwari", type:"Paybill", number:"400200", account:"M-Shwari Acc No", category:"Banking", verified:true },
  { id:31, name:"KCB M-Pesa", type:"Paybill", number:"986700", account:"KCB M-Pesa Acc", category:"Banking", verified:true },
  { id:32, name:"Fuliza", type:"Paybill", number:"200200", account:"Phone Number", category:"Banking", verified:true },
  { id:33, name:"Zuku Fiber", type:"Paybill", number:"320320", account:"Zuku Account No", category:"Internet", verified:true },
  { id:34, name:"Safaricom Home Fiber", type:"Paybill", number:"150150", account:"Account Number", category:"Internet", verified:true },
  { id:35, name:"JTL Faiba", type:"Paybill", number:"200200", account:"Faiba Account No", category:"Internet", verified:true },
  { id:36, name:"Liquid Telecom", type:"Paybill", number:"990066", account:"Liquid Account No", category:"Internet", verified:true },
  { id:37, name:"Poa Internet", type:"Paybill", number:"290290", account:"Poa Username", category:"Internet", verified:true },
  { id:38, name:"Mawingu Networks", type:"Paybill", number:"456456", account:"Mawingu Acc No", category:"Internet", verified:true },
  { id:39, name:"Telkom Kenya", type:"Paybill", number:"220220", account:"Telkom Acc No", category:"Internet", verified:true },
  { id:40, name:"AccessKenya", type:"Paybill", number:"221100", account:"Acc Number", category:"Internet", verified:false },
  { id:42, name:"Airtel Money", type:"Paybill", number:"510510", account:"Airtel Number", category:"Internet", verified:true },
  { id:43, name:"NHIF", type:"Paybill", number:"200222", account:"ID Number", category:"Government", verified:true },
  { id:44, name:"HELB", type:"Paybill", number:"200800", account:"ID Number", category:"Government", verified:true },
  { id:45, name:"KRA (iTax)", type:"Paybill", number:"572572", account:"E-slip Number", category:"Government", verified:true },
  { id:46, name:"NSSF", type:"Paybill", number:"200555", account:"NSSF Number", category:"Government", verified:true },
  { id:47, name:"eCitizen Services", type:"Paybill", number:"206206", account:"Application Number", category:"Government", verified:true },
  { id:48, name:"NTSA (Vehicle Services)", type:"Paybill", number:"572572", account:"Reference No", category:"Government", verified:true },
  { id:49, name:"Huduma Centre", type:"Paybill", number:"222000", account:"Service Number", category:"Government", verified:true },
  { id:50, name:"Nairobi County Rates", type:"Paybill", number:"222888", account:"Plot Number", category:"Government", verified:true },
  { id:51, name:"Mombasa County Revenue", type:"Paybill", number:"350350", account:"Reference Number", category:"Government", verified:true },
  { id:52, name:"Kiambu County Revenue", type:"Paybill", number:"301301", account:"Reference Number", category:"Government", verified:true },
  { id:53, name:"Business Registration (BRS)", type:"Paybill", number:"572572", account:"BRS Reference", category:"Government", verified:true },
  { id:54, name:"Immigration Services", type:"Paybill", number:"206206", account:"Application No", category:"Government", verified:true },
  { id:56, name:"DSTV", type:"Paybill", number:"444444", account:"IUC Number", category:"Entertainment", verified:true },
  { id:57, name:"GOtv", type:"Paybill", number:"444444", account:"IUC Number", category:"Entertainment", verified:true },
  { id:58, name:"StarTimes", type:"Paybill", number:"585858", account:"Smartcard No", category:"Entertainment", verified:true },
  { id:59, name:"Showmax", type:"Paybill", number:"777700", account:"Showmax Acc No", category:"Entertainment", verified:true },
  { id:64, name:"SportPesa", type:"Paybill", number:"290290", account:"Phone Number", category:"Entertainment", verified:true },
  { id:65, name:"Betika", type:"Paybill", number:"290290", account:"Phone Number", category:"Entertainment", verified:true },
  { id:66, name:"Naivas Supermarket", type:"Till", number:"706706", account:"Buy Goods", category:"Shopping", verified:true },
  { id:67, name:"QuickMart", type:"Till", number:"544544", account:"Buy Goods", category:"Shopping", verified:true },
  { id:68, name:"Carrefour", type:"Till", number:"550550", account:"Buy Goods", category:"Shopping", verified:true },
  { id:69, name:"Jumia Kenya", type:"Paybill", number:"145145", account:"Order Number", category:"Shopping", verified:true },
  { id:70, name:"Kilimall", type:"Paybill", number:"637637", account:"Order Number", category:"Shopping", verified:true },
  { id:76, name:"Java House", type:"Till", number:"323232", account:"Buy Goods", category:"Shopping", verified:true },
  { id:77, name:"KFC Kenya", type:"Till", number:"414141", account:"Buy Goods", category:"Shopping", verified:true },
  { id:78, name:"Chicken Inn", type:"Till", number:"424242", account:"Buy Goods", category:"Shopping", verified:true },
  { id:81, name:"Shell Fuel", type:"Till", number:"101010", account:"Buy Goods", category:"Transport", verified:true },
  { id:82, name:"Total Energies", type:"Till", number:"202020", account:"Buy Goods", category:"Transport", verified:true },
  { id:83, name:"Rubis Petrol", type:"Till", number:"303030", account:"Buy Goods", category:"Transport", verified:true },
  { id:84, name:"Uber Kenya", type:"Paybill", number:"700700", account:"Phone Number", category:"Transport", verified:true },
  { id:85, name:"Bolt (Taxify)", type:"Paybill", number:"701701", account:"Phone Number", category:"Transport", verified:true },
  { id:87, name:"Kenya Airways", type:"Paybill", number:"606606", account:"Booking Ref", category:"Transport", verified:true },
  { id:88, name:"SGR (Madaraka Express)", type:"Paybill", number:"639639", account:"ID Number", category:"Transport", verified:true },
  { id:91, name:"Vivo Energy", type:"Till", number:"505050", account:"Buy Goods", category:"Transport", verified:true },
  { id:93, name:"University of Nairobi", type:"Paybill", number:"824824", account:"Reg Number", category:"Education", verified:true },
  { id:94, name:"Kenyatta University", type:"Paybill", number:"820120", account:"Reg Number", category:"Education", verified:true },
  { id:95, name:"Moi University", type:"Paybill", number:"820130", account:"Reg Number", category:"Education", verified:true },
  { id:96, name:"JKUAT", type:"Paybill", number:"820140", account:"Reg Number", category:"Education", verified:true },
  { id:98, name:"Strathmore University", type:"Paybill", number:"510510", account:"Student Number", category:"Education", verified:true },
  { id:99, name:"USIU Africa", type:"Paybill", number:"636363", account:"Student ID", category:"Education", verified:true },
  { id:108, name:"Jubilee Insurance", type:"Paybill", number:"444555", account:"Policy Number", category:"Insurance", verified:true },
  { id:109, name:"Britam", type:"Paybill", number:"880088", account:"Policy Number", category:"Insurance", verified:true },
  { id:110, name:"CIC Insurance", type:"Paybill", number:"990099", account:"Policy Number", category:"Insurance", verified:true },
  { id:118, name:"Nairobi Hospital", type:"Paybill", number:"900900", account:"Patient Number", category:"Health", verified:true },
  { id:119, name:"Kenyatta National Hospital", type:"Paybill", number:"901901", account:"Patient Number", category:"Health", verified:true },
  { id:120, name:"Aga Khan Hospital", type:"Paybill", number:"902902", account:"MRN Number", category:"Health", verified:true },
  { id:143, name:"Twiga Foods", type:"Paybill", number:"360360", account:"Account Number", category:"Shopping", verified:true },
  { id:150, name:"CDSC (Shares)", type:"Paybill", number:"280280", account:"CDS Account No", category:"Banking", verified:true }
];

const SVG_CHECK = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>';
const SVG_HEART_FILLED = '<svg viewBox="0 0 24 24" fill="currentColor" style="color:var(--fav-active)"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/></svg>';
const SVG_HEART_OUTLINE = '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="color:var(--fav-inactive)"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>';

let favorites = JSON.parse(localStorage.getItem('lipasafe_favs')) || [];
let currentView = 'home';
let currentCategory = 'All';
let darkMode = localStorage.getItem('lipasafe_theme') === 'dark';

// DOM Elements
const resultsDiv = document.getElementById('results');
const searchInput = document.getElementById('searchInput');
const countLabel = document.getElementById('countLabel');
const catStrip = document.getElementById('catStrip');
const toastEl = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');

// Initialize Theme
if (darkMode) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('lipasafe_theme', darkMode ? 'dark' : 'light');
    showToast(darkMode ? 'Dark mode enabled' : 'Light mode enabled');
  });
}

// Initialize Categories Strip (for category pages)
if (catStrip) {
  const categoriesList = ['All', ...new Set(ALL_DATA.map(item => item.category))];
  categoriesList.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-pill ${cat === 'All' ? 'active' : ''}`;
    btn.textContent = cat;
    btn.onclick = () => {
      currentCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      refresh();
    };
    catStrip.appendChild(btn);
  });
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function render(data) {
  if (!resultsDiv) return;
  resultsDiv.innerHTML = '';
  
  if (data.length === 0) {
    if (countLabel) countLabel.textContent = 'No matches found';
    resultsDiv.innerHTML = `
      <div class="empty-state">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <h3>No results found</h3>
        <p>Try searching for something else or changing categories.</p>
      </div>
    `;
    return;
  }

  if (countLabel) countLabel.textContent = `${data.length} Service${data.length !== 1 ? 's' : ''}`;

  data.forEach((item, index) => {
    const isFav = favorites.includes(item.id);
    const card = document.createElement('div');
    card.className = 'ls-card';
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
      <div class="card-top">
        <div class="info-main">
          <div class="card-name">
            ${esc(item.name)}
            ${item.verified ? `<span class="verified-badge">${SVG_CHECK} Verified</span>` : ''}
          </div>
          <div class="card-meta">
            <span>${esc(item.type)}</span>
            <span class="meta-dot"></span>
            <span>${esc(item.category)}</span>
          </div>
        </div>
        <button class="fav-btn" onclick="toggleFav(${item.id})">
          ${isFav ? SVG_HEART_FILLED : SVG_HEART_OUTLINE}
        </button>
      </div>
      
      <div class="number-section">
        <div class="number-info">
          <span class="num-label">${item.type} Number</span>
          <span class="num-value">${esc(item.number)}</span>
        </div>
        <button class="copy-btn" onclick="copyNumber('${item.number}')">Copy</button>
      </div>
      
      <div class="card-footer">
        <span class="acc-hint">Account: ${esc(item.account)}</span>
      </div>
    `;
    resultsDiv.appendChild(card);
  });
}

function getFilteredData() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  let data = ALL_DATA;

  if (currentView === 'favs') {
    data = data.filter(item => favorites.includes(item.id));
  }

  if (currentCategory !== 'All') {
    data = data.filter(item => item.category === currentCategory);
  }

  if (query) {
    data = data.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.number.includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }
  return data;
}

function refresh() {
  if (resultsDiv) render(getFilteredData());
}

function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx !== -1) {
    favorites.splice(idx, 1);
    showToast('Removed from saved');
  } else {
    favorites.push(id);
    showToast('Saved to your list');
  }
  localStorage.setItem('lipasafe_favs', JSON.stringify(favorites));
  refresh();
}

function copyNumber(num) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(num).then(() => {
      showToast(`${num} copied to clipboard`);
    }).catch(() => {
      showToast('Copy failed. Please manually copy.');
    });
  } else {
    showToast('Clipboard not supported.');
  }
}

// Event Listeners
if (searchInput) searchInput.addEventListener('input', refresh);

const navHome = document.getElementById('navHome');
const navFavs = document.getElementById('navFavs');

if (navHome) {
  navHome.addEventListener('click', () => {
    currentView = 'home';
    navHome.classList.add('active');
    if (navFavs) navFavs.classList.remove('active');
    refresh();
  });
}

if (navFavs) {
  navFavs.addEventListener('click', () => {
    currentView = 'favs';
    navFavs.classList.add('active');
    if (navHome) navHome.classList.remove('active');
    refresh();
  });
}

// Initial Render
if (resultsDiv) refresh();
