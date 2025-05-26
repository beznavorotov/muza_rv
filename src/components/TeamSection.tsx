import React from "react";
import { team } from "../data/teamData";
import TeamMember from "./TeamMember";
import SectionHeader from "./SectionHeader";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Заголовок секції */}
        <SectionHeader
          title="Команда"
          highlight="Team"
          subtitle="Наша команда кваліфікованих професіоналів працює над тим, щоб ви виглядали та почувалися якнайкраще."
        />

        {/* Сітка команди */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
