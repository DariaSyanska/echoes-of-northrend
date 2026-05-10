import { MapZoneCard } from "./MapZoneCard";

const zones = [
  {
    title: "Icecrown",
    description:
      "The frozen domain of the Lich King and the location of Icecrown Citadel.",
  },
  {
    title: "Storm Peaks",
    description: "Ancient titan structures hidden among icy mountain ranges.",
  },
  {
    title: "Dragonblight",
    description: "A sacred graveyard of dragons and the heart of Northrend.",
  },
  {
    title: "Howling Fjord",
    description:
      "Massive cliffs, vrykul villages, and the first Alliance assaults.",
  },
];

export function NorthrendMap() {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-2">
      {zones.map((zone) => (
        <MapZoneCard
          key={zone.title}
          title={zone.title}
          description={zone.description}
        />
      ))}
    </section>
  );
}
