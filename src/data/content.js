import { images } from "../asserts/data";

// src/data/content.js
export const WHATSAPP_NUMBER = "923138855508";
export const EMAIL = "info@hikalguesthouse.com";
export const FaceBookLink ="https://www.facebook.com/HikalGuestHouse/"  
export const InstgramLink ="https://www.instagram.com/hikalguesthouse_nagarvalley" 
export const faqs = [
  {
    id: "1",
    question: "How do I book a room at Hikal Guest House?",
    answer:
      "You can book directly through our website or contact us via WhatsApp for a faster response. Payment before arrival by bank transfer is required — we will send you full instructions after your booking is confirmed.",
  },
  {
    id: "2",
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 12:00 PM to 12:00 AM. Check-out is until 11:00 AM. Please inform us of your expected arrival time in advance. A valid photo ID is required at check-in.",
  },
  {
    id: "3",
    question: "Is breakfast included in the room price?",
    answer:
      "Breakfast is optional and available at PKR 550 per person. It can be added at the time of booking or on arrival. In-room breakfast is also available on request.",
  },
  {
    id: "4",
    question: "Are pets allowed?",
    answer:
      "Yes, pets are welcome at Hikal Guest House at no extra charge.",
  },
  {
    id: "5",
    question: "Can you help arrange local tours and activities?",
    answer:
      "Yes. Our team can arrange hiking, cycling, bike tours, walking tours, cooking classes, and cultural experiences around Hunza Valley. Contact us in advance to plan your itinerary.",
  },
];


export const About_Paragraph = [
  "Hikal Guest House is a peaceful retreat located in Nagar Valley.",
  "We provide comfort, mountain views, and authentic hospitality.",
  "Our goal is to make every guest feel at home."
];

export const About_Content = [
  { label: "Phone", value: WHATSAPP_NUMBER },
  { label: "Email", value: EMAIL },
  { label: "Location", value: "Nagar Valley, Gilgit Baltistan" },
];

export const About_Social = [
  { name: "Facebook", link:FaceBookLink  },
  { name: "Instagram", link:InstgramLink },
  { name: "Booking.com", link: "https://www.booking.com/hotel/pk/hikal-guest-house.en-gb.html" },
];




const FEATURED_DISHES = [
  {
    id: 1,
    title: "Mutton Karahi",
    desc: "Slow-cooked tender mutton in a rich tomato and spice gravy, served with fresh naan.",
    price: "PKR 3,500",
    badge: "Chef Special",
    image: images.mutton_karahi,
  },
  {
    id: 2,
    title: "Chapshuro",
    desc: "Traditional Nagar meat pie — stuffed flatbread with spiced minced meat, pan-fried golden.",
    price: "PKR 950",
    badge: "Local Favourite",
    image: images.chapshuro,
  },
  {
    id: 3,
    title: "Grilled River Trout",
    desc: "Fresh Nagar valley trout marinated in herbs and charcoal-grilled, served with raita.",
    price: "PKR 2,500",
    badge: "Seasonal",
    image: images.grilled_trout,
  },
  {
    id: 4,
    title: "Mix BBQ Platter",
    desc: "Seekh kebab, chicken tikka and lamb chops with mint chutney, naan and pickled onions.",
    price: "PKR 3,800",
    badge: "Best Seller",
    image: images.mix_bbq,
  },
];

export default FEATURED_DISHES;



export const DEFAULT_MENU_SECTIONS = [
  {
    id: "menu-breakfast",
    title: "Breakfast",
    items: [
      {
        id: "b-1",
        name: "Nagar Fiti Bread with Apricot Jam",
        desc: "Traditional stone-ground wheat bread served warm with local wild apricot preserve and butter.",
        price: "PKR 450",
        image: images.fiti,
      },
      {
        id: "b-2",
        name: "Anda Paratha with Lassi",
        desc: "Flaky whole-wheat paratha with two fried eggs, pickles, and a chilled glass of salted lassi.",
        price: "PKR 550",
        image: images.anda_p,
      },
      {
        id: "b-3",
        name: "Boiled Eggs with Khaplu Bread",
        desc: "Two soft-boiled eggs with toasted local mountain bread, green chutney, and seasonal fruit.",
        price: "PKR 400",
        image: images.boiled_eggs,
      },
      {
        id: "b-4",
        name: "Halwa Puri with Chana",
        desc: "Semolina halwa, crispy puri, and spiced chickpea curry — a classic Pakistani morning plate.",
        price: "PKR 600",
        image: images.halwa_puri,
      },
    ],
  },

  {
    id: "menu-lunch",
    title: "Lunch",
    items: [
      {
        id: "l-1",
        name: "Mutton Karahi",
        desc: "Slow-cooked tender mutton in a rich tomato, ginger and spice gravy, served with naan.",
        price: "PKR 3,500",
        image: images.mutton_karahi,
      },
      {
        id: "l-2",
        name: "Chicken Biryani",
        desc: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelised onions.",
        price: "PKR 1,200",
        image: images.chicken_biryani,
      },
      {
        id: "l-3",
        name: "Daal Makhani with Rice",
        desc: "Slow-simmered black lentils enriched with cream, butter and cumin — served with steamed rice.",
        price: "PKR 800",
        image: images.mutton_pulao, // replace if you later add daal image
      },
      {
        id: "l-4",
        name: "Chapshuro (Nagar Meat Pie)",
        desc: "Traditional Nagar stuffed flatbread filled with spiced minced meat and onions, pan-fried.",
        price: "PKR 950",
        image: images.chapshuro,
      },
    ],
  },

  {
    id: "menu-dinner",
    title: "Dinner",
    items: [
      {
        id: "d-1",
        name: "Whole Roast Chicken (Tandoori)",
        desc: "Full chicken marinated overnight in yoghurt and spices, roasted in a clay tandoor.",
        price: "PKR 2,800",
        image: images.roast_chicken,
      },
      {
        id: "d-2",
        name: "Grilled River Trout",
        desc: "Fresh Nagar valley trout marinated in herbs, charcoal-grilled and served with raita and salad.",
        price: "PKR 2,500",
        image: images.grilled_trout,
      },
      {
        id: "d-3",
        name: "Mutton Pulao (Nagar Style)",
        desc: "Aromatic long-grain rice cooked in mutton stock with whole spices — a Gilgit-Baltistan staple.",
        price: "PKR 1,800",
        image: images.mutton_pulao,
      },
      {
        id: "d-4",
        name: "Mix Barbeque Platter",
        desc: "Seekh kebab, chicken tikka, and lamb chops served with mint chutney, naan and pickled onions.",
        price: "PKR 3,800",
        image: images.mix_bbq,
      },
    ],
  },

  {
    id: "menu-sides",
    title: "Sides & Extras",
    items: [
      {
        id: "s-1",
        name: "Raita & Salad",
        desc: "Chilled yoghurt with cucumber and mint, served with a fresh garden salad.",
        price: "PKR 250",
        image: images.rita,
      },
      {
        id: "s-2",
        name: "Plain Naan / Roti",
        desc: "Freshly baked naan or whole wheat roti from our tandoor — served hot per piece.",
        price: "PKR 80",
        image: images.plain_naan,
      },
    ],
  },

  {
    id: "menu-drinks",
    title: "Drinks & Desserts",
    items: [
      {
        id: "dr-1",
        name: "Apricot Juice (Local)",
        desc: "Chilled fresh juice pressed from Nagar valley apricots — sweet, tangy, and seasonal.",
        price: "PKR 350",
        image: images.apricot,
      },
      {
        id: "dr-2",
        name: "Kehwa (Green Tea)",
        desc: "Green tea brewed with salt, milk and cardamom — warming and authentic.",
        price: "PKR 200",
        image: images.karak_chai,
      },
      {
        id: "dr-3",
        name: "Karak Chai",
        desc: "Strong milky tea brewed with cardamom and ginger — served with biscuits.",
        price: "PKR 150",
        image: images.karak_chai,
      },
      {
        id: "dr-4",
        name: "Sheer Khurma",
        desc: "Vermicelli pudding simmered in sweetened milk with dates, pistachios and cardamom.",
        price: "PKR 450",
        image: images.sheer_khurma,
      },
    ],
  },
];

