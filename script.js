'use strict';

/* ============================================================
   Catalog & Optical Data (with Verified Studio Photography)
   ============================================================ */
const COLORS = {
  black:   ['Obsidian Black', '#1c1c1e'],
  tort:    ['Havana Tortoise', '#7a461d'],
  gold:    ['Champagne Gold', '#c9a227'],
  silver:  ['Brushed Silver', '#aab2bd'],
  navy:    ['Midnight Navy', '#1f3a68'],
  crystal: ['Crystal Ice', '#bfd8e5'],
  wine:    ['Bordeaux', '#7a1f33'],
  green:   ['Botanical Green', '#2f5d46'],
  rose:    ['Rose Titanium', '#c98f86'],
  gun:     ['Gunmetal', '#4b5563']
};

const FRAMES = [
  { id: 1,  name: 'Air Fusion Sky',    brand: 'Lenskart Air',    shape: 'square',    material: 'acetate',  lens: 52, bridge: 18, temple: 142, price: 1700, colors: ['navy', 'crystal', 'black'],   img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/sky-blue-full-rim-square-lenskart-air-fusion-la-e13069-c2-eyeglasses_lenskart-air-la-e13033-c2-eyeglasses_eyeglasses_g_3588_1_05_july23.jpg' },
  { id: 2,  name: 'Air Blush Peach',   brand: 'Lenskart Air',    shape: 'oval',      material: 'acetate',  lens: 50, bridge: 19, temple: 140, price: 1700, colors: ['rose', 'crystal', 'gold'],    img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15844-pink-transparent-eyeglasses_256492dsc_1254_08_08_2026.jpg' },
  { id: 3,  name: 'Mayfair Hex Gold',  brand: 'John Jacobs',     shape: 'geometric', material: 'metal',    lens: 51, bridge: 19, temple: 145, price: 3500, colors: ['gold', 'rose', 'silver'],     img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-e70060-m-c1-eyeglasses_dsc0242_13_09_2024.jpg' },
  { id: 4,  name: 'Rich Horn Havana',  brand: 'John Jacobs',     shape: 'square',    material: 'acetate',  lens: 53, bridge: 18, temple: 145, price: 3200, colors: ['tort', 'black', 'wine'],      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/black-brown-horn-full-rim-square-john-jacobs-rich-acetate-jj-e70292-eyeglasses_dsc8801_13_01_2026.jpg' },
  { id: 5,  name: 'Sleek Air Rimless', brand: 'Vincent Chase',   shape: 'rectangle', material: 'rimless',  lens: 53, bridge: 18, temple: 140, price: 2200, colors: ['gold', 'silver', 'gun'],      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e17582-c1-eyeglasses__dsc6761_30_12_2024.jpg' },
  { id: 6,  name: 'Savile Browline',   brand: 'Vincent Chase',   shape: 'browline',  material: 'mixed',    lens: 52, bridge: 19, temple: 142, price: 1900, colors: ['navy', 'black', 'gun'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/navy-blue-half-rim-rectangle-vincent-chase-halfrim-vce000122-eyeglasses__dsc5896_28_11_2024.jpg' },
  { id: 7,  name: 'Channing Pilot',    brand: 'John Jacobs',     shape: 'aviator',   material: 'acetate',  lens: 55, bridge: 16, temple: 145, price: 4200, colors: ['black', 'tort', 'gun'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-full-rim-jj-e12548-c1-eyeglasses_G_1144.jpg' },
  { id: 8,  name: 'Air Ice Crystal',   brand: 'Lenskart Air',    shape: 'square',    material: 'acetate',  lens: 51, bridge: 18, temple: 140, price: 1500, colors: ['crystal', 'silver', 'navy'],  img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-sky-full-rim-square-air-essentials-la-e15417-w-c7-eyeglasses_207481-pdp-2-23.jpg' },
  { id: 9,  name: 'Comfort Gradient',  brand: 'Lenskart Air',    shape: 'browline',  material: 'mixed',    lens: 52, bridge: 18, temple: 142, price: 2000, colors: ['tort', 'crystal', 'silver'],  img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/shiny-transparent-gradient-brown-to-crystal-full-rim-square-lenskart-air-air-comfort-la-e14362-eyeglasses_243168_dsc3852_18_05_2026.jpg' },
  { id: 10, name: 'Hustlr Botanical',  brand: 'Lenskart Hustlr', shape: 'square',    material: 'acetate',  lens: 51, bridge: 18, temple: 140, price: 1600, colors: ['green', 'crystal', 'navy'],   img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/turquoise-full-rim-square-lenskart-hustlr-la-e15417-w-c33-eyeglasses_217446-pdp-2-23.jpg' },
  { id: 11, name: 'Hustlr Ocean',      brand: 'Lenskart Hustlr', shape: 'oval',      material: 'acetate',  lens: 50, bridge: 19, temple: 140, price: 1600, colors: ['navy', 'crystal', 'black'],   img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/ocean-blue-full-rim-square-lenskart-hustlr-la-e15417-xw-c30-eyeglasses_216521-pdp-2-23.jpg' },
  { id: 12, name: 'Air Matte Stealth', brand: 'Lenskart Air',    shape: 'rectangle', material: 'acetate',  lens: 54, bridge: 17, temple: 145, price: 1800, colors: ['black', 'gun', 'navy'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e14362-m-c10-eyeglasses_dsc5813_11_10_2024.jpg' },
  { id: 13, name: 'Atelier Bold Cube', brand: 'Vincent Chase',   shape: 'square',    material: 'acetate',  lens: 54, bridge: 18, temple: 145, price: 2400, colors: ['black', 'tort', 'green'],     img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-square-vincent-chase-acetate-vc-e18176-eyeglasses__dsc2243_11_08_2025.jpg' },
  { id: 14, name: 'Blend Edit Pantos', brand: 'Vincent Chase',   shape: 'round',     material: 'mixed',    lens: 49, bridge: 20, temple: 140, price: 2300, colors: ['black', 'gun', 'silver'],     img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-square-vincent-chase-blend-edit-vc-e20176-eyeglasses_dsc_1368_19_10_2026.jpg' },
  { id: 15, name: 'TR-Flex Crystal',   brand: 'John Jacobs',     shape: 'rectangle', material: 'acetate',  lens: 53, bridge: 17, temple: 142, price: 3400, colors: ['crystal', 'silver', 'black'], img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/transparent-white-grey-full-rim-rectangle-john-jacobs-tr-flex-jj-e16847-c2-eyeglasses__dsc5189_23_04_2024.jpg' },
  { id: 16, name: 'Kensington Round',  brand: 'John Jacobs',     shape: 'round',     material: 'acetate',  lens: 48, bridge: 21, temple: 140, price: 3600, colors: ['crystal', 'tort', 'black'],   img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/transparent-full-rim-round-john-jacobs-rich-acetate-jj-e11515-c11-eyeglasses_dsc5970_16_10_2024.jpg' },
  { id: 17, name: 'Air Midnight',      brand: 'Lenskart Air',    shape: 'square',    material: 'acetate',  lens: 52, bridge: 18, temple: 140, price: 1500, colors: ['navy', 'black', 'gun'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/navy-full-rim-square-air-essentials-la-e15417-w-c14-eyeglasses_215926-pdp-2-23.jpg' },
  { id: 18, name: 'Hustlr Amber Sun',  brand: 'Lenskart Hustlr', shape: 'round',     material: 'acetate',  lens: 49, bridge: 20, temple: 140, price: 1600, colors: ['gold', 'rose', 'tort'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/orange-full-rim-square-lenskart-hustlr-la-e15417-xw-eyeglasses_210671-pdp-2-23.jpg' },
  { id: 19, name: 'Hustlr Stone Grey', brand: 'Lenskart Hustlr', shape: 'oval',      material: 'acetate',  lens: 51, bridge: 18, temple: 142, price: 1600, colors: ['silver', 'gun', 'crystal'],   img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/grey-stone-full-rim-square-hustlr-lenskart-air-la-e15417-w-c11-eyeglasses_208956-pdp-2-23.jpg' },
  { id: 20, name: 'Kyoto Titanium',    brand: 'Owndays',         shape: 'browline',  material: 'titanium', lens: 52, bridge: 18, temple: 142, price: 4800, colors: ['silver', 'gun', 'gold'],      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//o/i/matte-silver-black-half-rim-rectangle-owndays-titanium-od-e50001-c2-eyeglasses_dsc6494_27_08_2024.jpg' },
  { id: 21, name: 'Air Fusion Silver', brand: 'Lenskart Air',    shape: 'oval',      material: 'mixed',    lens: 50, bridge: 19, temple: 140, price: 2100, colors: ['silver', 'crystal', 'gun'],   img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg' },
  { id: 22, name: 'Studio Bordeaux',   brand: 'Lenskart Studio', shape: 'cat-eye',   material: 'mixed',    lens: 51, bridge: 19, temple: 140, price: 2900, colors: ['wine', 'rose', 'gold'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-studio-lk-e19803-maroon-eyeglasses_247290dsc_3572_26_08_2026.jpg' },
  { id: 23, name: 'Masaba Cat-Eye',    brand: 'John Jacobs',     shape: 'cat-eye',   material: 'acetate',  lens: 52, bridge: 17, temple: 142, price: 3900, colors: ['tort', 'wine', 'black'],      img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-e70564-c1-eyeglasses_255850dsc_6899_18_07_2026.jpg' },
  { id: 24, name: 'Sleek Steel Hex',   brand: 'Vincent Chase',   shape: 'geometric', material: 'titanium', lens: 50, bridge: 20, temple: 140, price: 2600, colors: ['black', 'gold', 'gun'],       img: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-geometric-vincent-chase-sleek-steel-vc-e17198-c2-eyeglasses_dsc1283_31_07_2024.jpg' }
];

const BRANDS = ['Lenskart Air', 'John Jacobs', 'Vincent Chase', 'Lenskart Hustlr', 'Owndays', 'Lenskart Studio'];
const SHAPES = ['round', 'oval', 'square', 'rectangle', 'cat-eye', 'aviator', 'geometric', 'browline'];
const MATERIALS = ['acetate', 'metal', 'titanium', 'mixed', 'rimless'];
const SIZES = ['small', 'medium', 'large'];

const REC = {
  oval:    ['rectangle', 'square', 'geometric', 'aviator', 'cat-eye', 'browline'],
  round:   ['rectangle', 'square', 'geometric', 'cat-eye', 'browline'],
  square:  ['round', 'oval', 'aviator', 'cat-eye'],
  heart:   ['oval', 'round', 'aviator', 'rectangle'],
  diamond: ['cat-eye', 'oval', 'browline', 'round'],
  oblong:  ['square', 'round', 'aviator', 'geometric']
};
const FACE_INFO = {
  oval:    'Oval face: balanced proportions — most silhouettes work beautifully, especially structured square, rectangular, and geometric frames.',
  round:   'Round face: angular frames (rectangle, square, geometric, browline) add crisp definition and lengthen facial proportions.',
  square:  'Square face: curved silhouettes (round, oval, aviator, cat-eye) soften a strong jawline and wide brow.',
  heart:   'Heart face: lighter, rounded shapes (oval, round, aviator) balance a wider forehead with a narrower chin.',
  diamond: 'Diamond face: upswept cat-eye and browline frames highlight cheekbones while softening angular temples.',
  oblong:  'Oblong face: deeper frames (square, round, aviator, geometric) add horizontal width and visual balance.'
};
const FACE_PATHS = {
  oval:    '<ellipse cx="100" cy="120" rx="60" ry="84"/>',
  round:   '<ellipse cx="100" cy="122" rx="70" ry="76"/>',
  square:  '<rect x="32" y="42" width="136" height="168" rx="36"/>',
  heart:   '<path d="M34 92C34 38 166 38 166 92C166 148 124 202 100 214C76 202 34 148 34 92Z"/>',
  diamond: '<path d="M100 32C138 36 164 86 164 116C164 150 124 202 100 214C76 202 36 150 36 116C36 86 62 36 100 32Z"/>',
  oblong:  '<rect x="44" y="26" width="112" height="192" rx="54"/>'
};
const SKIN = ['#f3d6be', '#dead88', '#b77f59', '#7d4e32'];

const LENS_TYPES = {
  single:      { label: 'Single Vision', desc: 'Calibrated for distance or reading vision.', price: 0 },
  progressive: { label: 'Progressive Multifocal', desc: 'Line-free distance, intermediate & near (requires ADD).', price: 2000 },
  nonrx:       { label: 'Non-Prescription (Zero Power)', desc: 'Clear UV400 protective lenses with zero power.', price: 0 }
};
const INDEXES = {
  '1.50': { label: '1.50 Standard CR-39',      desc: 'Best up to ±2.00 D', price: 0 },
  '1.60': { label: '1.60 Thin Mid-Index',      desc: 'Best for ±2.25 to ±4.00 D', price: 700 },
  '1.67': { label: '1.67 Extra-Thin High-Index', desc: 'Best for ±4.25 to ±6.00 D', price: 1400 },
  '1.74': { label: '1.74 Ultra-Thin Aspheric', desc: 'Best above ±6.00 D', price: 2500 }
};
const COATINGS = {
  blue:  { label: 'Lenskart Blu Cut (Computer Lens)', price: 500 },
  ar:    { label: 'Anti-Reflective & Smudge Guard', price: 400 },
  photo: { label: 'Photochromic Light-Adaptive', price: 1200 }
};

/* ============================================================
   4-Step Frame Finder Quiz Questions (Verdant Wizard Style)
   ============================================================ */
const QUIZ_STEPS = [
  {
    key: 'face',
    title: 'Step 1: What is your closest facial contour?',
    desc: 'Frame geometry works best when it contrasts and balances your natural facial lines (35 pts).',
    options: [
      { val: 'oval',    title: 'Oval Contour',    sub: 'Balanced forehead and jawline with gently rounded chin' },
      { val: 'round',   title: 'Round Contour',   sub: 'Soft angles with similar width and vertical length' },
      { val: 'square',  title: 'Square Contour',  sub: 'Strong, defined jawline and broad forehead' },
      { val: 'heart',   title: 'Heart Contour',   sub: 'Wider brow and cheekbones tapering to a narrow chin' },
      { val: 'diamond', title: 'Diamond Contour', sub: 'High, defined cheekbones with narrower brow and jaw' },
      { val: 'oblong',  title: 'Oblong Contour',  sub: 'Longer vertical profile with balanced straight cheeks' }
    ]
  },
  {
    key: 'rxBand',
    title: 'Step 2: What is your approximate prescription strength?',
    desc: 'Stronger prescriptions benefit from compact lens apertures and full-rim support to keep edges thin (30 pts).',
    options: [
      { val: 'low',  title: 'Mild / Non-Rx (0 to ±2.00 D)',     sub: 'Compatible with all shapes, oversized frames, and rimless' },
      { val: 'mod',  title: 'Moderate (±2.25 to ±4.00 D)',      sub: 'Balanced with 1.60 index and medium apertures' },
      { val: 'high', title: 'Strong (±4.25 D or higher)',       sub: 'Best with full-rim frames and ≤ 51 mm lens width' },
      { val: 'prog', title: 'Progressive / Reading ADD',        sub: 'Requires generous vertical lens height for multifocal zones' }
    ]
  },
  {
    key: 'usage',
    title: 'Step 3: Where will you wear these frames most?',
    desc: 'Select the primary setting or daily routine for your eyewear (20 pts).',
    options: [
      { val: 'office',   title: 'Office & Digital Work', sub: 'Tailored rectangles, browlines, and lightweight titanium' },
      { val: 'everyday', title: 'Everyday Versatile',    sub: 'Timeless P3 rounds, squares, and warm tortoise acetates' },
      { val: 'editorial',title: 'Creative & Statement',  sub: 'Sculpted cat-eyes, geometric hexagons, and bold silhouettes' },
      { val: 'feather',  title: 'Featherlight Comfort',  sub: 'Ultra-light Japanese titanium and minimalist rimless' }
    ]
  },
  {
    key: 'materialPref',
    title: 'Step 4: Which frame construction do you prefer?',
    desc: 'Choose the material finish that best suits your personal aesthetic (15 pts).',
    options: [
      { val: 'acetate',  title: 'Hand-Polished Acetate', sub: 'Rich Havana tortoise, obsidian black, and crystal finishes' },
      { val: 'titanium', title: 'Japanese Titanium & Metal', sub: 'Hypoallergenic, slender, and adjustable nose pads' },
      { val: 'mixed',    title: 'Club Browline (Mixed)', sub: 'Bold acetate upper brow paired with metal lower rim' },
      { val: 'any',      title: 'Open to All Materials', sub: 'Show highest overall compatibility across all finishes' }
    ]
  }
];

/* ============================================================
   State + LocalStorage
   ============================================================ */
const store = {
  get(k, d) { try { const v = localStorage.getItem('clearframe.' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('clearframe.' + k, JSON.stringify(v)); } catch { /* ignore */ } }
};
const state = {
  q: '', sort: 'match', maxPrice: 5000, recOnly: false, rxOnly: false,
  brands: new Set(), shapes: new Set(), materials: new Set(), sizes: new Set(), colors: new Set(),
  face: store.get('face', null),
  rx: store.get('rx', null),
  favs: store.get('favs', []),
  order: store.get('order', []),
  compare: [],
  cardColor: {},
  quizStep: 0,
  quizAnswers: { face: store.get('face', 'oval') || 'oval', rxBand: 'low', usage: 'everyday', materialPref: 'any' }
};
let cfg = null;
let dialogView = null;
let camStream = null;

/* ============================================================
   Helpers & Icons
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const byId = id => FRAMES.find(f => f.id === Number(id));
const money = n => '\u20B9' + Math.round(n).toLocaleString('en-IN');
const fmt = n => n == null ? '—' : (n > 0 ? '+' : '') + n.toFixed(2);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const totalWidth = f => f.lens * 2 + f.bridge;
const sizeOf = f => { const w = totalWidth(f); return w < 120 ? 'small' : w <= 126 ? 'medium' : 'large'; };
const heartSVG = filled => `<svg width="18" height="18" viewBox="0 0 24 24" fill="${filled ? '#e53935' : 'none'}" stroke="${filled ? '#e53935' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ============================================================
   Seamless Optical CAD & Try-On SVG Engine
   ============================================================ */
let svgSeq = 0;

const MAT_PALETTE = {
  black:   { s: ['#2d3036', '#16181c', '#090a0c'], hi: '#ffffff', pin: 'silver' },
  tort:    { s: ['#6b3915', '#3c1d07', '#210e03'], hi: '#ffdba6', pin: 'gold', tort: true },
  gold:    { s: ['#f7e6ad', '#d1ab36', '#8c6b14'], hi: '#ffffff', pin: 'gold' },
  silver:  { s: ['#f4f7fa', '#b4becb', '#6d7684'], hi: '#ffffff', pin: 'silver' },
  navy:    { s: ['#2e5599', '#19315c', '#0d1b36'], hi: '#b8d4ff', pin: 'silver' },
  crystal: { s: ['#edf5f9', '#d2e4ee', '#b2cad8'], hi: '#ffffff', pin: 'silver', crystal: true },
  wine:    { s: ['#9c2942', '#641325', '#380812'], hi: '#ffb8c6', pin: 'gold' },
  green:   { s: ['#3b7355', '#204532', '#0f2419'], hi: '#b8f0d0', pin: 'gold' },
  rose:    { s: ['#fae0d9', '#cf8e83', '#8a4f45'], hi: '#ffffff', pin: 'rose' },
  gun:     { s: ['#7f8897', '#464d59', '#22262d'], hi: '#e0e6f0', pin: 'silver' }
};

const SHAPE_GEOM = {
  round: {
    lens:  'M -39,-3 C -39,-23 -22,-30 0,-30 C 22,-30 39,-22 39,-3 C 39,18 22,31 0,31 C -22,31 -39,18 -39,-3 Z',
    outer: 'M -52,-14 C -52,-18 -49,-20 -43,-20 C -34,-31 -18,-36 1,-36 C 25,-36 44,-26 45,-3 C 45,21 25,36 0,36 C -25,36 -44,21 -45,-3 L -45,-6 L -50,-7 C -52,-8 -52,-10 -52,-14 Z',
    brow:  'M -52,-14 C -52,-18 -49,-20 -43,-20 C -34,-31 -18,-36 1,-36 C 25,-36 44,-26 45,-5 L 38,-4 C 36,-21 21,-29 0,-29 C -21,-29 -37,-21 -39,-4 L -50,-7 C -52,-8 -52,-10 -52,-14 Z',
    hi:    'M -34,-26 C -21,-33 -3,-34 18,-32',
    by: -15, lugX: -48, lugY: -13
  },
  oval: {
    lens:  'M -41,-1 C -41,-18 -23,-25 0,-25 C 23,-25 40,-18 40,-1 C 40,16 23,25 0,25 C -23,25 -41,16 -41,-1 Z',
    outer: 'M -53,-10 C -53,-14 -50,-16 -44,-16 C -35,-26 -19,-31 0,-31 C 26,-31 45,-21 45,-1 C 45,19 26,30 0,30 C -26,30 -45,19 -46,-1 L -46,-3 L -51,-4 C -53,-5 -53,-7 -53,-10 Z',
    brow:  'M -53,-10 C -53,-14 -50,-16 -44,-16 C -35,-26 -19,-31 0,-31 C 26,-31 45,-21 45,-2 L 39,-2 C 38,-17 22,-24 0,-24 C -22,-24 -39,-17 -40,-2 L -51,-4 Z',
    hi:    'M -35,-21 C -20,-28 -2,-29 20,-27',
    by: -12, lugX: -49, lugY: -9
  },
  square: {
    lens:  'M -40,-15 C -40,-24 -33,-27 -18,-27 L 18,-26 C 33,-26 39,-22 39,-12 L 37,13 C 36,24 28,29 14,29 L -16,29 C -30,29 -38,23 -39,12 Z',
    outer: 'M -53,-20 C -53,-25 -49,-27 -41,-29 C -30,-33 -12,-34 19,-33 C 36,-32 44,-26 44,-13 L 42,14 C 40,28 31,34 15,34 L -17,34 C -33,34 -43,27 -44,12 L -45,-9 L -51,-11 C -53,-12 -53,-15 -53,-20 Z',
    brow:  'M -53,-20 C -53,-25 -49,-27 -41,-29 C -30,-33 -12,-34 19,-33 C 36,-32 44,-26 44,-12 L 38,-10 C 38,-21 31,-25 18,-25 L -18,-26 C -32,-26 -39,-23 -40,-13 L -51,-11 Z',
    hi:    'M -38,-28 C -21,-31 2,-31 27,-29',
    by: -19, lugX: -48, lugY: -17
  },
  rectangle: {
    lens:  'M -41,-12 C -41,-20 -35,-23 -20,-23 L 20,-22 C 34,-22 40,-19 40,-10 L 38,10 C 37,20 30,24 15,24 L -18,24 C -33,24 -39,19 -40,9 Z',
    outer: 'M -53,-17 C -53,-22 -49,-24 -42,-26 C -30,-29 -10,-30 21,-29 C 37,-28 45,-23 45,-11 L 43,11 C 41,24 33,29 16,29 L -19,29 C -36,29 -44,23 -45,10 L -46,-6 L -51,-8 C -53,-9 -53,-12 -53,-17 Z',
    brow:  'M -53,-17 C -53,-22 -49,-24 -42,-26 C -30,-29 -10,-30 21,-29 C 37,-28 45,-23 45,-10 L 39,-8 C 39,-18 33,-21 20,-21 L -20,-22 C -34,-22 -40,-19 -41,-10 L -51,-8 Z',
    hi:    'M -38,-24 C -20,-27 4,-27 28,-25',
    by: -17, lugX: -48, lugY: -14
  },
  'cat-eye': {
    lens:  'M -41,-18 C -31,-26 -9,-26 17,-23 C 32,-21 39,-14 39,-3 C 39,16 25,28 3,28 C -19,28 -35,16 -40,-4 C -41,-10 -42,-15 -41,-18 Z',
    outer: 'M -54,-27 C -45,-34 -24,-34 17,-29 C 35,-27 44,-18 44,-3 C 44,19 28,33 3,33 C -22,33 -40,19 -45,-3 C -47,-11 -51,-17 -54,-22 C -55,-24 -55,-26 -54,-27 Z',
    brow:  'M -54,-27 C -45,-34 -24,-34 17,-29 C 35,-27 44,-18 44,-4 L 38,-3 C 38,-13 31,-20 16,-22 C -9,-25 -30,-25 -41,-17 L -49,-15 Z',
    hi:    'M -44,-27 C -28,-31 -5,-30 22,-26',
    by: -16, lugX: -48, lugY: -21
  },
  aviator: {
    lens:  'M -40,-17 C -31,-24 -4,-25 22,-22 C 36,-20 41,-12 40,0 C 38,20 22,33 2,33 C -20,33 -38,16 -41,-6 C -41,-11 -41,-15 -40,-17 Z',
    outer: 'M -50,-17 C -50,-21 -46,-22 -41,-22 C -30,-28 -4,-30 23,-27 C 39,-25 45,-15 44,0 C 42,23 24,37 2,37 C -23,37 -43,19 -45,-6 L -46,-10 L -50,-12 Z',
    brow:  'M -50,-17 C -50,-21 -46,-22 -41,-22 C -30,-28 -4,-30 23,-27 C 38,-25 44,-16 44,-2 L 39,-1 C 40,-12 35,-19 22,-21 C -4,-24 -30,-23 -40,-16 L -48,-13 Z',
    hi:    'M -33,-23 C -16,-26 5,-25 24,-23',
    by: -13, lugX: -46, lugY: -16, doubleBridge: true
  },
  geometric: {
    lens:  'M -25,-26 L 21,-26 L 39,-10 L 39,10 L 20,28 L -21,28 L -40,10 L -40,-10 Z',
    outer: 'M -52,-13 L -45,-15 L -27,-32 L 23,-32 L 44,-12 L 44,12 L 23,33 L -23,33 L -45,12 L -45,-6 L -52,-8 Z',
    brow:  'M -52,-13 L -45,-15 L -27,-32 L 23,-32 L 44,-12 L 38,-9 L 20,-25 L -24,-25 L -39,-9 L -50,-9 Z',
    hi:    'M -24,-29 L 20,-29',
    by: -13, lugX: -48, lugY: -11
  },
  browline: {
    lens:  'M -39,-15 C -29,-23 0,-24 24,-21 C 36,-19 39,-13 39,-3 C 38,18 23,29 1,29 C -21,29 -37,16 -39,-4 Z',
    outer: 'M -52,-18 C -52,-23 -47,-25 -39,-27 C -23,-32 4,-32 27,-28 C 39,-26 44,-18 44,-4 C 43,20 26,34 1,34 C -24,34 -42,19 -44,-4 L -45,-8 L -51,-10 C -52,-12 -52,-15 -52,-18 Z',
    brow:  'M -52,-18 C -52,-23 -47,-25 -39,-27 C -23,-32 4,-32 27,-28 C 39,-26 44,-18 44,-4 L 38,-3 C 38,-12 34,-18 23,-20 C 0,-23 -28,-22 -38,-14 L -41,-4 L -50,-9 Z',
    hi:    'M -37,-25 C -18,-29 5,-29 26,-25',
    by: -16, lugX: -47, lugY: -15
  }
};

function resolveColorKey(f, colorOrHex) {
  if (COLORS[colorOrHex]) return colorOrHex;
  const found = Object.keys(COLORS).find(k => COLORS[k][1].toLowerCase() === String(colorOrHex).toLowerCase());
  return found || (f && f.colors && f.colors[0]) || 'black';
}

function frameInner(f, colorOrHex, onFace) {
  const ck = resolveColorKey(f, colorOrHex);
  const pal = MAT_PALETTE[ck] || MAT_PALETTE.black;
  const g = SHAPE_GEOM[f.shape] || SHAPE_GEOM.round;
  const uid = 'fg' + (++svgSeq);

  const isRimless = f.material === 'rimless';
  const isBrowline = f.shape === 'browline' || f.material === 'mixed';
  const isThinMetal = !isRimless && !isBrowline && (f.material === 'metal' || f.material === 'titanium' || f.shape === 'aviator');
  const hasNosePads = isRimless || isBrowline || isThinMetal;
  const pinPal = MAT_PALETTE[pal.pin] || MAT_PALETTE.silver;

  let defs = `<defs>
    <linearGradient id="${uid}_mat" gradientUnits="userSpaceOnUse" x1="0" y1="-36" x2="0" y2="36">
      <stop offset="0%" stop-color="${pal.s[0]}"/>
      <stop offset="50%" stop-color="${pal.s[1]}"/>
      <stop offset="100%" stop-color="${pal.s[2]}"/>
    </linearGradient>
    <linearGradient id="${uid}_hw" gradientUnits="userSpaceOnUse" x1="0" y1="-32" x2="0" y2="32">
      <stop offset="0%" stop-color="${pinPal.s[0]}"/>
      <stop offset="50%" stop-color="${pinPal.s[1]}"/>
      <stop offset="100%" stop-color="${pinPal.s[2]}"/>
    </linearGradient>
    <linearGradient id="${uid}_lens" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="#d8ecff" stop-opacity="${onFace ? '.20' : '.28'}"/>
      <stop offset="55%" stop-color="#f2f8ff" stop-opacity="${onFace ? '.08' : '.14'}"/>
      <stop offset="100%" stop-color="#a6d4f7" stop-opacity="${onFace ? '.16' : '.24'}"/>
    </linearGradient>
    <clipPath id="${uid}_clipL"><path d="${g.lens}"/></clipPath>
    <mask id="${uid}_cut">
      <rect x="0" y="0" width="260" height="100" fill="#ffffff"/>
      <g transform="translate(74,48)" fill="#000000"><path d="${g.lens}"/></g>
      <g transform="translate(186,48) scale(-1,1)" fill="#000000"><path d="${g.lens}"/></g>
    </mask>`;

  if (pal.tort) {
    defs += `<filter id="${uid}_blur" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2.1"/>
    </filter>
    <pattern id="${uid}_tort" width="36" height="36" patternUnits="userSpaceOnUse" patternTransform="rotate(-22)">
      <rect width="36" height="36" fill="#2b1405"/>
      <g filter="url(#${uid}_blur)">
        <path d="M2,8 C8,2 18,4 20,11 C22,18 10,20 4,15 Z" fill="#a85c18" opacity=".88"/>
        <path d="M20,4 C27,1 34,6 32,14 C30,21 22,17 19,10 Z" fill="#e09232" opacity=".78"/>
        <path d="M12,22 C20,17 31,20 30,29 C29,36 16,35 11,28 Z" fill="#c47222" opacity=".82"/>
        <path d="M1,25 C6,20 14,24 12,31 C10,36 2,34 0,29 Z" fill="#f0a846" opacity=".68"/>
        <path d="M22,16 C28,14 35,19 32,25 C29,30 21,26 20,20 Z" fill="#160902" opacity=".85"/>
      </g>
    </pattern>`;
  }
  defs += `</defs>`;

  const matFill = pal.tort ? `url(#${uid}_tort)` : `url(#${uid}_mat)`;

  let shadow = '';
  if (!onFace) {
    shadow = `<g opacity=".14" fill="#26130c">
      <ellipse cx="74" cy="91" rx="38" ry="3.2"/>
      <ellipse cx="186" cy="91" rx="38" ry="3.2"/>
      <ellipse cx="130" cy="90" rx="14" ry="1.8" opacity=".5"/>
    </g>`;
  } else {
    shadow = `<g opacity=".15" fill="none" stroke="#1e0e06" stroke-width="3.5" transform="translate(0,3.5)">
      <g transform="translate(74,48)"><path d="${g.lens}"/></g>
      <g transform="translate(186,48) scale(-1,1)"><path d="${g.lens}"/></g>
      <path d="M 114,${48 + g.by + 2} Q 130,${48 + g.by - 5} 146,${48 + g.by + 2}"/>
    </g>`;
  }

  const hy = 48 + g.lugY;
  const hxL = 74 + g.lugX;
  const hxR = 186 - g.lugX;
  const hinges = `<g fill="url(#${uid}_hw)" opacity=".9">
    <rect x="${hxL - 5}" y="${hy - 3.5}" width="7" height="7" rx="1.8"/>
    <rect x="${hxR - 2}" y="${hy - 3.5}" width="7" height="7" rx="1.8"/>
  </g>`;

  const renderLensAndPads = (isRight) => {
    const xf = isRight ? 'translate(186,48) scale(-1,1)' : 'translate(74,48)';
    const glareXf = isRight ? 'scale(-1,1)' : '';
    let s = `<g transform="${xf}">`;
    if (hasNosePads) {
      s += `<path d="M 37,-3 C 33,2 33,8 35,12" fill="none" stroke="url(#${uid}_hw)" stroke-width="1.3" stroke-linecap="round"/>
        <ellipse cx="34" cy="11" rx="2.5" ry="5.2" transform="rotate(-16 34 11)" fill="#f8fafc" fill-opacity=".82" stroke="url(#${uid}_hw)" stroke-width=".9"/>`;
    }
    s += `<g clip-path="url(#${uid}_clipL)">
      <path d="${g.lens}" fill="url(#${uid}_lens)"/>
      <g transform="${glareXf}">
        <path d="M -34,38 L 10,-38 L 24,-38 L -20,38 Z" fill="#ffffff" opacity="${onFace ? '.24' : '.36'}"/>
        <path d="M 29,-38 L 35,-38 L -9,38 L -15,38 Z" fill="#ffffff" opacity="${onFace ? '.12' : '.18'}"/>
      </g>
      <path d="${g.lens}" fill="none" stroke="#0f172a" stroke-opacity=".16" stroke-width="1.8"/>
    </g></g>`;
    return s;
  };

  let front = '';
  const by = g.by;

  if (isRimless) {
    const sideMount = (isRight) => `<g transform="${isRight ? 'translate(186,48) scale(-1,1)' : 'translate(74,48)'}">
      <path d="${g.lens}" fill="none" stroke="#ffffff" stroke-opacity=".88" stroke-width="1.5"/>
      <path d="${g.lens}" fill="none" stroke="#64748b" stroke-opacity=".42" stroke-width=".85"/>
      <rect x="-47" y="${g.lugY - 2}" width="11" height="3.8" rx="1.8" fill="url(#${uid}_hw)"/>
      <circle cx="-35" cy="${g.lugY}" r="2.1" fill="url(#${uid}_hw)" stroke="#334155" stroke-width=".5"/>
      <rect x="33" y="${by - 1.6}" width="9" height="3.2" rx="1.5" fill="url(#${uid}_hw)"/>
      <circle cx="34" cy="${by}" r="2.1" fill="url(#${uid}_hw)" stroke="#334155" stroke-width=".5"/>
    </g>`;
    front = sideMount(false) + sideMount(true) +
      `<g transform="translate(130,48)"><path d="M -17,${by} Q 0,${by - 8} 17,${by}" fill="none" stroke="url(#${uid}_hw)" stroke-width="2.4" stroke-linecap="round"/></g>`;
  } else if (isBrowline) {
    const sideBrow = (isRight) => `<g transform="${isRight ? 'translate(186,48) scale(-1,1)' : 'translate(74,48)'}">
      <path d="${g.lens}" fill="none" stroke="url(#${uid}_hw)" stroke-width="2.2"/>
      <path d="${g.brow}" fill="${matFill}"/>
      <path d="${g.hi}" fill="none" stroke="${pal.hi}" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round"/>
      <rect x="${g.lugX - 2}" y="${g.lugY - 1.2}" width="6.5" height="2.2" rx="1.1" fill="url(#${uid}_hw)"/>
    </g>`;
    front = sideBrow(false) + sideBrow(true) +
      `<g transform="translate(130,48)">
        <path d="M -17,${by + 2} Q 0,${by - 7} 17,${by + 2}" fill="none" stroke="url(#${uid}_hw)" stroke-width="2.6" stroke-linecap="round"/>
      </g>`;
  } else if (isThinMetal) {
    const mw = f.material === 'titanium' ? 2.4 : 2.9;
    const sideMetal = (isRight) => `<g transform="${isRight ? 'translate(186,48) scale(-1,1)' : 'translate(74,48)'}">
      <rect x="-49" y="${g.lugY - 2.4}" width="9" height="4.8" rx="2" fill="url(#${uid}_hw)" stroke="#0f172a" stroke-opacity=".3" stroke-width=".6"/>
      <path d="${g.lens}" fill="none" stroke="#0f172a" stroke-opacity=".28" stroke-width="${mw + 1}"/>
      <path d="${g.lens}" fill="none" stroke="url(#${uid}_hw)" stroke-width="${mw}"/>
      <path d="${g.hi}" fill="none" stroke="#ffffff" stroke-opacity=".65" stroke-width="1" stroke-linecap="round"/>
    </g>`;
    let br = `<path d="M -17,${by + 2} Q 0,${by - 7} 17,${by + 2}" fill="none" stroke="url(#${uid}_hw)" stroke-width="2.4" stroke-linecap="round"/>`;
    if (g.doubleBridge) br += `<path d="M -22,${by - 8} L 22,${by - 8}" fill="none" stroke="url(#${uid}_hw)" stroke-width="2.0" stroke-linecap="round"/>`;
    front = sideMetal(false) + sideMetal(true) + `<g transform="translate(130,48)">${br}</g>`;
  } else {
    const bridgePath = `M -20,${by - 6} C -10,${by - 12} 10,${by - 12} 20,${by - 6} L 18,${by + 6} C 10,${by - 3} -10,${by - 3} -18,${by + 6} Z`;
    front = `<g mask="url(#${uid}_cut)" fill="${matFill}" ${pal.crystal ? 'opacity=".62"' : ''}>
        <g transform="translate(74,48)"><path d="${g.outer}"/></g>
        <g transform="translate(186,48) scale(-1,1)"><path d="${g.outer}"/></g>
        <g transform="translate(130,48)"><path d="${bridgePath}"/></g>
      </g>
      <g transform="translate(74,48)">
        <path d="${g.lens}" fill="none" stroke="${pal.hi}" stroke-opacity=".32" stroke-width="1"/>
        <path d="${g.hi}" fill="none" stroke="${pal.hi}" stroke-opacity=".52" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="${g.lugX - 2.5}" y="${g.lugY - 1.1}" width="6.5" height="2.2" rx="1.1" fill="url(#${uid}_hw)"/>
      </g>
      <g transform="translate(186,48) scale(-1,1)">
        <path d="${g.lens}" fill="none" stroke="${pal.hi}" stroke-opacity=".32" stroke-width="1"/>
        <path d="${g.hi}" fill="none" stroke="${pal.hi}" stroke-opacity=".52" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="${g.lugX - 2.5}" y="${g.lugY - 1.1}" width="6.5" height="2.2" rx="1.1" fill="url(#${uid}_hw)"/>
      </g>`;
  }

  return defs + shadow + hinges + renderLensAndPads(false) + renderLensAndPads(true) + front;
}

function frameSVG(f, colorKey) {
  const ck = resolveColorKey(f, colorKey);
  return `<svg viewBox="0 0 260 100" role="img" aria-label="${f.name} frame in ${COLORS[ck][0]}">${frameInner(f, ck, false)}</svg>`;
}

function blueprintSVG(f, colorKey) {
  const ck = resolveColorKey(f, colorKey);
  const w = totalWidth(f);
  return `<svg viewBox="0 0 280 155" role="img" aria-label="Technical CAD blueprint for ${f.name}">
    <defs>
      <pattern id="bpGrid" width="14" height="14" patternUnits="userSpaceOnUse">
        <path d="M 14 0 L 0 0 0 14" fill="none" stroke="rgba(140,61,32,.10)" stroke-width=".7"/>
      </pattern>
    </defs>
    <rect width="280" height="155" rx="10" fill="url(#bpGrid)"/>
    <g stroke="#8C3D20" stroke-width="1" fill="#8C3D20" font-family="Inter, sans-serif" font-weight="600" font-size="8.5" text-anchor="middle">
      <line x1="28" y1="22" x2="252" y2="22" stroke-dasharray="3 2"/>
      <line x1="28" y1="16" x2="28" y2="38"/>
      <line x1="252" y1="16" x2="252" y2="38"/>
      <rect x="88" y="13" width="104" height="15" rx="4" fill="#FAF6F1"/>
      <text x="140" y="23.5" stroke="none">TOTAL WIDTH: ${w} MM</text>
    </g>
    <svg x="10" y="28" width="260" height="100" viewBox="0 0 260 100">${frameInner(f, ck, false)}</svg>
    <g stroke="#695B53" stroke-width="1" fill="#3B1C11" font-family="Inter, sans-serif" font-weight="600" font-size="8" text-anchor="middle">
      <line x1="42" y1="132" x2="122" y2="132"/>
      <line x1="42" y1="122" x2="42" y2="136"/>
      <line x1="122" y1="122" x2="122" y2="136"/>
      <text x="82" y="145" stroke="none">LENS ${f.lens} MM</text>
      <line x1="122" y1="132" x2="158" y2="132" stroke="#8C3D20"/>
      <line x1="158" y1="122" x2="158" y2="136" stroke="#8C3D20"/>
      <text x="140" y="145" fill="#8C3D20" stroke="none">BRIDGE ${f.bridge} MM</text>
      <text x="216" y="145" stroke="none">TEMPLE ${f.temple} MM</text>
    </g>
  </svg>`;
}

function faceSVG(face, skin, frame, colorKey, mini) {
  if (mini) {
    return `<svg viewBox="0 0 200 240" aria-hidden="true">
      <g fill="#FCECE3" stroke="#8C3D20" stroke-width="5">${FACE_PATHS[face]}</g>
      <g stroke="rgba(140,61,32,.35)" stroke-width="2" stroke-dasharray="5 5" fill="none">
        <line x1="100" y1="26" x2="100" y2="216"/>
        <line x1="34" y1="110" x2="166" y2="110"/>
      </g>
    </svg>`;
  }

  const uid = 'man' + (++svgSeq);
  return `<svg viewBox="0 0 200 240" role="img" aria-label="Studio mannequin fit preview on a ${face} face">
    <defs>
      <radialGradient id="${uid}_sh" cx="38%" cy="28%" r="70%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity=".28"/>
        <stop offset="55%" stop-color="${skin}" stop-opacity="0"/>
        <stop offset="100%" stop-color="#28150b" stop-opacity=".24"/>
      </radialGradient>
    </defs>
    <path d="M56,232 C60,208 76,198 82,186 L118,186 C124,198 140,208 144,232 Z" fill="${skin}"/>
    <path d="M80,186 L120,186 L120,210 Q100,222 80,210 Z" fill="#000" opacity=".14"/>
    <ellipse cx="32" cy="120" rx="8" ry="17" fill="${skin}"/>
    <ellipse cx="168" cy="120" rx="8" ry="17" fill="${skin}"/>
    <g fill="${skin}" stroke="rgba(0,0,0,.1)" stroke-width="1.2">${FACE_PATHS[face]}</g>
    <g fill="url(#${uid}_sh)">${FACE_PATHS[face]}</g>
    <path d="M52,96 Q68,89 86,95 M148,96 Q132,89 114,95" fill="none" stroke="#2b180e" stroke-opacity=".28" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M56,112 Q68,118 80,112 M120,112 Q132,118 144,112" fill="none" stroke="#2b180e" stroke-opacity=".2" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M100,98 L100,144 C95,148 105,148 100,144" fill="none" stroke="#2b180e" stroke-opacity=".2" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M84,170 Q100,174 116,170" fill="none" stroke="#2b180e" stroke-opacity=".2" stroke-width="2" stroke-linecap="round"/>
    ${frame ? `<svg x="18" y="80" width="164" height="64" viewBox="0 0 260 100">${frameInner(frame, colorKey, true)}</svg>` : ''}
  </svg>`;
}

/* ============================================================
   Prescription Logic
   ============================================================ */
function maxPower(rx) {
  if (!rx) return 0;
  const eye = (s, c) => Math.max(Math.abs(s || 0), Math.abs((s || 0) + (c || 0)));
  return Math.max(eye(rx.odSph, rx.odCyl), eye(rx.osSph, rx.osCyl));
}
function recommendIndex(p) { return p <= 2 ? '1.50' : p <= 4 ? '1.60' : p <= 6 ? '1.67' : '1.74'; }

function rxCheck(f) {
  if (!state.rx) return null;
  const p = maxPower(state.rx);
  if (p > 4 && f.material === 'rimless') return { level: 'warn', msg: 'Rimless drill-mounts can chip or loosen with strong prescriptions — a full-rim frame is safer.' };
  if (p > 4 && f.lens > 51) return { level: 'warn', msg: `At ${p.toFixed(2)} D, ${f.lens} mm lenses increase edge thickness. Consider a lens width of 51 mm or less.` };
  if (state.rx.add > 0 && f.shape === 'cat-eye') return { level: 'warn', msg: 'Upswept cat-eye frames can slightly narrow the lower progressive reading corridor.' };
  return { level: 'ok', msg: p > 4 ? 'Compact aperture keeps lens edges thin for your prescription.' : 'Works seamlessly with your prescription.' };
}
function faceMatch(f) { return state.face ? REC[state.face].includes(f.shape) : false; }

function readRx(form) {
  const errors = [], bad = new Set(), d = {};
  const num = n => { const v = form.elements[n].value.trim(); return v === '' ? null : Number(v); };
  const range = (n, label, min, max, step) => {
    const v = num(n); d[n] = v;
    if (v == null) return;
    if (Number.isNaN(v) || v < min || v > max) { errors.push(`${label} must be between ${min} and ${max}.`); bad.add(n); }
    else if (step && Math.abs(v / step - Math.round(v / step)) > 1e-9) { errors.push(`${label} must be in steps of ${step}.`); bad.add(n); }
  };
  [['od', 'Right eye'], ['os', 'Left eye']].forEach(([e, name]) => {
    range(e + 'Sph', `${name} sphere`, -20, 12, 0.25);
    range(e + 'Cyl', `${name} cylinder`, -6, 6, 0.25);
    range(e + 'Axis', `${name} axis`, 1, 180, 1);
    if (d[e + 'Cyl'] && !d[e + 'Axis']) { errors.push(`${name} axis is required when cylinder is entered.`); bad.add(e + 'Axis'); }
    if (!d[e + 'Cyl']) d[e + 'Axis'] = null;
  });
  range('pd', 'Pupillary distance', 40, 80, 0.5);
  range('add', 'Reading add', 0.75, 3.5, 0.25);
  if (d.odSph == null && d.osSph == null && d.odCyl == null && d.osCyl == null) errors.push('Enter a value for at least one eye.');
  return { errors, bad, data: d };
}

/* ============================================================
   Catalogue Filtering & Verdant-Style Product Cards
   ============================================================ */
function visibleFrames() {
  const q = state.q.trim().toLowerCase();
  const list = FRAMES.filter(f => {
    if (q && !`${f.name} ${f.brand} ${f.shape} ${f.material}`.toLowerCase().includes(q)) return false;
    if (state.brands.size && !state.brands.has(f.brand)) return false;
    if (state.shapes.size && !state.shapes.has(f.shape)) return false;
    if (state.materials.size && !state.materials.has(f.material)) return false;
    if (state.sizes.size && !state.sizes.has(sizeOf(f))) return false;
    if (state.colors.size && !f.colors.some(c => state.colors.has(c))) return false;
    if (f.price > state.maxPrice) return false;
    if (state.recOnly && state.face && !faceMatch(f)) return false;
    if (state.rxOnly && rxCheck(f)?.level === 'warn') return false;
    return true;
  });
  const rank = f => { if (!state.face) return 0; const i = REC[state.face].indexOf(f.shape); return i < 0 ? 99 : i; };
  const sorts = {
    match: (a, b) => rank(a) - rank(b) || a.price - b.price,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name)
  };
  return list.sort(sorts[state.sort]);
}

function cardHTML(f) {
  const ck = state.cardColor[f.id] || f.colors[0];
  const fav = state.favs.includes(f.id), cmp = state.compare.includes(f.id);
  const chk = rxCheck(f);
  const topBadges = [];
  if (faceMatch(f)) topBadges.push(`<span class="badge badge-primary">Suits ${cap(state.face)}</span>`);
  else if (f.id <= 4) topBadges.push('<span class="badge badge-secondary">Atelier Best Seller</span>');
  if (chk) topBadges.push(chk.level === 'warn' ? '<span class="badge badge-accent">Check Rx Fit</span>' : '<span class="badge badge-success">Rx Optimal</span>');

  return `<article class="product-card" data-card="${f.id}">
    <div class="product-image-wrap" data-action="open-detail" data-id="${f.id}" role="button" tabindex="0" aria-label="Inspect ${f.name}">
      <img class="product-image" src="${f.img}" alt="${f.name} — ${f.brand} ${f.shape} prescription glasses" loading="lazy">
      <div class="product-badge-overlay">${topBadges.join('')}</div>
      <button type="button" class="wishlist-toggle-btn" data-action="fav" data-id="${f.id}" aria-pressed="${fav}" aria-label="${fav ? 'Remove' : 'Save'} ${f.name}" title="${fav ? 'Remove from Wishlist' : 'Save to Wishlist'}">${heartSVG(fav)}</button>
      <span class="product-spec-pill">${f.lens} □ ${f.bridge} — ${f.temple} mm · ${cap(sizeOf(f))}</span>
    </div>
    <div class="product-card-body">
      <div class="product-category-meta">${f.brand} &bull; ${f.shape} &bull; ${f.material}</div>
      <div class="product-head-row">
        <h3 class="product-title">${f.name}</h3>
        <div class="product-price">${money(f.price)}</div>
      </div>
      <div class="swatches" role="group" aria-label="Finishes for ${f.name}">
        ${f.colors.map(c => `<button type="button" class="sw" style="background:${COLORS[c][1]}" data-action="card-color" data-id="${f.id}" data-val="${c}" aria-pressed="${c === ck}" aria-label="${COLORS[c][0]}" title="${COLORS[c][0]}"></button>`).join('')}
        <span class="swatch-label">${COLORS[ck][0]}</span>
      </div>
      <div class="card-footer-actions">
        <label class="cmp"><input type="checkbox" data-action="compare" data-id="${f.id}" ${cmp ? 'checked' : ''}> Compare</label>
        <button type="button" class="btn btn-primary btn-sm" data-action="open-detail" data-id="${f.id}">Try On &amp; Lenses</button>
      </div>
    </div>
  </article>`;
}

function renderActiveFilters() {
  const bar = $('#active-filters');
  if (!bar) return;
  const pills = [];
  if (state.face) pills.push(`<span class="active-filter-tag">Face: ${cap(state.face)} <button type="button" data-action="face" data-val="${state.face}" aria-label="Clear face shape">&times;</button></span>`);
  ['brands', 'shapes', 'materials', 'sizes', 'colors'].forEach(setKey => {
    state[setKey].forEach(val => {
      const label = setKey === 'colors' ? COLORS[val][0] : cap(val);
      pills.push(`<span class="active-filter-tag">${label} <button type="button" data-action="remove-chip" data-key="${setKey}" data-val="${val}" aria-label="Remove ${label}">&times;</button></span>`);
    });
  });
  if (state.maxPrice < 5000) pills.push(`<span class="active-filter-tag">Up to ${money(state.maxPrice)}</span>`);
  if (pills.length > 1) pills.push(`<button type="button" class="btn-clear-filters" data-action="reset-filters">Clear all</button>`);
  bar.innerHTML = pills.join('');
}

function renderGrid() {
  const list = visibleFrames();
  $('#grid').innerHTML = list.map(cardHTML).join('');
  $('#empty').hidden = list.length > 0;
  $('#results-count').textContent = `Showing ${list.length} of ${FRAMES.length} frames`;
  $('#results-title').textContent = state.face && state.sort === 'match'
    ? `Frames Recommended for ${cap(state.face)} Faces`
    : 'Handcrafted Eyewear Collection';
  renderActiveFilters();
}

function renderCounts() {
  $('#cnt-favs').textContent = state.favs.length;
  $('#cnt-compare').textContent = state.compare.length;
  $('#cnt-order').textContent = state.order.length;
  $('#rx-dot').hidden = !state.rx;
}

function renderFaces() {
  $('#faces').innerHTML = Object.keys(REC).map(k =>
    `<button type="button" class="face-btn" role="radio" aria-checked="${state.face === k}" data-action="face" data-val="${k}">${faceSVG(k, '#f3d6be', null, null, true)}${cap(k)}</button>`).join('');
  $('#face-info').textContent = state.face ? FACE_INFO[state.face] : 'Not sure? Pick the closest match — you can change or clear it any time.';
}

function renderRxStrip() {
  const rx = state.rx, el = $('#rx-strip');
  if (!rx) {
    el.innerHTML = `<div class="rx-text"><strong>Add your prescription (optional)</strong><small>Save your Sphere, Cylinder, Axis, and PD to unlock automatic lens thickness recommendations (1.50–1.74) and frame compatibility checks.</small></div>
      <button type="button" class="btn btn-primary" data-action="open-rx">Enter Prescription (Rx)</button>`;
  } else {
    const p = maxPower(rx);
    el.innerHTML = `<div class="rx-text"><strong>Prescription Saved &check;</strong>
      <small>Right (OD): ${fmt(rx.odSph ?? 0)}${rx.odCyl ? ' / ' + fmt(rx.odCyl) + ' × ' + rx.odAxis + '°' : ''} &bull; Left (OS): ${fmt(rx.osSph ?? 0)}${rx.osCyl ? ' / ' + fmt(rx.osCyl) + ' × ' + rx.osAxis + '°' : ''}${rx.pd ? ' &bull; PD ' + rx.pd + 'mm' : ''}${rx.add ? ' &bull; ADD ' + fmt(rx.add) : ''}
      <br>Recommended Lens Index: <b>${INDEXES[recommendIndex(p)].label}</b></small></div>
      <div class="btn-row"><button type="button" class="btn btn-outline btn-sm" data-action="open-rx">Edit Prescription</button></div>`;
  }
}

function renderFilters() {
  const chips = (id, items, key) => { $(id).innerHTML = items.map(v =>
    `<label class="chip"><input type="checkbox" data-set="${key}" value="${v}"><span>${v}</span></label>`).join(''); };
  chips('#f-brands', BRANDS, 'brands');
  chips('#f-shapes', SHAPES, 'shapes');
  chips('#f-materials', MATERIALS, 'materials');
  chips('#f-sizes', SIZES, 'sizes');
  $('#f-colors').innerHTML = Object.entries(COLORS).map(([k, [name, hex]]) =>
    `<label class="cchip" title="${name}"><input type="checkbox" data-set="colors" value="${k}" aria-label="${name}"><span style="background:${hex}"></span></label>`).join('');
}

function resetFilters() {
  Object.assign(state, { q: '', sort: 'match', maxPrice: 5000, recOnly: false, rxOnly: false });
  ['brands', 'shapes', 'materials', 'sizes', 'colors'].forEach(k => state[k].clear());
  $('#f-q').value = ''; $('#f-sort').value = 'match'; $('#f-price').value = 5000; $('#f-price-out').textContent = money(5000);
  $$('#filters input[type=checkbox]').forEach(c => { c.checked = false; });
  renderGrid();
}

/* ============================================================
   4-Step Frame Finder Quiz Engine (100-Point Scoring)
   ============================================================ */
function renderQuiz() {
  const stepObj = QUIZ_STEPS[state.quizStep];
  $('#quiz-step-label').textContent = `Step ${state.quizStep + 1} of ${QUIZ_STEPS.length}`;
  $('#quiz-progress-fill').style.width = `${((state.quizStep + 1) / QUIZ_STEPS.length) * 100}%`;
  $('#quiz-prev').disabled = state.quizStep === 0;
  $('#quiz-next').innerHTML = state.quizStep === QUIZ_STEPS.length - 1 ? 'Calculate My 100-Pt Matches &rarr;' : 'Next Step &rarr;';

  const curVal = state.quizAnswers[stepObj.key];
  $('#quiz-body').innerHTML = `
    <h3 class="wizard-question-title">${stepObj.title}</h3>
    <p class="wizard-question-desc">${stepObj.desc}</p>
    <div class="wizard-options-grid">
      ${stepObj.options.map(o => `
        <button type="button" class="wizard-option-card ${curVal === o.val ? 'selected' : ''}" data-action="quiz-pick" data-key="${stepObj.key}" data-val="${o.val}">
          <div class="wizard-option-title">${o.title}</div>
          <div class="wizard-option-subtitle">${o.subtitle || o.sub}</div>
        </button>
      `).join('')}
    </div>`;
}

function scoreFrameForQuiz(f, ans) {
  let score = 0;
  const reasons = [];

  // 1. Face contour (35 pts)
  const recList = REC[ans.face] || [];
  const rankIdx = recList.indexOf(f.shape);
  if (rankIdx === 0 || rankIdx === 1) { score += 35; reasons.push(`Top-tier ${f.shape} silhouette for ${ans.face} contours`); }
  else if (rankIdx >= 2) { score += 28; reasons.push(`Complementary ${f.shape} geometry for ${ans.face} faces`); }
  else { score += 14; }

  // 2. Prescription band (30 pts)
  if (ans.rxBand === 'high') {
    if (f.material !== 'rimless' && f.lens <= 51) { score += 30; reasons.push(`Compact ${f.lens}mm full-rim keeps high-power lenses thin`); }
    else if (f.material !== 'rimless') { score += 20; }
    else { score += 8; }
  } else if (ans.rxBand === 'prog') {
    if (f.shape !== 'cat-eye' && f.lens >= 50) { score += 30; reasons.push('Generous vertical height for progressive reading corridors'); }
    else { score += 18; }
  } else if (ans.rxBand === 'mod') {
    score += f.lens <= 53 ? 30 : 24;
    reasons.push('Balanced aperture for mid-index lenses');
  } else {
    score += 30;
    reasons.push('Effortless optical fit for mild or plano prescriptions');
  }

  // 3. Daily routine (20 pts)
  if (ans.usage === 'office' && ['rectangle', 'browline', 'oval'].includes(f.shape)) { score += 20; reasons.push('Tailored profile for office & screen comfort'); }
  else if (ans.usage === 'everyday' && ['round', 'square', 'oval'].includes(f.shape)) { score += 20; reasons.push('Versatile everyday proportion'); }
  else if (ans.usage === 'editorial' && ['cat-eye', 'geometric', 'aviator', 'browline'].includes(f.shape)) { score += 20; reasons.push('Distinctive architectural statement'); }
  else if (ans.usage === 'feather' && ['titanium', 'rimless', 'metal'].includes(f.material)) { score += 20; reasons.push(`Featherlight ${f.material} construction`); }
  else { score += 13; }

  // 4. Material preference (15 pts)
  if (ans.materialPref === 'any') { score += 15; }
  else if (ans.materialPref === 'titanium' && (f.material === 'titanium' || f.material === 'metal')) { score += 15; reasons.push(`Matches your ${f.material} preference`); }
  else if (f.material === ans.materialPref) { score += 15; reasons.push(`Crafted in ${f.material}`); }
  else { score += 7; }

  return { frame: f, score: Math.min(99, score), reasons: reasons.slice(0, 2) };
}

function showQuizResults() {
  const ans = state.quizAnswers;
  state.face = ans.face;
  store.set('face', state.face);
  renderFaces();
  renderGrid();

  const scored = FRAMES.map(f => scoreFrameForQuiz(f, ans)).sort((a, b) => b.score - a.score).slice(0, 3);
  const res = $('#quiz-results');
  res.hidden = false;
  res.innerHTML = `
    <div class="finder-results-header">
      <span class="badge" style="background:var(--color-accent);color:#fff;margin-bottom:10px">Personalized Optical Match</span>
      <h3>Your Top 3 Compatible Frames</h3>
      <p>Calibrated for a <b>${cap(ans.face)}</b> contour &bull; Face profile automatically applied to the catalogue above.</p>
    </div>
    <div class="product-grid">
      ${scored.map(({ frame: f, score, reasons }) => `
        <article class="product-card">
          <div class="product-image-wrap" data-action="open-detail" data-id="${f.id}">
            <img class="product-image" src="${f.img}" alt="${f.name}">
            <div class="product-badge-overlay"><span class="badge badge-primary">${score}% Match</span></div>
            <span class="product-spec-pill">${f.lens} □ ${f.bridge} — ${f.temple} mm</span>
          </div>
          <div class="product-card-body">
            <div class="product-category-meta">${f.brand} &bull; ${f.shape} &bull; ${f.material}</div>
            <div class="product-head-row">
              <h3 class="product-title">${f.name}</h3>
              <div class="product-price">${money(f.price)}</div>
            </div>
            <div class="match-reasons-box">
              <strong>Why it matches you:</strong>
              ${reasons.map(r => `&bull; ${r}`).join('<br>')}
            </div>
            <div class="card-footer-actions">
              <button type="button" class="btn btn-primary btn-sm" style="width:100%" data-action="open-detail" data-id="${f.id}">Try On &amp; Configure Lenses</button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>`;
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ============================================================
   Dialogs: Frame Detail (Photo + Studio Bust + CAD + Camera), Rx, Guides
   ============================================================ */
const dlg = $('#dlg');
function stopCamera() {
  if (camStream) {
    camStream.getTracks().forEach(t => t.stop());
    camStream = null;
  }
}
function openDialog(title, html, view, wide) {
  stopCamera();
  $('#dlg-title').textContent = title;
  $('#dlg-body').innerHTML = html;
  dlg.classList.toggle('wide', !!wide);
  dialogView = view;
  if (!dlg.open) dlg.showModal();
}
dlg.addEventListener('close', () => { stopCamera(); dialogView = null; cfg = null; });
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

function lensPrice(c) {
  if (c.lens === 'nonrx') return 0;
  return LENS_TYPES[c.lens].price + INDEXES[c.index].price;
}
function itemPrice(f, c) {
  return f.price + lensPrice(c) + [...c.coat].reduce((s, k) => s + COATINGS[k].price, 0);
}

function showDetail(id) {
  const f = byId(id);
  const rec = state.rx ? recommendIndex(maxPower(state.rx)) : '1.50';
  cfg = {
    id: f.id,
    color: state.cardColor[f.id] || f.colors[0],
    lens: state.rx && state.rx.add > 0 ? 'progressive' : 'single',
    index: rec,
    coat: new Set(),
    face: state.face || 'oval',
    skin: SKIN[1],
    mode: 'photo' // 'photo' | 'studio' | 'blueprint' | 'camera'
  };
  const html = `<div class="detail">
    <div>
      <div class="tryon" id="tryon-box">
        <div class="tryon-tabs" role="tablist" aria-label="Preview mode">
          <button type="button" class="mode-btn" data-action="cfg-mode" data-val="photo" aria-pressed="true">Studio Photo</button>
          <button type="button" class="mode-btn" data-action="cfg-mode" data-val="studio" aria-pressed="false">Face Try-On</button>
          <button type="button" class="mode-btn" data-action="cfg-mode" data-val="blueprint" aria-pressed="false">CAD Blueprint</button>
          <button type="button" class="mode-btn" data-action="cfg-mode" data-val="camera" aria-pressed="false">Live Camera</button>
        </div>
        <div class="tryon-stage" id="tryon"></div>
        <div class="tryon-controls" id="tryon-ctrl">
          <label>Face <select data-cfg="face" aria-label="Preview face shape">${Object.keys(REC).map(k => `<option value="${k}">${cap(k)}</option>`).join('')}</select></label>
          <span role="group" aria-label="Skin tone">${SKIN.map((s, i) => `<button type="button" class="skin" style="background:${s}" data-action="cfg-set" data-key="skin" data-val="${s}" aria-label="Tone ${i + 1}"></button>`).join(' ')}</span>
        </div>
      </div>
      <div class="specs">
        <div class="spec"><b>${f.lens} mm</b>Lens Width</div>
        <div class="spec"><b>${f.bridge} mm</b>Bridge</div>
        <div class="spec"><b>${f.temple} mm</b>Temple Arm</div>
      </div>
    </div>
    <div>
      <p style="margin:0;color:var(--color-secondary-dark);font-weight:700;font-size:.8rem;text-transform:uppercase;letter-spacing:.06em">${f.brand} &bull; ${f.shape} &bull; ${f.material}</p>
      <p style="margin:4px 0 8px;color:var(--color-text-muted);font-size:.9rem">${cap(sizeOf(f))} fit (${totalWidth(f)} mm total front width)</p>
      <div id="dnotes"></div>
      <fieldset class="opt"><legend>Frame Finish — <span id="dcolor-name"></span></legend><div class="swatches" id="dsw">${f.colors.map(c =>
        `<button type="button" class="sw" style="background:${COLORS[c][1]};width:26px;height:26px" data-action="cfg-set" data-key="color" data-val="${c}" aria-label="${COLORS[c][0]}" title="${COLORS[c][0]}"></button>`).join('')}</div></fieldset>
      <fieldset class="opt"><legend>Lens Type</legend>${Object.entries(LENS_TYPES).map(([k, v]) =>
        `<label class="radio"><input type="radio" name="lens" data-cfg="lens" value="${k}"><span>${v.label}<small>${v.desc}</small></span><span class="p">${v.price ? '+' + money(v.price) : 'Included'}</span></label>`).join('')}</fieldset>
      <div class="opt" id="idx-wrap"><label class="t" for="idx">Lens Thickness (Refractive Index)</label>
        <select id="idx" data-cfg="index" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:10px;background:var(--color-bg)">${Object.entries(INDEXES).map(([k, v]) =>
          `<option value="${k}">${v.label} — ${v.desc}${v.price ? ' (+' + money(v.price) + ')' : ''}</option>`).join('')}</select>
        <div id="idx-note" class="note info" style="margin-top:8px"></div></div>
      <fieldset class="opt"><legend>Protective Coatings</legend>${Object.entries(COATINGS).map(([k, v]) =>
        `<label class="radio"><input type="checkbox" data-cfg="coat" value="${k}"><span>${v.label}</span><span class="p">+${money(v.price)}</span></label>`).join('')}</fieldset>
      <div class="total"><div><small style="color:var(--color-text-muted)">Total with Lenses</small><div class="price" id="dprice"></div></div>
        <div class="btn-row"><button type="button" class="wishlist-toggle-btn" style="position:static" data-action="fav" data-id="${f.id}" id="dfav" aria-pressed="false" aria-label="Save frame">${heartSVG(false)}</button>
        <button type="button" class="btn btn-primary" data-action="add-order">Add to Optical Bag</button></div></div>
    </div></div>`;
  openDialog(`${f.name}`, html, { type: 'detail' }, true);
  updateDetail();
}

async function startCameraStage(f) {
  const stage = $('#tryon');
  if (!stage) return;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    stage.innerHTML = `<div style="padding:16px"><div class="note warn">Camera access is unavailable in this browser. Showing CAD Blueprint instead.</div>${blueprintSVG(f, cfg.color)}</div>`;
    return;
  }
  stage.innerHTML = `<div class="cam-wrap"><video id="cam-vid" autoplay playsinline muted></video><div class="cam-overlay" id="cam-ov">${frameSVG(f, cfg.color)}</div></div>`;
  try {
    if (!camStream) {
      camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }, audio: false });
    }
    const vid = $('#cam-vid');
    if (vid) vid.srcObject = camStream;
  } catch {
    stage.innerHTML = `<div style="padding:16px"><p style="margin-bottom:8px;font-size:.86rem">Camera permission declined or no camera found. Showing CAD Schematic:</p>${blueprintSVG(f, cfg.color)}</div>`;
  }
}

function updateDetail() {
  if (!cfg) return;
  const f = byId(cfg.id);
  const box = $('#tryon-box');
  const ctrl = $('#tryon-ctrl');
  $$('.mode-btn', box).forEach(b => b.setAttribute('aria-pressed', b.dataset.val === cfg.mode));

  if (cfg.mode === 'photo') {
    stopCamera();
    ctrl.hidden = true;
    $('#tryon').innerHTML = `<img class="stage-photo" src="${f.img}" alt="${f.name}">`;
  } else if (cfg.mode === 'studio') {
    stopCamera();
    ctrl.hidden = false;
    $('#tryon').innerHTML = faceSVG(cfg.face, cfg.skin, f, cfg.color, false);
  } else if (cfg.mode === 'blueprint') {
    stopCamera();
    ctrl.hidden = true;
    $('#tryon').innerHTML = blueprintSVG(f, cfg.color);
  } else if (cfg.mode === 'camera') {
    ctrl.hidden = true;
    const ov = $('#cam-ov');
    if (ov && camStream) ov.innerHTML = frameSVG(f, cfg.color);
    else startCameraStage(f);
  }

  $('#dcolor-name').textContent = COLORS[cfg.color][0];
  $$('#dsw .sw').forEach(b => b.setAttribute('aria-pressed', b.dataset.val === cfg.color));
  $$('.skin').forEach(b => b.setAttribute('aria-pressed', b.dataset.val === cfg.skin));
  $('[data-cfg="face"]').value = cfg.face;
  $$('[name="lens"]').forEach(r => { r.checked = r.value === cfg.lens; });
  $$('[data-cfg="coat"]').forEach(c => { c.checked = cfg.coat.has(c.value); });
  $('#idx').value = cfg.index;
  $('#idx-wrap').hidden = cfg.lens === 'nonrx';
  const rec = state.rx ? recommendIndex(maxPower(state.rx)) : null;
  $('#idx-note').textContent = rec
    ? (cfg.index === rec ? `Recommended for your prescription (${maxPower(state.rx).toFixed(2)} D strongest meridian).` : `Your prescription suggests ${INDEXES[rec].label}.`)
    : 'Add your prescription for a personalized thickness recommendation.';
  $('#dprice').textContent = money(itemPrice(f, cfg));
  const fav = state.favs.includes(f.id);
  const hb = $('#dfav');
  hb.setAttribute('aria-pressed', fav);
  hb.innerHTML = heartSVG(fav);

  const notes = [];
  const chk = rxCheck(f);
  if (chk) notes.push(`<div class="note ${chk.level === 'warn' ? 'warn' : 'good'}">${chk.msg}</div>`);
  if (state.face) notes.push(faceMatch(f) ? `<div class="note good">Flattering ${f.shape} silhouette for ${state.face} faces.</div>` : `<div class="note info">Alternative match for ${state.face} faces — preview in Face Try-On or Live Camera.</div>`);
  if (cfg.lens === 'progressive' && !(state.rx && state.rx.add > 0)) notes.push('<div class="note warn">Progressives require a reading ADD power in your prescription.</div>');
  $('#dnotes').innerHTML = notes.join('');
}

function showRx() {
  const r = state.rx || {};
  const v = k => r[k] == null ? '' : r[k];
  const cell = (n, step, min, max, label) => `<input type="number" name="${n}" step="${step}" min="${min}" max="${max}" value="${v(n)}" aria-label="${label}" inputmode="decimal">`;
  const html = `<form id="rx-form" novalidate>
    <p style="margin-top:0;margin-bottom:14px;color:var(--color-text-muted);font-size:.9rem">Copy the values from your optometrist's prescription. Stored privately in this browser.</p>
    <div class="form-grid"><span></span><span class="h">Sphere</span><span class="h">Cylinder</span><span class="h">Axis</span>
      <strong>Right (OD)</strong>${cell('odSph', .25, -20, 12, 'Right sphere')}${cell('odCyl', .25, -6, 6, 'Right cylinder')}${cell('odAxis', 1, 1, 180, 'Right axis')}
      <strong>Left (OS)</strong>${cell('osSph', .25, -20, 12, 'Left sphere')}${cell('osCyl', .25, -6, 6, 'Left cylinder')}${cell('osAxis', 1, 1, 180, 'Left axis')}</div>
    <div class="two">
      <div class="field"><label for="pd">Pupillary Distance — PD (mm)</label>${cell('pd', .5, 40, 80, 'Pupillary distance').replace('aria-label', 'id="pd" aria-label')}</div>
      <div class="field"><label for="add">Reading ADD (for Progressives)</label>${cell('add', .25, .75, 3.5, 'Reading add').replace('aria-label', 'id="add" aria-label')}</div>
    </div>
    <ul class="errors" id="rx-errors" role="alert"></ul>
    <div id="rx-advice"></div>
    <div class="btn-row"><button class="btn btn-primary" type="submit">Save Prescription</button>
      <button class="btn danger" type="button" data-action="clear-rx">Clear</button></div>
  </form>`;
  openDialog('Your Optical Prescription (Rx)', html, { type: 'rx' });
  updateRxAdvice();
}

const GUIDES = {
  index: {
    title: 'Refractive Lens Index Guide (1.50 – 1.74)',
    body: `<p style="margin-bottom:12px">Refractive index measures how efficiently a lens material bends light. A higher index allows the lens to be ground significantly thinner and lighter:</p>
      <div class="note info"><b>1.50 Standard CR-39:</b> Ideal for mild prescriptions between -2.00 and +2.00 D. Crisp optical Abbe value.</div>
      <div class="note info"><b>1.60 Thin Mid-Index:</b> Up to 25% thinner than CR-39. Ideal for ±2.25 to ±4.00 D and rimless/semi-rimless frames.</div>
      <div class="note info"><b>1.67 Extra-Thin High-Index:</b> Aspheric design that flattens the profile for ±4.25 to ±6.00 D.</div>
      <div class="note info"><b>1.74 Ultra-Thin Aspheric:</b> Our thinnest optical lens for powers above ±6.00 D, paired best with lens widths ≤ 51 mm.</div>`
  },
  sizing: {
    title: 'Decoding Frame Numbers & Measuring PD',
    body: `<p style="margin-bottom:12px">Every quality frame has three millimeter measurements stamped inside the temple arm (for example, <b>52 □ 18 — 145</b>):</p>
      <div class="note info"><b>1. Lens Width (46–57 mm):</b> The horizontal diameter of a single lens aperture. Strong prescriptions look thinnest in 46–51 mm lenses.</div>
      <div class="note info"><b>2. Bridge Width (15–21 mm):</b> The distance between the two lenses across your nose bridge.</div>
      <div class="note info"><b>3. Temple Length (135–145 mm):</b> The length of the side arm from hinge to ear tip.</div>
      <div class="note good"><b>Total Width Rule:</b> (Lens × 2) + Bridge = Total Front Width. Small is &lt;120 mm, Medium is 120–126 mm, and Large is &gt;126 mm.</div>`
  },
  faces: {
    title: 'Matching Frame Silhouettes to Facial Contours',
    body: `<p style="margin-bottom:12px">Optical styling follows the principle of structural contrast and proportion:</p>
      <div class="note info"><b>Oval &amp; Round Contours:</b> Structured rectangular, square, and geometric silhouettes add crisp angular definition.</div>
      <div class="note info"><b>Square &amp; Heart Contours:</b> Curved P3 round, oval, and teardrop aviator shapes soften strong jawlines and balance wider brows.</div>
      <div class="note info"><b>Diamond &amp; Oblong Contours:</b> Upswept cat-eye and Club browline frames accentuate cheekbones, while deeper frames balance vertical length.</div>`
  }
};

function showGuide(key) {
  const g = GUIDES[key] || GUIDES.index;
  openDialog(g.title, g.body + `<div style="margin-top:18px"><button type="button" class="btn btn-primary" data-action="close">Close Guide</button></div>`, { type: 'guide' });
}

function showFavs() {
  const items = state.favs.map(byId).filter(Boolean);
  const html = items.length ? items.map(f => `<div class="list-item"><img src="${f.img}" alt="${f.name}">
      <div><strong>${f.name}</strong><small>${f.brand} &bull; ${cap(f.shape)} &bull; ${cap(f.material)} (${f.lens} □ ${f.bridge} — ${f.temple})</small></div>
      <div class="item-end"><div class="product-price" style="margin-bottom:6px;text-align:right">${money(f.price)}</div>
      <div class="btn-row"><button type="button" class="btn btn-primary btn-sm" data-action="open-detail" data-id="${f.id}">Try On</button><button type="button" class="btn danger btn-sm" data-action="fav" data-id="${f.id}">Remove</button></div></div></div>`).join('')
    : '<p class="empty-msg">Your wishlist is empty. Click the heart icon on any frame to save it.</p>';
  openDialog('Saved Wishlist', html, { type: 'favs' });
}

function showCompare() {
  const items = state.compare.map(byId);
  if (items.length < 2) {
    openDialog('Compare Frames', `<p class="empty-msg">Tick “Compare” on 2 or 3 frames in the catalogue to see their specifications side by side.${items.length ? ' (1 frame currently selected)' : ''}</p>`, { type: 'compare' });
    return;
  }
  const min = Math.min(...items.map(f => f.price));
  const row = (label, fn) => `<tr><th scope="row">${label}</th>${items.map(f => `<td>${fn(f)}</td>`).join('')}</tr>`;
  const html = `<div class="table-wrap"><table class="cmp-table">
    <thead><tr><td></td>${items.map(f => `<th scope="col"><img src="${f.img}" alt="${f.name}"><div>${f.name}</div></th>`).join('')}</tr></thead><tbody>
    ${row('Price', f => `<span class="${f.price === min ? 'best' : ''}">${money(f.price)}${f.price === min ? ' &bull; Lowest' : ''}</span>`)}
    ${row('Shape', f => cap(f.shape))}
    ${row('Material', f => cap(f.material))}
    ${row('Size', f => `${cap(sizeOf(f))} (${totalWidth(f)} mm)`)}
    ${row('Dimensions', f => `${f.lens} □ ${f.bridge} — ${f.temple} mm`)}
    ${row('Your Face', f => state.face ? (faceMatch(f) ? '<span class="best">Recommended</span>' : 'Alternative') : '<small>Pick a face shape</small>')}
    ${row('Your Rx', f => { const c = rxCheck(f); return c ? (c.level === 'ok' ? '<span class="best">Optimal fit</span>' : c.msg) : '<small>Add prescription</small>'; })}
    ${row('', f => `<button type="button" class="btn btn-primary btn-sm" data-action="open-detail" data-id="${f.id}">Try On &amp; Lenses</button>`)}
    </tbody></table></div>
    <p style="margin-top:14px"><button type="button" class="btn btn-outline btn-sm" data-action="clear-compare">Clear Comparison</button></p>`;
  openDialog('Compare Frames Side by Side', html, { type: 'compare' }, true);
}

function orderLine(it) {
  const f = byId(it.id);
  const lens = it.lens === 'nonrx' ? 'Non-prescription' : `${LENS_TYPES[it.lens].label}, ${it.index}`;
  const coats = it.coat.map(k => COATINGS[k].label).join(', ');
  return { f, desc: `${COLORS[it.color][0]} &bull; ${lens}${coats ? ' &bull; ' + coats : ''}` };
}
let orderMsg = '';
function showOrder() {
  let html;
  if (orderMsg) {
    html = `<div class="note good" style="font-size:1rem">${orderMsg}</div><p style="margin-top:14px"><button type="button" class="btn btn-primary" data-action="close">Continue Browsing</button></p>`;
    orderMsg = '';
  } else if (!state.order.length) {
    html = '<p class="empty-msg">Your optical bag is empty. Select a frame and click “Add to Optical Bag”.</p>';
  } else {
    const total = state.order.reduce((s, it) => s + it.price, 0);
    const needsRx = state.order.some(it => it.lens !== 'nonrx') && !state.rx;
    html = state.order.map((it, i) => { const { f, desc } = orderLine(it);
      return `<div class="list-item"><img src="${f.img}" alt="${f.name}"><div><strong>${f.name}</strong><small>${desc}</small></div>
        <div class="item-end"><div class="product-price" style="margin-bottom:6px;text-align:right">${money(it.price)}</div><button type="button" class="btn danger btn-sm" data-action="remove-order" data-i="${i}">Remove</button></div></div>`; }).join('') +
      (needsRx ? '<div class="note warn">Your bag includes prescription lenses but no saved prescription. <button type="button" class="btn btn-outline btn-sm" data-action="open-rx">Add Prescription</button></div>' : '') +
      `<div class="total"><div><small style="color:var(--color-text-muted)">Order Total</small><div class="price">${money(total)}</div></div>
        <button type="button" class="btn btn-primary" data-action="place-order" ${needsRx ? 'disabled' : ''}>Place Order (Demo)</button></div>`;
  }
  openDialog('Your Optical Bag', html, { type: 'order' });
}

function refreshDialog() {
  if (!dialogView) return;
  const t = dialogView.type;
  if (t === 'favs') showFavs();
  else if (t === 'order') showOrder();
  else if (t === 'compare') showCompare();
  else if (t === 'detail') updateDetail();
}

/* ============================================================
   Global Quick Search Modal (Verdant Style)
   ============================================================ */
const searchModal = $('#search-modal');
const quickInput = $('#quick-search-input');

function renderQuickSearch(q = '') {
  const term = q.trim().toLowerCase();
  const matches = FRAMES.filter(f => !term || `${f.name} ${f.brand} ${f.shape} ${f.material}`.toLowerCase().includes(term)).slice(0, 8);
  $('#quick-search-results').innerHTML = matches.length
    ? matches.map(f => `<button type="button" class="search-result-item" data-action="search-pick" data-id="${f.id}">
        <img class="search-result-thumb" src="${f.img}" alt="${f.name}">
        <div class="search-result-info">
          <div class="search-result-name">${f.name}</div>
          <div class="search-result-meta">${f.brand} &bull; ${f.shape} &bull; ${f.material} (${f.lens}-${f.bridge}-${f.temple})</div>
        </div>
        <div class="search-result-price">${money(f.price)}</div>
      </button>`).join('')
    : '<p class="empty-msg">No matching frames found.</p>';
}

function openQuickSearch() {
  searchModal.classList.add('open');
  renderQuickSearch(quickInput.value);
  setTimeout(() => quickInput.focus(), 40);
}
function closeQuickSearch() {
  searchModal.classList.remove('open');
}

/* ============================================================
   Mutations & Event Delegation
   ============================================================ */
function toggleFav(id) {
  id = Number(id);
  const i = state.favs.indexOf(id);
  if (i >= 0) state.favs.splice(i, 1); else state.favs.push(id);
  store.set('favs', state.favs);
  toast(i >= 0 ? 'Removed from Wishlist' : 'Saved to Wishlist');
  renderCounts(); renderGrid(); refreshDialog();
}

function setFace(k) {
  state.face = state.face === k ? null : k;
  store.set('face', state.face);
  renderFaces(); renderGrid();
  if (dialogView && dialogView.type === 'detail') updateDetail();
}

function afterRxChange() {
  store.set('rx', state.rx);
  renderRxStrip(); renderGrid(); renderCounts();
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el || el.tagName === 'INPUT') return;
  const { action, id, val, key, i } = el.dataset;

  // Close mobile drawer when clicking any action
  $('#mobile-drawer')?.classList.remove('open');
  $('#hamburger-btn')?.classList.remove('active');

  switch (action) {
    case 'open-detail': showDetail(id); break;
    case 'fav': e.stopPropagation(); toggleFav(id); break;
    case 'face': setFace(val); break;
    case 'quick-shape': {
      state.shapes.clear();
      state.shapes.add(val);
      $$('#f-shapes input').forEach(c => { c.checked = c.value === val; });
      renderGrid();
      break;
    }
    case 'remove-chip': {
      state[key].delete(val);
      $$(`#filters input[data-set="${key}"]`).forEach(c => { if (c.value === val) c.checked = false; });
      renderGrid();
      break;
    }
    case 'card-color': {
      e.stopPropagation();
      state.cardColor[id] = val;
      renderGrid();
      break;
    }
    case 'cfg-mode': if (cfg) { cfg.mode = val; updateDetail(); } break;
    case 'cfg-set': if (cfg) { cfg[key] = val; if (key === 'color') state.cardColor[cfg.id] = val; updateDetail(); renderGrid(); } break;
    case 'add-order': {
      const f = byId(cfg.id);
      state.order.push({ id: f.id, color: cfg.color, lens: cfg.lens, index: cfg.index, coat: [...cfg.coat], price: itemPrice(f, cfg) });
      store.set('order', state.order);
      renderCounts(); dlg.close(); toast(`${f.name} added to your Optical Bag`);
      break;
    }
    case 'remove-order': state.order.splice(Number(i), 1); store.set('order', state.order); renderCounts(); showOrder(); break;
    case 'place-order': {
      const ref = 'AUR-' + Math.random().toString(36).slice(2, 8).toUpperCase();
      orderMsg = `Thank you! Demo Order ${ref} placed — no payment was taken.`;
      state.order = []; store.set('order', []); renderCounts(); showOrder();
      break;
    }
    case 'clear-compare': state.compare = []; renderCounts(); renderGrid(); showCompare(); break;
    case 'clear-rx': state.rx = null; afterRxChange(); dlg.close(); toast('Prescription cleared'); break;
    case 'open-rx': showRx(); break;
    case 'open-favs': showFavs(); break;
    case 'open-compare': showCompare(); break;
    case 'open-order': showOrder(); break;
    case 'open-guide': showGuide(val); break;
    case 'open-search': openQuickSearch(); break;
    case 'close-search': closeQuickSearch(); break;
    case 'search-pick': closeQuickSearch(); showDetail(id); break;
    case 'quiz-pick': state.quizAnswers[key] = val; renderQuiz(); break;
    case 'quiz-prev': if (state.quizStep > 0) { state.quizStep--; renderQuiz(); } break;
    case 'quiz-next': {
      if (state.quizStep < QUIZ_STEPS.length - 1) { state.quizStep++; renderQuiz(); }
      else { showQuizResults(); toast('100-Point Compatibility Matches Calculated'); }
      break;
    }
    case 'reset-filters': resetFilters(); break;
    case 'close': dlg.close(); break;
  }
});

document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.action === 'compare') {
    const id = Number(t.dataset.id);
    if (t.checked) {
      if (state.compare.length >= 3) { toast('You can compare up to 3 frames'); t.checked = false; return; }
      state.compare.push(id);
      toast('Added to comparison');
    } else state.compare = state.compare.filter(x => x !== id);
    renderCounts();
  } else if (t.dataset.set) {
    const s = state[t.dataset.set];
    t.checked ? s.add(t.value) : s.delete(t.value);
    renderGrid();
  } else if (t.dataset.filter) {
    const k = t.dataset.filter;
    if (t.type === 'checkbox') state[k] = t.checked;
    else if (k === 'maxPrice') return;
    else state[k] = t.value;
    renderGrid();
  } else if (t.dataset.cfg && cfg) {
    const k = t.dataset.cfg;
    if (k === 'coat') t.checked ? cfg.coat.add(t.value) : cfg.coat.delete(t.value);
    else cfg[k] = t.value;
    updateDetail();
  }
});

document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.filter === 'q') { state.q = t.value; renderGrid(); }
  else if (t.dataset.filter === 'maxPrice') { state.maxPrice = Number(t.value); $('#f-price-out').textContent = money(state.maxPrice); renderGrid(); }
  else if (t === quickInput) { renderQuickSearch(t.value); }
  else if (t.closest('#rx-form')) updateRxAdvice();
});

function updateRxAdvice() {
  const form = $('#rx-form');
  if (!form) return;
  const { data } = readRx(form);
  const p = maxPower(data);
  const adv = $('#rx-advice');
  if (!p && !data.add) { adv.innerHTML = ''; return; }
  adv.innerHTML = `<div class="note info">Strongest meridian: <b>${p.toFixed(2)} D</b> &rarr; Recommended lens: <b>${INDEXES[recommendIndex(p)].label}</b>.${data.add ? ' Progressive lenses supported.' : ''}</div>`;
}

document.addEventListener('submit', e => {
  if (e.target.id !== 'rx-form') return;
  e.preventDefault();
  const { errors, bad, data } = readRx(e.target);
  $$('input', e.target).forEach(i => i.setAttribute('aria-invalid', bad.has(i.name)));
  $('#rx-errors').innerHTML = errors.map(m => `<li>${m}</li>`).join('');
  if (errors.length) { const first = $('[aria-invalid="true"]', e.target); if (first) first.focus(); return; }
  state.rx = data;
  afterRxChange();
  dlg.close();
  toast('Prescription saved');
});

$('#filters-toggle').addEventListener('click', e => {
  const open = $('#filters').classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', open);
});

$('#hamburger-btn').addEventListener('click', e => {
  const open = $('#mobile-drawer').classList.toggle('open');
  e.currentTarget.classList.toggle('active', open);
  e.currentTarget.setAttribute('aria-expanded', open);
});

searchModal.addEventListener('click', e => { if (e.target === searchModal) closeQuickSearch(); });
document.addEventListener('keydown', e => {
  if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) && !dlg.open) {
    e.preventDefault();
    openQuickSearch();
  } else if (e.key === 'Escape' && searchModal.classList.contains('open')) {
    closeQuickSearch();
  }
});

window.addEventListener('scroll', () => {
  $('#site-header').classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

/* ============================================================
   Init
   ============================================================ */
renderFilters();
renderFaces();
renderRxStrip();
renderCounts();
renderGrid();
renderQuiz();
