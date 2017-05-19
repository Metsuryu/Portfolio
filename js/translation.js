$(document).ready(function(){
var userLang = navigator.language || navigator.userLanguage; 
if(userLang == "it-IT" || userLang == "it"){
	toItalian();
}else {
	toEnglish();
};

function toggleDesc(btn, desc, span){
	$(btn).click(function(){
        $(desc).toggle("fast");
		$(span).toggleClass("glyphicon glyphicon-collapse-down, glyphicon glyphicon-collapse-up");
    });
};

toggleDesc("#htmlBTN", "#htmlDESC", "#htmlSPAN");
toggleDesc("#jsBTN", "#jsDESC", "#jsSPAN");
toggleDesc("#nodeBTN", "#nodeDESC", "#nodeSPAN");
toggleDesc("#expressBTN","#expressDESC","#expressSPAN");
toggleDesc("#jqBTN", "#jqDESC", "#jqSPAN");
toggleDesc("#angBTN", "#angDESC", "#angSPAN");
toggleDesc("#cppBTN", "#cppDESC", "#cppSPAN");
toggleDesc("#pyBTN", "#pyDESC", "#pySPAN");
toggleDesc("#javaBTN", "#javaDESC", "#javaSPAN");
toggleDesc("#sqlBTN", "#sqlDESC", "#sqlSPAN");
toggleDesc("#mongoBTN", "#mongoDESC", "#mongoSPAN");
toggleDesc("#qtBTN", "#qtDESC", "#qtSPAN");
toggleDesc("#vsBTN", "#vsDESC", "#vsSPAN");

});

function trTxt(id,string){
		document.getElementById(id).innerHTML = string;
	};

//Translates to Italian
function toItalian(){
	trTxt("downloadID","<a title='Scarica una versione leggera del curriculum.' href='indexCompact.html' download='Mario Cannistrà - Web Developer e Programmatore - Curriculum.html'>Scarica il mio Curriculum<span class='glyphicon glyphicon-download-alt' aria-hidden='true'></span></a>");
	trTxt("htitleID","Mario Cannistrà - Web Developer e Programmatore - Curriculum");
	trTxt("profileID","Sono un programmatore e sviluppatore di siti Web di 25 anni. <br>Vivo in Italia, e parlo Inglese fluentemente.<br>Ho esperienza di sviluppo front-end, back-end, e di applicazioni per computer e smartphone.");
	trTxt("skillsID","Abilità");
	trTxt("locationID","<span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> Catanzaro, Italia");
	trTxt("githubID","Il mio profilo GitHub");
	trTxt("htmlDESC","Con <a href='https://it.wikipedia.org/wiki/HTML' target='_blank'>HTML</a> e <a href='https://it.wikipedia.org/wiki/CSS' target='_blank'>CSS</a> ho sviluppato questo curriculum, <a href='#projectsSection'>Crawler</a>, e <a href='#projectsSection'>Solar System</a>.");
	trTxt("jsDESC","Ho utilizzato <a href='https://it.wikipedia.org/wiki/JavaScript' target='_blank'>Javascript</a> principalmente per la traduzione instantanea in questo sito, lo sviluppo del gioco e delle funzionalità back e front-end di <a href='#projectsSection'>Crawler</a>, e le animazioni e funzionalità di <a href='#projectsSection'>Solar System</a>.");
	trTxt("nodeDESC","<a href='https://it.wikipedia.org/wiki/Node.js' target='_blank'>Node.js</a> è utilizzato da <a href='#projectsSection'>Crawler</a>.");
	trTxt("expressDESC","<a href='https://en.wikipedia.org/wiki/Express.js' target='_blank'>Express.js</a> è utilizzato da <a href='#projectsSection'>Crawler</a>.");
	trTxt("jqDESC","<a href='https://it.wikipedia.org/wiki/JQuery' target='_blank'>jQuery</a> è utilizzato da <a href='#projectsSection'>Crawler</a>, e da questo curriculum.");
	trTxt("angDESC","<a href='http://www.html.it/pag/52588/angularjs-e-un-framework-non-una-libreria' target='_blank'>AngularJS</a>  è utilizzato da <a href='#projectsSection'>Crawler</a>.");
	trTxt("cppDESC","<a href='#projectsSection'>Star Stuff</a> è realizzato in <a href='https://it.wikipedia.org/wiki/C%2B%2B' target='_blank'>C++</a>.");
	trTxt("pyDESC","Al momento non ho progetti pubblici sviluppati in <a href='https://it.wikipedia.org/wiki/Python' target='_blank'>Python</a>.");
	trTxt("javaDESC","Al momento non ho progetti pubblici sviluppati in <a href='https://it.wikipedia.org/wiki/Java_(linguaggio_di_programmazione)' target='_blank'>Java</a>.");
	trTxt("sqlDESC","Al momento non ho progetti pubblici che fanno uso di <a href='https://it.wikipedia.org/wiki/SQL' target='_blank'>SQL</a>.");
	trTxt("mongoDESC","<a href='https://it.wikipedia.org/wiki/MongoDB' target='_blank'>MongoDB</a> è utilizzato per la gestione del database di <a href='#projectsSection'>Crawler</a>.");
	trTxt("qtDESC","<a href='#projectsSection'>Star Stuff</a> è stato sviluppato in <a href='https://it.wikipedia.org/wiki/Qt_%28toolkit%29' target='_blank'>Qt</a>.");
	trTxt("vsDESC","Al momento non ho progetti pubblici sviluppati in <a href='https://it.wikipedia.org/wiki/Microsoft_Visual_Studio' target='_blank'>Microsoft Visual Studio</a>.");
	trTxt("servicesID","Servizi");
	trTxt("wbcrID","Sviluppo Sito internet");
	trTxt("wbcrDescID","Uso HTML e CSS per sviluppare il sito secondo le tue specificazioni, e Javascript per aggiungere funzionalità.");
	trTxt("trslID","Traduzione Inglese-Italiano");
	trTxt("trslDescID","Traduco siti Web, e Programmi in Inglese e Italiano.");
	trTxt("seoDescID","Search engine optimization (Ottimizzazione motore di ricerca) serve a fare apparire il tuo sito più in alto nei risultati dei motori di ricerca, così che sia più visibile e sarà visitato da più gente.");
	trTxt("swcrID","Sviluppo Software");
	trTxt("swcrDescID","Sviluppo programmi per computer in C++, Python, o Java per Windows, Mac, o Linux.");
	trTxt("andID","Sviluppo App Android");
	trTxt("andDescID","Sviluppo apps per Android in Java o in C++ con Qt.");
	trTxt("titleID","Sviluppatore Web e Programmatore");
	trTxt("projectsID","Progetti");
	trTxt("SolSysDescID","Animazione del Sistema Solare che ho realizzato usando la Canvas di HTML5 e Javascript.");
	trTxt("StStfDescID","Un gioco realizzato in C++ con Qt. Ancora incompleto e non in sviluppo attivo per il momento.");
	trTxt("crawlerDescID","Un clone del gioco Snake. Ho sviluppato questa pagina per dimostrare le tecnologie <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'> MEAN</a>.")
	trTxt("ICDMDescID","Un social network <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'> MEAN</a> per pescatori subacquei. Permette agli utenti di condividere la propria posizine tramite geolocalizzazione, e di chattare tra di loro.");
};

//Translates to English
function toEnglish(){
	trTxt("downloadID","<a title='Downloads a light version of the resume.' href='indexCompact.html' download='Mario Cannistrà - Web Developer and Programmer - Resume.html'>Download my Resume<span class='glyphicon glyphicon-download-alt' aria-hidden='true'></span></a>");
	trTxt("htitleID","Mario Cannistrà - Web Developer and Programmer - Resume");
	trTxt("profileID","I am a 25 year old Web Developer and Programmer. <br>I live in Italy, and I speak English fluently.<br>I have worked on the development of front-end, back-end, as well as mobile and desktop software.");
	trTxt("skillsID","Skills");
	trTxt("locationID","<span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> Catanzaro, Italy");
	trTxt("githubID","My GitHub profile");
	trTxt("htmlDESC"," With <a href='https://en.wikipedia.org/wiki/HTML' target='_blank'>HTML</a> and <a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets' target='_blank'>CSS</a> I developed this resumee, <a href='#projectsSection'>Crawler</a>, and <a href='#projectsSection'>Solar System</a>.");	
	trTxt("jsDESC","I used <a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank'>Javascript</a> mainly for the instant translation of this website, the development of the game and the back-end and front-end functionality of <a href='#projectsSection'>Crawler</a>, and the animations of <a href='#projectsSection'>Solar System</a>.");
	trTxt("nodeDESC","<a href='https://en.wikipedia.org/wiki/Node.js' target='_blank'>Node.js</a> is used by <a href='#projectsSection'>Crawler</a>.");
	trTxt("expressDESC","<a href='https://en.wikipedia.org/wiki/Express.js' target='_blank'>Express.js</a> is used by <a href='#projectsSection'>Crawler</a>.");
	trTxt("jqDESC","<a href='https://en.wikipedia.org/wiki/JQuery' target='_blank'>jQuery</a> is used by <a href='#projectsSection'>Crawler</a> and this website.");
	trTxt("angDESC","<a href='https://en.wikipedia.org/wiki/AngularJS' target='_blank'>AngularJS</a> is used by <a href='#projectsSection'>Crawler</a>.");
	trTxt("cppDESC","<a href='#projectsSection'>Star Stuff</a> is written in <a href='https://en.wikipedia.org/wiki/C%2B%2B' target='_blank'>C++</a>.");
	trTxt("pyDESC","Currently I have no public projects developed using <a href='https://en.wikipedia.org/wiki/Python_%28programming_language%29' target='_blank'>Python</a>.");
	trTxt("javaDESC","Currently I have no public projects developed using <a href='https://en.wikipedia.org/wiki/Java_(programming_language)' target='_blank'>Java</a>.");
	trTxt("sqlDESC","Currently I have no public projects developed using <a href='https://en.wikipedia.org/wiki/SQL' target='_blank'>SQL</a>.");
	trTxt("mongoDESC","<a href='https://en.wikipedia.org/wiki/MongoDB' target='_blank'>MongoDB</a> is used to manage the database of <a href='#projectsSection'>Crawler</a>.");
	trTxt("qtDESC","<a href='#projectsSection'>Star Stuff</a> was developed with <a href='https://en.wikipedia.org/wiki/Qt_%28software%29' target='_blank'>Qt</a>.");
	trTxt("vsDESC","Currently I have no public projects developed using <a href='https://en.wikipedia.org/wiki/Microsoft_Visual_Studio' target='_blank'>Microsoft Visual Studio</a>.");	
	trTxt("servicesID","Services");
	trTxt("wbcrID","Website development");
	trTxt("wbcrDescID","I use HTML and CSS to develop the website following your specifications, and Javascript to add functionality.");
	trTxt("trslID","Italian-English Translation");
	trTxt("trslDescID","I translate websites, software, and documents in English and Italian.");
	trTxt("seoDescID","Search engine optimization serves the purpose of making your website appear higher in search engine results, so that it will be visible to more people.");
	trTxt("swcrID","Software development");
	trTxt("swcrDescID","I write computer programs using C++, Python, or Java for Windows, Mac, or Linux.");
	trTxt("andID","Android App development");
	trTxt("andDescID","I write Android apps in Java or in C++ with Qt.");
	trTxt("titleID","Web Developer and Programmer");
	trTxt("projectsID","Projects");
	trTxt("SolSysDescID","Animation of the Solar system I made using HTML5's Canvas and Javascript.");
	trTxt("StStfDescID","A game made in C++ with Qt. Still incomplete and on hold for the moment.");
	trTxt("crawlerDescID","A clone of the game Snake. I made this to demonstrate the <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'>MEAN stack</a> technologies.");
	trTxt("ICDMDescID","A <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'>MEAN</a> social network for spearfishers. It allows users to share their current location through geolocation, and chat with eachother.");
};