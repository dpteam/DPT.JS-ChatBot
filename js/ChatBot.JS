var RndPhraseRU = new Array(23);
for (var i = 0; i < RndPhraseRU.length; i++)
RndPhraseRU[i]  = Math.floor(Math.random() * (RndPhraseRU.length));
RndPhraseRU[0]  = "Привет";
RndPhraseRU[1]  = "Не знаю";
RndPhraseRU[2]  = "Да";
RndPhraseRU[3]  = "Нет";
RndPhraseRU[4]  = "Ну-ну...";
RndPhraseRU[5]  = "Может быть";
RndPhraseRU[6]  = "Серьезно?";
RndPhraseRU[7]  = "Когда?";
RndPhraseRU[8]  = "Как?";
RndPhraseRU[9]  = "Где?";
RndPhraseRU[10] = "O_o";
RndPhraseRU[11] = "Ээээ...";
RndPhraseRU[12] = "Да пошел ты!";
RndPhraseRU[13] = "Да?";
RndPhraseRU[14] = "Хватит";
RndPhraseRU[15] = "???";
RndPhraseRU[16] = "Не надо.";
RndPhraseRU[17] = "Хорошо";
RndPhraseRU[18] = "Зачем?";
RndPhraseRU[19] = "Не понимаю...";
RndPhraseRU[20] = "Всмысле?";
RndPhraseRU[21] = "Да ты что!";
RndPhraseRU[22] = "Я думаю...";

var RndPhraseEN = new Array(23);
for (var i = 0; i < RndPhraseEN.length; i++)
RndPhraseEN[i]  = Math.floor(Math.random() * (RndPhraseEN.length));
RndPhraseEN[0]  = "Hello";
RndPhraseEN[1]  = "I'm don't know";
RndPhraseEN[2]  = "Yes";
RndPhraseEN[3]  = "No";
RndPhraseEN[4]  = "Yep-Yep...";
RndPhraseEN[5]  = "May be";
RndPhraseEN[6]  = "Seriously?";
RndPhraseEN[7]  = "When?";
RndPhraseEN[8]  = "How?";
RndPhraseEN[9]  = "Where?";
RndPhraseEN[10] = "O_o";
RndPhraseEN[11] = "Emmm...";
RndPhraseEN[12] = "Fuck you!";
RndPhraseEN[13] = "Yes?";
RndPhraseEN[14] = "Stop!";
RndPhraseEN[15] = "???";
RndPhraseEN[16] = "Dont!";
RndPhraseEN[17] = "Good";
RndPhraseEN[18] = "Why?";
RndPhraseEN[19] = "I'm can't understand...";
RndPhraseEN[20] = "What you Mean?";
RndPhraseEN[21] = "Are you crazy!";
RndPhraseEN[22] = "I thinking...";

function init() {
    // выходим, если функция уже выполнялась
    if (arguments.callee.done) return;

    // устанавливаем флаг, чтобы функция не исполнялась дважды
    arguments.callee.done = true;

    // что-нибудь делаем
	langval = document.getElementById("polyglot-language-options");
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
		else
		document.getElementById("chat-log").value += "Bot-Init: Bot Loaded" + "\n";
	}
	else
	{
		document.getElementById("chat-log").value += "Bot-Init: Bot Loaded" + "\n";
	}
};

/* для Mozilla/Firefox/Opera 9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}

/* для Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=\"__ie_onload\" defer=\"defer\" src=\"javascript:void(0)\"><\/script>");

var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
    if (this.readyState == "complete") {
	init(); // вызываем обработчик для onload
    }
};
/*@end @*/

/* для Safari */
if (/WebKit/i.test(navigator.userAgent)) { // условие для Safari
    var _timer = setInterval(function() {
	if (/loaded|complete/.test(document.readyState)) {
	    clearInterval(_timer);
	    init(); // вызываем обработчик для onload
	}
    }, 10);
}

/* для остальных браузеров */
window.onload = init;

function say()
{
	if(langval !== null && langval.value == "ru")
	{
		document.getElementById("phrase").value += "Ты: " + document.getElementById("you").value + "\n" + "Чат-Бот: " + RndPhraseRU[Math.floor(Math.random() * RndPhraseRU.length)] + "\n";
	}
	if(langval !== null && langval.value == "en")
	{
		document.getElementById("phrase").value += "You: " + document.getElementById("you").value + "\n" + "Bot-Chat: " + RndPhraseEN[Math.floor(Math.random() * RndPhraseEN.length)] + "\n";
	}
	else if(langval == null)
	{
		document.getElementById("chat-log").value += "Bot-Error: Language not Defined" + "\n";
	}
}
