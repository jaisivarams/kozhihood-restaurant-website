/**
 * Centralized Image Registry for Kozhihood Restaurant Website.
 *
 * NOTE: The food images below are TEMPORARY placeholders from the Stitch export.
 * This registry allows any image to be replaced later with curated, high-quality
 * Kozhihood assets WITHOUT modifying any UI components or page layouts.
 *
 * Every entry preserves:
 * - url: The image resource URL (local asset path or external URL)
 * - alt: Descriptive alt text for accessibility and SEO
 * - aspectRatio: Expected container aspect ratio
 * - objectFit: Object-fit rule (cover, contain)
 * - objectPosition: Framing positioning focus
 */

export const imageRegistry = {
  // Hero Section
  heroBiryani: {
    id: 'hero-biryani',
    name: 'Royal Chicken Dum Biryani Handi',
    url: '/hero/chickenbiryani.jpg',
    alt: 'Culinary centerpiece of royal Indian chicken dum biryani in a traditional brass handi pot, surrounded by fresh whole spices, fried golden onions, fragrant mint, coriander leaves, boiled egg, lemon slices, and rising steam, shot in dark moody lighting with rich warm orange and saffron highlights.',
    aspectRatio: '1/1',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Crave-Worthy Featured Dishes (6 Signature Items)
  craveDumBiryani: {
    id: 'crave-dum-biryani',
    name: 'Dum Biryani',
    url: '/menu/dum-biryani.jpg',
    alt: 'Traditional South Indian chicken dum biryani in a clay pot, garnished with mint sprigs, golden fried onions, crisp chicken pieces, and whole cardamom star anise spices, deep warm cinematic lighting.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  crave65Biryani: {
    id: 'crave-65-biryani',
    name: '65 Biryani',
    url: '/menu/65-biryani.jpg',
    alt: 'Fiery red crispy chicken 65 pieces resting atop a generous platter of fragrant saffron spiced biryani rice, with curry leaves and cut green chillies, high contrast dark photography.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  craveGilmaBiryani: {
    id: 'crave-gilma-biryani',
    name: 'Gilma Biryani',
    url: '/menu/gilma-biryani.jpg',
    alt: 'Cult favourite Gilma biryani, a spicy Kongu street style toss of shredded chicken gravy with infused kalyana rice, topped with fresh coriander in an authentic black earthenware bowl.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  craveChickenFriedRice: {
    id: 'crave-chicken-fried-rice',
    name: 'Chicken Fried Rice',
    url: '/menu/chicken-fried-rice.jpg',
    alt: 'High heat wok tossed chicken fried rice with julienne vegetables, scallions, eggs, and freshly cracked black pepper, garnished with fresh spring onions on a sleek black matte plate.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  craveChickenManchurian: {
    id: 'crave-chicken-manchurian',
    name: 'Chicken Manchurian',
    url: '/menu/chicken-manchurian.jpg',
    alt: 'Indo Chinese chicken Manchurian with glistening deep dark soy garlic glaze, sesame seeds, chopped scallions, tender chicken nuggets steaming hot on a textured dark plate.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  craveIffaChicken: {
    id: 'crave-iffa-chicken',
    name: 'Iffa Chicken',
    url: '/menu/iffa-chicken.jpg',
    alt: 'Kozhihood signature Iffa Chicken starter, crispy spicy batter fried golden boneless chicken chunks tossed with crisp curry leaves, slit green chillies and roasted crushed masala spices.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // About Section Visual Collage (4 Images)
  aboutWokToss: {
    id: 'about-wok-toss',
    name: 'Wok Flame Toss',
    url: '/about/image3.jpg',
    alt: 'Intense wok tossing chicken fried rice with vibrant high flame bursts in a dark kitchen, sparks flying with rich golden and orange ember glow.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  aboutWholeSpices: {
    id: 'about-whole-spices',
    name: 'South Indian Whole Spices',
    url: '/about/image2.jpg',
    alt: 'Traditional South Indian whole spices, cinnamon sticks, star anise, cloves, stone flower kalpasi, and dried red chillies artfully composed on dark rustic stone.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  aboutDumPot: {
    id: 'about-dum-pot',
    name: 'Dum Biryani Pot Unsealed',
    url: '/about/image4.jpg',
    alt: 'Slow dum biryani pot sealed with wheat dough, opening with fragrant rising steam in a warm atmospheric South Indian dining kitchen.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  aboutFriedChicken: {
    id: 'about-fried-chicken',
    name: 'Cast Iron Crispy Fried Chicken',
    url: '/about/image1.jpg',
    alt: 'Freshly fried chicken starter tossed with glistening masala, green chillies, and fried curry leaves in a cast iron wok on charcoal heat.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Gallery Section — "Feast in Frames" (6 Frames)
  gallerySaffronBiryani: {
    id: 'gallery-saffron-biryani',
    name: 'Golden Saffron Dum Biryani Handi',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfmW4oiwnVZRycfXONOhqQQ7jqgaWpoITN2ukiUcw8HaZqxbH2lOsMBTQHmJEuKk1uPMw-8fj_065Ik6TP2ChqduxF3JmhPcHZuS-ipzmwS3HkWFW6tIdS0cFQDVFL8O0tADNiBSLghuwEo4Rg1AQIP8QYcuOd7mI-vnlsUCkApsfQbjWt-CiAaTDKOZJ2JPmjZnwwoqE4m0vVRGW4_vLQ9CDSwZhy--Jv_Ww25mRm7lzbHf3lRVlqOw',
    alt: 'Golden Saffron Dum Biryani Handi with fried shallots and coriander garnish in a dark dramatic setting with warm orange glow.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  gallerySchezwanRice: {
    id: 'gallery-schezwan-rice',
    name: 'Wok-tossed Schezwan Rice',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDb-zvJQmL5LwK1Lr5av9AXBlempBmDDZsktbJQxs-vPca8etwpYDCJDF9rB5PMbdeu1JCmBhQ9JtnEOcdUT88cXNVhYay-Wsf-k9JjXiNGMZRqcPYkztIuMuRmb5hCAMxhrPN7muC5yEETPf8qMtHzdBCEcN008HHYU0NgIQFkHVkdM6U_4IZzU2kkCAJIe3p25BXgn4K7RWYdeN7e0YeqkQag4xWOVR34vWVtbbEbfQMe38hLkKtog',
    alt: 'Wok-tossed Chicken Schezwan Fried Rice being tossed high above flame with shredded chicken and fresh vegetables in a dynamic culinary shot.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  galleryIffaChicken: {
    id: 'gallery-iffa-chicken',
    name: 'Sizzling Fiery Iffa Chicken',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaavKK_QBDR-9SGUUMCCk2kYFx0wnQR2FmfPwiqx6wWk9ysy0vV81bFFck78zO4YYAkU6_9BO2E-lmxxIe4Lh1bcW8_WUzdW7DkmC9c8ENsdxD6hC44XWWsesCrPLVD6KmzXl7eCSsJIa-b2NNvzFnYflg0_tXdTW1BKrAWdnAHnguFqfthpGeJ7tlpihHYHuCQnJgPHdcgJ1JGF_nrCH1l96j7DqZ3TWVHswZKQ0NX7cm1D1F7X5Hxw',
    alt: 'Sizzling Fiery Iffa Chicken with crispy fried chillies, crushed black pepper, and fragrant curry leaves served on a rustic dark plate.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  galleryPottalamRice: {
    id: 'gallery-pottalam-rice',
    name: 'Steaming Pottalam Rice Parcel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmAqxKooFbrnmuTXEAglXChaoUY1zlSYI6_CNH5BVswgAYezyrAJlXHzitfxYmwp6byZTFuicfGPsGIBQwIZ--rHi2uT59U1GFJHMk6LYFJWf0Y5bKRm2mySqTHRzdwGPyvAFPK7nkN8W50z9MFLodbCipvaldEAsY7Ei2GDTZPB3vAwIpeuOwPzpGUy-d26inZi1V8zvL-fJaNz4R87vWHmGJ_Wcipb085jGGCrmQnYKc6lQ-XevLCA',
    alt: 'Pottalam Rice steaming hot unwrapped from fresh green plantain banana leaf parcel showing moist aromatic chicken rice inside.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  galleryGobiManchurian: {
    id: 'gallery-gobi-manchurian',
    name: 'Crispy Gobi Manchurian Glaze',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD20aRu9FjrXqTnps8w9jVgSvyb10ZZw8xPn6TuGQybOHqllQ7qBl7PV7HRZS4Usw0v4uhzBn1HCUQ-1xUgxQDuq0krdsm3SRoTaVvxaw0EKjVLn3YmptAgsxUqc6v0IZIMZiX2EjGCG3WKChw5_2h9nkzQxiNvhyMXBEDSjScwhl10Fwg-tc5RyRJPvyIpLtm00_rR72bH9sQedzX5xMbI3b7TOWlsAOg5mtx60GFsI6rCvUDPbB-hFQ',
    alt: 'Crispy Gobi 65 & Manchurian Glaze on a ceramic matte black plate with sliced red chillies, fresh coriander, and sesame seeds.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  galleryFreshSpices: {
    id: 'gallery-fresh-spices',
    name: 'Fresh Whole Spices & Craftsmanship',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgFDe1nD0pD4tpYXk9BkqGysu2eAZnea74qXnNzvcGPD1HMpwIRP3q24gyAdXdJwLVKQSPMyCqu5HDHKrr-b750yZd2yeGpo7TxsJF-Uyxe-8QvzcANR8R1bAJj69dnPqsiaCEv8y2KnyQVNFdE0UhczOF_VRM4YbCcupA64M9AllIcB15loSVD2l81Yy7x2PTh2V4am3XQM68vI8ULvoPWrSKZcL0nt2gprC9v3MRYBKoOJ0N-t-FwA',
    alt: 'Fresh Whole South Indian Spices and chef crushing roasted spices with a pestle on a heavy granite stone mortar, warm atmospheric lighting.',
    aspectRatio: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Contact Section Map Graphic
  mapPreview: {
    id: 'map-preview',
    name: 'Kozhihood Location Map',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5RT8MeQGuQSeGGrXtZHulJo3myzXPkoZN8zWg_3nFPZBaXvq_A6qw21MZkoG1dEQ-HykWDat8fFvXwyJVqAqaYWrcptVvm2EWeuuO8J9F3gq-WYsYWuqqgJve3-Ok_pVVPXMUGQK-3HmoNST6_a_3bRg1RIHI_tVtWsFP1z1u-15NkWCLYRElfmQ7B0mFDQCnqU1QRlOIV-qNN_XyFw4SEzj1JFbGNAGtTUB3DKtO3vV5gZtaaoZdKQ',
    alt: 'Stylized street map view of Kozhihood location at Divya Complex, Park Road, Erode.',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Future Real Restaurant Photo Slots (To be populated when official photography is provided)
  restaurantExterior: {
    id: 'restaurant-exterior',
    name: 'Kozhihood Storefront Exterior',
    url: '', // Real photograph of Divya Complex, Park Road storefront will be assigned here
    alt: 'Kozhihood restaurant exterior storefront on Park Road, Erode',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  restaurantInterior: {
    id: 'restaurant-interior',
    name: 'Kozhihood Dining Space Interior',
    url: '', // Real photograph of interior dining setup will be assigned here
    alt: 'Kozhihood dining area interior, Erode',
    aspectRatio: '16/9',
    objectFit: 'cover',
    objectPosition: 'center',
  },
};

/**
 * Helper function to retrieve an image record by key.
 * Falls back safely to prevent any broken UI if a key is missing.
 */
export function getImage(key) {
  return (
    imageRegistry[key] || {
      url: '',
      alt: 'Kozhihood Culinary',
      aspectRatio: '16/9',
      objectFit: 'cover',
      objectPosition: 'center',
    }
  );
}

export default imageRegistry;
