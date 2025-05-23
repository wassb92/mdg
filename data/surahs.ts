export interface Surah {
  name: string;
  arabic: string;
}

export const surahs: Surah[] = [
  { name: "Sourate Al-Fatiha", arabic: "سورة الفاتحة" },
  { name: "Sourate Al-Baqarah", arabic: "سورة البقرة" },
  { name: "Sourate Âl `Imrân", arabic: "سورة آل عمران" },
  { name: "Sourate An-Nisâ’", arabic: "سورة النساء" },
  { name: "Sourate Al-Mâ’idah", arabic: "سورة المائدة" },
  { name: "Sourate Al-An‘âm", arabic: "سورة الأنعام" },
  { name: "Sourate Al-A‘râf", arabic: "سورة الأعراف" },
  { name: "Sourate Al-Anfâl", arabic: "سورة الأنفال" },
  { name: "Sourate At-Tawbah", arabic: "سورة التوبة" },
  { name: "Sourate Yûnus", arabic: "سورة يونس" },
  { name: "Sourate Hûd", arabic: "سورة هود" },
  { name: "Sourate Yûsuf", arabic: "سورة يوسف" },
  { name: "Sourate Ar-Ra‘d", arabic: "سورة الرعد" },
  { name: "Sourate Ibrâhîm", arabic: "سورة إبراهيم" },
  { name: "Sourate Al-Hijr", arabic: "سورة الحجر" },
  { name: "Sourate An-Naĥl", arabic: "سورة النحل" },
  { name: "Sourate Al-Isrâ’", arabic: "سورة الإسراء" },
  { name: "Sourate Al-Kahf", arabic: "سورة الكهف" },
  { name: "Sourate Maryam", arabic: "سورة مريم" },
  { name: "Sourate Tâ-Hâ", arabic: "سورة طه" },
  { name: "Sourate Al-Anbiyâ’", arabic: "سورة الأنبياء" },
  { name: "Sourate Al-Ḥajj", arabic: "سورة الحج" },
  { name: "Sourate Al-Mu’minûn", arabic: "سورة المؤمنون" },
  { name: "Sourate An-Nûr", arabic: "سورة النور" },
  { name: "Sourate Al-Furqân", arabic: "سورة الفرقان" },
  { name: "Sourate Ash-Shu‘arâ’", arabic: "سورة الشعراء" },
  { name: "Sourate An-Naml", arabic: "سورة النمل" },
  { name: "Sourate Al-Qaṣaṣ", arabic: "سورة القصص" },
  { name: "Sourate Al-‘Ankabût", arabic: "سورة العنكبوت" },
  { name: "Sourate Ar-Rûm", arabic: "سورة الروم" },
  { name: "Sourate Luqmân", arabic: "سورة لقمان" },
  { name: "Sourate As-Sajdah", arabic: "سورة السجدة" },
  { name: "Sourate Al-Aḥzâb", arabic: "سورة الأحزاب" },
  { name: "Sourate Saba’", arabic: "سورة سبأ" },
  { name: "Sourate Fâtir", arabic: "سورة فاطر" },
  { name: "Sourate Yâ Sîn", arabic: "سورة يس" },
  { name: "Sourate As-Sâffât", arabic: "سورة الصافات" },
  { name: "Sourate Sâd", arabic: "سورة ص" },
  { name: "Sourate Az-Zumar", arabic: "سورة الزمر" },
  { name: "Sourate Ghâfir", arabic: "سورة غافر" },
  { name: "Sourate Fussilat", arabic: "سورة فصلت" },
  { name: "Sourate Ash-Shûrâ", arabic: "سورة الشورى" },
  { name: "Sourate Az-Zukhruf", arabic: "سورة الزخرف" },
  { name: "Sourate Ad-Dukhân", arabic: "سورة الدخان" },
  { name: "Sourate Al-Jâthiyah", arabic: "سورة الجاثية" },
  { name: "Sourate Al-Aĥqâf", arabic: "سورة الأحقاف" },
  { name: "Sourate Muĥammad", arabic: "سورة محمد" },
  { name: "Sourate Al-Fatĥ", arabic: "سورة الفتح" },
  { name: "Sourate Al-Ḥujurât", arabic: "سورة الحجرات" },
  { name: "Sourate Qâf", arabic: "سورة ق" },
  { name: "Sourate Adh-Dhâriyât", arabic: "سورة الذاريات" },
  { name: "Sourate At-Ṭûr", arabic: "سورة الطور" },
  { name: "Sourate An-Najm", arabic: "سورة النجم" },
  { name: "Sourate Al-Qamar", arabic: "سورة القمر" },
  { name: "Sourate Ar-Raĥmân", arabic: "سورة الرحمن" },
  { name: "Sourate Al-Wâqi‘ah", arabic: "سورة الواقعة" },
  { name: "Sourate Al-Ḥadîd", arabic: "سورة الحديد" },
  { name: "Sourate Al-Mujâdilah", arabic: "سورة المجادلة" },
  { name: "Sourate Al-Ḥashr", arabic: "سورة الحشر" },
  { name: "Sourate Al-Mumtaĥanah", arabic: "سورة الممتحنة" },
  { name: "Sourate As-Saff", arabic: "سورة الصف" },
  { name: "Sourate Al-Jumu‘ah", arabic: "سورة الجمعة" },
  { name: "Sourate Al-Munâfiqûn", arabic: "سورة المنافقون" },
  { name: "Sourate At-Taghâbun", arabic: "سورة التغابن" },
  { name: "Sourate AṬ-Ṭalâq", arabic: "سورة الطلاق" },
  { name: "Sourate At-Tahrîm", arabic: "سورة التحريم" },
  { name: "Sourate Al-Mulk", arabic: "سورة الملك" },
  { name: "Sourate Al-Qalam", arabic: "سورة القلم" },
  { name: "Sourate Al-Ĥâqqah", arabic: "سورة الحاقة" },
  { name: "Sourate Al-Ma‘ârij", arabic: "سورة المعارج" },
  { name: "Sourate Nûĥ", arabic: "سورة نوح" },
  { name: "Sourate Al-Jinn", arabic: "سورة الجن" },
  { name: "Sourate Al-Muzzammil", arabic: "سورة المزمل" },
  { name: "Sourate Al-Muddaththir", arabic: "سورة المدثر" },
  { name: "Sourate Al-Qiyâmah", arabic: "سورة القيامة" },
  { name: "Sourate Al-Insân", arabic: "سورة الإنسان" },
  { name: "Sourate Al-Mursalât", arabic: "سورة المرسلات" },
  { name: "Sourate An-Naba’", arabic: "سورة النبأ" },
  { name: "Sourate An-Nâzi‘ât", arabic: "سورة النازعات" },
  { name: "Sourate ‘Abasa", arabic: "سورة عبس" },
  { name: "Sourate At-Takwîr", arabic: "سورة التكوير" },
  { name: "Sourate Al-Infiţâr", arabic: "سورة الانفطار" },
  { name: "Sourate Al-Muţaffifîn", arabic: "سورة المطففين" },
  { name: "Sourate Al-Inshiqâq", arabic: "سورة الانشقاق" },
  { name: "Sourate Al-Burûj", arabic: "سورة البروج" },
  { name: "Sourate At-Ţâriq", arabic: "سورة الطارق" },
  { name: "Sourate Al-A‘lâ", arabic: "سورة الأعلى" },
  { name: "Sourate Al-Ghâshiyah", arabic: "سورة الغاشية" },
  { name: "Sourate Al-Fajr", arabic: "سورة الفجر" },
  { name: "Sourate Al-Balad", arabic: "سورة البلد" },
  { name: "Sourate Ash-Shams", arabic: "سورة الشمس" },
  { name: "Sourate Al-Layl", arabic: "سورة الليل" },
  { name: "Sourate Ad-Duḥā", arabic: "سورة الضحى" },
  { name: "Sourate Ash-Sharḥ", arabic: "سورة الشرح" },
  { name: "Sourate At-Tīn", arabic: "سورة التين" },
  { name: "Sourate Al-‘Alaq", arabic: "سورة العلق" },
  { name: "Sourate Al-Qadr", arabic: "سورة القدر" },
  { name: "Sourate Al-Bayyinah", arabic: "سورة البينة" },
  { name: "Sourate Az-Zalzalah", arabic: "سورة الزلزلة" },
  { name: "Sourate Al-‘Adiyât", arabic: "سورة العاديات" },
  { name: "Sourate Al-Qâri‘ah", arabic: "سورة القارعة" },
  { name: "Sourate At-Takâthur", arabic: "سورة التكاثر" },
  { name: "Sourate Al-‘Asr", arabic: "سورة العصر" },
  { name: "Sourate Al-Humazah", arabic: "سورة الهمزة" },
  { name: "Sourate Al-Fîl", arabic: "سورة الفيل" },
  { name: "Sourate Quraish", arabic: "سورة قريش" },
  { name: "Sourate Al-Mâ‘ûn", arabic: "سورة الماعون" },
  { name: "Sourate Al-Kawthar", arabic: "سورة الكوثر" },
  { name: "Sourate Al-Kâfirûn", arabic: "سورة الكافرون" },
  { name: "Sourate An-Naşr", arabic: "سورة النصر" },
  { name: "Sourate Al-Masad", arabic: "سورة المسد" },
  { name: "Sourate Al-Iḫlâş", arabic: "سورة الإخلاص" },
  { name: "Sourate Al-Falaq", arabic: "سورة الفلق" },
  { name: "Sourate An-Naş", arabic: "سورة الناس" },
];

/*
Al - Fatiha
Al-Baqarah
Âl `Imrân
An-Nisâ’
Al-Mâ’idah
Al-An‘âm
Al-A‘râf
Al-Anfâl
At-Tawbah
Yûnus
Hûd
Yûsuf
Ar-Ra‘d
Ibrâhîm
Al-Hijr
An-Naĥl
Al-Isrâ’
Al-Kahf
Maryam
Tâ-Hâ
Al-Anbiyâ’
Al-Ḥajj
Al-Mu’minûn
An-Nûr
Al-Furqân
Ash-Shu‘arâ’
An-Naml
Al-Qaṣaṣ
Al-‘Ankabût
Ar-Rûm
Luqmân
As-Sajdah
Al-Aḥzâb
Saba’
Fâtir
Yâ Sîn
As-Sâffât
Sâd
Az-Zumar
Ghâfir
Fussilat
Ash-Shûrâ
Az-Zukhruf
Ad-Dukhân
Al-Jâthiyah
Al-Aĥqâf
Muĥammad
Al-Fatĥ
Al-Ḥujurât
Qâf
Adh-Dhâriyât
At-Ṭûr
An-Najm
Al-Qamar
Ar-Raĥmân
Al-Wâqi‘ah
Al-Ḥadîd
Al-Mujâdilah
Al-Ḥashr
Al-Mumtaĥanah
As-Saff
Al-Jumu‘ah
Al-Munâfiqûn
At-Taghâbun
AṬ-Ṭalâq
At-Tahrîm
Al-Mulk
Al-Qalam
Al-Ĥâqqah
Al-Ma‘ârij
Nûĥ
Al-Jinn
Al-Muzzammil
Al-Muddaththir
Al-Qiyâmah
Al-Insân
Al-Mursalât
An-Naba’
An-Nâzi‘ât
‘Abasa
At-Takwîr
Al-Infiţâr
Al-Muţaffifîn
Al-Inshiqâq
Al-Burûj
At-Ţâriq
Al-A‘lâ
Al-Ghâshiyah
Al-Fajr
Al-Balad
Ash-Shams
Al-Layl
Ad-Duḥā
Ash-Sharḥ
At-Tīn
Al-‘Alaq
Al-Qadr
Al-Bayyinah
Az-Zalzalah
Al-‘Adiyât
Al-Qâri‘ah
At-Takâthur
Al-‘Asr
Al-Humazah
Al-Fîl
Quraish
Al-Mâ‘ûn
Al-Kawthar
Al-Kâfirûn
An-Naşr
Al-Masad
Al-Iḫlâş
Al-Falaq
An-Naş
*/
