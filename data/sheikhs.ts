import { Surah } from "@/data/surahs";

export interface SheikhVideo {
  name: string;
  youtubeIds: string[]; // one per surah in `surahs`
  localRecitations?: { title: string; url: string }[];
}

const sheikhs: SheikhVideo[] = [
  {
    name: "Saad Al Ghamidi",
    youtubeIds: [
      "j39OP4gm0bQ", // Al - Fatiha
      "GeXLh-59HpI", // Al-Baqarah
      "_eL-X-cSmyQ", // Âl `Imrân
      "ih8la8ndGPE", // An-Nisâ’
      "3lABmxzvY7k", // Al-Mâ’idah
      "WE7fOkG0xH8", // Al-An‘âm
      "pnhOZhG-eFg", // Al-A‘râf
      "tkTjmHDolwo", // Al-Anfâl
      "rdY5-9s2Vg0", // At-Tawbah
      "nZNTDKvXTOI", // Yûnus
      "fw8pwZuXGGk", // Hûd
      "JlBd6kxuj1A", // Yûsuf
      "AvPrUHx9I5c", // Ar-Ra‘d
      "sn0cgGj3NdI", // Ibrâhîm
      "zKFuo_NV4nA", // Al-Hijr
      "BToQREa8A4I", // An-Naĥl
      "3LiIHiWXOBI", // Al-Isrâ’
      "YVMOV2jtd4I", // Al-Kahf
      "vzVBItr08MM", // Maryam
      "WFVE26Q7Kpg", // Tâ-Hâ
      "CXiXua0d95w", // Al-Anbiyâ’
      "bf_K_a5_Qb8", // Al-Ḥajj
      "pTnMsp2MWk0", // Al-Mu’minûn
      "Drnh2MntI6o", // An-Nûr
      "le9ZpaPsLN4", // Al-Furqân
      "648GY6nTWwE", // Ash-Shu‘arâ’
      "1xz9bZB5OTQ", // An-Naml
      "GJ-iLWBepzs", // Al-Qaṣaṣ
      "35IfSQ5Oxnw", // Al-‘Ankabût
      "0bpBCCRVQCo", // Ar-Rûm
      "pK1LebYWcOo", // Luqmân
      "nS14HXkt3xc", // As-Sajdah
      "o289cUABsX8", // Al-Aḥzâb
      "-8ILxMIyPGs", // Saba’
      "qVd0K-8UfkM", // Fâtir
      "-v5Fyd-Nnho", // Yâ Sîn
      "_P5BIFf4qvQ", // As-Sâffât
      "VwdH7EMLTVY", // Sâd
      "qPF7bfz0dDQ", // Az-Zumar
      "awElwKIyyhg", // Ghâfir
      "Ezf2T51nDFc", // Fussilat
      "w6S9ngGBJ50", // Ash-Shûrâ
      "a7mUtFXCHyQ", // Az-Zukhruf
      "etW8nqcurik", // Ad-Dukhân
      "ThzpreqrZYs", // Al-Jâthiyah
      "B9bUgScjhCY", // Al-Aĥqâf
      "Pe3KDUUboOs", // Muĥammad
      "xNpSmt1jQfU", // Al-Fatĥ
      "kqX4uIKzkZY", // Al-Ḥujurât
      "gwk96jnEvhg", // Qâf
      "mjQENbH3QNw", // Adh-Dhâriyât
      "VZuH9wRWaJo", // At-Ṭûr
      "PwT_6NHWvhk", // An-Najm
      "qgrdI69GWhw", // Al-Qamar
      "SaKsbcG3jFQ", // Ar-Raĥmân
      "3dcjz2J1Y4k", // Al-Wâqi‘ah
      "f_hu0C5DgJQ", // Al-Ḥadîd
      "nbsAYJKWCeY", // Al-Mujâdilah
      "_6OZ8H4smBY", // Al-Ḥashr
      "S4Xi-Xqh8Y4", // Al-Mumtaĥanah
      "5lxPFBbJxMg", // As-Saff
      "mXz-BrZVvZg", // Al-Jumu‘ah
      "dUS43Cx-6sc", // Al-Munâfiqûn
      "Ng-jsRjO0CU", // At-Taghâbun
      "FVUoFurD8IE", // AṬ-Ṭalâq
      "Ieau4GUKitw", // At-Tahrîm
      "pIVtTtc-29s", // Al-Mulk
      "9v5xEpgZCLY", // Al-Qalam
      "tNa6_5Ue_o8", // Al-Ĥâqqah
      "9ARzARis7Wo", // Al-Ma‘ârij
      "EIuqaZ_nCtY", // Nûĥ
      "nlXSlja2P_U", // Al-Jinn
      "MroGoFiJdd8", // Al-Muzzammil
      "YGYtpEao6W8", // Al-Muddaththir
      "MEKk0CYLupQ", // Al-Qiyâmah
      "ggoCDMC0H4U", // Al-Insân
      "gQ_y-Jnr-cw", // Al-Mursalât
      "jAfeiMx2lO8", // An-Naba’
      "06Kkt2i2eZY", // An-Nâzi‘ât
      "Lxi9CW-F1fI", // ‘Abasa
      "sqrtSblpNJ4", // At-Takwîr
      "SNLCbNcZ1lU", // Al-Infiţâr
      "8YIbL3QToY4", // Al-Muţaffifîn
      "CJBiujWRuCA", // Al-Inshiqâq
      "AGRalzzdWZg", // Al-Burûj
      "ysd1TvJN9Iw", // At-Ţâriq
      "K0s33GVDLCg", // Al-A‘lâ
      "Et1EuXXYSFk", // Al-Ghâshiyah
      "sJF21xmxeMg", // Al-Fajr
      "JkEh21pK2IU", // Al-Balad
      "_DObjfkuUcE", // Ash-Shams
      "-nLSKEjBK20", // Al-Layl
      "8p1qgw0nQkQ", // Ad-Duḥā
      "0-5cThwH0MA", // Ash-Sharḥ
      "E2SwTJ0hveI", // At-Tīn
      "Sk5m4ziRk_o", // Al-‘Alaq
      "D5IXZm0osAs", // Al-Qadr
      "OWn2qIb7_KQ", // Al-Bayyinah
      "yM4bT3rjN5A", // Az-Zalzalah
      "4RAySCFwRT4", // Al-‘Adiyât
      "-55yecr3Yrc", // Al-Qâri‘ah
      "tQrXNgcaico", // At-Takâthur
      "OuSnf3__EjA", // Al-‘Asr
      "NdrXLoJZM3E", // Al-Humazah
      "QNw0zMwMFVw", // Al-Fîl
      "F9jJdZaOGkA", // Quraish
      "LYzcBDXkyL8", // Al-Mâ‘ûn
      "fzzbwcCY-do", // Al-Kawthar
      "eW-G8b0lUnE", // Al-Kâfirûn
      "yBiMAq4DWKM", // An-Naşr
      "thD0c3eDZtg", // Al-Masad
      "Qz1vsDgOVnk", // Al-Iḫlâş
      "jOuhf3G5Gzw", // Al-Falaq
      "CsF-4HMN9NY", // An-Naş
    ],
  },
  {
    name: "Khalifa Tunaiji",
    youtubeIds: [],
    localRecitations: [
      { title: "Sourate Yusuf", url: "/recitations/tunaiji_yusuf.mp3" },
    ],
  },
  {
    name: "Khalid Muhanna",
    youtubeIds: [],
    localRecitations: [
      { title: "Sourate Maryam", url: "/recitations/muhanna_maryam.mp3" },
    ],
  },
  {
    name: "Yasser Al Dossari",
    youtubeIds: [],
    localRecitations: [
      { title: "Sourate Yasin", url: "/recitations/dossari_yasin.mp3" },
    ],
  },
  {
    name: "Maher Al Muaiqly",
    youtubeIds: [],
    localRecitations: [
      { title: "Sourate Ar-Rahman", url: "/recitations/muaiqly_rahman.mp3" },
    ],
  },
];

export default sheikhs;
