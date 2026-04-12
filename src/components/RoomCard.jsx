import { Link } from "wouter";
import {
  Users,
  Maximize2,
  BedDouble,
  Tag,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "923001234567";

export default function RoomCard({ room }) {
  const discount =
    room?.originalPrice > room?.price
      ? Math.round(
          ((room.originalPrice - room.price) / room.originalPrice) * 100
        )
      : 0;

  const whatsappMsg = `Hi, I want to book the *${room?.title}*. Price: PKR ${room?.price?.toLocaleString()}/night. Please confirm availability.`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={room?.images?.[0]}
          alt={room?.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* discount badge */}
        {discount > 0 && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
            <Tag className="h-3 w-3" />
            {discount}% OFF
          </span>
        )}

        {/* quick view icon */}
        <Link
          href={`/rooms/${room?.slug}`}
          className="absolute bottom-3 right-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:scale-110 transition-transform">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </Link>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-5">

        {/* TITLE */}
        <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {room?.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {room?.description}
        </p>

        {/* INFO CHIPS */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3 text-accent" />
            Sleeps {room?.capacity}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
            <Maximize2 className="h-3 w-3 text-accent" />
            {room?.size}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
            <BedDouble className="h-3 w-3 text-accent" />
            {room?.bedType}
          </span>
        </div>

        {/* FEATURES */}
        {room?.features?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {room.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
              >
                {f}
              </span>
            ))}

            {room.features.length > 3 && (
              <span className="rounded-full bg-muted/30 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                +{room.features.length - 3}
              </span>
            )}
          </div>
        )}

        {/* PUSH BOTTOM */}
        <div className="flex-1" />

        {/* ================= PRICE ================= */}
        <div className="mt-4 border-t border-border/40 pt-3 flex items-end justify-between">
          <div>
            <p className="text-xl font-bold text-foreground">
              PKR {room?.price?.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">per night</p>

            {room?.originalPrice > room?.price && (
              <p className="text-xs text-muted-foreground line-through">
                PKR {room.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* ================= CTA (FIXED + CLEAN) ================= */}
        <div className="mt-4 grid grid-cols-2 gap-2">

          {/* VIEW ROOM */}
          <Link
            href={`/rooms/${room?.slug}`}
            className="group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full" />

            <span className="relative flex items-center gap-1">
              View Room
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
          </Link>

          {/* WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

        </div>

      </div>
    </article>
  );
}