import Image from "next/image";
import project1 from "@/assets/download.jpg";
import project2 from "@/assets/download1.jpg";
import project3 from "@/assets/download2.jpg";
import project4 from "@/assets/download3.jpg";
import project5 from "@/assets/download4.jpg";
import project6 from "@/assets/download5.jpg";
import project7 from "@/assets/download6.jpg";
import project8 from "@/assets/download7.jpg";
import project9 from "@/assets/download8.jpg";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const projects = [project1, project2, project3, project4, project5, project6, project7, project8, project9]; 

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title=" Iconic Projects" color="text-black" />

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
          Take a glimpse at some of our most remarkable projects, where design meets innovation. 
          Each project reflects our commitment to quality, precision, and modern aesthetics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <div className="overflow-hidden">
                <Image
                  src={img}
                  alt={`Project ${idx + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
