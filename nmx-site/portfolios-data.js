/*
  NMX CREATOR DATA
  ================
  This is the only file you need to edit to add, remove, or update a creator.
  The roster page and every individual portfolio page pull from this list —
  add a new person here and they automatically get a portfolio page and a
  card on the roster page. No other file needs to change.

  HOW TO ADD A NEW CREATOR
  1. Copy one of the objects below (from the opening { to the closing },).
  2. Change every field to that person's info.
  3. Give them a unique "slug" — lowercase, no spaces, e.g. "jane-tan".
  4. Their portfolio page will automatically be reachable at:
       portfolio.html?slug=jane-tan
  5. For photos: put image files in an "images" folder next to this one,
     then reference them like "images/jane-1.jpg" in the gallery array.
     Until real images are added, a labelled placeholder box is shown instead.
*/

const PORTFOLIOS = [
  {
    slug: "rem-zero",
    name: "Rem",
    handle: "@rem.zer0",
    role: "Founder · Photographer & Videographer",
    tagline: "Cosplay photography roots, now shooting photo and video for brands and events across Singapore.",
    bio: "Rem founded NMX after years photographing Singapore's cosplay and hobby scene, and now shoots both photo and video — from event stills to short-form reels. That background shapes how NMX works: get close to a community first, then make content for it — never the other way around.",
    services: ["Event photography", "Videography & reels", "Cosplay & portrait photography", "Brand shoots", "Creative direction"],
    instagram: "https://instagram.com/rem.zer0",
    tiktok: "",
    gallery: ["images/rem-1.jpg", "images/rem-2.jpg", "images/rem-3.jpg", "images/rem-4.jpg", "images/rem-5.jpg", "images/rem-6.jpg", "images/rem-7.jpg", "images/rem-8.jpg", "images/rem-9.jpg", "images/rem-10.jpg", "images/rem-11.jpg", "images/rem-12.jpg"]
  },
  {
    slug: "zenna",
    name: "Zenna",
    handle: "@zennayum",
    role: "Lifestyle & Event Creator",
    tagline: "Community-focused and camera-comfortable — covers events live and makes them worth watching after.",
    bio: "Zenna covers events as they happen and turns them into stories people actually finish watching. Equally at home hosting a livestream or shooting a quiet lifestyle reel.",
    services: ["Event attendance", "TikTok Live", "Instagram Stories", "Reels", "Sponsored content"],
    instagram: "https://instagram.com/zennayum",
    tiktok: "https://tiktok.com/@zennayum",
    gallery: ["images/zenna-1.jpg", "images/zenna-2.jpg", "images/zenna-3.jpg", "images/zenna-4.jpg"]
  },
  {
    slug: "yorii",
    name: "Yorii",
    handle: "@yorii",
    role: "[Add role — e.g. Creator]",
    tagline: "[Add a one-line tagline for Yorii]",
    bio: "[Add Yorii's bio — background, what they shoot or create, what makes their work distinct]",
    services: ["[Add service]", "[Add service]"],
    instagram: "",
    tiktok: "",
    gallery: []
  },
  {
    slug: "charmaine",
    name: "Charmaine",
    handle: "@charmaine",
    role: "[Add role — e.g. Creator]",
    tagline: "[Add a one-line tagline for Charmaine]",
    bio: "[Add Charmaine's bio — background, what they shoot or create, what makes their work distinct]",
    services: ["[Add service]", "[Add service]"],
    instagram: "",
    tiktok: "",
    gallery: []
  },
  {
    slug: "chloe",
    name: "Chloe",
    handle: "@chloe",
    role: "[Add role — e.g. Creator]",
    tagline: "[Add a one-line tagline for Chloe]",
    bio: "[Add Chloe's bio — background, what they shoot or create, what makes their work distinct]",
    services: ["[Add service]", "[Add service]"],
    instagram: "",
    tiktok: "",
    gallery: []
  }

  // Add the next creator below this line, following the same shape as above.
];
