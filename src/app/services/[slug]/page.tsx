import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/components/Services";

type Params = {
  params: { slug: string };
};

export default function ServicePage({ params }: Params) {
  const { slug } = params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={service.imageSrc}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {service.description}
            </p>

            {service.applications?.length ? (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Applications</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {service.applications.map((app, i) => (
                    <li key={i}>{app}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
