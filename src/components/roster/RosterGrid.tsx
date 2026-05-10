import { roster } from "../../data/roster";
import { CharacterCard } from "./CharacterCard";

export function RosterGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {roster.map((character) => (
        <CharacterCard
          key={character.name}
          name={character.name}
          className={character.className}
          role={character.role}
          level={character.level}
          status={character.status}
          image={character.image}
        />
      ))}
    </div>
  );
}
