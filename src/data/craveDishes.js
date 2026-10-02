/**
 * Crave-Worthy Featured Dishes for Kozhihood.
 * Exact 6 signature items from the approved Stitch UI.
 * References image keys from `imageRegistry.js`.
 */

export const craveDishes = [
  {
    id: 'crave-dum-biryani',
    name: 'Dum Biryani',
    price: 100,
    priceFormatted: '₹100',
    tag: 'Bestseller',
    tagClass: 'bg-primary-container text-on-primary-container',
    spiceCount: 2,
    spiceTitle: 'Spicy',
    spiceColor: 'text-primary-container',
    imageKey: 'craveDumBiryani',
    description:
      'Fragrant slow-cooked kalyana-style seeraga samba / basmati rice layered with tender succulent chicken and aromatic whole spices.',
  },
  {
    id: 'crave-65-biryani',
    name: '65 Biryani',
    price: 110,
    priceFormatted: '₹110',
    tag: 'Chef Special',
    tagClass: 'bg-surface-container-highest/90 text-on-surface',
    spiceCount: 3,
    spiceTitle: 'Fiery',
    spiceColor: 'text-primary-container',
    imageKey: 'crave65Biryani',
    description:
      'Rich biryani topped with crisp, deep-spiced fiery Chicken 65 bites, seasoned with crackling curry leaves and lemon.',
  },
  {
    id: 'crave-gilma-biryani',
    name: 'Gilma Biryani',
    price: 120,
    priceFormatted: '₹120',
    tag: 'Cult Hit',
    tagClass: 'bg-primary-container text-on-primary-container',
    spiceCount: 3,
    spiceTitle: 'Very Spicy',
    spiceColor: 'text-primary-container',
    imageKey: 'craveGilmaBiryani',
    description:
      "Kozhihood's cult favourite spicy toss of shredded chicken and aromatic spiced rice, rich with simmering pepper salna.",
  },
  {
    id: 'crave-chicken-fried-rice',
    name: 'Chicken Fried Rice',
    price: 90,
    priceFormatted: '₹90',
    tag: null,
    tagClass: '',
    spiceCount: 1,
    spiceTitle: 'Mild-Medium',
    spiceColor: 'text-secondary',
    imageKey: 'craveChickenFriedRice',
    description:
      'High-flame wok tossed with shredded chicken, fresh crunchy spring veggies, and house pepper spice blend.',
  },
  {
    id: 'crave-chicken-manchurian',
    name: 'Chicken Manchurian',
    price: 90,
    priceFormatted: '₹90',
    tag: null,
    tagClass: '',
    spiceCount: 2,
    spiceTitle: 'Spicy',
    spiceColor: 'text-primary-container',
    imageKey: 'craveChickenManchurian',
    description:
      'Crispy chicken chunks glazed in rich garlic ginger dark soy gravy with spring onions and a touch of regional zest.',
  },
  {
    id: 'crave-iffa-chicken',
    name: 'Iffa Chicken',
    price: 150,
    priceFormatted: '₹150',
    tag: 'Signature Showstopper',
    tagClass: 'bg-secondary-container text-on-secondary-container',
    spiceCount: 3,
    spiceTitle: 'Signature Hot',
    spiceColor: 'text-primary-container',
    imageKey: 'craveIffaChicken',
    description:
      "Kozhihood's signature showstopper spicy fried chicken starter tossed in fiery South Indian masala with unforgettable crunch.",
  },
];

export default craveDishes;
