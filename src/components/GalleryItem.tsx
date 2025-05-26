import React from "react";

interface GalleryItemProps {
  item: {
    id: number;
    image: string;
    category: string;
  };
}

export default function GalleryItem({ item }: GalleryItemProps) {
  return (
    <div className="overflow-hidden rounded-lg aspect-square group">
      <img
        src={item.image}
        alt={`Gallery image ${item.id}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  );
}
