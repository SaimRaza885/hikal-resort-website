import { useState, useEffect, useCallback } from "react";
import { images } from "../asserts/data";


export function TrustBanner() {
  return (
    <section className="hidden md:block py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted by Guests on Major Travel Platforms
        </h2>
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <img
            src={images.book_main_img}
            alt="Hikal Guest House on Booking.com"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}