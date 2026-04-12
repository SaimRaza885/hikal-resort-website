import { Link } from "wouter";
import { WHATSAPP_NUMBER } from "../data/content";

export default function CtaBanner({
  heading = "Experience Nagar With Us",
  subtext = "Wake up to mountain views, enjoy peaceful surroundings, and feel genuine hospitality.",
  primaryLabel = "Explore Rooms",
  primaryHref = "/rooms",
  secondaryLabel = "Book Your Stay",
  gradientClass = "from-primary to-primary/80",
  className = "",
}) {

  /* ✅ WhatsApp Message */
  const whatsappMessage = `
Hello 👋

I would like to book my stay at your hotel.
Please share availability and room options.
`;

  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section
      className={`rounded-3xl bg-gradient-to-r ${gradientClass} px-8 py-12 text-center text-white shadow-xl ${className}`}
    >
      {/* Heading */}
      <h3 className="text-3xl font-semibold">{heading}</h3>

      {/* Subtext */}
      <p className="mt-3 text-white/85 max-w-xl mx-auto leading-relaxed">
        {subtext}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">

        {/* Explore Rooms */}
        <Link
          href={primaryHref}
          className="rounded-xl bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition-colors duration-200"
        >
          {primaryLabel}
        </Link>

        {/* Book via WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white px-6 py-3 font-medium hover:bg-white hover:text-primary transition-colors duration-200"
        >
          {secondaryLabel}
        </a>

      </div>
    </section>
  );
}