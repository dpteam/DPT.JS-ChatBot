function getLanguage() {
				var language;
				
				if(document.getElementById("select-lang").options[1] == "en") {
								language =  en;
								return language;
				}
				else {
								language = ru;
								return language;
				}
}

function getPhrase() {
				if(getLanguage() == "ru") {
								i = Math.floor(Math.random() * RndPhraseRu.length);
								return RndPhraseRu[i];
				}
				else {
								i = Math.floor(Math.random() * RndPhraseEn.length);
								return RndPhraseEn[i];
				}
}

var RndPhraseRu = ["Привет","Не знаю","Да","Нет","Ну-ну...","Может быть",
"Серьезно?","Когда?","Как?","Где?","O_o","Ээээ...","Да пошел ты!,
"Да?","???","Хватит","Не надо","Хорошо","Зачем?",
"Не понимаю","Всмысле?","Да ты что!","Я думаю..."];

var RndPhraseEn = ["Hello!","I don't know","Yes","No","Yep-yep","Maybe",
"Seriously?","When?","How?","Where?","O_o","Emmm...","Fuck yourself!",
"Yes?","Stop!","Yes?","???","I dunno, lol","Good!","Why?",
"I'm don't understand", "What do you mean?","You are crazy!"];
