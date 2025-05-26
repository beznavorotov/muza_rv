import React from "react";

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle: string;
}

export default function SectionHeader({
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {title} <span className="text-amber-500">{highlight}</span>
      </h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
