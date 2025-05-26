import React, { useState } from "react";
import { galleryItems, filters } from "../data/galleryData";
import GalleryItem from "./GalleryItem";
import FilterButtons from "./FilterButtons";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredGallery =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Галерея
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Перегляньте нашу галерею, щоб побачити приклади нашої роботи та чудові результати, які подобаються нашим клієнтам.
          </p>
        </div>

        {/* Фільтри */}
        <FilterButtons
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Галерея */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
