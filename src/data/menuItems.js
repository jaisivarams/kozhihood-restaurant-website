/**
 * Centralized Menu Items Data for Kozhihood.
 * 24 items across 3 categories.
 * Complete and only source of truth for the interactive menu.
 */

export const menuCategories = [
  { id: 'all', label: 'ALL' },
  { id: 'biryani', label: "BIRYANI'S" },
  { id: 'wok', label: 'FRIED RICE & NOODLES' },
  { id: 'starters', label: 'STARTERS' },
];

export const menuItems = [
  // ================= BRIYANI'S =================
  {
    id: 'empty-biryani',
    name: 'Empty Biryani',
    category: 'biryani',
    categoryLabel: "BRIYANI'S",
    price: 60,
    priceFormatted: '₹60',
    tag: 'Biryani',
    image: '/menu/empty-biryani.jpg',
    description:
      'Rich flavourful aromatic kuska rice cooked in chicken dum essence with pure ghee and whole spices.',
  },
  {
    id: 'dum-biryani',
    name: 'Dum Biryani',
    category: 'biryani',
    categoryLabel: "BRIYANI'S",
    price: 100,
    priceFormatted: '₹100',
    tag: 'Biryani',
    image: '/menu/dum-biryani.jpg',
    description:
      'Signature slow-cooked biryani with tender chicken pieces, layered aroma and seeraga samba delicacy.',
  },
  {
    id: '65-biryani',
    name: '65 Biryani',
    category: 'biryani',
    categoryLabel: "BRIYANI'S",
    price: 110,
    priceFormatted: '₹110',
    tag: 'Biryani',
    image: '/menu/65-biryani.jpg',
    description:
      'Aromatic dum biryani paired with hot crispy Chicken 65 tossed in aromatic curry leaves.',
  },
  {
    id: 'gilma-biryani',
    name: 'Gilma Biryani',
    category: 'biryani',
    categoryLabel: "BRIYANI'S",
    price: 120,
    priceFormatted: '₹120',
    tag: 'Biryani',
    image: '/menu/gilma-biryani.jpg',
    description:
      'Kozhihood special spicy street-style biryani toss loaded with chicken, rich masala and pepper punch.',
  },
  {
    id: 'egg-gilma',
    name: 'Egg Gilma',
    category: 'biryani',
    categoryLabel: "BRIYANI'S",
    price: 80,
    priceFormatted: '₹80',
    tag: 'Biryani',
    image: '/menu/egg-gilma.jpg',
    description:
      'Spiced rice tossed with scrambled egg, roasted pepper, and piping hot aromatic salna.',
  },
  {
    id: 'thokku-biryani',
    name: 'Thokku Biryani',
    category: 'biryani',
    categoryLabel: "BRIYANI'S",
    price: 150,
    priceFormatted: '₹150',
    tag: 'Biryani',
    image: '/menu/thokku-biryani.jpg',
    description:
      'Royal combination of spicy thick chicken gravy thokku layered lavishly on hot biryani.',
  },

  // ================= FRIED RICE & NOODLES =================
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 50,
    priceFormatted: '₹50',
    tag: 'Wok Special',
    image: '/menu/veg-fried-rice.jpg',
    description:
      'Crunchy garden vegetables wok-tossed with spring onions, pepper, and premium long grain rice.',
  },
  {
    id: 'veg-noodles',
    name: 'Veg Noodles',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 50,
    priceFormatted: '₹50',
    tag: 'Wok Special',
    image: '/menu/veg-noodles.jpg',
    description:
      'Soft noodles wok-tossed with crunchy garden vegetables, spring onions, pepper, and house spices.',
  },
  {
    id: 'egg-fried-rice',
    name: 'Egg Fried Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 50,
    priceFormatted: '₹50',
    tag: 'Wok Special',
    image: '/menu/egg-fried-rice.jpg',
    description:
      'Fluffy farm eggs wok-scrambled with crisp greens, seasoned rice, and high-heat flame fragrance.',
  },
  {
    id: 'egg-noodles',
    name: 'Egg Noodles',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 50,
    priceFormatted: '₹50',
    tag: 'Wok Special',
    image: '/menu/egg-noodles.jpg',
    description:
      'Soft noodles tossed with fluffy scrambled egg, crisp vegetables, spring onions, and house spices.',
  },
  {
    id: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 90,
    priceFormatted: '₹90',
    tag: 'Wok Special',
    image: '/menu/chicken-fried-rice.jpg',
    description:
      'High-flame wok tossed shredded chicken, fresh crunchy vegetables, and balanced house spices.',
  },
  {
    id: 'chicken-noodles',
    name: 'Chicken Noodles',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 90,
    priceFormatted: '₹90',
    tag: 'Wok Special',
    image: '/menu/chicken-noodles.jpg',
    description:
      'Soft noodles wok-tossed with shredded chicken, fresh crunchy vegetables, and balanced house spices.',
  },
  {
    id: 'schezwan-rice',
    name: 'Schezwan Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 100,
    priceFormatted: '₹100',
    tag: 'Wok Special',
    image: '/menu/schezwan-fried-rice.jpg',
    description:
      'Bold, fiery Schezwan pepper sauce stir-fried with seasoned rice, vegetables, and chicken.',
  },
  {
    id: 'schezwan-noodles',
    name: 'Schezwan Noodles',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 100,
    priceFormatted: '₹100',
    tag: 'Wok Special',
    image: '/menu/schezwan-noodles.jpg',
    description:
      'Fiery Schezwan noodles stir-fried with vegetables, spices, and chicken for a bold kick.',
  },
  {
    id: 'silk-rice',
    name: 'Silk Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 125,
    priceFormatted: '₹125',
    tag: 'Chef Signature',
    image: '/menu/silk-rice.jpg',
    description:
      'Special smooth buttery spiced wok rice with a luscious melt-in-mouth mouthfeel and chicken gravy touch.',
  },
  {
    id: 'nallampatti-rice',
    name: 'Nallampatti Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 130,
    priceFormatted: '₹130',
    tag: 'Native Kongu',
    image: '/menu/nallampatti-rice.jpg',
    description:
      'Kongu style rustic regional recipe packed with bold native spices, shallots, garlic, and countryside warmth.',
  },
  {
    id: 'pottalam-rice-noodles',
    name: 'Pottalam Rice / Noodles',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 130,
    priceFormatted: '₹130',
    tag: 'Banana Leaf',
    image: '/menu/pottalam-rice-noodles.jpg',
    description:
      'Banana leaf wrapped steaming flavour parcel, infused with roasted aromas and spicy chicken gravy.',
  },
  {
    id: 'fried-chicken-rice',
    name: 'Fried Chicken Rice',
    category: 'wok',
    categoryLabel: 'FRIED RICE & NOODLES',
    price: 130,
    priceFormatted: '₹130',
    tag: 'Wok Special',
    image: '/menu/fried-chicken-rice.jpg',
    description:
      'Crispy fried chicken pieces generously loaded over high-flame wok-tossed fragrant seasoned rice.',
  },

  // ================= STARTERS =================
  {
    id: 'iffa-chicken',
    name: 'Iffa Chicken',
    category: 'starters',
    categoryLabel: 'STARTERS',
    price: 150,
    priceFormatted: '₹150',
    tag: 'Starter',
    image: '/menu/iffa-chicken.jpg',
    description:
      'Signature chef starter with bold South Indian crunch, explosive roasted masala, and fried curry leaves.',
  },
  {
    id: 'angry-bird-chicken',
    name: 'Angry Bird Chicken',
    category: 'starters',
    categoryLabel: 'STARTERS',
    price: 100,
    priceFormatted: '₹100',
    tag: 'Starter',
    image: '/menu/angry-bird-chicken.jpg',
    description:
      'Fiery red spicy marinated chicken fry packed with intense ground pepper, chilli flakes, and crisp curry leaves.',
  },
  {
    id: 'chicken-manchurian',
    name: 'Chicken Manchurian',
    category: 'starters',
    categoryLabel: 'STARTERS',
    price: 90,
    priceFormatted: '₹90',
    tag: 'Starter',
    image: '/menu/chicken-manchurian.jpg',
    description:
      'Classic Indo-Chinese starter in tangy spicy garlic ginger reduction with spring onion accents.',
  },
  {
    id: 'chilli-fry',
    name: 'Chilli Fry',
    category: 'starters',
    categoryLabel: 'STARTERS',
    price: 80,
    priceFormatted: '₹80',
    tag: 'Starter',
    image: '/menu/chilly-fry.jpg',
    description:
      'Crisp spicy dry chicken fry sautéed with green chillies, cracked black pepper, and caramelised onions.',
  },
  {
    id: 'gobi-manchurian',
    name: 'Gobi Manchurian',
    category: 'starters',
    categoryLabel: 'STARTERS',
    price: 80,
    priceFormatted: '₹80',
    tag: 'Starter (Veg)',
    image: '/menu/gobi-manchurian.jpg',
    description:
      'Crispy golden cauliflower florets tossed in savoury manchurian sauce with bell peppers and garlic.',
  },
  {
    id: 'gobi-fry',
    name: 'Gobi Fry',
    category: 'starters',
    categoryLabel: 'STARTERS',
    price: 70,
    priceFormatted: '₹70',
    tag: 'Starter (Veg)',
    image: '/menu/gobi-fry.jpg',
    description:
      'Crunchy batter fried cauliflower with South Indian spices, fried curry leaves, and lemon wedge.',
  },
];

export default menuItems;