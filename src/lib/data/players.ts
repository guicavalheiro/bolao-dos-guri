export type PlayerPosition = "GK" | "DF" | "MF" | "FW";

export type PlayerStatus = "confirmed" | "pre_list" | "not_announced";

export type Player = {
  id: string;
  name: string;

  team: string; // BRA ARG FRA

  position: PlayerPosition;

  age: number | null;

  status: PlayerStatus;
};

export const PLAYERS: Player[] = [
  // Brasil

  {
    id: "vini_jr",
    name: "Vinícius Jr.",
    team: "BRA",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "endrick",
    name: "Endrick",
    team: "BRA",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "raphinha",
    name: "Raphinha",
    team: "BRA",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "alisson",
    name: "Alisson",
    team: "BRA",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  // França

  {
    id: "mbappe",
    name: "Kylian Mbappé",
    team: "FRA",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "dembele",
    name: "Ousmane Dembélé",
    team: "FRA",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "maignan",
    name: "Mike Maignan",
    team: "FRA",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  // Argentina

  {
    id: "messi",
    name: "Lionel Messi",
    team: "ARG",
    position: "MF",
    age: null,
    status: "pre_list",
  },

  {
    id: "lautaro",
    name: "Lautaro Martínez",
    team: "ARG",
    position: "FW",
    age: null,
    status: "pre_list",
  },
];
