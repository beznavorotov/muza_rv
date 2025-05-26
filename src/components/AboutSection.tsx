import React from "react";
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Про <span className="text-amber-500">MUZA</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
                  alt="Salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40">
                <img
src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Beauty products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-40">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Salon treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-64">
                <img
src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
                  alt="Salon equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Your Beauty Journey Starts Here
            </h3>
            <p className="text-foreground/80">
              Founded in 2010, MUZA Beauty Salon has been a premier destination
              for beauty and wellness in the heart of the city. Our mission is
              to provide exceptional beauty services that enhance your natural
              features and boost your confidence.
            </p>
            <p className="text-foreground/80">
              At MUZA, we believe that beauty is an art form. Our team of highly
              trained professionals is passionate about their craft and
              committed to delivering personalized services that meet your
              unique needs. We use only the finest products and stay updated
              with the latest trends and techniques in the beauty industry.
            </p>
            <p className="text-foreground/80">
              Our salon offers a luxurious and relaxing environment where you
              can escape the hustle and bustle of daily life. From the moment
              you step through our doors, you'll be greeted with warm
              hospitality and attentive service that makes you feel special.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-md transition-colors"
              >
                Visit Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
