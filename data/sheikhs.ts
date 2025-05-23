import { Surah } from "@/data/surahs";

export interface SheikhVideo {
  name: string;
  youtubeIds: string[]; // one per surah in `surahs`
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
    youtubeIds: [
      "rg_j10KsFUU",
      "LQpbCjMvbOs",
      "5Qy2vdK1F7I",
      "tbB4mxsU8jQ",
      "5pdqNJts3Tw",
      "pzGd5ql-ieM",
      "NSxwPGpsghk",
      "hgg6JpqLOWY",
      "mFsufOvbEUM",
      "-jD1HNsWoPo",
      "N-g-jY-284U",
      "H2pE_Xf131k",
      "Zbeo-TA_WhE",
      "3LDhg8AWu0E",
      "5NGuwYX1lHE",
      "toB8wd9lU4U",
      "sIAgop2K3GA",
      "VZdghpSsE0o",
      "eyvA4jOHkwg",
      "rQ3HkASq1AA",
      "rL446JpSwfQ",
      "CygeTWhPiCI",
      "wkdY5ioRXuU",
      "W4scKns1i0s",
      "qdddmKv4s-A",
      "TRyuF6bbvxI",
      "IBnp1QX1inc",
      "jscOyITDU9w",
      "A_2SEBk30AE",
      "q-jaeJa1APw",
      "3DP-c_eNR8k",
      "Er-ssCi7b5c",
      "Vg9uIhSwpU8",
      "bclcdv7NA4I",
      "GWpt5FlKzDE",
      "EnLpw-I4XV4",
      "CQ-hRh_Dm10",
      "JDWmFm8PLjo",
      "Rwwr7MZAQMI",
      "oIMu3y_5dCg",
      "YlfnMvsMS4s",
      "Pyz47s1DYFY",
      "r-fb5Efo7IA",
      "Luk5kgUomhA",
      "oU99v0xvVUc",
      "7QvkLf_oMQU",
      "uoU5vEa_dr0",
      "R8pZQXIq8Ws",
      "kfd_z-lP2kw",
      "tIN3kWqr5K8",
      "2hDKZ8h-6t4",
      "YUpwWhoTpyU",
      "ZTQMChOWzhE",
      "s_l0WT85NPU",
      "Acp8G4tS-q8",
      "PY4rxrMk8uQ",
      "tOfItYvtw2E",
      "i4B0b-ggxMk",
      "1d7fgzKxG04",
      "5FinVzKnkYY",
      "oYE_hd6x_BM",
      "u-nGQ_ott6I",
      "kr_PYYZRFUI",
      "kdmCjQ8oOYE",
      "Ti2DekVlRXE",
      "4i58cnFtW5o",
      "aqQjfx6ZpaU",
      "7aOO6O3Bmfc",
      "-wSo4Cdh8vg",
      "hyrWHe9Cjas",
      "PFcG0YB9Zlk",
      "FcSDzKcQIMs",
      "wDZ8ElbY3VE",
      "-PodJfpyUXw",
      "E49KdiTQnNA",
      "ZJsuqXuNS6w",
      "YbQeIQ_PjYM",
      "DnaOWu9DERs",
      "d4mB89DTI-4",
      "Fr4XyZwhAFc",
      "hl5mXyotqOk",
      "uF3truqEwxg",
      "TotrhQCIiHs",
      "Si8bOSKZ_OI",
      "cV0Mx-NWMCI",
      "eaO6lIuI83o",
      "RQ_e9oppwLM",
      "FNBQkVhp9Go",
      "_pc3M5Yot5Y",
      "D1E8OZsgv2I",
      "LP3fohEMA3E",
      "K3jayIYopew",
      "8XKH6Zx6xjU",
      "jzqrCtMvwZQ",
      "zA1NJiQth-I",
      "Au9ax0Y1czY",
      "KcFaUTVcX_Q",
      "UtsspAWuqXw",
      "8NiOQm_h32o",
      "dfCeuV6IfUI",
      "60cQWobOVKY",
      "Nb8Yk-s2j1Q",
      "ghTmalQeZ1g",
      "rz72GnUZlcw",
      "EccFtv3IOOs",
      "d95tyz2F1Ps",
      "De-i4b3iHoU",
      "GAxuilwKFv8",
      "UOpEbT9OjOs",
      "62uG5eWkYFw",
      "Q1t8D2A26d4",
      "rkgjEe3t7yc",
      "laOk-WHGq3g",
      "fO0cFyBYsZM",
    ],
  },
  {
    name: "Maher Al Muaiqly",
    youtubeIds: [
      "fILuC-QfdVU",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "doe6TuaPBaI",
      "gbYIxIFJlEQ",
      "8bYuPMuBfto",
      "-4Dl-vatdHQ",
      "Fm62meAK6tM",
      "wX4Y6G5WJc0",
      "cXqHT-I5OgE",
      "Hb963LQsnu4",
      "xkbU_BhTXdE",
      "NUHCJpiQyeQ",
      "3-0s8JfDunM",
      "I3Jh5zz7ePQ",
      "novnqsj7UNw",
      "D5YzFhmQPQ8",
      "9QFbNRB3bZY",
      "FvcIIYBDO6M",
      "lDbbep88IXI",
      "7NlyOwGlN_A",
      "DA_0ahFBB-g",
      "4A1TruTMGY4",
      "kNnJEzgxjSQ",
      "ORcWaJGF9wU",
      "4WeQ08JW3do",
      "OdGSRhp-RV0",
      "zcO0ath0sac",
      "whZyaLThNKk",
      "W33EEpawrs4",
      "LTVSIEBjVc8",
      "4K6JSFiVtMo",
      "fdUcH0OgoEI",
      "hLdSpGZHu38",
      "X2XCZ8WR3oY",
      "RgogOMm6yZU",
      "a3QaIPkpsOw",
      "apURvGz5ylM",
      "GexZvKJAZ9s",
      "V3dg9coNjTM",
      "vvTLw4LCdQc",
      "GfTFo7BQ2ro",
      "I7nK8w1_7bg",
      "JHtjPhRJ-ps",
      "f6qFsEBGi3I",
      "hbYIXZDnD3s",
      "HmegNIOA94U",
      "jCvsJNXB4uE",
      "C1lkUSopeBQ",
      "Kr6ukKY-pdM",
      "M_VDg1dxV_Q",
      "Wu7_9GXXoko",
      "lQ_99MF2_bo",
      "2nTlHimG2uc",
      "P2EKHy5sHJk",
      "BLaUpWH4rvQ",
      "FXVw_25lawQ",
      "gZ89vlejQgs",
      "fKjwzhPelrg",
      "9PUxZ4fpiLs",
      "vgNlh7_VGHE",
      "DCQxTN4M0ng",
      "fVAbpMuJzBY",
      "M6HDaz0T4Ow",
      "gvGYk4RRz18",
      "JtSvrM8glrA",
      "oBLCU8Kqrvc",
      "RpVbtsJMFaE",
      "UtNmpLp4c4c",
      "hG4YS-ZhZvM",
      "3TSmtyCdtzM",
      "Xjpm2B_hYpU",
      "xnNcfK2Zow4",
      "Y_bjerB40q0",
      "ztd3DsnRwf0",
      "jmAYZw751nE",
      "lFlXlKtPnCk",
      "wrCmXsD6iuU",
      "ygp8p9mcNRk",
      "U7e7LAALHK4",
      "aUku0BzSusU",
      "kDz_-xnT0Ms",
      "2P0fdwyTLkM",
      "2ZmrBdkYhbo",
      "qoQue4EH_bs",
      "R7Xj1FYXI4Y",
      "t9Lj4D6FMTs",
      "L6grS0C7WVM",
      "9waeguXqlOE",
      "JYU4JMnyYL4",
      "_pWTyT8NHoY",
      "Py_eW9W-Wj4",
      "KwuYLyW8GTY",
      "Mdoe72uUyZw",
      "XHBGeB-RUtU",
      "_bO6K86Aa-I",
      "nSu-dvth_Xo",
      "NZlf75cOe50",
      "pR5KEo93EKQ",
      "AiMUoTLeicQ",
      "8GXdVmpwUZA",
      "Q-RQPNfTNnI",
      "BZPGuSGCV58",
      "rfyMizMjQC8",
    ],
  },
];

export default sheikhs;
