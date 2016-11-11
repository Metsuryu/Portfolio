$(document).ready(function(){
var userLang = navigator.language || navigator.userLanguage; 
if(userLang == "it-IT" || userLang == "it"){toItalian();};

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
	trTxt("downloadID","<a title=\"Scarica una versione leggera del curriculum.\" href=\"indexCompact.html\" download=\"Mario Cannistrà - Web Developer e Programmatore - Curriculum.html\">Scarica il mio Curriculum<span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>");
	trTxt("htitleID","Mario Cannistrà - Web Developer e Programmatore - Curriculum");
	trTxt("profileID","Sono un programmatore e sviluppatore di siti Web di 25 anni. <br>Vivo in Italia, e parlo Inglese fluentemente.<br>Ho esperienza di sviluppo front-end, back-end, e di applicazioni per computer e smartphone.");
	trTxt("skillsID","Abilità");
	trTxt("locationID","<span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span> : Catanzaro, Italia");
	trTxt("githubID","Il mio profilo GitHub");
	trTxt("htmlDESC","<a href=\"https://it.wikipedia.org/wiki/HTML\" target=\"_blank\">HTML</a> è il principale linguaggio utilizzato per sviluppare pagine web, e <a href=\"https://it.wikipedia.org/wiki/CSS\" target=\"_blank\">CSS</a> è utilizzato per migliorare l'aspetto e lo stile delle pagine.");
	trTxt("jsDESC","<a href=\"https://it.wikipedia.org/wiki/JavaScript\" target=\"_blank\">Javascript</a> è il linguaggio di programmazione più popolare per lo sviluppo di siti web. Viene utilizzato per rendere le pagine interattive.");
	trTxt("nodeDESC","<a href=\"https://it.wikipedia.org/wiki/Node.js\" target=\"_blank\">Node.js</a> è una piattaforma JavaScript per lo sviluppo di una diversa varietà di strumenti e applicazioni.");
	trTxt("expressDESC","<a href=\"https://en.wikipedia.org/wiki/Express.js\" target=\"_blank\">Express.js</a> è un framework per Node.js progettato per costruire applicazioni web.");
	trTxt("jqDESC","<a href=\"https://it.wikipedia.org/wiki/JQuery\" target=\"_blank\">jQuery</a> è una popolare libreria per Javascript. Rende Javascript più semplice e efficiente.");
	trTxt("angDESC","<a href=\"http://www.html.it/pag/52588/angularjs-e-un-framework-non-una-libreria\" target=\"_blank\">AngularJS</a> è un framework per applicazioni web.");
	trTxt("cppDESC","<a href=\"https://it.wikipedia.org/wiki/C%2B%2B\" target=\"_blank\">C++</a> è un linguaggio di programmazione adatto a scrivere applicazioni veloci e versatili.");
	trTxt("pyDESC","<a href=\"https://it.wikipedia.org/wiki/Python\" target=\"_blank\">Python</a> è uno dei linguaggi di programmazione più popolari.");
	trTxt("javaDESC","<a href=\"https://it.wikipedia.org/wiki/Java_(linguaggio_di_programmazione)\" target=\"_blank\">Java</a> è un linguaggio di programmazione, usato per sviluppare applicazioni multi-piattaforma, è anche il linguaggio principale per scrivere apps per Android.");
	trTxt("sqlDESC","<a href=\"https://it.wikipedia.org/wiki/SQL\" target=\"_blank\">SQL</a> è un linguaggio di programmazione specializzato alla gestione di dati contenuti nei databases.");
	trTxt("mongoDESC","<a href=\"https://it.wikipedia.org/wiki/MongoDB\" target=\"_blank\">MongoDB</a> è un sistema per la gestione di databases. Ideato per databases di grandi dimensioni.");
	trTxt("qtDESC","<a href=\"https://it.wikipedia.org/wiki/Qt_%28toolkit%29\" target=\"_blank\">Qt</a> è un applicazione che è ampiamente usata per lo sviluppo di software che può funzionare su varie piattaforme software e hardware con poche o nessuna modifica al codice di sottofondo.");
	trTxt("vsDESC","<a href=\"https://it.wikipedia.org/wiki/Microsoft_Visual_Studio\" target=\"_blank\">Microsoft Visual Studio</a> è un IDE(integrated development environment) o ambiente di sviluppo integrato di Microsoft.");
	trTxt("servicesID","Servizi");
	trTxt("wbcrID","Sviluppo Sito internet");
	trTxt("wbcrDescID","Uso HTML e CSS per sviluppare il sito secondo le tue specificazioni, e Javascript per renderlo interattivo.");
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
	trTxt("crawlerDescID","Un clone del gioco Snake. Ho scritto questa pagina per dimostrare le technologie <a href=\"https://en.wikipedia.org/wiki/MEAN_(software_bundle)\" target=\"_blank\"> MEAN</a>.")
};


//Translates to English
function toEnglish(){
	trTxt("downloadID","<a title=\"Downloads a light version of the resume.\" href=\"indexCompact.html\" download=\"Mario Cannistrà - Web Developer and Programmer - Resume.html\">Download my Resume<span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>");
	trTxt("htitleID","Mario Cannistrà - Web Developer and Programmer - Resume");
	trTxt("profileID","I am a 25 year old Web Developer and Programmer. <br>I live in Italy, and I speak English fluently.<br>I have worked on the development of front-end, back-end, as well as mobile and desktop software.");
	trTxt("skillsID","Skills");
	trTxt("locationID","<span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span> : Catanzaro, Italy");
	trTxt("githubID","My GitHub profile");
	trTxt("htmlDESC","<a href=\"https://en.wikipedia.org/wiki/HTML\" target=\"_blank\">HTML</a> is the main language used to make web pages, and <a href=\"https://en.wikipedia.org/wiki/Cascading_Style_Sheets\" target=\"_blank\">CSS</a> is used to set their visual style.");	
	trTxt("jsDESC","<a href=\"https://en.wikipedia.org/wiki/JavaScript\" target=\"_blank\">Javascript</a> is the most popular programming language used in websites. It allows pages to be interactive.");
	trTxt("nodeDESC","<a href=\"https://en.wikipedia.org/wiki/Node.js\" target=\"_blank\">Node.js</a> is a JavaScript runtime environment for developing a diverse variety of tools and applications.");
	trTxt("expressDESC","<a href=\"https://en.wikipedia.org/wiki/Express.js\" target=\"_blank\">Express.js</a> is a web application framework for Node.js designed for building web applications.");
	trTxt("jqDESC","<a href=\"https://en.wikipedia.org/wiki/JQuery\" target=\"_blank\">jQuery</a> is a popular library for Javascript, it makes Javascript simpler and more efficient.");
	trTxt("angDESC","<a href=\"https://en.wikipedia.org/wiki/AngularJS\" target=\"_blank\">AngularJS</a> is a web application framework.");
	trTxt("cppDESC","<a href=\"https://en.wikipedia.org/wiki/C%2B%2B\" target=\"_blank\">C++</a> is a general-purpose programming language, used to write fast and versatile applications.");
	trTxt("pyDESC","<a href=\"https://en.wikipedia.org/wiki/Python_%28programming_language%29\" target=\"_blank\">Python</a> is one of the most popular general-purpose programming languages.");
	trTxt("javaDESC","<a href=\"https://en.wikipedia.org/wiki/Java_(programming_language)\" target=\"_blank\">Java</a> is a general-purpose programming language, used to write cross-plataform applications, and it's the main language used to write Android apps.");
	trTxt("sqlDESC","<a href=\"https://en.wikipedia.org/wiki/SQL\" target=\"_blank\">SQL</a> is a special-purpose programming language designed for managing data held in databases.");
	trTxt("mongoDESC","<a href=\"https://en.wikipedia.org/wiki/MongoDB\" target=\"_blank\">MongoDB</a> is database program designed for managing efficiently very large databases.");
	trTxt("qtDESC","<a href=\"https://en.wikipedia.org/wiki/Qt_%28software%29\" target=\"_blank\">Qt</a> is a cross-platform application framework that is widely used for developing software that can be run on various software and hardware platforms with little or no change in the underlying codebase.");
	trTxt("vsDESC","<a href=\"https://en.wikipedia.org/wiki/Microsoft_Visual_Studio\" target=\"_blank\">Microsoft Visual Studio</a> is an integrated development environment (IDE) from Microsoft.");
	trTxt("servicesID","Services");
	trTxt("wbcrID","Website development");
	trTxt("wbcrDescID","I use HTML and CSS to develope the website following your specifications, and Javascript to make it interactive.");
	trTxt("trslID","Italian-English Translation");
	trTxt("trslDescID","I translate Websites and Software in English and Italian.");
	trTxt("seoDescID","Search engine optimization serves the purpose of making your website appear higher in search engine results, so that it will be more visible and it will be visited by more people.");
	trTxt("swcrID","Software development");
	trTxt("swcrDescID","I write computer programs using C++, Python, or Java for Windows, Mac, or Linux.");
	trTxt("andID","Android App development");
	trTxt("andDescID","I write Android apps in Java or in C++ with Qt.");
	trTxt("titleID","Web Developer and Programmer");
	trTxt("projectsID","Projects");
	trTxt("SolSysDescID","Animation of the Solar system I made using HTML5's Canvas and Javascript.");
	trTxt("StStfDescID","A game made in C++ with Qt. Still incomplete and on hold for the moment.");
	trTxt("crawlerDescID","A clone of the game Snake. I made this to demonstrate the <a href=\"https://en.wikipedia.org/wiki/MEAN_(software_bundle)\" target=\"_blank\">MEAN stack</a> technologies.");
};