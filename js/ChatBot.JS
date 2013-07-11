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
	document.getElementById("phrase").value += "You: " + document.getElementById("you").value + "\n" + "Bot-Chat: " + RndPhrase[Math.floor(Math.random() * RndPhrase.length)] + "\n";
}

function bot_init()
{
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
		var ieversion=new Number(RegExp.$1);
		if (ieversion>=8)
		document.getElementById("chat-log").value += "Bot-Init: You using IE8+ browser" + "\n";
		else if (ieversion>=7)
		document.getElementById("chat-log").value += "Bot-Init: You using IE7x browser" + "\n";
		else if (ieversion>=6)
		document.getElementById("chat-log").value += "Bot-Init: You using IE6x browser" + "\n";
		else if (ieversion>=5)
		document.getElementById("chat-log").value += "Bot-Init: You using IE5x browser" + "\n";
	}
	else
	{
		document.getElementById("chat-log").value += "Bot-Init: Bot Loaded" + "\n";
	}
}