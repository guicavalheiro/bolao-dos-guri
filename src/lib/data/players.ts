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
  // ======================
  // COREIA DO SUL
  // ======================

  {
    id: "kim_seunggyu",
    name: "Kim Seunggyu",
    team: "kr",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "song_bumkeun",
    name: "Song Bumkeun",
    team: "kr",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "jo_hyeonwoo",
    name: "Jo Hyeonwoo",
    team: "kr",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "kim_moonhwan",
    name: "Kim Moonhwan",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "kim_minjae",
    name: "Kim Min-jae",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "kim_taehyeon",
    name: "Kim Taehyeon",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "park_jinseob",
    name: "Park Jinseob",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "seol_youngwoo",
    name: "Seol Youngwoo",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "jens_castrop",
    name: "Jens Castrop",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lee_kihyuk",
    name: "Lee Kihyuk",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lee_taeseok",
    name: "Lee Taeseok",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lee_hanbeom",
    name: "Lee Hanbeom",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "cho_yumin",
    name: "Cho Yumin",
    team: "kr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kim_jingyu",
    name: "Kim Jingyu",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "bae_junho",
    name: "Bae Junho",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "paik_seungho",
    name: "Paik Seungho",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "yang_hyunjun",
    name: "Yang Hyunjun",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "eom_jisung",
    name: "Eom Jisung",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lee_kangin",
    name: "Lee Kang-in",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lee_donggyeong",
    name: "Lee Donggyeong",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lee_jaesung",
    name: "Lee Jaesung",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "hwang_inbeom",
    name: "Hwang Inbeom",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "hwang_heechan",
    name: "Hwang Heechan",
    team: "kr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "son_heungmin",
    name: "Son Heung-min",
    team: "kr",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "oh_hyeongyu",
    name: "Oh Hyeongyu",
    team: "kr",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "cho_guesung",
    name: "Cho Gue-sung",
    team: "kr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // MÉXICO
  // ======================

  // ======================
  // REPÚBLICA TCHECA
  // ======================

  // ======================
  // AFRICA DO SUL
  // ======================

  // ======================
  // BÓSNIA
  // ======================

  {
    id: "nikola_vasilj",
    name: "Nikola Vasilj",
    team: "ba",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "martin_zlomislic",
    name: "Martin Zlomislic",
    team: "ba",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "osman_hadzikic",
    name: "Osman Hadzikic",
    team: "ba",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "kolasinac",
    name: "Kolasinac",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "amar_dedic",
    name: "Amar Dedic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nihad_mujakic",
    name: "Nihad Mujakic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nikola_katic",
    name: "Nikola Katic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "tarik_muharemovic",
    name: "Tarik Muharemovic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "stjepan_radeljic",
    name: "Stjepan Radeljic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "dennis_hadzikadunic",
    name: "Dennis Hadzikadunic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nidal_celik",
    name: "Nidal Celik",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "amir_hadziahmetovic",
    name: "Amir Hadziahmetovic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ivan_sunjic",
    name: "Ivan Sunjic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ivan_basic",
    name: "Ivan Basic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "dzenis_burnic",
    name: "Dzenis Burnic",
    team: "ba",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ermin_mahmic",
    name: "Ermin Mahmic",
    team: "ba",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "benjamin_tahirovic",
    name: "Benjamin Tahirovic",
    team: "ba",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "amar_memic",
    name: "Amar Memic",
    team: "ba",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "armin_gigovic",
    name: "Armin Gigovic",
    team: "ba",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "kerim_alajbegovic",
    name: "Kerim Alajbegovic",
    team: "ba",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "esmir_bajraktarevic",
    name: "Esmir Bajraktarevic",
    team: "ba",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ermedin_demirovic",
    name: "Ermedin Demirovic",
    team: "ba",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "jovo_lukic",
    name: "Jovo Lukic",
    team: "ba",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "samed_bazdar",
    name: "Samed Bazdar",
    team: "ba",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "haris_tabakovic",
    name: "Haris Tabakovic",
    team: "ba",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "edin_dzeko",
    name: "Edin Dzeko",
    team: "ba",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // CANADÁ
  // ======================

  // ======================
  // CATAR
  // ======================

  // ======================
  // SUÍÇA
  // ======================

  {
    id: "marvin_keller",
    name: "Marvin Keller",
    team: "ch",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "gregor_kobel",
    name: "Gregor Kobel",
    team: "ch",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "yvon_mvogo",
    name: "Yvon Mvogo",
    team: "ch",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "manuel_akanji",
    name: "Manuel Akanji",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "aurele_amenda",
    name: "Aurele Amenda",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "eray_comert",
    name: "Eray Comert",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nico_elvedi",
    name: "Nico Elvedi",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "luca_jaquez",
    name: "Luca Jaquez",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "miro_muheim",
    name: "Miro Muheim",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ricardo_rodriguez",
    name: "Ricardo Rodriguez",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "silvan_widmer",
    name: "Silvan Widmer",
    team: "ch",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "michel_aebischer",
    name: "Michel Aebischer",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "christian_fassnacht",
    name: "Christian Fassnacht",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "remo_freuler",
    name: "Remo Freuler",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ardon_jashari",
    name: "Ardon Jashari",
    team: "ch",
    position: "MF",
    age: 22,
    status: "confirmed",
  },
  {
    id: "johan_manzambi",
    name: "Johan Manzambi",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "fabian_rieder",
    name: "Fabian Rieder",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "djibril_sow",
    name: "Djibril Sow",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ruben_vargas",
    name: "Ruben Vargas",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "granit_xhaka",
    name: "Granit Xhaka",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "denis_zakaria",
    name: "Denis Zakaria",
    team: "ch",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "zeki_amdouni",
    name: "Zeki Amdouni",
    team: "ch",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "breel_embolo",
    name: "Breel Embolo",
    team: "ch",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "cedric_itten",
    name: "Cedric Itten",
    team: "ch",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "dan_ndoye",
    name: "Dan Ndoye",
    team: "ch",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "noah_okafor",
    name: "Noah Okafor",
    team: "ch",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  // ======================
  // BRASIL
  // ======================

  {
    id: "alisson",
    name: "Alisson",
    team: "br",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "ederson",
    name: "Ederson",
    team: "br",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "weverton",
    name: "Weverton",
    team: "br",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "alex_sandro",
    name: "Alex Sandro",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "bremer",
    name: "Bremer",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "danilo",
    name: "Danilo",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "douglas_santos",
    name: "Douglas Santos",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "gabriel_magalhaes",
    name: "Gabriel Magalhães",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ibanez",
    name: "Ibañez",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "leo_pereira",
    name: "Léo Pereira",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "marquinhos",
    name: "Marquinhos",
    team: "br",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "wesley",
    name: "Wesley",
    team: "br",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "bruno_guimaraes",
    name: "Bruno Guimarães",
    team: "br",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "casemiro",
    name: "Casemiro",
    team: "br",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "danilo_santos",
    name: "Danilo Santos",
    team: "br",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "fabinho",
    name: "Fabinho",
    team: "br",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "lucas_paqueta",
    name: "Lucas Paquetá",
    team: "br",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "endrick",
    name: "Endrick",
    team: "br",
    position: "FW",
    age: 19,
    status: "confirmed",
  },
  {
    id: "gabriel_martinelli",
    name: "Gabriel Martinelli",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "igor_thiago",
    name: "Igor Thiago",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "luiz_henrique",
    name: "Luiz Henrique",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "matheus_cunha",
    name: "Matheus Cunha",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "neymar",
    name: "Neymar",
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
    id: "rayan",
    name: "Rayan",
    team: "br",
    position: "FW",
    age: 19,
    status: "confirmed",
  },
  {
    id: "vini_jr",
    name: "Vinícius Jr.",
    team: "br",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // ESCÓCIA
  // ======================

  {
    id: "craig_gordon",
    name: "Craig Gordon",
    team: "sct",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "angus_gunn",
    name: "Angus Gunn",
    team: "sct",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "liam_kelly",
    name: "Liam Kelly",
    team: "sct",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "grant_hanley",
    name: "Grant Hanley",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "jack_hendry",
    name: "Jack Hendry",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "aaron_hickey",
    name: "Aaron Hickey",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "dom_hyam",
    name: "Dom Hyam",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "scott_mckenna",
    name: "Scott McKenna",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nathan_patterson",
    name: "Nathan Patterson",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "anthony_ralston",
    name: "Anthony Ralston",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "andy_robertson",
    name: "Andy Robertson",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "john_souttar",
    name: "John Souttar",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "kieran_tierney",
    name: "Kieran Tierney",
    team: "sct",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ryan_christie",
    name: "Ryan Christie",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "findlay_curtis",
    name: "Findlay Curtis",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ben_gannon_doak",
    name: "Ben Gannon-Doak",
    team: "sct",
    position: "MF",
    age: 19,
    status: "confirmed",
  },

  {
    id: "lewis_ferguson",
    name: "Lewis Ferguson",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "billy_gilmour",
    name: "Billy Gilmour",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "john_mcginn",
    name: "John McGinn",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "kenny_mclean",
    name: "Kenny McLean",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "scott_mctominay",
    name: "Scott McTominay",
    team: "sct",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "che_adams",
    name: "Ché Adams",
    team: "sct",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "lyndon_dykes",
    name: "Lyndon Dykes",
    team: "sct",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "george_hirst",
    name: "George Hirst",
    team: "sct",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "lawrence_shankland",
    name: "Lawrence Shankland",
    team: "sct",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "ross_stewart",
    name: "Ross Stewart",
    team: "sct",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // HAITI
  // ======================

  {
    id: "johnny_placide",
    name: "Johnny Placide",
    team: "ht",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "alexandre_pierre",
    name: "Alexandre Pierre",
    team: "ht",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "josue_duverger",
    name: "Josué Duverger",
    team: "ht",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "carlens_arcus",
    name: "Carlens Arcus",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "wilguens_pauguain",
    name: "Wilguens Pauguain",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "duke_lacroix",
    name: "Duke Lacroix",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "martin_experience",
    name: "Martin Experience",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "jk_duverne",
    name: "JK Duverne",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ricardo_ade",
    name: "Ricardo Ade",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "hannes_delcroix",
    name: "Hannes Delcroix",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "keeto_thermoncy",
    name: "Keeto Thermoncy",
    team: "ht",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "leverton_pierre",
    name: "Leverton Pierre",
    team: "ht",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "carl_fred_sainthe",
    name: "Carl-Fred Sainthe",
    team: "ht",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jean_jacques_danley",
    name: "Jean-Jacques Danley",
    team: "ht",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jeanricner_bellegarde",
    name: "Jeanricner Bellegarde",
    team: "ht",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "pierre_woodenski",
    name: "Pierre Woodenski",
    team: "ht",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "dominique_simon",
    name: "Dominique Simon",
    team: "ht",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "louicius_deedson",
    name: "Louicius Deedson",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "ruben_providence",
    name: "Ruben Providence",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "josue_casimir",
    name: "Josué Casimir",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "derrick_etienne",
    name: "Derrick Etienne",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "wilson_isidor",
    name: "Wilson Isidor",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "duckens_nazon",
    name: "Duckens Nazon",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "frantzdy_pierrot",
    name: "Frantzdy Pierrot",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "yassin_fortune",
    name: "Yassin Fortune",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "lenny_joseph",
    name: "Lenny Joseph",
    team: "ht",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // AUSTRÁLIA
  // ======================

  // ======================
  // ESTADOS UNIDOS
  // ======================

  // ======================
  // PARAGUAI
  // ======================

  // ======================
  // TURQUIA
  // ======================

  // ======================
  // ALEMANHA
  // ======================

  {
    id: "oliver_baumann",
    name: "Oliver Baumann",
    team: "de",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "manuel_neuer",
    name: "Manuel Neuer",
    team: "de",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "alexander_nubel",
    name: "Alexander Nubel",
    team: "de",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "waldemar_anton",
    name: "Waldemar Anton",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nathaniel_brown",
    name: "Nathaniel Brown",
    team: "de",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "pascal_gross",
    name: "Pascal Grob",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "joshua_kimmich",
    name: "Joshua Kimmich",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "felix_nmecha",
    name: "Felix Nmecha",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "aleksandar_pavlovic",
    name: "Aleksandar Pavlovic",
    team: "de",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "david_raum",
    name: "David Raum",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "antonio_rudiger",
    name: "Antonio Rudiger",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nico_schlotterbeck",
    name: "Nico Schlotterbeck",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "angelo_stiller",
    name: "Angelo Stiller",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jonathan_tah",
    name: "Jonathan Tah",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "malick_thiaw",
    name: "Malick Thiaw",
    team: "de",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  // Meias / Atacantes

  {
    id: "nadiem_amiri",
    name: "Nadiem Amiri",
    team: "de",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "leon_goretzka",
    name: "Leon Goretzka",
    team: "de",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jamal_musiala",
    name: "Jamal Musiala",
    team: "de",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "florian_wirtz",
    name: "Florian Wirtz",
    team: "de",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "leroy_sane",
    name: "Leroy Sané",
    team: "de",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "kai_havertz",
    name: "Kai Havertz",
    team: "de",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "maximilian_beier",
    name: "Maximilian Beier",
    team: "de",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "lennart_karl",
    name: "Lennart Karl",
    team: "de",
    position: "FW",
    age: 17,
    status: "confirmed",
  },

  {
    id: "jamie_leweling",
    name: "Jamie Leweling",
    team: "de",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "deniz_undav",
    name: "Deniz Undav",
    team: "de",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "nick_woltemade",
    name: "Nick Woltemade",
    team: "de",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  // ======================
  // COSTA DO MARFIM
  // ======================

  {
    id: "yahia_fofana",
    name: "Yahia Fofana",
    team: "ci",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "mohamed_kone",
    name: "Mohamed Koné",
    team: "ci",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "alban_lafont",
    name: "Alban Lafont",
    team: "ci",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "emmanuel_agbadou",
    name: "Emmanuel Agbadou",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "clement_akpa",
    name: "Clement Akpa",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ousmane_diomande",
    name: "Ousmane Diomande",
    team: "ci",
    position: "DF",
    age: 21,
    status: "confirmed",
  },
  {
    id: "guela_doue",
    name: "Guela Doue",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ghislain_konan",
    name: "Ghislain Konan",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "odilon_kossounou",
    name: "Odilon Kossounou",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "evan_ndicka",
    name: "Evan Ndicka",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "wilfried_singo",
    name: "Wilfried Singo",
    team: "ci",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "seko_fofana",
    name: "Seko Fofana",
    team: "ci",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "parfait_guiagon",
    name: "Parfait Guiagon",
    team: "ci",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "christ_inao_dulai",
    name: "Christ Inao Dulai",
    team: "ci",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "franck_kessie",
    name: "Franck Kessié",
    team: "ci",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ibrahim_sangare",
    name: "Ibrahim Sangare",
    team: "ci",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "jean_mickael_seri",
    name: "Jean-Mickael Seri",
    team: "ci",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "simon_adingra",
    name: "Simon Adingra",
    team: "ci",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "ange_voan_bonny",
    name: "Ange-voan Bonny",
    team: "ci",
    position: "FW",
    age: 21,
    status: "confirmed",
  },

  {
    id: "amad_diallo",
    name: "Amad Diallo",
    team: "ci",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "oumar_diakite",
    name: "Oumar Diakité",
    team: "ci",
    position: "FW",
    age: 21,
    status: "confirmed",
  },

  {
    id: "van_diomande",
    name: "Van Diomande",
    team: "ci",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "evann_guessand",
    name: "Evann Guessand",
    team: "ci",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "nicolas_pepe",
    name: "Nicolas Pépé",
    team: "ci",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "bazoumana_toure",
    name: "Bazoumana Touré",
    team: "ci",
    position: "FW",
    age: 19,
    status: "confirmed",
  },

  {
    id: "elye_wahi",
    name: "Elye Wahi",
    team: "ci",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  // ======================
  // CURAÇAO
  // ======================

  {
    id: "tyrick_bodak",
    name: "Tyrick Bodak",
    team: "cw",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "trevor_doornbusch",
    name: "Trevor Doornbusch",
    team: "cw",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "eloy_room",
    name: "Eloy Room",
    team: "cw",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "riechedly_bazoer",
    name: "Riechedly Bazoer",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "joshua_brenet",
    name: "Joshua Brenet",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "sherel_floranus",
    name: "Sherel Floranus",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "deveron_fonville",
    name: "Deveron Fonville",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jurien_gaari",
    name: "Juriën Gaari",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "armando_obispo",
    name: "Armando Obispo",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "shurandy_sambo",
    name: "Shurandy Sambo",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "roshon_van_eijma",
    name: "Roshon van Eijma",
    team: "cw",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "juninho_bacuna",
    name: "Juninho Bacuna",
    team: "cw",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "leandro_bacuna",
    name: "Leandro Bacuna",
    team: "cw",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "livano_comenencia",
    name: "Livano Comenencia",
    team: "cw",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "kevin_felida",
    name: "Kevin Felida",
    team: "cw",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "arjany_martha",
    name: "Arjany Martha",
    team: "cw",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "tyrese_noslin",
    name: "Tyrese Noslin",
    team: "cw",
    position: "MF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "godfried_roemeratoe",
    name: "Godfried Roemeratoe",
    team: "cw",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jeremy_antonisse",
    name: "Jeremy Antonisse",
    team: "cw",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "tahith_chong",
    name: "Tahith Chong",
    team: "cw",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "kenji_gorre",
    name: "Kenji Gorré",
    team: "cw",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "sontje_hansen",
    name: "Sontje Hansen",
    team: "cw",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "gervane_kastaneer",
    name: "Gervane Kastaneer",
    team: "cw",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "brandley_kuwas",
    name: "Brandley Kuwas",
    team: "cw",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "jurgen_locadia",
    name: "Jürgen Locadia",
    team: "cw",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "jearl_margaritha",
    name: "Jearl Margaritha",
    team: "cw",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // EQUADOR
  // ======================

  // ======================
  // HOLANDA
  // ======================

  // ======================
  // JAPÃO
  // ======================

  {
    id: "zion_suzuki",
    name: "Zion Suzuki",
    team: "jp",
    position: "GK",
    age: 22,
    status: "confirmed",
  },
  {
    id: "tomoki_hayakawa",
    name: "Tomoki Hayakawa",
    team: "jp",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "keisuke_osako",
    name: "Keisuke Osako",
    team: "jp",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "yuto_nagatomo",
    name: "Yuto Nagatomo",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "shogo_taniguchi",
    name: "Shogo Taniguchi",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ko_itakura",
    name: "Ko Itakura",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "tsuyoshi_watanabe",
    name: "Tsuyoshi Watanabe",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "takehiro_tomiyasu",
    name: "Takehiro Tomiyasu",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "hiroki_ito",
    name: "Hiroki Ito",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ayumu_seko",
    name: "Ayumu Seko",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "yukinari_sugawara",
    name: "Yukinari Sugawara",
    team: "jp",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "junnosuke_suzuki",
    name: "Junnosuke Suzuki",
    team: "jp",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "wataru_endo",
    name: "Wataru Endo",
    team: "jp",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "junya_ito",
    name: "Junya Ito",
    team: "jp",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "daichi_kamada",
    name: "Daichi Kamada",
    team: "jp",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ritsu_doan",
    name: "Ritsu Doan",
    team: "jp",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ao_tanaka",
    name: "Ao Tanaka",
    team: "jp",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "keito_nakamura",
    name: "Keito Nakamura",
    team: "jp",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kaishu_sano",
    name: "Kaishu Sano",
    team: "jp",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "takefusa_kubo",
    name: "Takefusa Kubo",
    team: "jp",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "koki_ogawa",
    name: "Koki Ogawa",
    team: "jp",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "daizen_maeda",
    name: "Daizen Maeda",
    team: "jp",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "ayase_ueda",
    name: "Ayase Ueda",
    team: "jp",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "yuito_suzuki",
    name: "Yuito Suzuki",
    team: "jp",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "kento_shoigai",
    name: "Kento Shoigai",
    team: "jp",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "keisuke_goto",
    name: "Keisuke Goto",
    team: "jp",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  // ======================
  // SUÉCIA
  // ======================

  {
    id: "kristoffer_nordfeldt",
    name: "Kristoffer Nordfeldt",
    team: "se",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "viktor_johansson",
    name: "Viktor Johansson",
    team: "se",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "jacob_widell_zetterstrom",
    name: "Jacob Widell Zetterstrom",
    team: "se",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "daniel_svensson",
    name: "Daniel Svensson",
    team: "se",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "victor_nilsson_lindelof",
    name: "Victor Nilsson Lindelöf",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "emil_holm",
    name: "Emil Holm",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "isak_hien",
    name: "Isak Hien",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "carl_starfelt",
    name: "Carl Starfelt",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "gustav_lagerbielke",
    name: "Gustav Lagerbielke",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "gabriel_gudmundsson",
    name: "Gabriel Gudmundsson",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "hjalmar_ekdal",
    name: "Hjalmar Ekdal",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "elliot_stroud",
    name: "Elliot Stroud",
    team: "se",
    position: "DF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "eric_smith",
    name: "Eric Smith",
    team: "se",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "taha_ali",
    name: "Taha Ali",
    team: "se",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "yasin_ayari",
    name: "Yasin Ayari",
    team: "se",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "lucas_bergvall",
    name: "Lucas Bergvall",
    team: "se",
    position: "MF",
    age: 19,
    status: "confirmed",
  },

  {
    id: "jesper_karlstrom",
    name: "Jesper Karlstrom",
    team: "se",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "benjamin_nygren",
    name: "Benjamin Nygren",
    team: "se",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mattias_svanberg",
    name: "Mattias Svanberg",
    team: "se",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "besfort_zeneli",
    name: "Besfort Zeneli",
    team: "se",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "alexander_bernhardsson",
    name: "Alexander Bernhardsson",
    team: "se",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "anthony_elanga",
    name: "Anthony Elanga",
    team: "se",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "viktor_gyokeres",
    name: "Viktor Gyökeres",
    team: "se",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "alexander_isak",
    name: "Alexander Isak",
    team: "se",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "gustav_nilsson",
    name: "Gustav Nilsson",
    team: "se",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "ken_sema",
    name: "Ken Sema",
    team: "se",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // TUNÍSIA
  // ======================

  {
    id: "sabri_ben_hessen",
    name: "Sabri Ben Hessen",
    team: "tn",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "abdelmouhib_chamakh",
    name: "Abdelmouhib Chamakh",
    team: "tn",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "aymen_dahman",
    name: "Aymen Dahman",
    team: "tn",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "ali_abdi",
    name: "Ali Abdi",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "adem_arous",
    name: "Adem Arous",
    team: "tn",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "mohamed_amine_ben_hamida",
    name: "Mohamed Amine Ben Hamida",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "dylan_bronn",
    name: "Dylan Bronn",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "raed_chikhaoui",
    name: "Raed Chikhaoui",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "moutaz_neffati",
    name: "Moutaz Neffati",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "omar_rekik",
    name: "Omar Rekik",
    team: "tn",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "montassar_talbi",
    name: "Montassar Talbi",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "yan_valery",
    name: "Yan Valery",
    team: "tn",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mortadha_ben_ouanes",
    name: "Mortadha Ben Ouanes",
    team: "tn",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "anis_ben_slimane",
    name: "Anis Ben Slimane",
    team: "tn",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ismael_gharbi",
    name: "Ismael Gharbi",
    team: "tn",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "rani_khedira",
    name: "Rani Khedira",
    team: "tn",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mohamed_hadj_mahmoud",
    name: "Mohamed Hadj Mahmoud",
    team: "tn",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "hannibal_mejbri",
    name: "Hannibal Mejbri",
    team: "tn",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "ellyes_skhiri",
    name: "Ellyes Skhiri",
    team: "tn",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "elias_achouri",
    name: "Elias Achouri",
    team: "tn",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "khalil_ayari",
    name: "Khalil Ayari",
    team: "tn",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "firas_chaouat",
    name: "Firas Chaouat",
    team: "tn",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "rayan_elloumi",
    name: "Rayan Elloumi",
    team: "tn",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  {
    id: "hazem_mastouri",
    name: "Hazem Mastouri",
    team: "tn",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "elias_saad",
    name: "Elias Saad",
    team: "tn",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "sebastian_tounekti",
    name: "Sebastian Tounekti",
    team: "tn",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  // ======================
  // BÉLGICA
  // ======================

  {
    id: "thibaut_courtois",
    name: "Thibaut Courtois",
    team: "be",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "senne_lammens",
    name: "Senne Lammens",
    team: "be",
    position: "GK",
    age: 22,
    status: "confirmed",
  },
  {
    id: "mike_penders",
    name: "Mike Penders",
    team: "be",
    position: "GK",
    age: 19,
    status: "confirmed",
  },

  {
    id: "timothy_castagne",
    name: "Timothy Castagne",
    team: "be",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "zeno_debast",
    name: "Zeno Debast",
    team: "be",
    position: "DF",
    age: 21,
    status: "confirmed",
  },
  {
    id: "maxim_de_cuyper",
    name: "Maxim De Cuyper",
    team: "be",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "koni_de_winter",
    name: "Koni De Winter",
    team: "be",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "brandon_mechele",
    name: "Brandon Mechele",
    team: "be",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "thomas_meunier",
    name: "Thomas Meunier",
    team: "be",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "nathan_ngoy",
    name: "Nathan Ngoy",
    team: "be",
    position: "DF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "joaquin_seys",
    name: "Joaquin Seys",
    team: "be",
    position: "DF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "arthur_theate",
    name: "Arthur Theate",
    team: "be",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kevin_de_bruyne",
    name: "Kevin De Bruyne",
    team: "be",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "amadou_onana",
    name: "Amadou Onana",
    team: "be",
    position: "MF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "nicolas_raskin",
    name: "Nicolas Raskin",
    team: "be",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "youri_tielemans",
    name: "Youri Tielemans",
    team: "be",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "hans_vanaken",
    name: "Hans Vanaken",
    team: "be",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "axel_witsel",
    name: "Axel Witsel",
    team: "be",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "charles_de_ketelaere",
    name: "Charles De Ketelaere",
    team: "be",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "jeremy_doku",
    name: "Jeremy Doku",
    team: "be",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "matias_fernandez_pardo",
    name: "Matias Fernandez-Pardo",
    team: "be",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  {
    id: "romelu_lukaku",
    name: "Romelu Lukaku",
    team: "be",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "dodi_lukebakio",
    name: "Dodi Lukebakio",
    team: "be",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "diego_moreira",
    name: "Diego Moreira",
    team: "be",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  {
    id: "alexis_saelemaekers",
    name: "Alexis Saelemaekers",
    team: "be",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "leandro_trossard",
    name: "Leandro Trossard",
    team: "be",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // EGITO
  // ======================

  {
    id: "mohamed_el_shenawy",
    name: "Mohamed El Shenawy",
    team: "eg",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "mostafa_shobeir",
    name: "Mostafa Shobeir",
    team: "eg",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "el_mahdi_soliman",
    name: "El Mahdi Soliman",
    team: "eg",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "mohamed_hani",
    name: "Mohamed Hani",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "tarek_hamed",
    name: "Tarek Hamed",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "hamdi_fathy",
    name: "Hamdi Fathy",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "ramy_rabia",
    name: "Ramy Rabia",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "yasser_ibrahim",
    name: "Yasser Ibrahim",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "hossam_abdel_maguid",
    name: "Hossam Abdel-Maguid",
    team: "eg",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "mohamed_abdel_moniem",
    name: "Mohamed Abdel-Moniem",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ahmed_fotouh",
    name: "Ahmed Fotouh",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "karim_hafez",
    name: "Karim Hafez",
    team: "eg",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "marwan_attia",
    name: "Marwan Attia",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "mohand_lashin",
    name: "Mohand Lashin",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nabil_emad_dunga",
    name: "Nabil Emad Dunga",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mahmoud_saber",
    name: "Mahmoud Saber",
    team: "eg",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "ahmed_sayed_zizo",
    name: "Ahmed Sayed Zizo",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "imam_ashour",
    name: "Imam Ashour",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mostafa_abdel_raouf_ziko",
    name: "Mostafa Abdel-Raouf Ziko",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mahmoud_trezeguet",
    name: "Mahmoud Trezeguet",
    team: "eg",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ibrahim_adel",
    name: "Ibrahim Adel",
    team: "eg",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "haithem_hassan",
    name: "Haithem Hassan",
    team: "eg",
    position: "MF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "mohamed_salah",
    name: "Mohamed Salah",
    team: "eg",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "omar_marmoush",
    name: "Omar Marmoush",
    team: "eg",
    position: "FW",
    age: 26,
    status: "confirmed",
  },

  {
    id: "akram_tawfiq",
    name: "Akram Tawfiq",
    team: "eg",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "hamza_abdel_karim",
    name: "Hamza Abdel-Karim",
    team: "eg",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  // ======================
  // IRÃ
  // ======================

  {
    id: "alireza_beiranvand",
    name: "Alireza Beiranvand",
    team: "ir",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "seyed_hossein_hosseini",
    name: "Seyed Hossein Hosseini",
    team: "ir",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "mohammad_khalifeh",
    name: "Mohammad Khalifeh",
    team: "ir",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "payam_niazmand",
    name: "Payam Niazmand",
    team: "ir",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "danial_eiri",
    name: "Danial Eiri",
    team: "ir",
    position: "DF",
    age: 21,
    status: "confirmed",
  },
  {
    id: "ehsan_hajsafi",
    name: "Ehsan Hajsafi",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "saleh_hardani",
    name: "Saleh Hardani",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "hossein_kanaani",
    name: "Hossein Kanaani",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "shoja_khalilzadeh",
    name: "Shoja Khalilzadeh",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "milad_mohammadi",
    name: "Milad Mohammadi",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  // Corrigindo a lista: "Ali Nemati Omid Noorafkan"
  // são dois jogadores separados
  {
    id: "ali_nemati",
    name: "Ali Nemati",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "omid_noorafkan",
    name: "Omid Noorafkan",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ramin_rezaeian",
    name: "Ramin Rezaeian",
    team: "ir",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "rouzbeh_cheshmi",
    name: "Rouzbeh Cheshmi",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "saeid_ezatolahi",
    name: "Saeid Ezatolahi",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "mehdi_ghaedi",
    name: "Mehdi Ghaedi",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "saman_ghoddos",
    name: "Saman Ghoddos",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mohammad_ghorbani",
    name: "Mohammad Ghorbani",
    team: "ir",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "alireza_jahanbakhsh",
    name: "Alireza Jahanbakhsh",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mohammad_mohebi",
    name: "Mohammad Mohebi",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "amir_mohammad_razzaghinia",
    name: "Amir Mohammad Razzaghinia",
    team: "ir",
    position: "MF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "mehdi_torabi",
    name: "Mehdi Torabi",
    team: "ir",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "aria_yousefi",
    name: "Aria Yousefi",
    team: "ir",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "ali_alipour",
    name: "Ali Alipour",
    team: "ir",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "dennis_dargahi",
    name: "Dennis Dargahi",
    team: "ir",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "hadi_habibinejad",
    name: "Hadi Habibinejad",
    team: "ir",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "amirhossein_hosseinzadeh",
    name: "Amirhossein Hosseinzadeh",
    team: "ir",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "amirhossein_mahmoudi",
    name: "Amirhossein Mahmoudi",
    team: "ir",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "kasra_taheri",
    name: "Kasra Taheri",
    team: "ir",
    position: "FW",
    age: 18,
    status: "confirmed",
  },

  {
    id: "mehdi_taremi",
    name: "Mehdi Taremi",
    team: "ir",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // NOVA ZELÂNDIA
  // ======================

  {
    id: "max_crocombe",
    name: "Max Crocombe",
    team: "nz",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "alex_paulsen",
    name: "Alex Paulsen",
    team: "nz",
    position: "GK",
    age: 22,
    status: "confirmed",
  },
  {
    id: "michael_woud",
    name: "Michael Woud",
    team: "nz",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "tyler_bindon",
    name: "Tyler Bindon",
    team: "nz",
    position: "DF",
    age: 20,
    status: "confirmed",
  },
  {
    id: "michael_boxall",
    name: "Michael Boxall",
    team: "nz",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "liberato_cacace",
    name: "Liberato Cacace",
    team: "nz",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "francis_de_vries",
    name: "Francis de Vries",
    team: "nz",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "callan_elliot",
    name: "Callan Elliot",
    team: "nz",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "tim_payne",
    name: "Tim Payne",
    team: "nz",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "nando_pijnaker",
    name: "Nando Pijnaker",
    team: "nz",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "tommy_smith",
    name: "Tommy Smith",
    team: "nz",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "finn_surman",
    name: "Finn Surman",
    team: "nz",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "lachlan_bayliss",
    name: "Lachlan Bayliss",
    team: "nz",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "joe_bell",
    name: "Joe Bell",
    team: "nz",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "matt_garbett",
    name: "Matt Garbett",
    team: "nz",
    position: "MF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "ben_old",
    name: "Ben Old",
    team: "nz",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "alex_rufer",
    name: "Alex Rufer",
    team: "nz",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "sarpreet_singh",
    name: "Sarpreet Singh",
    team: "nz",
    position: "MF",
    age: 26,
    status: "confirmed",
  },

  {
    id: "marko_stamenic",
    name: "Marko Stamenic",
    team: "nz",
    position: "MF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "ryan_thomas",
    name: "Ryan Thomas",
    team: "nz",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kosta_barbarouses",
    name: "Kosta Barbarouses",
    team: "nz",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "eli_just",
    name: "Eli Just",
    team: "nz",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "callum_mccowatt",
    name: "Callum McCowatt",
    team: "nz",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "jesse_randall",
    name: "Jesse Randall",
    team: "nz",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "ben_waine",
    name: "Ben Waine",
    team: "nz",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "chris_wood",
    name: "Chris Wood",
    team: "nz",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // ARABIA SAUDITA
  // ======================

  // ======================
  // CABO VERDE
  // ======================

  {
    id: "carlos_dos_santos",
    name: "Carlos dos Santos",
    team: "cv",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "marcio_rosa",
    name: "Márcio Rosa",
    team: "cv",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "vozinha",
    name: "Vozinha",
    team: "cv",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "sidny_cabral",
    name: "Sidny Cabral",
    team: "cv",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "diney_borges",
    name: "Diney Borges",
    team: "cv",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "logan_costa",
    name: "Logan Costa",
    team: "cv",
    position: "DF",
    age: 24,
    status: "confirmed",
  },
  {
    id: "roberto_lopes",
    name: "Roberto Lopes",
    team: "cv",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "steven_moreira",
    name: "Steven Moreira",
    team: "cv",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "wagner_pina",
    name: "Wagner Pina",
    team: "cv",
    position: "DF",
    age: 22,
    status: "confirmed",
  },
  {
    id: "kelvin_pires",
    name: "Kelvin Pires",
    team: "cv",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "stopira",
    name: "Stopira",
    team: "cv",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "telmo_arcanjo",
    name: "Telmo Arcanjo",
    team: "cv",
    position: "MF",
    age: 23,
    status: "confirmed",
  },
  {
    id: "deroy_duarte",
    name: "Deroy Duarte",
    team: "cv",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "laros_duarte",
    name: "Laros Duarte",
    team: "cv",
    position: "MF",
    age: 27,
    status: "confirmed",
  },

  {
    id: "joao_paulo_fernandes",
    name: "João Paulo Fernandes",
    team: "cv",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jamiro_monteiro",
    name: "Jamiro Monteiro",
    team: "cv",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "kevin_pina",
    name: "Kevin Pina",
    team: "cv",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "yannick_semedo",
    name: "Yannick Semedo",
    team: "cv",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "gilson_benchimol",
    name: "Gilson Benchimol",
    team: "cv",
    position: "FW",
    age: 23,
    status: "confirmed",
  },
  {
    id: "jovane_cabral",
    name: "Jovane Cabral",
    team: "cv",
    position: "FW",
    age: 26,
    status: "confirmed",
  },

  {
    id: "dailon_livramento",
    name: "Dailon Livramento",
    team: "cv",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "ryan_mendes",
    name: "Ryan Mendes",
    team: "cv",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "nuno_da_costa",
    name: "Nuno da Costa",
    team: "cv",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "garry_rodrigues",
    name: "Garry Rodrigues",
    team: "cv",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "willy_semedo",
    name: "Willy Semedo",
    team: "cv",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "helio_varela",
    name: "Hélio Varela",
    team: "cv",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  // ======================
  // ESPANHA
  // ======================

  {
    id: "unai_simon",
    name: "Unai Simón",
    team: "es",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "david_raya",
    name: "David Raya",
    team: "es",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "joan_garcia",
    name: "Joan García",
    team: "es",
    position: "GK",
    age: 24,
    status: "confirmed",
  },

  {
    id: "marc_cucurella",
    name: "Marc Cucurella",
    team: "es",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "alex_grimaldo",
    name: "Alex Grimaldo",
    team: "es",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "pau_cubarsi",
    name: "Pau Cubarsí",
    team: "es",
    position: "DF",
    age: 18,
    status: "confirmed",
  },
  {
    id: "aymeric_laporte",
    name: "Aymeric Laporte",
    team: "es",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "marc_pubill",
    name: "Marc Pubill",
    team: "es",
    position: "DF",
    age: 22,
    status: "confirmed",
  },
  {
    id: "eric_garcia",
    name: "Eric García",
    team: "es",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "marcos_llorente",
    name: "Marcos Llorente",
    team: "es",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "pedro_porro",
    name: "Pedro Porro",
    team: "es",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "pedri",
    name: "Pedri",
    team: "es",
    position: "MF",
    age: 22,
    status: "confirmed",
  },
  {
    id: "fabian_ruiz",
    name: "Fabián Ruiz",
    team: "es",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "zubimendi",
    name: "Zubimendi",
    team: "es",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "gavi",
    name: "Gavi",
    team: "es",
    position: "MF",
    age: 21,
    status: "confirmed",
  },
  {
    id: "rodri",
    name: "Rodri",
    team: "es",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "alex_baena",
    name: "Alex Baena",
    team: "es",
    position: "MF",
    age: null,
    status: "confirmed",
  },
  {
    id: "mikel_merino",
    name: "Mikel Merino",
    team: "es",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mikel_oyarzabal",
    name: "Mikel Oyarzabal",
    team: "es",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "dani_olmo",
    name: "Dani Olmo",
    team: "es",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "nico_williams",
    name: "Nico Williams",
    team: "es",
    position: "FW",
    age: 23,
    status: "confirmed",
  },
  {
    id: "yeremy_pino",
    name: "Yeremy Pino",
    team: "es",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "ferran_torres",
    name: "Ferran Torres",
    team: "es",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "borja_iglesias",
    name: "Borja Iglesias",
    team: "es",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "victor_munoz",
    name: "Víctor Muñoz",
    team: "es",
    position: "FW",
    age: null,
    status: "confirmed",
  },
  {
    id: "lamine_yamal",
    name: "Lamine Yamal",
    team: "es",
    position: "FW",
    age: 18,
    status: "confirmed",
  },

  // ======================
  // URUGUAI
  // ======================

  // ======================
  // FRANÇA
  // ======================

  {
    id: "mike_maignan",
    name: "Mike Maignan",
    team: "fr",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "robin_risser",
    name: "Robin Risser",
    team: "fr",
    position: "GK",
    age: 20,
    status: "confirmed",
  },
  {
    id: "brice_samba",
    name: "Brice Samba",
    team: "fr",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "lucas_digne",
    name: "Lucas Digne",
    team: "fr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "malo_gusto",
    name: "Malo Gusto",
    team: "fr",
    position: "DF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "lucas_hernandez",
    name: "Lucas Hernandez",
    team: "fr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "theo_hernandez",
    name: "Theo Hernandez",
    team: "fr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ibrahima_konate",
    name: "Ibrahima Konaté",
    team: "fr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jules_kounde",
    name: "Jules Koundé",
    team: "fr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "maxence_lacroix",
    name: "Maxence Lacroix",
    team: "fr",
    position: "DF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "william_saliba",
    name: "William Saliba",
    team: "fr",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "dayot_upamecano",
    name: "Dayot Upamecano",
    team: "fr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ngolo_kante",
    name: "N'Golo Kanté",
    team: "fr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "manu_kone",
    name: "Manu Koné",
    team: "fr",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "adrien_rabiot",
    name: "Adrien Rabiot",
    team: "fr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "aurelien_tchouameni",
    name: "Aurélien Tchouaméni",
    team: "fr",
    position: "MF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "warren_zaire_emery",
    name: "Warren Zaïre-Emery",
    team: "fr",
    position: "MF",
    age: 19,
    status: "confirmed",
  },

  {
    id: "maghnes_akliouche",
    name: "Maghnes Akliouche",
    team: "fr",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "bradley_barcola",
    name: "Bradley Barcola",
    team: "fr",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "rayan_cherki",
    name: "Rayan Cherki",
    team: "fr",
    position: "FW",
    age: 21,
    status: "confirmed",
  },

  {
    id: "ousmane_dembele",
    name: "Ousmane Dembélé",
    team: "fr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "desire_doue",
    name: "Désiré Doué",
    team: "fr",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  {
    id: "jean_philippe_mateta",
    name: "Jean-Philippe Mateta",
    team: "fr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "kylian_mbappe",
    name: "Kylian Mbappé",
    team: "fr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "michael_olise",
    name: "Michael Olise",
    team: "fr",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  {
    id: "marcus_thuram",
    name: "Marcus Thuram",
    team: "fr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // IRAQUE
  // ======================

  // ======================
  // NORUEGA
  // ======================

  {
    id: "orjan_nyland",
    name: "Orjan Nyland",
    team: "no",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "egil_selvik",
    name: "Egil Selvik",
    team: "no",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "tangvik",
    name: "Tangvik",
    team: "no",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "kristoffer_ajer",
    name: "Kristoffer Ajer",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "torbjorn_heggem",
    name: "Torbjorn Heggem",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "leo_skiri_ostigard",
    name: "Leo Skiri Ostigard",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "sondre_langas",
    name: "Sondre Langas",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "henrik_falchener",
    name: "Henrik Falchener",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "julian_ryerson",
    name: "Julian Ryerson",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "marcus_holmgren_pedersen",
    name: "Marcus Holmgren Pedersen",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "david_moller_wolfe",
    name: "David Moller Wolfe",
    team: "no",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "fredrik_bjorkan",
    name: "Fredrik Bjorkan",
    team: "no",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "martin_odegaard",
    name: "Martin Odegaard",
    team: "no",
    position: "MF",
    age: 26,
    status: "confirmed",
  },

  {
    id: "sander_berge",
    name: "Sander Berge",
    team: "no",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "fredrik_aursnes",
    name: "Fredrik Aursnes",
    team: "no",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "patrick_berg",
    name: "Patrick Berg",
    team: "no",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kristian_thorstvedt",
    name: "Kristian Thorstvedt",
    team: "no",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "thelonious_asgard",
    name: "Thelonious Asgard",
    team: "no",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "morten_thorsby",
    name: "Morten Thorsby",
    team: "no",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "erling_haaland",
    name: "Erling Haaland",
    team: "no",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "alexander_sorloth",
    name: "Alexander Sorloth",
    team: "no",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "jorgen_strand_larsen",
    name: "Jorgen Strand Larsen",
    team: "no",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "antonio_nusa",
    name: "Antonio Nusa",
    team: "no",
    position: "FW",
    age: 20,
    status: "confirmed",
  },

  {
    id: "oscar_bobb",
    name: "Oscar Bobb",
    team: "no",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "andreas_schjelderup",
    name: "Andreas Schjelderup",
    team: "no",
    position: "FW",
    age: 21,
    status: "confirmed",
  },

  {
    id: "jans_petter_hauge",
    name: "Jans Petter Hauge",
    team: "no",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // SENEGAL
  // ======================

  // ======================
  // ARGENTINA
  // ======================

  // ======================
  // ARGELIA
  // ======================

  // ======================
  // ÁUSTRIA
  // ======================

  {
    id: "alexander_schlager",
    name: "Alexander Schlager",
    team: "at",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "florian_wiegele",
    name: "Florian Wiegele",
    team: "at",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "patrick_pentz",
    name: "Patrick Pentz",
    team: "at",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "david_affengruber",
    name: "David Affengruber",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kevin_danso",
    name: "Kevin Danso",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "stefan_posch",
    name: "Stefan Posch",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "david_alaba",
    name: "David Alaba",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "philipp_lienhart",
    name: "Philipp Lienhart",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "phillipp_mwene",
    name: "Phillipp Mwene",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "alexander_prass",
    name: "Alexander Prass",
    team: "at",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "marco_friedl",
    name: "Marco Friedl",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "michael_svoboda",
    name: "Michael Svoboda",
    team: "at",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "xaver_schlager",
    name: "Xaver Schlager",
    team: "at",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "nicolas_seiwald",
    name: "Nicolas Seiwald",
    team: "at",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "marcel_sabitzer",
    name: "Marcel Sabitzer",
    team: "at",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "florian_grillitsch",
    name: "Florian Grillitsch",
    team: "at",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "carney_chukwuemeka",
    name: "Carney Chukwuemeka",
    team: "at",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "romano_schmid",
    name: "Romano Schmid",
    team: "at",
    position: "MF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "christoph_baumgartner",
    name: "Christoph Baumgartner",
    team: "at",
    position: "MF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "konrad_laimer",
    name: "Konrad Laimer",
    team: "at",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "patrick_wimmer",
    name: "Patrick Wimmer",
    team: "at",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "paul_wanner",
    name: "Paul Wanner",
    team: "at",
    position: "MF",
    age: 19,
    status: "confirmed",
  },

  {
    id: "alessandro_schopf",
    name: "Alessandro Schopf",
    team: "at",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "marko_arnautovic",
    name: "Marko Arnautović",
    team: "at",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "michael_gregoritsch",
    name: "Michael Gregoritsch",
    team: "at",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "sasa_kalajdzic",
    name: "Sasa Kalajdzic",
    team: "at",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // JORDANIA
  // ======================

  // ======================
  // COLÔMBIA
  // ======================

  {
    id: "camilo_vargas",
    name: "Camilo Vargas",
    team: "co",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "alvaro_montero",
    name: "Álvaro Montero",
    team: "co",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "david_ospina",
    name: "David Ospina",
    team: "co",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "davinson_sanchez",
    name: "Davinson Sánchez",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "jhon_lucumi",
    name: "Jhon Lucumí",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "yerry_mina",
    name: "Yerry Mina",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "daniel_munoz",
    name: "Daniel Muñoz",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "willer_ditta",
    name: "Willer Ditta",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "santiago_arias",
    name: "Santiago Arias",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "johan_mojica",
    name: "Johan Mojica",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "deiver_machado",
    name: "Deiver Machado",
    team: "co",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "richard_rios",
    name: "Richard Ríos",
    team: "co",
    position: "MF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "jefferson_lerma",
    name: "Jefferson Lerma",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "kevin_castano",
    name: "Kevin Castaño",
    team: "co",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "gustavo_puerta",
    name: "Gustavo Puerta",
    team: "co",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "jhon_arias",
    name: "Jhon Arias",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jorge_carrascal",
    name: "Jorge Carrascal",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "juan_portilla",
    name: "Juan Portilla",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "juan_quintero",
    name: "Juan Quintero",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "james_rodriguez",
    name: "James Rodríguez",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jaminton_campaz",
    name: "Jaminton Campaz",
    team: "co",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "cucho_hernandez",
    name: "Cucho Hernández",
    team: "co",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "luis_diaz",
    name: "Luis Díaz",
    team: "co",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // diferente do uruguaio do Inter Miami
  {
    id: "luis_suarez_col",
    name: "Luis Suárez",
    team: "co",
    position: "FW",
    age: 28,
    status: "confirmed",
  },

  {
    id: "andres_gomez",
    name: "Andrés Gómez",
    team: "co",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "jhon_cordoba",
    name: "Jhon Córdoba",
    team: "co",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // PORTUGAL
  // ======================

  {
    id: "diogo_costa",
    name: "Diogo Costa",
    team: "pt",
    position: "GK",
    age: 25,
    status: "confirmed",
  },
  {
    id: "jose_sa",
    name: "José Sá",
    team: "pt",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "rui_silva",
    name: "Rui Silva",
    team: "pt",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "ricardo_velho",
    name: "Ricardo Velho",
    team: "pt",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "diogo_dalot",
    name: "Diogo Dalot",
    team: "pt",
    position: "DF",
    age: 26,
    status: "confirmed",
  },

  // Matheus Nunes veio listado como defensor,
  // mas faz mais sentido no projeto manter MF
  {
    id: "matheus_nunes",
    name: "Matheus Nunes",
    team: "pt",
    position: "MF",
    age: 26,
    status: "confirmed",
  },

  {
    id: "nelson_semedo",
    name: "Nelson Semedo",
    team: "pt",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "joao_cancelo",
    name: "João Cancelo",
    team: "pt",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "nuno_mendes",
    name: "Nuno Mendes",
    team: "pt",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "goncalo_inacio",
    name: "Gonçalo Inácio",
    team: "pt",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "renato_veiga",
    name: "Renato Veiga",
    team: "pt",
    position: "DF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "ruben_dias",
    name: "Ruben Dias",
    team: "pt",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "tomas_araujo",
    name: "Tomás Araújo",
    team: "pt",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "ruben_neves",
    name: "Ruben Neves",
    team: "pt",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "samu_costa",
    name: "Samu Costa",
    team: "pt",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "joao_neves",
    name: "João Neves",
    team: "pt",
    position: "MF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "vitinha",
    name: "Vitinha",
    team: "pt",
    position: "MF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "bruno_fernandes",
    name: "Bruno Fernandes",
    team: "pt",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "bernardo_silva",
    name: "Bernardo Silva",
    team: "pt",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "joao_felix",
    name: "João Félix",
    team: "pt",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "francisco_trincao",
    name: "Francisco Trincão",
    team: "pt",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "francisco_conceicao",
    name: "Francisco Conceição",
    team: "pt",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  {
    id: "pedro_neto",
    name: "Pedro Neto",
    team: "pt",
    position: "FW",
    age: 25,
    status: "confirmed",
  },

  {
    id: "rafael_leao",
    name: "Rafael Leão",
    team: "pt",
    position: "FW",
    age: 26,
    status: "confirmed",
  },

  {
    id: "goncalo_guedes",
    name: "Gonçalo Guedes",
    team: "pt",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "goncalo_ramos",
    name: "Gonçalo Ramos",
    team: "pt",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "cristiano_ronaldo",
    name: "Cristiano Ronaldo",
    team: "pt",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // RD CONGO
  // ======================

  {
    id: "matthieu_epolo",
    name: "Matthieu Epolo",
    team: "cd",
    position: "GK",
    age: 21,
    status: "confirmed",
  },
  {
    id: "timothy_fayulu",
    name: "Timothy Fayulu",
    team: "cd",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "lionel_mpasi",
    name: "Lionel Mpasi",
    team: "cd",
    position: "GK",
    age: null,
    status: "confirmed",
  },

  {
    id: "dylan_batubinsika",
    name: "Dylan Batubinsika",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  // Aaron Tshibola veio listado como defensor,
  // mas normalmente atua no meio. Mantendo MF.
  {
    id: "aaron_tshibola",
    name: "Aaron Tshibola",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "gedoon_kalulu",
    name: "Gedoon Kalulu",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "steve_kapuadi",
    name: "Steve Kapuadi",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "joris_kayembe",
    name: "Joris Kayembe",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "arthur_masuaku",
    name: "Arthur Masuaku",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },
  {
    id: "chancel_mbemba",
    name: "Chancel Mbemba",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "axel_tuanzebe",
    name: "Axel Tuanzebe",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "aaron_wan_bissaka",
    name: "Aaron Wan-Bissaka",
    team: "cd",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "theo_bongonda",
    name: "Theo Bongonda",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "brian_cipenga",
    name: "Brian Cipenga",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "meshack_elia",
    name: "Meshack Elia",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "gael_kakuta",
    name: "Gael Kakuta",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "edo_kayembe",
    name: "Edo Kayembe",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "nathanael_mbuku",
    name: "Nathanael Mbuku",
    team: "cd",
    position: "MF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "samuel_moutoussamy",
    name: "Samuel Moutoussamy",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "ngalayel_mukau",
    name: "Ngal'ayel Mukau",
    team: "cd",
    position: "MF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "charles_pickel",
    name: "Charles Pickel",
    team: "cd",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "noah_sadiki",
    name: "Noah Sadiki",
    team: "cd",
    position: "MF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "cedric_bakambu",
    name: "Cedric Bakambu",
    team: "cd",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "simon_banza",
    name: "Simon Banza",
    team: "cd",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "fiston_mayele",
    name: "Fiston Mayele",
    team: "cd",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "yoane_wissa",
    name: "Yoane Wissa",
    team: "cd",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  // ======================
  // UZBEQUISTÃO
  // ======================

  // ======================
  // CROÁCIA
  // ======================

  {
    id: "dominik_livakovic",
    name: "Dominik Livakovic",
    team: "hr",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "dominik_kotarski",
    name: "Dominik Kotarski",
    team: "hr",
    position: "GK",
    age: 25,
    status: "confirmed",
  },
  {
    id: "ivor_pandur",
    name: "Ivor Pandur",
    team: "hr",
    position: "GK",
    age: 25,
    status: "confirmed",
  },

  {
    id: "josko_gvardiol",
    name: "Josko Gvardiol",
    team: "hr",
    position: "DF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "duje_caleta_car",
    name: "Duje Caleta-Car",
    team: "hr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "josip_sutalo",
    name: "Josip Sutalo",
    team: "hr",
    position: "DF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "josip_stanisic",
    name: "Josip Stanisic",
    team: "hr",
    position: "DF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "marin_pongracic",
    name: "Marin Pongracic",
    team: "hr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "martin_erlic",
    name: "Martin Erlic",
    team: "hr",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "luka_vuskovic",
    name: "Luka Vuskovic",
    team: "hr",
    position: "DF",
    age: 18,
    status: "confirmed",
  },

  {
    id: "luka_modric",
    name: "Luka Modric",
    team: "hr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mateo_kovacic",
    name: "Mateo Kovacic",
    team: "hr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "mario_pasalic",
    name: "Mario Pasalic",
    team: "hr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "nikola_vlasic",
    name: "Nikola Vlasic",
    team: "hr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "luka_sucic",
    name: "Luka Sucic",
    team: "hr",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "martin_baturina",
    name: "Martin Baturina",
    team: "hr",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "kristijan_jakic",
    name: "Kristijan Jakic",
    team: "hr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "petar_sucic",
    name: "Petar Sucic",
    team: "hr",
    position: "MF",
    age: 21,
    status: "confirmed",
  },

  {
    id: "nikola_moro",
    name: "Nikola Moro",
    team: "hr",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "toni_fruk",
    name: "Toni Fruk",
    team: "hr",
    position: "MF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "ivan_perisic",
    name: "Ivan Perisic",
    team: "hr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "andrej_kramaric",
    name: "Andrej Kramaric",
    team: "hr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "ante_budimir",
    name: "Ante Budimir",
    team: "hr",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "marco_pasalic",
    name: "Marco Pasalic",
    team: "hr",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "petar_musa",
    name: "Petar Musa",
    team: "hr",
    position: "FW",
    age: 27,
    status: "confirmed",
  },

  {
    id: "igor_matanovic",
    name: "Igor Matanovic",
    team: "hr",
    position: "FW",
    age: 22,
    status: "confirmed",
  },

  // ======================
  // GANA
  // ======================

  // ======================
  // INGLATERRA
  // ======================

  {
    id: "jordan_pickford",
    name: "Jordan Pickford",
    team: "gb-eng",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "dean_henderson",
    name: "Dean Henderson",
    team: "gb-eng",
    position: "GK",
    age: null,
    status: "confirmed",
  },
  {
    id: "james_trafford",
    name: "James Trafford",
    team: "gb-eng",
    position: "GK",
    age: 22,
    status: "confirmed",
  },

  {
    id: "reece_james",
    name: "Reece James",
    team: "gb-eng",
    position: "DF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "ezri_konsa",
    name: "Ezri Konsa",
    team: "gb-eng",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "jarell_quansah",
    name: "Jarell Quansah",
    team: "gb-eng",
    position: "DF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "john_stones",
    name: "John Stones",
    team: "gb-eng",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "marc_guehi",
    name: "Marc Guehi",
    team: "gb-eng",
    position: "DF",
    age: 25,
    status: "confirmed",
  },

  {
    id: "dan_burn",
    name: "Dan Burn",
    team: "gb-eng",
    position: "DF",
    age: null,
    status: "confirmed",
  },

  {
    id: "nico_oreilly",
    name: "Nico O'Reilly",
    team: "gb-eng",
    position: "DF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "djed_spence",
    name: "Djed Spence",
    team: "gb-eng",
    position: "DF",
    age: 24,
    status: "confirmed",
  },

  {
    id: "tino_livramento",
    name: "Tino Livramento",
    team: "gb-eng",
    position: "DF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "declan_rice",
    name: "Declan Rice",
    team: "gb-eng",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "elliot_anderson",
    name: "Elliot Anderson",
    team: "gb-eng",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "kobbie_mainoo",
    name: "Kobbie Mainoo",
    team: "gb-eng",
    position: "MF",
    age: 20,
    status: "confirmed",
  },

  {
    id: "jordan_henderson",
    name: "Jordan Henderson",
    team: "gb-eng",
    position: "MF",
    age: null,
    status: "confirmed",
  },

  {
    id: "morgan_rogers",
    name: "Morgan Rogers",
    team: "gb-eng",
    position: "MF",
    age: 23,
    status: "confirmed",
  },

  {
    id: "jude_bellingham",
    name: "Jude Bellingham",
    team: "gb-eng",
    position: "MF",
    age: 22,
    status: "confirmed",
  },

  {
    id: "eberechi_eze",
    name: "Eberechi Eze",
    team: "gb-eng",
    position: "MF",
    age: 27,
    status: "confirmed",
  },

  {
    id: "harry_kane",
    name: "Harry Kane",
    team: "gb-eng",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "ivan_toney",
    name: "Ivan Toney",
    team: "gb-eng",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "ollie_watkins",
    name: "Ollie Watkins",
    team: "gb-eng",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "bukayo_saka",
    name: "Bukayo Saka",
    team: "gb-eng",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "marcus_rashford",
    name: "Marcus Rashford",
    team: "gb-eng",
    position: "FW",
    age: null,
    status: "confirmed",
  },

  {
    id: "anthony_gordon",
    name: "Anthony Gordon",
    team: "gb-eng",
    position: "FW",
    age: 24,
    status: "confirmed",
  },

  {
    id: "noni_madueke",
    name: "Noni Madueke",
    team: "gb-eng",
    position: "FW",
    age: 23,
    status: "confirmed",
  },

  // ======================
  // PANAMA
  // ======================
];
