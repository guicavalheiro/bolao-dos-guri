export type Group = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"I"|"J"|"K"|"L";

export interface Team {
  name: string;
  code: string; // flagcdn code
  group: Group;
}

export const TEAMS: Record<string, Team> = {
  "Mexico":           { name: "México", code: "mx", group: "A" },
  "South Africa":     { name: "África do Sul", code: "za", group: "A" },
  "Korea Republic":   { name: "Coreia do Sul", code: "kr", group: "A" },
  "Czechia":          { name: "Tchéquia", code: "cz", group: "A" },
  "Canada":           { name: "Canadá", code: "ca", group: "B" },
  "Bosnia-Herzegovina":{ name: "Bósnia-Herzegovina", code: "ba", group: "B" },
  "Qatar":            { name: "Catar", code: "qa", group: "B" },
  "Switzerland":      { name: "Suíça", code: "ch", group: "B" },
  "Brazil":           { name: "Brasil", code: "br", group: "C" },
  "Morocco":          { name: "Marrocos", code: "ma", group: "C" },
  "Haiti":            { name: "Haiti", code: "ht", group: "C" },
  "Scotland":         { name: "Escócia", code: "gb-sct", group: "C" },
  "United States":    { name: "Estados Unidos", code: "us", group: "D" },
  "Paraguay":         { name: "Paraguai", code: "py", group: "D" },
  "Australia":        { name: "Austrália", code: "au", group: "D" },
  "Türkiye":          { name: "Turquia", code: "tr", group: "D" },
  "Germany":          { name: "Alemanha", code: "de", group: "E" },
  "Curaçao":          { name: "Curaçao", code: "cw", group: "E" },
  "Côte d'Ivoire":    { name: "Costa do Marfim", code: "ci", group: "E" },
  "Ecuador":          { name: "Equador", code: "ec", group: "E" },
  "Netherlands":      { name: "Holanda", code: "nl", group: "F" },
  "Japan":            { name: "Japão", code: "jp", group: "F" },
  "Sweden":           { name: "Suécia", code: "se", group: "F" },
  "Tunisia":          { name: "Tunísia", code: "tn", group: "F" },
  "Belgium":          { name: "Bélgica", code: "be", group: "G" },
  "Egypt":            { name: "Egito", code: "eg", group: "G" },
  "IR Iran":          { name: "Irã", code: "ir", group: "G" },
  "New Zealand":      { name: "Nova Zelândia", code: "nz", group: "G" },
  "Spain":            { name: "Espanha", code: "es", group: "H" },
  "Cape Verde":       { name: "Cabo Verde", code: "cv", group: "H" },
  "Saudi Arabia":     { name: "Arábia Saudita", code: "sa", group: "H" },
  "Uruguay":          { name: "Uruguai", code: "uy", group: "H" },
  "France":           { name: "França", code: "fr", group: "I" },
  "Senegal":          { name: "Senegal", code: "sn", group: "I" },
  "Iraq":             { name: "Iraque", code: "iq", group: "I" },
  "Norway":           { name: "Noruega", code: "no", group: "I" },
  "Argentina":        { name: "Argentina", code: "ar", group: "J" },
  "Algeria":          { name: "Argélia", code: "dz", group: "J" },
  "Austria":          { name: "Áustria", code: "at", group: "J" },
  "Jordan":           { name: "Jordânia", code: "jo", group: "J" },
  "Portugal":         { name: "Portugal", code: "pt", group: "K" },
  "Congo DR":         { name: "Congo DR", code: "cd", group: "K" },
  "Uzbekistan":       { name: "Uzbequistão", code: "uz", group: "K" },
  "Colombia":         { name: "Colômbia", code: "co", group: "K" },
  "England":          { name: "Inglaterra", code: "gb-eng", group: "L" },
  "Croatia":          { name: "Croácia", code: "hr", group: "L" },
  "Ghana":            { name: "Gana", code: "gh", group: "L" },
  "Panama":           { name: "Panamá", code: "pa", group: "L" },
};

export type Stage =
  | "group"
  | "r32"   // 16-avos
  | "r16"   // oitavas
  | "qf"    // quartas
  | "sf"    // semi
  | "third" // disputa de 3º
  | "final";

export const STAGES: { id: Stage; label: string }[] = [
  { id: "group", label: "Fase de Grupos" },
  { id: "r32",   label: "16-avos de Final" },
  { id: "r16",   label: "Oitavas de Final" },
  { id: "qf",    label: "Quartas de Final" },
  { id: "sf",    label: "Semifinais" },
  { id: "third", label: "Disputa de 3º Lugar" },
  { id: "final", label: "Final" },
];

export interface Match {
  id: string;
  stage: Stage;
  matchday: number;
  home: string;
  away: string;
  dateBR: string; // ISO Brasília
  venue: string;
}

// Helper to build a Brasília ISO from "YYYY-MM-DD HH:MM" (already Brasília time from user input)
const m = (id: string, matchday: number, date: string, brTime: string, home: string, away: string, venue: string): Match => ({
  id, stage: "group", matchday,
  home, away, venue,
  dateBR: `${date}T${brTime}:00-03:00`,
});

export const MATCHES: Match[] = [
  // MD1
  m("G1-01", 1, "2026-06-11", "16:00", "Mexico", "South Africa", "Estadio Banorte"),
  m("G1-02", 1, "2026-06-12", "16:00", "Canada", "Bosnia-Herzegovina", "BMO Field"),
  m("G1-03", 1, "2026-06-11", "23:00", "Korea Republic", "Czechia", "Estadio Akron"),
  m("G1-04", 1, "2026-06-13", "16:00", "Qatar", "Switzerland", "Levi's Stadium"),
  m("G1-05", 1, "2026-06-13", "19:00", "Brazil", "Morocco", "MetLife Stadium"),
  m("G1-06", 1, "2026-06-12", "22:00", "United States", "Paraguay", "SoFi Stadium"),
  m("G1-07", 1, "2026-06-14", "14:00", "Germany", "Curaçao", "Reliant Stadium"),
  m("G1-08", 1, "2026-06-14", "17:00", "Netherlands", "Japan", "AT&T Stadium"),
  m("G1-09", 1, "2026-06-14", "20:00", "Côte d'Ivoire", "Ecuador", "Lincoln Financial Field"),
  m("G1-10", 1, "2026-06-13", "22:00", "Haiti", "Scotland", "Gillette Stadium"),
  m("G1-11", 1, "2026-06-14", "01:00", "Australia", "Türkiye", "BC Place Stadium"),
  m("G1-12", 1, "2026-06-15", "16:00", "Belgium", "Egypt", "Lumen Field"),
  m("G1-13", 1, "2026-06-15", "13:00", "Spain", "Cape Verde", "Mercedes-Benz Stadium"),
  m("G1-14", 1, "2026-06-15", "19:00", "Saudi Arabia", "Uruguay", "Hard Rock Stadium"),
  m("G1-15", 1, "2026-06-14", "23:00", "Sweden", "Tunisia", "Estadio BBVA Bancomer"),
  m("G1-16", 1, "2026-06-16", "16:00", "France", "Senegal", "MetLife Stadium"),
  m("G1-17", 1, "2026-06-15", "22:00", "IR Iran", "New Zealand", "SoFi Stadium"),
  m("G1-18", 1, "2026-06-16", "19:00", "Iraq", "Norway", "Gillette Stadium"),
  m("G1-19", 1, "2026-06-17", "14:00", "Portugal", "Congo DR", "Reliant Stadium"),
  m("G1-20", 1, "2026-06-17", "17:00", "England", "Croatia", "AT&T Stadium"),
  m("G1-21", 1, "2026-06-17", "20:00", "Ghana", "Panama", "BMO Field"),
  m("G1-22", 1, "2026-06-16", "22:00", "Argentina", "Algeria", "GEHA Field at Arrowhead Stadium"),
  m("G1-23", 1, "2026-06-16", "01:00", "Austria", "Jordan", "Levi's Stadium"),
  m("G1-24", 1, "2026-06-17", "23:00", "Uzbekistan", "Colombia", "Estadio Banorte"),
  // MD2
  m("G2-01", 2, "2026-06-18", "16:00", "Switzerland", "Bosnia-Herzegovina", "SoFi Stadium"),
  m("G2-02", 2, "2026-06-18", "13:00", "Czechia", "South Africa", "Mercedes-Benz Stadium"),
  m("G2-03", 2, "2026-06-18", "19:00", "Canada", "Qatar", "BC Place Stadium"),
  m("G2-04", 2, "2026-06-19", "16:00", "United States", "Australia", "Lumen Field"),
  m("G2-05", 2, "2026-06-19", "19:00", "Scotland", "Morocco", "Gillette Stadium"),
  m("G2-06", 2, "2026-06-18", "22:00", "Mexico", "Korea Republic", "Estadio Akron"),
  m("G2-07", 2, "2026-06-20", "14:00", "Netherlands", "Sweden", "Reliant Stadium"),
  m("G2-08", 2, "2026-06-20", "17:00", "Germany", "Côte d'Ivoire", "BMO Field"),
  m("G2-09", 2, "2026-06-20", "00:00", "Türkiye", "Paraguay", "Levi's Stadium"),
  m("G2-10", 2, "2026-06-19", "21:30", "Brazil", "Haiti", "Lincoln Financial Field"),
  m("G2-11", 2, "2026-06-21", "13:00", "Spain", "Saudi Arabia", "Mercedes-Benz Stadium"),
  m("G2-12", 2, "2026-06-21", "16:00", "Belgium", "IR Iran", "SoFi Stadium"),
  m("G2-13", 2, "2026-06-21", "19:00", "Uruguay", "Cape Verde", "Hard Rock Stadium"),
  m("G2-14", 2, "2026-06-20", "21:00", "Ecuador", "Curaçao", "GEHA Field at Arrowhead Stadium"),
  m("G2-15", 2, "2026-06-21", "01:00", "Tunisia", "Japan", "Estadio BBVA Bancomer"),
  m("G2-16", 2, "2026-06-22", "14:00", "Argentina", "Austria", "AT&T Stadium"),
  m("G2-17", 2, "2026-06-22", "18:00", "France", "Iraq", "Lincoln Financial Field"),
  m("G2-18", 2, "2026-06-21", "22:00", "New Zealand", "Egypt", "BC Place Stadium"),
  m("G2-19", 2, "2026-06-23", "14:00", "Portugal", "Uzbekistan", "Reliant Stadium"),
  m("G2-20", 2, "2026-06-23", "17:00", "England", "Ghana", "Gillette Stadium"),
  m("G2-21", 2, "2026-06-23", "20:00", "Panama", "Croatia", "BMO Field"),
  m("G2-22", 2, "2026-06-22", "21:00", "Norway", "Senegal", "MetLife Stadium"),
  m("G2-23", 2, "2026-06-23", "00:00", "Jordan", "Algeria", "Levi's Stadium"),
  m("G2-24", 2, "2026-06-23", "23:00", "Colombia", "Congo DR", "Estadio Akron"),
  // MD3
  m("G3-01", 3, "2026-06-24", "16:00", "Switzerland", "Canada", "BC Place Stadium"),
  m("G3-02", 3, "2026-06-24", "16:00", "Bosnia-Herzegovina", "Qatar", "Lumen Field"),
  m("G3-03", 3, "2026-06-24", "19:00", "Scotland", "Brazil", "Hard Rock Stadium"),
  m("G3-04", 3, "2026-06-24", "19:00", "Morocco", "Haiti", "Mercedes-Benz Stadium"),
  m("G3-05", 3, "2026-06-25", "17:00", "Curaçao", "Côte d'Ivoire", "Lincoln Financial Field"),
  m("G3-06", 3, "2026-06-25", "17:00", "Ecuador", "Germany", "MetLife Stadium"),
  m("G3-07", 3, "2026-06-25", "20:00", "Japan", "Sweden", "AT&T Stadium"),
  m("G3-08", 3, "2026-06-25", "20:00", "Tunisia", "Netherlands", "GEHA Field at Arrowhead Stadium"),
  m("G3-09", 3, "2026-06-24", "22:00", "South Africa", "Korea Republic", "Estadio BBVA Bancomer"),
  m("G3-10", 3, "2026-06-24", "22:00", "Czechia", "Mexico", "Estadio Banorte"),
  m("G3-11", 3, "2026-06-26", "16:00", "Norway", "France", "Gillette Stadium"),
  m("G3-12", 3, "2026-06-26", "16:00", "Senegal", "Iraq", "BMO Field"),
  m("G3-13", 3, "2026-06-25", "23:00", "Paraguay", "Australia", "Levi's Stadium"),
  m("G3-14", 3, "2026-06-25", "23:00", "Türkiye", "United States", "SoFi Stadium"),
  m("G3-15", 3, "2026-06-27", "18:00", "Panama", "England", "MetLife Stadium"),
  m("G3-16", 3, "2026-06-27", "18:00", "Croatia", "Ghana", "Lincoln Financial Field"),
  m("G3-17", 3, "2026-06-26", "21:00", "Uruguay", "Spain", "Estadio Akron"),
  m("G3-18", 3, "2026-06-26", "21:00", "Cape Verde", "Saudi Arabia", "Reliant Stadium"),
  m("G3-19", 3, "2026-06-27", "20:30", "Colombia", "Portugal", "Hard Rock Stadium"),
  m("G3-20", 3, "2026-06-27", "20:30", "Congo DR", "Uzbekistan", "Mercedes-Benz Stadium"),
  m("G3-21", 3, "2026-06-27", "00:00", "Egypt", "IR Iran", "Lumen Field"),
  m("G3-22", 3, "2026-06-27", "00:00", "New Zealand", "Belgium", "BC Place Stadium"),
  m("G3-23", 3, "2026-06-27", "23:00", "Jordan", "Argentina", "AT&T Stadium"),
  m("G3-24", 3, "2026-06-27", "23:00", "Algeria", "Austria", "GEHA Field at Arrowhead Stadium"),
];

export const GROUPS: Record<Group, string[]> = (() => {
  const g: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(TEAMS)) {
    (g[v.group] ||= []).push(k);
  }
  return g as Record<Group, string[]>;
})();
