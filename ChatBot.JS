var RndPhrase = new Array(23);
for (var i = 0; i < RndPhrase.length; i++)
RndPhrase[i]  = Math.floor(Math.random() * (RndPhrase.length));
RndPhrase[0]  = "Привет";
RndPhrase[1]  = "Не знаю";
RndPhrase[2]  = "Да";
RndPhrase[3]  = "Нет";
RndPhrase[4]  = "Ну-ну...";
RndPhrase[5]  = "Может быть";
RndPhrase[6]  = "Серьезно?";
RndPhrase[7]  = "Когда?";
RndPhrase[8]  = "Как?";
RndPhrase[9]  = "Где?";
RndPhrase[10] = "O_o";
RndPhrase[11] = "Ээээ...";
RndPhrase[12] = "Да пошел ты!";
RndPhrase[13] = "Да?";
RndPhrase[14] = "Хватит";
RndPhrase[15] = "???";
RndPhrase[16] = "Не надо.";
RndPhrase[17] = "Хорошо";
RndPhrase[18] = "Зачем?";
RndPhrase[19] = "Не понимаю...";
RndPhrase[20] = "В смысле?";
RndPhrase[21] = "Да ты что!";
RndPhrase[22] = "Я думаю...";

function say()
{
document.getElementById("phrase").value += "Вы:" + document.getElementById("you").value + "\n" + "Бот: " + RndPhrase[Math.floor(Math.random() * RndPhrase.length)] + "\n";
}
