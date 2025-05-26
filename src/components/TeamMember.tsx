import React from "react";

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
  };
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-lg aspect-[3/4]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-amber-400">{member.role}</p>
      </div>
    </div>
  );
}
