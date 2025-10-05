import Image, { StaticImageData } from "next/image";
import deliveryImg from "@/assets/delivery.jpg";
import productImg from "@/assets/product.png";
import SectionHeading from "./SectionHeading";

type InfoCard = {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
};

const infoCards: InfoCard[] = [
    {
        id: 1,
        title: "Delivery Information",
        description:
            "Fast and reliable delivery to your doorstep with real-time tracking updates.",
        image: deliveryImg,
    },
    {
        id: 2,
        title: "Product Information",
        description:
            "Detailed product specifications, features, and customer reviews for better choices.",
        image: productImg,
    },
];

export default function Information() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading title="Get Information"  color="text-black"/>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
                    Whether you’re looking for details about delivery timelines or need
                    product specifications, we’ve got you covered. Choose the option that
                    suits your query.
                </p>
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {infoCards.map((card) => (
                        <div
                            key={card.id}
                            className="flex items-center bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-1/3 flex justify-center p-6">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>

                            <div className="w-2/3 p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
