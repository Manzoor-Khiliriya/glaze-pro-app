import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (<section
    id="about"
    className="min-h-screen flex items-center bg-gray-50 px-6 py-16"
  > <div className="max-w-5xl mx-auto text-center"> <SectionHeading title="About Us" color="text-black"/> <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        We are a passionate team dedicated to delivering high-quality glass
        solutions that combine innovation, safety, and aesthetics. With years
        of experience in architectural and decorative glass, we bring designs
        to life that enhance both residential and commercial spaces. </p> <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Our mission is to provide exceptional craftsmanship and reliable
        service, ensuring every project exceeds client expectations. From
        architectural glass to mirrors and safety glass, we offer a wide range
        of solutions tailored to your unique needs. </p>

      ```
      <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800">Our Vision</h3>
          <p className="mt-2 text-gray-600">
            To become a trusted leader in glass solutions, setting benchmarks
            for quality, safety, and innovation.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800">Our Mission</h3>
          <p className="mt-2 text-gray-600">
            Deliver excellence through creativity and advanced technology,
            while maintaining customer satisfaction at the core.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800">Our Values</h3>
          <p className="mt-2 text-gray-600">
            Integrity, innovation, and commitment drive us to consistently
            achieve outstanding results in every project.
          </p>
        </div>
      </div>
    </div>
  </section>

  );
}
