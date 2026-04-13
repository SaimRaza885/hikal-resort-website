
import { Reveal }          from "../components/Reveal";
import { useSeo }          from "../hooks/useSeo";
import { useToast }        from "../hooks/useToast";
import Banner              from "../components/Banner";
import ContactInfoPanel    from "../components/ContactInfoPanel";
import ContactForm         from "../components/ContactForm";
import { images } from "../asserts/data";

export default function ContactPage() {
  useSeo({
    title: "Contact",
    description:
      "Contact Hikal Guest House for room inquiries, group plans, and travel support in Hunza Valley.",
  });

  const { toast } = useToast();

  function handleSuccess() {
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
  }

  function handleError(error) {
    toast({
      title: "Error",
      description: error?.message || "Failed to send message. Please try again.",
      variant: "destructive",
    });
  }

  return (
    <div id="contact" className="min-h-screen bg-background">
    

      <Banner
        image={images.contact_Img}
        title="Contact Us"
        subtitle="Contact Hikal Guest House for inquiries and reservations."
        rating={5}
        ratingPlatform="Booking.com"
        ratingText="Rated Exceptional"
      />

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT — info panel */}
          <Reveal delay={100}>
            <ContactInfoPanel />
          </Reveal>

          {/* RIGHT — contact form */}
          <Reveal delay={140}>
            <ContactForm
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </Reveal>

        </div>
      </div>

    </div>
  );
}