import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  imageSrc: string | StaticImageData;
  title: string;
  slug: string;
  description: string;
};

export default function ServicesInfoCard({ imageSrc, title, slug, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <Image 
          src={imageSrc} 
          alt={title} 
          className="w-full h-40 object-cover" 
        />
        {/* Title block overlapping */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow w-80 sm:w-60 text-center">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-6 pt-10 flex flex-col flex-grow">
        <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
          {description.slice(0, 110)}...
        </p>
       <Link
          href={`/services/${slug}`}
          className="bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition w-28 text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
