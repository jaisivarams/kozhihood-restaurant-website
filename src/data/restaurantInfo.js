/**
 * Centralized Restaurant Information for Kozhihood.
 * Contains verified business information, contact details, ordering links,
 * location coordinates, operating hours, and approved brand story content.
 */

export const restaurantInfo = {
  name: 'Kozhihood',
  owner: 'Pranesh Kumar',
  tagline: 'Good Food. Bold Flavours. Made to Crave.',
  subTagline: 'AUTHENTIC ERODE TASTE • BOLD SPICES',
  heroHeadline: 'KOZHIHOOD',
  heroCuisines: 'Biryani • Fried Rice • Noodles • Starters',
  heroLocation: 'Restaurant in Erode, Tamil Nadu',
  heroDescription:
    'Kozhihood is a restaurant in Erode serving biryani, fried rice, noodles, chicken and vegetarian starters.',

  cuisines: [
    'Biryani',
    'Fried Rice',
    'Noodles',
    'Chicken Starters',
    'Vegetarian Starters',
  ],

  contact: {
    phoneDisplay: '+91 70107 68628',
    phoneRaw: '+917010768628',
    phoneTel: 'tel:+917010768628',
  },

  location: {
    landmark: 'Park Road • Near IOB Bank • Opposite Ellai Mariyamman Kovil',
    shortAddress: 'Divya Complex, 14, Park Rd, Erode, Tamil Nadu 638003',
    streetAddress: 'Divya Complex, Main Branch, 14, Park Rd, near IOB Bank, opposite Ellai Mariyamman Kovil',
    fullAddress:
      'Divya Complex, Main Branch, 14, Park Rd, near IOB Bank, opposite Ellai Mariyamman Kovil, Erode, Tamil Nadu 638003, India',
    pincode: '638003',
    city: 'Erode',
    state: 'Tamil Nadu',
    country: 'India',
  },

  timings: {
    display: '12:00 PM – 11:00 PM Daily',
    openTime: '12:00 PM',
    closeTime: '11:00 PM',
    days: 'Daily (Mon - Sun)',
  },

  links: {
    googleMaps: 'https://maps.app.goo.gl/ZyhthphJeufnkA8n9',
    zomato: 'https://zomato.onelink.me/xqzv/8u9x9dsz',
    swiggy: 'https://www.swiggy.com/menu/1306639?source=sharing',
    instagram: 'https://www.instagram.com/kozhihood?stkn=b20zNmNranlsaHZs',
  },

  about: {
    heading: 'Good Food. Bold Flavours.',
    headingAccent: 'Made to Crave.',
    sectionTag: 'OUR HERITAGE',
    paragraphs: [
      'Kozhihood is a restaurant in Erode serving biryani, fried rice, noodles, chicken and vegetarian starters.',
      'From comforting classics to bold, flame-crafted favourites, our menu is made for those who love food with character. Whether you are craving a hearty biryani, a sizzling plate of fried rice or noodles, or something crispy and spicy to share, Kozhihood has something worth coming back for.',
      'Located at Divya Complex, Main Branch, 14, Park Rd, near IOB Bank, opposite Ellai Mariyamman Kovil, Erode, Tamil Nadu 638003, Kozhihood is here to make every meal simple, satisfying, and full of flavour.',
    ],
    closingMotto: 'Come hungry. Leave satisfied.',
    highlights: [
      {
        icon: 'local_fire_department',
        title: 'Authentic Spices',
        subtitle: 'Kongu Native Blend',
        colorClass: 'text-primary-container',
      },
      {
        icon: 'skillet',
        title: 'Wok to Plate',
        subtitle: 'Piping Hot Always',
        colorClass: 'text-secondary',
      },
      {
        icon: 'storefront',
        title: 'Heart of Erode',
        subtitle: 'Park Road Landmark',
        colorClass: 'text-primary',
      },
    ],
  },

  socialHashtag: '#KozhihoodErode',
  copyright: '© 2026 Kozhihood. All rights reserved.',
};

export default restaurantInfo;
