const colors = {
  fire: '#EFA68C',
  water: '#9CC3DF',
  earth: '#CDB08A',
  wind: '#A9D2B4',
  lightning: '#EBD27E',
  yin: '#B4A7D6',
  yang: '#E3B7D9',
  wood: '#8FC08F',
  ice: '#B5DDE6',
  lava: '#E99B6B',
  boil: '#E6A9BF',
  storm: '#B9BCC4',
  dust: '#D6CBB6',
  magnet: '#CFD27E',
  default: '#D9D4CA'
};

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23172338'/%3E%3Ccircle cx='50' cy='38' r='16' fill='%23F08A24' opacity='.5'/%3E%3Cpath d='M18 90c4-22 20-30 32-30s28 8 32 30z' fill='%23F08A24' opacity='.5'/%3E%3C/svg%3E";

function getTypeColor(type) {
  var color = colors[type.toLowerCase().replace(' release', '').trim()];
  return color || colors.default;
}

function getNatureType(character) {
  var natureType = character.natureType || [];
  return String(natureType[0] || 'Unknown').replace(/\s*\(.*?\)/g, '').trim();
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function toList(value) {
  if (Array.isArray(value)) return value;
  if (value) return [value];
  return [];
}
function load(storage, key) {
  try { return JSON.parse(storage.getItem(key)); } catch (error) { return null; }
}

function save(storage, key, value) {
  try { storage.setItem(key, JSON.stringify(value)); } catch (error) { }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const preloadImage = (url) => new Promise((resolve) => {
  var image = new Image();
  image.onload = image.onerror = resolve;
  image.src = url;
  setTimeout(resolve, 8000);
});

const preloadImages = async (urls) => {
  var loaders = [];
  for (var i = 0; i < urls.length; i++) {
    if (urls[i]) loaders.push(preloadImage(urls[i]));
  }
  for (var j = 0; j < loaders.length; j++) {
    await loaders[j];
  }
};

var loadStartTime = Date.now();

const hideLoadingScreen = async (ready) => {
  var elLoadingScreen = document.getElementById("loadingScreen");
  if (!elLoadingScreen) return;

  await ready;
  await wait(Math.max(0, 900 - (Date.now() - loadStartTime)));

  document.body.classList.remove('overflow-hidden');
  document.getElementById("siteHeader").classList.remove('invisible');
  document.getElementById("siteMain").classList.remove('invisible');
  elLoadingScreen.classList.remove('show');
  setTimeout(() => elLoadingScreen.remove(), 900);
};
