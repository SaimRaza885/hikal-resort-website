import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/content";


export default function ContactForm({ onSuccess, className = "" }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      people: "",
      message: "",
    },
  });

  /* ✅ SEND TO WHATSAPP */
  function onSubmit(data) {

    // email optional
    const emailLine = data.email
      ? `Email: ${data.email}\n`
      : "";

    const whatsappMessage = `
New Booking Inquiry

Name: ${data.name}
${emailLine}Guests: ${data.people}

Message:
${data.message}
`;

    const whatsappLink =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappLink, "_blank");

    reset();
    onSuccess?.();
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-border/60 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition";

  return (
    <div className={`rounded-2xl border border-border/50 bg-white p-8 shadow-lg ${className}`}>
      <h3 className="mb-6 text-xl font-bold text-foreground">
        Book via WhatsApp
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Name (Required) */}
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            className={inputClass}
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email (OPTIONAL ✅) */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email (Optional)
          </label>
          <input
            type="email"
            className={inputClass}
            placeholder="email@example.com"
            {...register("email")}   
          />
        </div>

        {/* Number of People */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Number of People
          </label>
          <input
            type="number"
            min="1"
            className={inputClass}
            placeholder="How many guests?"
            {...register("people", {
              required: "Number of people is required",
            })}
          />
          {errors.people && (
            <p className="mt-1 text-xs text-red-600">
              {errors.people.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium">Message</label>
          <textarea
            className="min-h-[150px] w-full rounded-xl border border-border/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            placeholder="How can we help you?"
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 text-lg font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Send to WhatsApp"
          )}
        </button>

      </form>
    </div>
  );
}