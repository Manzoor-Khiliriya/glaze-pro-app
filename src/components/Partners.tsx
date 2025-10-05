import React from "react";
import Image from "next/image";
import partner1 from "@/assets/logo1.jpg";
import partner2 from "@/assets/logo2.jpg";
import partner3 from "@/assets/logo3.jpg";
import partner4 from "@/assets/logo4.jpg";
import partner5 from "@/assets/logo5.jpg";
import partner6 from "@/assets/logo6.jpg";
import partner7 from "@/assets/logo7.jpg";
import SectionHeading from "./SectionHeading";


export default function Partners() {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

  return (
    <section className="bg-sky-500 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading title="Brands We Are Working With" />
        <p className="text-blue-100 text-lg md:text-xl mb-10">
          We are proud to collaborate with some of the leading brands in the industry.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center justify-items-center">
          {partners.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <Image
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="h-5 md:h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
