export type CharacterRole = "Tank" | "Healer" | "DPS";

export type CharacterStatus = "Online" | "Offline";

export type Character = {
  name: string;
  className: string;
  role: CharacterRole;
  level: number;
  status: CharacterStatus;
};
