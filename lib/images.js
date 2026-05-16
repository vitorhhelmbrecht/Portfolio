// ============================================================
// CURATED IMAGE LIBRARY — Unsplash (free to use)
// ============================================================
// All images use Unsplash's CDN with auto-format and crop.
// Swap any URL to customize for a real client project.
// ============================================================

const u = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// ── Restaurant / Café ──
export const restaurant = {
  about: [
    u("photo-1414235077428-338989a2e8c0", 600, 800),   // plated food close-up
    u("photo-1552566626-52f8b828add9", 400, 400),       // restaurant interior
    u("photo-1556910103-1c02745aae4d", 400, 400),       // chef cooking
    u("photo-1424847651672-bf20a4b0982b", 400, 400),    // table setting
  ],
  gallery: [
    u("photo-1504674900247-0877df9cc836", 800, 450),    // beautiful plating
    u("photo-1476224203421-9ac39bcb3327", 800, 450),    // pasta dish
    u("photo-1517248135467-4c7edcad34c4", 400, 400),    // warm interior
    u("photo-1559339352-11d035aa65de", 400, 400),       // cocktail
    u("photo-1555396273-367ea4eb4db5", 400, 400),       // restaurant bar
    u("photo-1544025162-d76694265947", 400, 400),       // steak dish
    u("photo-1537047902294-62a40c20a6ae", 400, 400),    // dessert
    u("photo-1466978913421-dad2ebd01d17", 400, 400),    // dining atmosphere
  ],
};

// ── Portfolio / Agency ──
export const portfolio = {
  projects: [
    u("photo-1460925895917-afdab827c52f", 800, 600),    // laptop dashboard
    u("photo-1558655146-9f40138edfeb", 800, 600),       // brand mockup cards
    u("photo-1512941937669-90a1b58e7e9c", 800, 450),    // mobile app on phone
    u("photo-1556742049-0cfed4f6a45d", 800, 450),       // coffee shop branding
    u("photo-1559028012-481c04fa702d", 800, 450),       // clean web design
    u("photo-1534438327276-14e5300c3a48", 800, 450),    // fitness brand imagery
  ],
  team: [
    u("photo-1507003211169-0a1dd7228f2d", 400, 400),    // male professional
    u("photo-1494790108377-be9c29b29330", 400, 400),    // female professional
    u("photo-1506794778202-cad84cf45f1d", 400, 400),    // male creative
    u("photo-1573496359142-b8d87734a5a2", 400, 400),    // female professional
  ],
};

// ── E-commerce ──
export const ecommerce = {
  hero: u("photo-1586023492125-27b2c045efd7", 800, 800),  // modern interior

  categories: [
    u("photo-1513506003901-1e6a229e2d15", 400, 400),    // lighting
    u("photo-1555041469-a586c61ea9bc", 400, 400),       // furniture / chair
    u("photo-1556909114-f6e7ad7d3136", 400, 400),       // kitchen / ceramics
    u("photo-1583847268964-b28dc8f51f92", 400, 400),    // textiles / home
    u("photo-1490312278390-ab64016e0aa9", 400, 400),    // decor / vase
  ],

  products: [
    u("photo-1513506003901-1e6a229e2d15", 500, 500),    // desk lamp
    u("photo-1565193566173-7a0ee3dbe261", 500, 500),    // pour-over ceramic set
    u("photo-1583847268964-b28dc8f51f92", 500, 500),    // linen throw blanket
    u("photo-1532372576444-dda954194ad0", 500, 500),    // walnut shelf
    u("photo-1490312278390-ab64016e0aa9", 500, 500),    // hand-blown vase
    u("photo-1616627547584-bf28cee262db", 500, 500),    // cotton towels
    u("photo-1514228742587-6b1558fcca3d", 500, 500),    // stoneware mugs
    u("photo-1603006905003-be475563bc59", 500, 500),    // brass candle holder
  ],
};
