export type PlayerPosition = "GK" | "DF" | "MF" | "FW";

export type PlayerStatus = "confirmed" | "pre_list" | "not_announced";

export type Player = {
  id: string;
  name: string;

  team: string; // br ar fr

  position: PlayerPosition;

  age: number | null;

  status: PlayerStatus;
};

export const PLAYERS: Player[] = [
  // Brasil

  {
    id: "vini_jr",
    name: "Vinícius Jr.",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "endrick",
    name: "Endrick",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "raphinha",
    name: "Raphinha",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "alisson",
    name: "Alisson",
    team: "br",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  // França

  {
    id: "mbappe",
    name: "Kylian Mbappé",
    team: "fr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "dembele",
    name: "Ousmane Dembélé",
    team: "fr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "maignan",
    name: "Mike Maignan",
    team: "fr",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  // Argentina

  {
    id: "messi",
    name: "Lionel Messi",
    team: "ar",
    position: "MF",
    age: null,
    status: "pre_list",
  },

  {
    id: "lautaro",
    name: "Lautaro Martínez",
    team: "ar",
    position: "FW",
    age: null,
    status: "pre_list",
  },
];
