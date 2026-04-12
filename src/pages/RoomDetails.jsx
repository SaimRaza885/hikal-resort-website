import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { PageLoader } from "../components/PageLoader";

import { useRoom, useRooms } from "../hooks/useRooms";
import { useSeo } from "../hooks/useSeo";

import RoomGallery from "../components/RoomGallery";
import RoomGalleryFullscreen from "../components/RoomGalleryFullscreen";
import RoomQuickInfo from "../components/RoomQuickInfo";
import DetailBlock from "../components/DetailBlock";
import RoomAmenities from "../components/RoomAmenities";
import RoomCapacity from "../components/RoomCapacity";
import RoomIncluded from "../components/RoomIncluded";
import RoomRules from "../components/RoomRules";
import RoomLocation from "../components/RoomLocation";
import SimilarRooms from "../components/SimilarRooms";
import RoomFaq from "../components/RoomFaq";
import BookingSidebar from "../components/BookingSidebar";
import RoomNotFound from "../components/RoomNotFound";
import { WHATSAPP_NUMBER } from "../data/content";



/* ===============================
   BUILD GALLERY
================================ */
function buildGallery(room) {
  const labels = ["Bedroom", "View", "Seating Area", "Bathroom", "Balcony"];

  return (room?.images || []).map((src, i) => ({
    id: `${room.id}-img-${i}`,
    src,
    category: labels[i] ?? `Photo ${i + 1}`,
  }));
}

/* ===============================
   PAGE
================================ */
export default function RoomDetailsPage({ params }) {
  const slug = params?.slug || "";

  const { data: room, isLoading } = useRoom(slug);
  const { data: allRooms, isLoading: roomsLoading } = useRooms();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  /* ===============================
     SEO
  ================================ */
  useSeo({
    title: room?.title ?? "Room Details",
    description:
      room?.description ?? "Explore rooms at Hikal Guest House",
  });

  /* ===============================
     DERIVED DATA (NO HOOK ISSUES)
  ================================ */

  const gallery = useMemo(() => buildGallery(room), [room]);

  const similarRooms = useMemo(() => {
    if (!allRooms || !room) return [];
    return allRooms.filter((r) => r.id !== room.id).slice(0, 3);
  }, [allRooms, room]);

  const quickInfo = useMemo(() => {
    if (!room) return [];
    return [
      `Sleeps ${room.capacity} guests`,
      room.bedType,
      room.size,
    ];
  }, [room]);

  /* ===============================
     LOADING STATE
  ================================ */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom pt-36">
          <PageLoader label="Loading room details..." />
        </div>
      </div>
    );
  }

  /* ===============================
     NOT FOUND
  ================================ */
  if (!room) return <RoomNotFound />;

  /* ===============================
     SAFE FALLBACKS
  ================================ */
  const description = `${room.description || ""} ${room.overview || ""}`.trim();

  const amenities = room.amenities || {};
  const capacity = {
    maxGuests: room.capacity,
    beds: [room.bedType],
  };

  const included = room.included || [];
  const rules = room.rules || [];
  const location = room.location || [];

  const faq = [
    {
      id: "faq-1",
      q: "Is breakfast included?",
      a: "Breakfast is available depending on your booking plan.",
    },
    {
      id: "faq-2",
      q: "Is parking available?",
      a: "Yes, free parking is available for all guests.",
    },
  ];

  /* ===============================
     UI
  ================================ */

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container-custom pb-12 pt-32 md:pt-36">

        {/* BACK */}
        <Link
          href="/rooms"
          className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:text-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all rooms
        </Link>

        <div className="space-y-8">

          {/* GALLERY */}
          <RoomGallery
            gallery={gallery}
            activeIndex={activeImageIndex}
            onSelect={setActiveImageIndex}
            onFullscreen={() => setFullscreenOpen(true)}
            roomTitle={room.title}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* LEFT CONTENT */}
            <div className="space-y-8 lg:col-span-2">

              <RoomQuickInfo
                title={room.title}
                quickInfo={quickInfo}
              />

              <DetailBlock title="Room Description">
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </DetailBlock>

              <RoomAmenities amenities={amenities} />

              <RoomCapacity
                maxGuests={capacity.maxGuests}
                beds={capacity.beds}
              />

              <RoomIncluded included={included} />

              <RoomRules rules={rules} />

              <RoomLocation location={location} />

              <SimilarRooms
                rooms={similarRooms}
                isLoading={roomsLoading}
              />

              <RoomFaq faq={faq} />
            </div>

            {/* SIDEBAR */}
            <BookingSidebar
              room={room}
              maxGuests={capacity.maxGuests}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          </div>
        </div>
      </div>

      {/* FULLSCREEN */}
      {fullscreenOpen && (
        <RoomGalleryFullscreen
          image={gallery[activeImageIndex]}
          onClose={() => setFullscreenOpen(false)}
        />
      )}

   
    </div>
  );
}