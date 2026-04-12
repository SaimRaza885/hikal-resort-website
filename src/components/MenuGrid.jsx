import { Reveal } from "./Reveal";
import MenuSection from "./MenuSection";

/* =========================================================
   Real local menu — Nagar / Nagar Valley / Pakistani items
   Prices reflect typical mountain resort rates in PKR (2024)
========================================================= */
const DEFAULT_MENU_SECTIONS = [
  {
    id: "menu-breakfast",
    title: "Breakfast",
    items: [
      {
        id: "b-1",
        name: "Nagar Fiti Bread with Apricot Jam",
        desc: "Traditional stone-ground wheat bread served warm with local wild apricot preserve and butter.",
        price: "PKR 450",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzN1MsRVmVUQIOAAlKqw838d1wrb_0Z89Orw&s",
      },
      {
        id: "b-2",
        name: "Anda Paratha with Lassi",
        desc: "Flaky whole-wheat paratha with two fried eggs, pickles, and a chilled glass of salted lassi.",
        price: "PKR 550",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTA6MoVvxOxRw5aq_THNXknnJmhdM0Qkbpg&s",
      },
      {
        id: "b-3",
        name: "Boiled Eggs with Khaplu Bread",
        desc: "Two soft-boiled eggs with toasted local mountain bread, green chutney, and seasonal fruit.",
        price: "PKR 400",
        image: "https://healthyrecipesblogs.com/wp-content/uploads/2024/07/hard-boiled-eggs-featured-1-2024.jpg",
      },
      {
        id: "b-4",
        name: "Halwa Puri with Chana",
        desc: "Semolina halwa, crispy puri, and spiced chickpea curry — a classic Pakistani morning plate.",
        price: "PKR 600",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUG4vMskQXy7ly3q7RMDjhHy-3iGZEZr_pg&s",
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
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80",
      },
      {
        id: "l-2",
        name: "Chicken Biryani",
        desc: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelised onions.",
        price: "PKR 1,200",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&q=80",
      },
      {
        id: "l-3",
        name: "Daal Makhani with Rice",
        desc: "Slow-simmered black lentils enriched with cream, butter and cumin — served with steamed rice.",
        price: "PKR 800",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4hHjnA05rpvXv_RmIgK9MR-bIQ0xwbuScw&s",
      },
      {
        id: "l-4",
        name: "Chapshuro (Nagar Meat Pie)",
        desc: "Traditional Nagar stuffed flatbread filled with spiced minced meat and onions, pan-fried.",
        price: "PKR 950",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwdPArqm0yx_jifhezGeuYy3jhuJFgv08oQ&s",
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
        image: " https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3.jpg",
      },
      {
        id: "d-2",
        name: "Grilled River Trout",
        desc: "Fresh Nagar valley trout marinated in herbs, charcoal-grilled and served with raita and salad.",
        price: "PKR 2,500",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=80",
      },
      {
        id: "d-3",
        name: "Mutton Pulao (Nagar Style)",
        desc: "Aromatic long-grain rice cooked in mutton stock with whole spices — a Gilgit-Baltistan staple.",
        price: "PKR 1,800",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&q=80",
      },
      {
        id: "d-4",
        name: "Mix Barbeque Platter",
        desc: "Seekh kebab, chicken tikka, and lamb chops served with mint chutney, naan and pickled onions.",
        price: "PKR 3,800",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&q=80",
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
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      },
      {
        id: "s-2",
        name: "Plain Naan / Roti",
        desc: "Freshly baked naan or whole wheat roti from our tandoor — served hot per piece.",
        price: "PKR 80",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwS6lg4NICuAZhTx6fYf0sk-PAFKAv2HS94A&s",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CRNFS4LQxVlwY26LGBhtqX1tn9c3CtaCaw&s",
      },
      {
        id: "dr-2",
        name: "Kehwa (Green Tea)",
        desc: "Green tea brewed with salt, milk and cardamom — warming and authentic.",
        price: "PKR 200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9xuGHiN-8xmoHwnL3KBJf-8O82tFbbfv0DUg5bM-leBvgmSibe6oXmcTEJpWek_y2FM_SNSW6TPQW3MB-tY4vs5hSOWWn7bkNXEhpq0&s=10",
      },
      {
        id: "dr-3",
        name: "Karak Chai",
        desc: "Strong milky tea brewed with cardamom and ginger — served with biscuits.",
        price: "PKR 150",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhpt-LyuDA1R9dySxPWpCM5jdmUXAfKSJkg&s",
      },
      {
        id: "dr-4",
        name: "Sheer Khurma",
        desc: "Vermicelli pudding simmered in sweetened milk with dates, pistachios and cardamom.",
        price: "PKR 450",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8zGvqMrsdoKjSGsEC5-CB6iAOqNzoFS8aQ&s",
      },
    ],
  },
];

/* =========================================================
   MenuGrid.jsx
   Renders all menu sections stacked vertically
   Props:
     menuSections — array of { id, title, items[] } (optional)
     className    — extra wrapper classes (optional)
========================================================= */
export default function MenuGrid({ menuSections = DEFAULT_MENU_SECTIONS, className = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container-custom">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Full Menu</h2>
          <p className="text-muted-foreground mb-12">All prices are inclusive of taxes</p>
        </Reveal>

        <div className="space-y-12">
          {menuSections.map((section, sectionIdx) => (
            <Reveal key={section.id} delay={80 + sectionIdx * 40}>
              <MenuSection
                title={section.title}
                items={section.items}
                sectionIdx={sectionIdx}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}