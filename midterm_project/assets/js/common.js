const $ = id => document.getElementById(id);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23172338'/%3E%3Ccircle cx='50' cy='38' r='16' fill='%23F08A24' opacity='.5'/%3E%3Cpath d='M18 90c4-22 20-30 32-30s28 8 32 30z' fill='%23F08A24' opacity='.5'/%3E%3C/svg%3E";

const typeColors = {
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
const getTypeColor = type => typeColors[type.toLowerCase().replace(' release', '').trim()] || typeColors.default;
const getNatureType = character => ((character.natureType && character.natureType[0]) || 'Unknown').replace(/\s*\(.*?\)/g, '').trim();

const preloadImages = (urls, timeoutMs = 8000) => Promise.all(urls.filter(Boolean).map(url => new Promise(resolve => {
    const image = new Image();
    const timer = setTimeout(resolve, timeoutMs);
    image.onload = image.onerror = () => { clearTimeout(timer); resolve(); };
    image.src = url;
})));

const loadStartTime = Date.now();
const hideLoadingScreen = async ready => {
    const loadingScreen = $('loadingScreen');
    if (!loadingScreen) return;
    await ready;
    await wait(Math.max(0, 900 - (Date.now() - loadStartTime)));
    document.body.classList.remove('overflow-hidden');
    document.querySelectorAll('header, main').forEach(element => element.classList.remove('invisible'));
    loadingScreen.classList.remove('show');
    setTimeout(() => loadingScreen.remove(), 900);
};
