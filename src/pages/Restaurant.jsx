import { useSeo } from "../hooks/useSeo";
import Banner from "../components/Banner";
import MenuGrid from "../components/MenuGrid";
import FeaturedDishCard from "../components/FeaturedDishCard";
import { Reveal } from "../components/Reveal";
import { images } from "../asserts/data";
import FEATURED_DISHES from "../data/content";


/* =========================================================
   Real local Nagar / Nagar / Pakistani featured dishes
========================================================= */


export default function Restaurant() {
  useSeo({
    title: "Restaurant",
    description:
      "Enjoy authentic Pakistani and Nagar cuisine at the Hikal Guest House Restaurant — fresh ingredients, traditional recipes, and a warm dining atmosphere.",
  });

  return (
    <div id="restaurant" className="min-h-screen bg-background">

      {/* Banner */}
      <Banner
        image={images.gallary_pic_1}
        title="Restaurant"
        subtitle="Authentic Nagar flavours, warm hospitality"
      />

      {/* About the Restaurant */}
      <section className="container mx-auto px-4 lg:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={images.about_me_image}
                alt="Hikal Guest House Restaurant"
                className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Dine with Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our in-house restaurant at Hikal Guest House offers a warm and
                inviting dining experience surrounded by the natural beauty of
                Nagar Valley. We serve freshly prepared Pakistani and Nagar
                cuisine using locally sourced ingredients and time-honoured
                recipes passed down through generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're starting your morning with a hearty Nagar
                breakfast, enjoying a relaxed lunch, or gathering with family
                over dinner — our kitchen is open to serve you with care and
                flavour.
              </p>

              {/* stats */}
              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <p className="text-2xl font-bold text-accent">7 AM</p>
                  <p className="text-sm text-muted-foreground">Opens Daily</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">11 PM</p>
                  <p className="text-sm text-muted-foreground">Last Order</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">Dine-in</p>
                  <p className="text-sm text-muted-foreground">& Room Service</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-muted/30 py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Dishes
              </h2>
              <p className="text-muted-foreground mb-10">
                Handpicked favourites from our kitchen
              </p>
            </Reveal>

            {/* Mobile: horizontal scroll */}
            <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {FEATURED_DISHES.map((dish, i) => (
                <Reveal key={i} delay={i * 60}>
                  <FeaturedDishCard
                    title={dish.title}
                    desc={dish.desc}
                    price={dish.price}
                    badge={dish.badge}
                    image={dish.image}
                    className="snap-start shrink-0 w-64"
                  />
                </Reveal>
              ))}
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_DISHES.map((dish, i) => (
                <Reveal key={dish.id} delay={i * 60}>
                  <FeaturedDishCard
                    title={dish.title}
                    desc={dish.desc}
                    price={dish.price}
                    badge={dish.badge}
                    image={dish.image}
                  />
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Full Menu */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <MenuGrid />
        </div>
      </div>

    </div>
  );
}