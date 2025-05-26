import React, { useState } from "react";
import ServiceModal, { ServiceDetails } from "./ServiceModal";
export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(
    null
  );
  const services = [
    {
      id: 1,
      name: "Догляд за шкірою",
      shortDescription:
        "Transform your look with our expert hair styling services.",
      image:
        "./images/servise/4.jpg",
      images: [
        "./images/servise/1.jpg",
        "./images/servise/1_1.jpg",
      ],
      description:
        "Our skilled stylists offer a range of hair services including cutting, coloring, highlighting, and styling. We use premium products to ensure your hair looks and feels its best. Whether you're looking for a complete transformation or a subtle change, our team will work with you to achieve the perfect look that complements your features and lifestyle.",
      duration: "1-3 hours",
      price: "$80-$250",
    },
    {
      id: 2,
      name: "Facial Treatments",
      shortDescription:
        "Revitalize your skin with our specialized facial treatments.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      images: [
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
      description:
        "Our facial treatments are designed to address specific skin concerns and enhance your natural beauty. From deep cleansing and exfoliation to hydration and anti-aging, our estheticians customize each facial to meet your unique needs. We use high-quality, natural products that nourish your skin and leave you with a radiant glow.",
      duration: "60-90 minutes",
      price: "$90-$150",
    },
    {
      id: 3,
      name: "Збільшення губ",
      shortDescription:
        "Complete your look with our professional nail care services.",
      image:
        "./images/servise/5.jpg",
      images: [
        "./images/servise/5.jpg",
        "./images/servise/2.jpg",
      ],
      description:
        "Our nail care services include manicures, pedicures, gel polish, nail extensions, and nail art. Our technicians are skilled in the latest techniques and trends, ensuring your nails look flawless. We prioritize hygiene and use high-quality products for long-lasting results. Relax in our comfortable chairs while we pamper your hands and feet.",
      duration: "30-90 minutes",
      price: "$35-$120",
    },
    {
      id: 4,
      name: "Ботокс",
      shortDescription:
        "Indulge in our luxurious body treatments for ultimate relaxation.",
      image:
        "./images/servise/3.jpg",
      images: [
        "./images/servise/3.jpg",
        "./images/servise/3_3.jpg",
      ],
      description:
        "Our body treatments include massages, scrubs, wraps, and waxing services. Each treatment is designed to relax, rejuvenate, and restore your body. Our therapists are trained to address tension, improve circulation, and promote overall wellness. Experience the therapeutic benefits of our carefully selected oils and products that nourish your skin and soothe your senses.",
      duration: "45-120 minutes",
      price: "$70-$200",
    },
  ];
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наші <span className="text-amber-500">Послуги</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Відчуйте найкращі косметичні процедури з нашою командою експертів.
            Ми пропонуємо широкий спектр послуг, які допоможуть вам виглядати та
            почуватися якнайкраще.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background border border-amber-500/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  {service.name}
                </h3>
                <p className="text-foreground/80 mb-4">
                  {service.shortDescription}
                </p>
                <button
                  onClick={() => setSelectedService(service as ServiceDetails)}
                  className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
                >
                  Детальніше
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
