import ServicesInfoCard from "./ServicesInfoCard";
import { StaticImageData } from "next/image";
import image1 from "@/assets/achitectural.jpg";
import image2 from "@/assets/decorative.jpg";
import image3 from "@/assets/mirrors.jpg";
import image4 from "@/assets/safety.jpg";
import SectionHeading from "./SectionHeading";

export type Service = {
  imageSrc: string | StaticImageData;
  title: string;
  slug: string;
  description: string;
  applications?: string[];
};

export const services: Service[] = [
  {
    imageSrc: image1,
    title: "Architectural Glass",
    slug: "architectural-glass",
    description:
      "Our premium architectural glass solutions combine durability, clarity, and modern design to meet the needs of residential, commercial, and industrial projects.",
    applications: [
      "Facades and curtain walls",
      "Windows and doors",
      "Skylights and partitions",
      "Balustrades and glass railings",
    ],
  },
  {
    imageSrc: image2,
    title: "Decorative Glass",
    slug: "decorative-glass",
    description:
      "Bring elegance and character to interiors with our decorative glass options, from frosted and tinted glass to etched and patterned finishes.",
    applications: [
      "Interior partitions",
      "Shower enclosures",
      "Tabletops and furniture",
      "Custom designs for branding",
    ],
  },
  {
    imageSrc: image3,
    title: "Mirrors",
    slug: "mirrors",
    description:
      "High-quality mirrors manufactured with precision, offering clear reflections, durability, and stylish finishes.",
    applications: [
      "Wall décor",
      "Wardrobes and dressing areas",
      "Bathrooms and washrooms",
      "Commercial showrooms and retail stores",
    ],
  },
  {
    imageSrc: image4,
    title: "Safety & Performance Glass",
    slug: "safety-performance-glass",
    description:
      "Engineered for strength and performance, our safety glass range ensures protection, sound reduction, UV resistance, and energy efficiency.",
  },
];

export default function Services() {
  return (

    <section className="bg-sky-500 py-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Our Premium Glass Solutions"
        />

        <p className="text-center text-blue-100 max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
          From sleek architectural designs to elegant interior solutions, our
          high-quality glass products combine style, safety, and innovation.
          Explore our offerings to find the perfect solution for your space.
        </p>

        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <ServicesInfoCard
                imageSrc={service.imageSrc}
                title={service.title}
                slug={service.slug}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
