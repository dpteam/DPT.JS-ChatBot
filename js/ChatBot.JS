var RndPhraseRU = new Array(23);
for (var i = 0; i < RndPhraseRU.length; i++)

RndPhraseRU[i]  = Math.floor(Math.random() * (RndPhraseRU.length));

var RndPhraseRu = ["Привет","Не знаю","Да","Нет","Ну-ну...","Может быть",
"Серьезно?","Когда?","Как?","Где?","O_o","Ээээ...","Да пошел ты!,
"Да?","???","Хватит","Не надо","Хорошо","Зачем?",
"Не понимаю","Всмысле?","Да ты что!","Я думаю..."];

var RndPhraseEn = new Array(23);
for (var i = 0; i < RndPhraseEn.length; i++)

var RndPhraseEn = ["Hello!","I don't know","Yes","No","Yep-yep","Maybe",
"Seriously?","When?","How?","Where?","O_o","Emmm...","Fuck yourself!",
"Yes?","Stop!","Yes?","???","I dunno, lol","Good!","Why?",
"I'm don't understand", "What do you mean?","You are crazy!"];

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
