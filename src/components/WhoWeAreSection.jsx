import { images } from "../asserts/data";
import ContactInfoList from "./ContactInfoList";
import SocialLinks from "./SocialLinks";

export default function WhoWeAreSection({
  image = images.gallary_7,
  imageAlt = "Hikal Guest House - Nagar Valley",
  heading = "Welcome to Hikal Guest House",
  paragraphs = [
    "Nestled in the heart of Nagar Valley, Hikal Guest House offers a peaceful retreat surrounded by the majestic peaks of Rakaposhi and Ultar Sar.",
    "We are a family-run guest house dedicated to providing warm hospitality, clean rooms, and an unforgettable mountain experience for travelers from around the world.",
    "Whether you're here for adventure, relaxation, or cultural exploration, our goal is to make you feel at home in the mountains of Pakistan."
  ],
  highlights = [
    "Family-owned hospitality",
    "Mountain & valley views",
    "Clean and comfortable rooms",
    "Local organic food experience",
  ],
  contact,
  socials = [],
  className = "",
}) {
  return (
    <section className={`bg-white py-20 lg:py-28 ${className}`}>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE SECTION */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[520px] overflow-hidden rounded-3xl shadow-xl group">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* floating badge */}
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium text-gray-800 shadow">
            📍 Nagar Valley, Pakistan
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex flex-col">

          {/* TAG */}
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            About Our Guest House
          </span>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent leading-tight">
            {heading}
          </h2>

          {/* LINE */}
          <div className="w-20 h-1 bg-accent/60 rounded-full mt-5 mb-6" />

          {/* PARAGRAPHS */}
          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* HIGHLIGHTS */}
          {highlights?.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="text-green-500">✔</span>
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* CONTACT */}
          {contact && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <ContactInfoList {...contact} />
            </div>
          )}

          {/* SOCIALS */}
          {socials?.length > 0 && (
            <div className="mt-6">
              <SocialLinks links={socials} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}