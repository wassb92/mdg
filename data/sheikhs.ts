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
    youtubeIds: [
      "8GBwibnPjro",
      "2ZRabYBVmyg",
      "HZd9CM5nAIk",
      "SUPCgisYNvA",
      "Av2xdUN33V4",
      "b44A-Z0kt9Q",
      "74YsYva3Bt4",
      "G3-SrZfzFPc",
      "iGxsNsQ2muw",
      "m9fH2N9IM_E",
      "7DvKP4y6Dhg",
      "yWWycjzSe6U",
      "2i_dTCZaKnQ",
      "CmDlwg5tGS4",
      "RS4AbJl32f8",
      "D3zB-Y7nnYk",
      "EPxhPh8-FDI",
      "hCDkMrN7Tv4",
      "wwYapaUdDx8",
      "cTjwliSrdJU",
      "HREyTGVR45k",
      "6Rko-B6gRe4",
      "ZsJxuUGfoUk",
      "lzizdFW6s4c",
      "bkPyaZsHPQY",
      "I2xcxPUZsJM",
      "g90Aznd8z7Q",
      "MMu-v07qrhM",
      "3hJFdvs3LpU",
      "rW2YGF4u894",
      "cLR3s1BtDyc",
      "FMaO7fHCx1A",
      "gV2vChr_VPU",
      "qyJObD8BOFE",
      "MJy68BaP8ZI",
      "jq-ms7VNNPE",
      "ZZCrB3hc7XM",
      "0VeniMGSza8",
      "yTpt3ybDudQ",
      "_8lJmYEqYYM",
      "8cVbdDW8rPE",
      "4bXMuezoFdg",
      "VKWo-5u8x9E",
      "E9W2QjheEDI",
      "cZGDMG7g4Rg",
      "vyO-rdPiDak",
      "O8DTYaAkypQ",
      "i8LdoiODEIo",
      "moEuY-gwMFo",
      "_eeO-i3XHok",
      "JxR4XF9zKik",
      "IUXrokBQEME",
      "3WenbOU_m3U",
      "YOdDnJcr_qs",
      "gBpmr98fuxQ",
      "W65FYbv1-Fc",
      "LqhuHHqY-p8",
      "Vn2uhaUrKvA",
      "0adbGqlr7_Q",
      "rLwRXuziqh4",
      "5TSXqbYVicQ",
      "v5DsRzkWes4",
      "ZBVWBotrLfQ",
      "gCUPYJPGIGc",
      "UO9wnJxP-vk",
      "QBysOrRPwug",
      "VeHHFZ2Ce4c",
      "_px4VsE_NLE",
      "QeSQL7oT3D4",
      "mzckrT4PDA0",
      "lFFDEhgc8_M",
      "0DHX1b_oGDg",
      "wg6xMHktgAk",
      "T12n-5k7qQE",
      "sQruGwctt1U",
      "0gR0NeSx1A8",
      "HwAbQ50kGKc",
      "EcIDh9wGGNM",
      "BdXFDlFzzzo",
      "rvTWXshKfo4",
      "3PttvDLgYIM",
      "YNNSuVpey5g",
      "bCAK6T4Em_o",
      "ONgZTvKRR74",
      "-5INUeOQtbg",
      "Pfi-KhKp-Vc",
      "Ktm1Ti4npfo",
      "j-QHrdQbbhU",
      "DtRc2JnAv3M",
      "EeIZ-zuIa-s",
      "QG-6eorUxi8",
      "CH7TYyceJKU",
      "Qe-oEi8Yf3I",
      "4eO-xIcHkNI",
      "xyiChZIk6Xk",
      "q0hvs0rT0FU",
      "GdvOZBcYpvU",
      "Tblr1Cb9xkw",
      "wiZ3OmZataU",
      "K7MI0lYS8_o",
      "wq7eTSe19BI",
      "nag8Z4YE_jk",
      "3-95xiUGfwY",
      "0m4HMeFmE0g",
      "ikx9u5mhYwc",
      "7dXhZpXhzC0",
      "9XqtECzhaPk",
      "6pS4zl-BrtI",
      "9VYSsivajkk",
      "xMfpny3k1Rc",
      "6oF2LGjaua4",
      "rDd2PAXUI34",
      "MgGwx_db3WY",
      "B7cet4RdKGM",
    ],
  },
  {
    name: "Khalid Muhanna",
    youtubeIds: [
      "oSMB4bpX1Bo",
      "iQEt4aL6tlc",
      "-I4vfePUe7c",
      "4xW0Rl0anp8",
      "Lk4693EmN-8",
      "wAaMeAFclLQ",
      "ZcN-qssCCCc",
      "l6G7WuAJtYQ",
      "pUYdbFJ6ly8",
      "_NUBTnOSN4c",
      "JEYBKvHLCCc",
      "rTlVbtkSrUc",
      "7UKmxMISMY0",
      "srF5DW3dPu0",
      "9G1kFxZfSHU",
      "DDho-E6CV34",
      "-cnTuY-bMlM",
      "NkCbhis24fY",
      "t13WXJ2VWuw",
      "scxVb0-iy4I",
      "a6wF_RubRS8",
      "u24L03-IZ70",
      "ifldHzV-IFw",
      "EooVL1X3bRc",
      "1wRisSFEClg",
      "_5gyMfHDXkw",
      "I-gY3ncmpmE",
      "9zXt8p5CpvA",
      "ZXrH8KLBfEo",
      "DC6XqDKSBGM",
      "IGPxtKXoOGw",
      "4RJaDFc3pw4",
      "I-so7A2sTAw",
      "n3ZfEBVkVr4",
      "mn-351N49Ks",
      "csnu7p3mQdw",
      "KQ44LAcaVPE",
      "dUUnfxKhmY4",
      "aW9BkFzgAqM",
      "iiIjm-9DHt4",
      "Pl_JGaPOmUw",
      "GV6Q6iFeN4c",
      "_TdBkrbIwRQ",
      "MeKqb2cxX84",
      "-dsSI251Buo",
      "JJi80eLomaA",
      "1RnojUCiFPA",
      "78ZnRMVMbcI",
      "A4QXaEl1gKM",
      "_o_i3DQ4aQU",
      "PqgtJTbHXI8",
      "WzukoXKcC8I",
      "KzNkya6IsBU",
      "dtMAAXnO3xA",
      "6jNlBYgEXgw",
      "5V95oZIjb3o",
      "CWN2SD0ioDM",
      "PQCN5lyowoE",
      "0dFee5papdo",
      "_acdARcyh6w",
      "A9SM8h34WgU",
      "qrIJ352tUvg",
      "BJyQqkujW-Q",
      "dIOFFZNdP6k",
      "GRoD35SJiDM",
      "HcMWtY46ZU0",
      "oQXb_eFwoaE",
      "Jl7t9hfRiKA",
      "Np3TQnH-jvI",
      "4j0NQb8DxoM",
      "EZolEShQono",
      "RLRy5gYaK2U",
      "Y_Il6384ThE",
      "fmR-M7K4CxA",
      "GThpoFARY4E",
      "FS1MZbMTBB0",
      "hn_im_AH7gk",
      "AoQpJ4gYD3Q",
      "Lkg4QGRFkHA",
      "rBD5RNr1nnI",
      "JkjWbiW1jS4",
      "hoNALPsL_Lw",
      "BNLJwdBpQ34",
      "vgjnX3PVTSw",
      "QVcMpzazAjc",
      "CNhPYq7p2L4",
      "hcZ_85yLJgo",
      "wglJdhVAbbc",
      "etuqJvNV7fM",
      "aB5zf3-MSsA",
      "YhQcBRTOnP0",
      "De-Wxedozps",
      "JMz50zJ-pVw",
      "sq9r_JSng3s",
      "S15kKixQpiI",
      "X9YPFlqY6sQ",
      "QSNAIZ5ImSs",
      "qNskPRbCQmg",
      "aNMVCGq_nkM",
      "vEf3uEWsD20",
      "oU71He3Lxm4",
      "pEdqcTPemc8",
      "CZuD6LVEMAM",
      "vqeidQLW75c",
      "OOUtBkswakM",
      "BVPR8cMaoMY",
      "a-JoDAFqwHg",
      "JZGsMI30Sy0",
      "zzUcX6U1C3A",
      "nd47ckNNPgg",
      "QDZDxdf_9Bo",
      "dUeJhrouJUA",
      "0tugiiL9qiA",
      "6_j1eEpkZAU",
    ],
  },
  {
    name: "Yasser Al Dossari",
    youtubeIds: [],
  },
  {
    name: "Maher Al Muaiqly",
    youtubeIds: [],
  },
];

export default sheikhs;
