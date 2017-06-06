$(document).ready(function(){
var userLang = navigator.language || navigator.userLanguage; 
if(userLang == "it-IT" || userLang == "it"){
	toItalian();
}else {
	toEnglish();
};

function toggleDesc(btn, desc){
	$(btn).click(function(){
		var project = $(btn).parent();
        $(desc).toggle("fast", function() {
        	project.scrollTop( project.height() );
        });
		$(btn).find("span").toggleClass("icon-plus-square icon-minus-square");
    });
};

toggleDesc("#crawlerMore", "#crawlerMoreTxt");
toggleDesc("#icdmMore", "#icdmMoreTxt");
toggleDesc("#solsysMore", "#solsysMoreTxt");
toggleDesc("#starStuffMore", "#starStuffMoreTxt");

});

function trTxt(id, string){
	$("#"+id).html(string);
};

//Translates to Italian
function toItalian(){
	$(".more").html('Dettagli <span class="icon-plus-square"></span>');
	trTxt("downloadID","<a title='Scarica una versione leggera del portfolio.' href='indexCompact.html' download='Mario Cannistrà - Web Developer e Programmatore - Portfolio.html'>Scarica il mio Portfolio <span class='icon-download'></span></a>");
	trTxt("htitleID","Mario Cannistrà - Web Developer e Programmatore - Portfolio");
	trTxt("profileID","Sono un programmatore e sviluppatore di siti Web di 25 anni. <br>Vivo in Italia, e parlo Inglese fluentemente.<br>Ho esperienza di sviluppo front-end, back-end, e di applicazioni per computer.");
	trTxt("skillsID","Abilità");
	trTxt("locationID","<span class='icon-map-marker'></span><p> Catanzaro, Italia</p>");
	trTxt("githubID",'<img src="img/GitHub-Mark-32px.png"> Il mio profilo GitHub');
	trTxt("icdmMoreTxt",
		"I Cecchini Del Mare è stato commissionato dall'\
		<a target='_blank' href='https://www.facebook.com/groups/cecchinidelmare/'>omonimo gruppo di Facebook.</a><br>\
		Il sito permete agli utenti di trasmettere la propria posizione e chattare con tutti gli utenti connessi.\
		Per fare queso, le coordinate e altre informazioni (nome, immagine del profilo...) di ogni utente sono aggiunte\
		a un database Mongo, e sono vengono in seguito utilizzate da ogni client per mostrare gli utenti sulla mappa\
		e nella lista di utenti online.<br>\
		La chat è fatta con Socket.IO, ed è abbastanza leggera e veloce. Permette agli utenti di inviare messaggi privati, \
		salva la cronologia della chat nei Cookies, ha funzionalità per controllare se il messaggio è stato inviato\
		correttamente, e quando viene aperta, mostra la distanza tra i due utenti se possibile.<br>\
		Lo sviluppo non ha presentato molti problemi tecnici, ma mi ha aiutato comunque a migliorare le mie abilità.");
	trTxt("crawlerMoreTxt","Crawler usa poco HTML e CSS, dato che la maggior parte del lavoro si è concetrato sulla \
		realizzazione del gioco.<br>\
		Ho iniziato con l'intenzione di realizzare una web-app su pagina singola molto semplice, ma in seguito\
		ho deciso di incentrare il sito sul gioco.<br>\
		Ho usato la funzionalità <code>ng-repeat</code> di Angular per realizzare la tabbella dei punteggi dinamicamente, \
		utilizzando i risultati ricevuti da MongoDB, e mostrare 10 risultati per ogni pagina che è anche generata dinamicamente \
		in base al numero totale di punteggi. \
		Uso anche <code>filter</code> di Angular per implementare una funzionalità di ricerca.<br>\
		Il gioco è sviluppato con la libreria p5js, ed è per la maggior parte una basilare versione di snake.\
		Una delle parti più complicate dello sviluppo è stata fare si che il cibo non comparisse sul serpente.\
		Ho risolto il problema aggiornando periodicamente un array con la posizione di ogni \
		sezione del serpente, e permettendo al cibo di comparire solo nelle sezioni della mappa non occupate dal serpente.");
	trTxt("solsysMoreTxt",
		"Questa è solo una semplice animazione che ho fatto per imparare a usare la <code>canvas</code> di HTML5.<br>\
		Ci ho lavorato quando stavo ancora imparando Javascript, quindi è molto basilare al momento,\
		ma penso di migliorarla in futuro, e aggiungere gli altri pianeti quando avrò del tempo libero.");
	trTxt("starStuffMoreTxt",
		"Ho iniziato a sviluppare questo gioco per imparare a usare Qt, ma ho acquisito molta esperienza di programmazione\
		in generale grazie a questo progetto.<br>\
		Ho sospeso lo sviluppo per il momento, da quando ho deciso di concentrarmi principalmente sullo sviluppo web\
		ma potrei continuare a lavorarci eventualmente.");
	trTxt("servicesID","Servizi");
	trTxt("wbID","Tecnologie web");
	trTxt("swID","Tecnologie Software");
	trTxt("otherID","Altro");
	trTxt("titleID","Sviluppatore Web e Programmatore");
	trTxt("projectsID","Progetti");
	trTxt("SolSysDescID","Animazione del Sistema Solare che ho realizzato usando la Canvas di HTML5 e Javascript.");
	trTxt("StStfDescID","Un gioco realizzato in C++ con Qt. Ancora incompleto e non in sviluppo attivo per il momento.");
	trTxt("crawlerDescID","Un clone del gioco Snake. Ho sviluppato questa pagina per dimostrare le tecnologie <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'> MEAN</a>.")
	trTxt("ICDMDescID","Un social network <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'> MEAN</a> per pescatori subacquei. Permette di condividere la propria posizine tramite geolocalizzazione, e di chattare.");
};

//Translates to English
function toEnglish(){
	$(".more").html('Details <span class="icon-plus-square"></span>');
	trTxt("downloadID","<a title='Downloads a light version of the portfolio.' href='indexCompact.html' download='Mario Cannistrà - Web Developer and Programmer - portfolio.html'>Download my Portfolio <span class='icon-download'></span></a>");
	trTxt("htitleID","Mario Cannistrà - Web Developer and Programmer - Portfolio");
	trTxt("profileID","I am a 25 year old Web Developer and Programmer. <br>I live in Italy, and I speak English fluently.<br>I have experience with front-end and back-end web development, and software development.");
	trTxt("skillsID","Skills");
	trTxt("locationID","<span class='icon-map-marker'></span><p> Catanzaro, Italy</p>");
	trTxt("githubID",'<img src="img/GitHub-Mark-32px.png"> My GitHub profile');
	trTxt("icdmMoreTxt",
		"I Cecchini Del Mare (Snipers of the Sea in Italian) was commissioned by \
		<a target='_blank' href='https://www.facebook.com/groups/cecchinidelmare/'>the Facebook group of the same name.</a><br>\
		The website allows people to share their current location, so that everyone connected will be able \
		to see them on the map, and chat with them.\
		To do this, the coordinates and other data (name, profile picture...) of each user are added to a Mongo database, \
		and they are retrived by each client to be displayed on the map, and in the list of online users.<br>\
		The chat is made with Socket.IO, and is fairly lightweight. It allows users to send private messages to eachother, \
		it saves the chat history in the cookies, has functionality to check if the message was sent correctly,\
		and when opened, shows the distance between the two users if possible.<br>\
		The development didn't present too many technical problems, but it helped me gain quite a lot of experience.");
	trTxt("crawlerMoreTxt",
		"Crawler uses little HTML and CSS, as most of the work went into the game, that's why it might not look very fancy.<br>\
		I started with the intention to make a very simple single-page web application, but \
		then I decided to make the game the focus of the page.<br>\
		I used Angular's <code>ng-repeat</code> functionality to build the highscores table dynamically, by retriving the \
		entries from a Mongo server, and displaying 10 entries for each page that is also generated dynamically \
		based on the total number of highscores.\
		I also use Angular's <code>filter</code> to implement a search function.<br>\
		The game is built with the p5js library, and is mostly a standard version of snake.\
		One of the most challenging parts of development was making it so when food spawned, it wouldn't spawn on \
		top of the snake, mostly because I was trying to find a clever solution. \
		I finally realized that sometimes, the best solution is the most obvious one, so I did it by periodically \
		updating an array with the position of each piece of the snake, \
		and allowing the food to spawn only on coordinates that are not occupied by the snake.");
	trTxt("solsysMoreTxt",
		"This is just a simple animation that I made in order to learn how to use HTML5's <code>canvas</code>.<br>\
		I made it when I was first learning Javascript, so it's very basic at the moment, but I plan to improve it\
		and add the rest of the planets when I have some free time.");
	trTxt("starStuffMoreTxt",
		"I started making this game to try my hand at Qt, but I've gained a lot of programming experience from this project.<br>\
		I suspended development for the foreseeable future, when I decided to focus on web development, but I might \
		resume working on this project at some point.");
	trTxt("servicesID","Services");
	trTxt("wbID","Website development");
	trTxt("swID","Software development");
	trTxt("otherID","Other");
	trTxt("titleID","Web Developer and Programmer");
	trTxt("projectsID","Projects");
	trTxt("SolSysDescID","Animation of the Solar system I made using HTML5's Canvas and Javascript.");
	trTxt("StStfDescID","A game made in C++ with Qt. Still incomplete and on hold for the moment.");
	trTxt("crawlerDescID","A clone of the game Snake. I made this to demonstrate the <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'>MEAN stack</a> technologies.");
	trTxt("ICDMDescID","A <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'>MEAN</a> social network for spearfishers. It allows users to share their current location through geolocation, and chat with eachother.");
};