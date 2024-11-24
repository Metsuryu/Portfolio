const particleJSParams = {
  "particles": {
    "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#ffffff"},
    "shape": {
      "type": "circle",
      "stroke": {"width": 0, "color": "#000000"},
      "polygon": {"nb_sides": 5},
    },
    "opacity": {"value": 0.5, "random": false, "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}},
    "size": {"value": 5, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
    "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
    "move":{"enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract":
    {"enable": false, "rotateX": 600, "rotateY": 1200}}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {"onhover": {"enable": true, "mode": "repulse"}, "onclick":
    {"enable": false, "mode": "push"}, "resize": true},
    "modes": {"grab": {"distance": 400, "line_linked": {"opacity": 1}}, "bubble":
    {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3}, "repulse":
    {"distance": 200}, "push": {"particles_nb": 4}, "remove": {"particles_nb": 2}}
  },
  "retina_detect": true,
  "config_demo": {"hide_card": false, "background_color": "#b61924", "background_image": "",
  "background_position": "50% 50%", "background_repeat": "no-repeat", "background_size": "cover"}
};

const descriptions = {
  "Recruiter Website": `A modern website for a professional recruiter, featuring job listings and an admin page. The admin can manage jobs and reviews from LinkedIn, which are displayed on the website. Built with Angular and Firebase, providing a responsive and dynamic user experience.`,

  "Stealth Project": `A stealth project currently in development. More details will be available after the project's release.`,

  "Cartier": `The E-commerce for Cartier, a French luxury-goods conglomerate that designs, manufactures,
distributes, and sells jewellery, leather goods, and watches.`,

  "Stone Island": `In my time at YNAP as a Front-end developer this was one of the
three websites I worked on with my team, along with Stone Island 30, and Missoni.
When I joined, the majority of the work on this site revolved around accessibility,
as the site was in the middle of a major overhaul to comply with better standards.
Additionally to the accessibility, we developed new features, such as push
notifications and new pages, and fixed existing bugs.
Stone Island has two parts, a main one that uses C# as language for
the views (cshtml) and back-end logic, and another that uses PHP.`,

  "Stone Island 30": `In my time at YNAP as a Front-end developer this was one
of the three websites I worked on with my team, along with Stone Island, and Missoni.
This project started near the end of my time at YNAP, when we completed the accessibility
release of Stone Island, because of that I only worked on this for two months.
This is a complete overhaul of Stone Island 30 starting from
zero using React with Gatsby, and focusing on accessibility.`,

  "Missoni": `In my time at YNAP as a Front-end developer this was one of the three
websites I worked on with my team, along with Stone Island, and Stone Island 30.
When I joined, this site was already accessible, so the focus for our team was
implementing the accessibility release for Stone Island.
When new features were requested we implemented them with accessibility in mind,
and the remaining time was spent on maintanance and fixing existing bugs.
Missoni has two parts, a main one that uses C# as language for the views (cshtml)
and back-end logic, and another that uses PHP.`,

  "Lantea": `I worked on Lantea from 2017-09-12 to 2019-02-01, when the project was suspended.<br>
Lantea is a platform that lets authors write and post articles, and earn money with revenue sharing from advertisement.<br>
When I joined, Lantea was on early stages of development, some of the features were already partially implemented,
but it was decided to make a large refactor and rework almost everything, moving from AngularJS to Angular 2+.<br>
Because of that, most of the current version of the site was developed by me, with the exception of the art assets,
some of the HTML and CSS adapted from the previous version of the site,
and some code by two other developers that worked on it occasionally.<br>
Features that I implemented include, but are not limited to:
<a class="link" href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" rel="noopener noreferrer">CRUD</a
> functionalities for articles, instant messaging chat that also allows the upload of pictures,
a comment system, admin tools, drafts, notifications, search for articles, statistics, various settings,
followers, achievements, and securing sensitive operations with server-side token verification.<br>
The website was never officially launched, but a mostly functional live version is available
<a class="link" href="https://new-lantea.web.app/" rel="noopener noreferrer">online here.</a>`,

  "I Cecchini Del Mare": `I Cecchini Del Mare (Snipers of the Sea in Italian) was commissioned by
<a class="link" target="_blank" href="https://www.facebook.com/groups/cecchinidelmare/"
rel="noopener noreferrer">the Facebook group of the same name.</a><br>
The website allows people to share their current location, so that everyone connected will be able
to see them on the map, and chat with them.
To do this, the coordinates and other data (name, profile picture...) of each user are added to a Mongo database,
and they are retrived by each client to be displayed on the map, and in the list of online users.<br>
The chat is made with Socket.IO, and is fairly lightweight. It allows users to send private messages to eachother,
it saves the chat history in the cookies, has functionality to check if the message was sent correctly,
and when opened, shows the distance between the two users if possible.<br>
The development didn't present too many technical problems, but it helped me gain quite a lot of experience.`,

  "Crawler": `Crawler uses little HTML and CSS, as most of the work went into the game, I opted for a simple look for the page.<br>
I started with the intention to make a very simple single-page web application, but
then I decided to make the game the focus of the page.<br>
I used Angular's <code>ng-repeat</code> functionality to build the highscores table dynamically, by retriving the
entries from a Mongo server, and displaying 10 entries for each page that is also generated dynamically
based on the total number of highscores.
I also use Angular's <code>filter</code> to implement a search function.<br>
The game is built with the p5.js library, and is mostly a standard version of snake.
One of the most challenging parts of development was making it so when food spawned, it wouldn't spawn on
top of the snake, mostly because I was trying to find a clever solution.
I finally realized that sometimes, the best solution is the most obvious one,
and performance is not always a priority, especially when differences are insignificant.`,

  "Solar System": `A simple 'game' where you can see the orbits of the planets and their moons,
change their speed, and use a starship to explore the solar system.`
};

const descriptionsIt = {
  "Recruiter Website": `Un sito web moderno per un reclutatore professionale, con elenchi di lavori e una pagina di amministrazione. L'amministratore può gestire le offerte di lavoro e le recensioni da LinkedIn, che vengono visualizzate sul sito web. Costruito con Angular e Firebase, offre un'esperienza utente reattiva e dinamica.`,

  "Stealth Project": `Un progetto non annunciato attualmente in fase di sviluppo. Maggiori dettagli saranno disponibili dopo il rilascio del progetto.`,

  "Cartier": `Il sito E-commerce di Cartier, un conglomerato Francese di beni di lusso che disegna, produce, distribuisce,
  e vende gioielleria, beni di pelle, e orologi.`,

  "Stone Island": `Nel tempo che ho trascorso a YNAP da sviluppatore Front-end questo è stato uno dei tre siti sul quale ho
lavorato con il mio team, insieme a Stone Island 30 e Missoni.<br>
Quando ho iniziato, la maggior parte del lavoro per Stone Island era incentrata sull'accessibilità,
dato che il sito era nel mezzo di una grande rinnovazione per soddisfare le norme previste.<br>
Oltre all'accessibilità, abbiamo sviluppato nuove funzionalità come notifiche e nuove pagine, e risolto bug esistenti.<br>
Stone Island ha due parti, una principale che usa C# come linguaggio per le viste (cshtml)
e per la logica di back-end, e un altra che usa PHP.`,

  "Stone Island 30": `Nel tempo che ho trascorso a YNAP da sviluppatore Front-end questo è stato uno dei tre siti sul quale ho
lavorato con il mio team, insieme a Stone Island e Missoni.<br>
Questo progetto è iniziato verso la fine della mia permanenza a YNAP, dopo il completamento della versione accessibile di Stone Island,
e per questo ho lavorato a Stone Island 30 per soli due mesi.<br>
Questo è un completo rinnovamento di Stone Island 30 iniziato da zero, usando React con Gatsby, e incentrato sull'accessibilità.`,

  "Missoni": `Nel tempo che ho trascorso a YNAP da sviluppatore Front-end questo è stato uno dei tre siti sul quale ho
lavorato con il mio team, insieme a Stone Island e Stone Island 30.<br>
Quando ho iniziato, Missoni era già accessibile, quindi il team era concentrato principalmente sulla versione accessibile di Stone Island.<br>
Quando nuove funzionalità venivano richieste, venivano sviluppate con in mente l'accessibilità, e il tempo rimanente era usato per manutenzione
e per risolvere bug esistenti.<br>
Missoni ha due parti, una principale che usa C# come linguaggio per le viste (cshtml)
e per la logica di back-end, e un altra che usa PHP.`,

  "Lantea": `Ho lavorato su Lantea dal 2017-09-12 al 2019-02-01, quando il progetto è stato sospeso.<br>
Lantea è una piattaforma che permette agli autori di scrivere e postare articoli, e guadagnare condividendo il reddito ricavato dalle inserzioni.<br>
Quando ho iniziato, Lantea era in uno stato iniziale di sviluppo, alcune funzionalità erano già parzialmente implementate,
ma a quel punto si è deciso che sarebbe stato meglio rifattorizzare quasi tutto, passando da AngularJS a Angular 2+.<br>
Per questo motivo, la maggior parte di questa versione del sito è stata sviluppata da me, con l'eccezzione di risorse grafiche,
parte dell' HTML e CSS adattai dalla versione precedente, e del codice di altri due sviluppatori che ci lavoravano occasionalmente.<br>
Funzionalità che ho implementato includono, ma non sono limitate a: funzionalità
<a class="link" href='https://it.wikipedia.org/wiki/Tavola_CRUD' rel="noopener noreferrer">CRUD</a> per gli articoli,
chat di messaggistica istantanea che permette l'upload di immagini, commenti, strumenti
per amministratori, bozze, notificazioni, funzione di ricerca per articoli,
statistiche, impostazioni varie, amici (followers), medaglie (achievements), e verifica
dei token da server per la sicurezza delle operazioni sensibili.<br>
Il sito non è mai stato rilasciato ufficialmente, ma una versione per la maggior
parte funzionale è disponibile <a class="link" href='https://new-lantea.web.app/' rel="noopener noreferrer">online qui.</a>`,

  "I Cecchini Del Mare": `I Cecchini Del Mare è stato commissionato dall'
<a class="link" target='_blank' href='https://www.facebook.com/groups/cecchinidelmare/' rel="noopener noreferrer">omonimo gruppo di Facebook.</a><br>
Il sito permete agli utenti di trasmettere la propria posizione e chattare con tutti gli utenti connessi.
Per fare queso, le coordinate e altre informazioni (nome, immagine del profilo...) di ogni utente sono aggiunte
a un database Mongo, e sono vengono in seguito utilizzate da ogni client per mostrare gli utenti sulla mappa
e nella lista di utenti online.<br>
La chat è fatta con Socket.IO, ed è abbastanza leggera e veloce. Permette agli utenti di inviare messaggi privati,
salva la cronologia della chat nei Cookies, ha funzionalità per controllare se il messaggio è stato inviato
correttamente, e quando viene aperta, mostra la distanza tra i due utenti se possibile.<br>
Lo sviluppo non ha presentato molti problemi tecnici, ma mi ha aiutato comunque a migliorare le mie abilità.`,

  "Crawler": `Crawler usa poco HTML e CSS, dato che la maggior parte del lavoro si è concetrato sulla
realizzazione del gioco.<br>
Ho iniziato con l'intenzione di realizzare una web-app su pagina singola molto semplice, ma in seguito
ho deciso di incentrare il sito sul gioco.<br>
Ho usato la funzionalità <code>ng-repeat</code> di Angular per realizzare la tabbella dei punteggi dinamicamente,
utilizzando i risultati ricevuti da MongoDB, e mostrare 10 risultati per ogni pagina che è anche generata dinamicamente
in base al numero totale di punteggi.
Uso anche <code>filter</code> di Angular per implementare una funzionalità di ricerca.<br>
Il gioco è sviluppato con la libreria p5js, ed è per la maggior parte una semplice versione di snake.
Una delle parti più complicate dello sviluppo è stata fare sì che il cibo non comparisse sul serpente.
Ho risolto il problema rendendomi conto che a volte, la migliore soluzione è la più semplice, e le prestazioni
non devono essere sempre una priorità, specialmente quando le differenze sono insignificanti.`,

  "Solar System": `Un semplice 'gioco' che dimostra le orbite dei pianeti e le loro lune,
permette di cambiarne la velocità, e permette di esplorare il sistema solare con un astronave.`
};

const wordsEng = {
  "visit": "VISIT",
  "back": "← Back",
  "comment": "// I'm a Full Stack Web Developer",
  "name": ".name",
  "employmentStatus": "employmentStatus",
  "current": "\"Current\"",
  "past": "\"Past\"",
  "role": "role",
  "duration": "duration",
  "lookingNewJob": "\"Looking for a new job\"",
  "freelanceWork": "Freelance work",
  "webDev": "\"Web Development\"",
  "softDev": "\"Software development\"",
  "other": "\"Other\"",
};

const wordsIta = {
  "visit": "VAI",
  "back": "← Indietro",
  "comment": "// Sono un web developer Full Stack",
  "name": ".nome",
  "employmentStatus": "statoLavorativo",
  "current": "\"Presente\"",
  "past": "\"Passato\"",
  "role": "ruolo",
  "duration": "durata",
  "lookingNewJob": "\"In cerca di un nuovo lavoro\"",
  "freelanceWork": "Lavori freelance",
  "webDev": "\"Sviluppo Web\"",
  "softDev": "\"Sviluppo Software\"",
  "other": "\"Altro\"",
};

let words = {};

let lang = "eng";
const projEvents = {};

/** Changes content of "id" to "string" */
function trTxt(selector, string, isClass = false) {
  if (isClass) {
    const els = document.querySelectorAll("." + selector);
    els.forEach(el => {
      el.innerHTML = string;
    });
  } else {
    document.querySelector("#" + selector).innerHTML = string;
  }
};

function toEng() {
  lang = "eng";
  words = wordsEng;
  initProjects();
  addAbout();

  trTxt("htitleID", `Mario Cannistrà - Full Stack Web Developer - Portfolio`);
  trTxt("projectsNav", `Projects`, true);
  trTxt("aboutNav", `About`, true);
  trTxt("contactsNav", `Contact`, true);
  trTxt("title1", `Hi, my name is `);
  trTxt("title2", `I'm a Full Stack Web Developer,<br>proficient in`);
  trTxt("subtitle", `I live in Italy, and I speak <button onclick="toEng()"
class="link">English</button> and <button onclick="toIta()" class="link">Italian</button> fluently.<br>
Feel free to <a id="contactEmail" class="link" target="_blank" rel="noreferrer"
href="mailto:mariocannistra.work@gmail.com">contact me</a> if you have questions.`);
  trTxt("projectsSubtitle", `Some of my projects`);
  trTxt("downloadResume", `Download PDF resume`);
  trTxt("contactCTA", `Get in touch`);
}

function toIta() {
  lang = "ita";
  words = wordsIta;
  initProjects();
  addAbout();

  trTxt("htitleID", `Mario Cannistrà - Web Developer Full Stack - Portfolio`);
  trTxt("projectsNav", `Progetti`, true);
  trTxt("aboutNav", `Info`, true);
  trTxt("contactsNav", `Contatti`, true);
  trTxt("title1", `Ciao, sono `);
  trTxt("title2", `Sono uno sviluppatore web Full Stack,<br>virtuoso in`);
  trTxt("subtitle", `Vivo in Italia, e parlo <button onclick="toEng()"
class="link">Inglese</button> e <button onclick="toIta()" class="link">Italiano</button> fluentemente.<br>
Per qualsiasi domanda <a id="contactEmail" class="link" target="_blank" rel="noreferrer"
href="mailto:mariocannistra.work@gmail.com">contattatemi</a>.`);
  trTxt("projectsSubtitle", `Alcuni miei progetti`);
  trTxt("downloadResume", `Scarica curriculum (PDF)`);
  trTxt("contactCTA", `Contattami`);
}

function initProjects() {
  const allProjectsTotal = document.querySelectorAll('.projectContainer').length;

  // Add any additional ID for waypoints here.
  const projectsIDs = [];
  for (let i = 1; i <= allProjectsTotal; i++) {
    projectsIDs.push("proj" + i);
  }

  projectsIDs.forEach(proj => {
    addWaypoint(proj, {
      ".revealEl": "revealProjAni"
      // ".coverspan": "coverspananimation"
    });
    addClickEventListener(proj);
  });
}

function onLoad() {
  /** Find browser language, and translate on load. Also calls initProjects() */
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang == "it-IT" || userLang == "it") {
    toIta();
  } else {
    toEng();
  };
  changeText();
  AOS.init();
  particlesJS("intro", particleJSParams);
  addNavigation();
  addAbout();
  const sections = {
    intro: document.getElementById("intro"),
    projects: document.getElementById("projects"),
    about: document.getElementById("about"),
    contact: document.getElementById("contact")
  };
  const sectionsNavs = {
    intro: document.getElementsByClassName("intro"),
    projects: document.getElementsByClassName("projects"),
    about: document.getElementsByClassName("about"),
    contact: document.getElementsByClassName("contact")
  };
  window.onscroll =	e => { navbarToggleOnScroll(); sectionsInViewport(sections, sectionsNavs); };
}
onLoad();

function isInViewport(el) {
  const distance = el.getBoundingClientRect();

  return (distance.top + distance.height >= 1 && distance.bottom - distance.height <= 1);
}

function sectionsInViewport(sections, sectionsNavs) {
  for (const key of Object.keys(sections)) {
    const el = sections[key];
    const navEl = sectionsNavs[key][0];

    if (isInViewport(el)) {
      navEl.className = key + " active";
    }else {
      navEl.className = key + " inactive";
    }
  }
}

/** Programmatically generate and add about section in code-editor style. */
function addAbout() {
  const nbsp = String.fromCharCode(160);

  const skillsWeb = [
    "JavaScript",
    "HTML5 | CSS3",
    "jQuery",
    "Typescript",
    "Angular 2 - 11",
    "Firebase",
    "Node.js",
    "Express.js",
    "AngularJS",
    "Less",
    "Sass",
    "React | Gatsby",
    "ASP.NET | Razor",
    "CSHTML",
    "Socket.IO",
    "Wordpress",
    "Google charts",
    "Highcharts",
    "Phaser",
    "Nginx",
    "NgRx",
    "RxJs",
    "Jasmine",
    "Jest",
    "CI/CD",
    "Karma",
    "p5.js",
    "npm"
  ];
  const skillsSoft = [
    "C++",
    "Python",
    "PHP",
    "C#"
  ];
  const skillsOther = [
    "Behavior Driven Development",
    "Test Driven Development",
    "Agile Fundamentals",
    "E-commerce",
    "Linux server",
    "Accessibility",
    "MongoDB",
    "Github",
    "Gitlab",
    "Unity",
    "Jira",
    "SQL",
    "Qt"
  ];
  const employment = [
    {
      "name": "ICDM",
      "role": "Full stack web developer",
      "duration": "2017-03 | 2017-05"
    },
    {
      "name": "Lantea",
      "role": "Full stack web developer",
      "duration": "2017-09 | 2019-02"
    },
    {
      "name": words.freelanceWork,
      "role": "Full stack web developer",
      "duration": "2019-02 | 2019-07"
    },
    {
      "name": "YNAP",
      "role": "Interface developer (Frontend)",
      "duration": "2019-07 | 2020-04"
    },
    {
      "name": "Vidiemme",
      "role": "Senior Front End Developer",
      "duration": "2020-05 | 2021-07"
    },
    {
      "name": words.freelanceWork,
      "role": "Full stack web developer",
      "duration": "2021-07 | 2021-10"
    },
    {
      "name": "YNAP",
      "role": "Interface developer (Frontend)",
      "duration": "2021-11 | 2022-12"
    },
    {
      "name": words.freelanceWork,
      "role": "Full stack web developer",
      "duration": "2022-12 | Present"
    },
  ];
  const editorEl = document.querySelector("#codeEditor");
  editorEl.innerHTML = "";
  if (!editorEl) {
    return;
  }

  const cEnum = {
    dot: "dot",
    methods: "methods",
    funcName: "funcName",
    comment: "comment",
    scope: "scope",
    string: "string",
    number: "number",
    cursor: "cursor",
    plainText: "plainText",
    collapsable: "collapsable"
  }

  let linesCount = 1;

  const toggleCollapse = (line) => {
    const target = line.target;
    target.classList.toggle("collapsedContent");
    const dot = target.querySelector(".dot");
    const mainIndentation = dot ? dot.innerHTML.length : 0;
    const nextSibling = target.nextSibling;

    const getIndentation = (sibling) => {
      const indentation = sibling && sibling.querySelector(".dot");
      return indentation ? indentation.innerHTML.length : 0;
    };

    const checkIndentRecursive = (sibling) => {
      let currentIndent = getIndentation(sibling);
      if (currentIndent > mainIndentation) {
        sibling && sibling.classList.toggle("collapsed");
        sibling && checkIndentRecursive(sibling.nextSibling);
      }
    };

    checkIndentRecursive(nextSibling);
  };

  const addLine = (innerEls, isCollapsable = false) => {
    const line = document.createElement("div");
    const lineClass = isCollapsable ? `line ${cEnum.collapsable}` : "line";
    line.className = lineClass;
    line.dataset["lineNr"] = linesCount;
    linesCount ++;

    if (isCollapsable) {
      line.onclick = toggleCollapse;
    }

    if (innerEls && innerEls.length) {
      innerEls.forEach(args => {
        const generated = genEl(args[0] || undefined, args[1] || undefined, args[2] || undefined)
        line.append(generated);
      });
    }

    editorEl.append(line);
  }

  const dots2 = "·· ";
  const dots4 = "···· ";
  const dots6 = "······ ";
  const dots8 = "········ ";
  const dots10 = "·········· ";
  const genEl = (content = dots8, className = cEnum.dot, tag = "div") => {
    if (tag === "text") {
      return document.createTextNode(content);
    }

    const el = document.createElement(tag);

    el.className = className;
    el.innerText = content;

    return el;
  };

  const addSkills = (skills, lastComma = false) => {
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const line = [
        [],
        [`"${skill}"`, cEnum.string, "span"]
      ];
      if (i < skills.length - 1 || lastComma) {
        line.push([",", cEnum.plainText, "text"]);
      }
      addLine(line);
    }
  };

  const addEmployment = () => {
    for (let i = 0; i < employment.length; i++) {
      const job = employment[i];
      const line = [
        [],
        [`"${job.name}"`, cEnum.string, "span"],
        [": {", cEnum.plainText, "text"],
      ];
      const line2 = [
        [dots10],
        [`"${words.role}"`, cEnum.string, "span"],
        [": ", cEnum.plainText, "text"],
        [`"${job.role}"`, cEnum.string, "span"],
        [",", cEnum.plainText, "text"],
      ];
      const line3 = [
        [dots10],
        [`"${words.duration}"`, cEnum.string, "span"],
        [": ", cEnum.plainText, "text"],
        [`"${job.duration}"`, cEnum.string, "span"],
      ];
      const line4 = [
        [dots8],
        ["},", cEnum.plainText, "text"],
      ];
      addLine(line);
      addLine(line2);
      addLine(line3);
      addLine(line4);
    }
  };

  addLine([
    ["class ", cEnum.funcName, "span"],
    ["Mario", cEnum.methods, "span"],
    [" {", cEnum.plainText, "span"]
  ]);
  addLine([
    [dots2],
    [words.comment, cEnum.comment]
  ]);
  addLine([
    [dots2],
    ["constructor", cEnum.funcName],
    ["() {", cEnum.plainText, "span"]
  ], true);
  addLine([
    [dots4],
    ["this", cEnum.scope],
    [words.name, cEnum.plainText, "span"],
    [" = ", cEnum.scope],
    ["\"Mario Cannistrà\"", cEnum.string, "span"],
    [";", cEnum.plainText, "span"]
  ]);
  addLine([
    [dots4],
    ["this", cEnum.scope],
    [".email", cEnum.plainText, "span"],
    [" = ", cEnum.scope],
    ["\"mariocannistra.work@gmail.com\"", cEnum.string, "span"],
    [";", cEnum.plainText, "span"]
  ]);
  addLine([
    [dots2],
    ["}", cEnum.plainText, "text"]
  ]);
  addLine([
    [nbsp, cEnum.plainText, "text"]
  ]);
  addLine([
    [dots2],
    [words.employmentStatus, cEnum.methods, "span"],
    ["() {", cEnum.plainText, "span"]
  ], true);



  addLine([
    [dots4],
    ["return", cEnum.scope, "span"],
    [" {", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots6],
    [words.current, cEnum.string, "span"],
    [": ", cEnum.plainText, "text"],
    [words.lookingNewJob, cEnum.string, "span"],
    [",", cEnum.plainText, "text"],
  ]);
  addLine([
    [dots6],
    [words.past, cEnum.string, "span"],
    [": [", cEnum.plainText, "text"],
  ], true);
  addEmployment();

  addLine([
    [dots6],
    ["]};", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots4],
    ["}", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots2],
    ["}", cEnum.plainText, "text"]
  ]);
  addLine([
    [nbsp, cEnum.plainText, "text"]
  ]);
  addLine([
    [dots2],
    ["skills", cEnum.methods, "span"],
    ["() {", cEnum.plainText, "span"]
  ], true);
  addLine([
    [dots4],
    ["return", cEnum.scope, "span"],
    [" {", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots6],
    [words.webDev, cEnum.string, "span"],
    [": [", cEnum.plainText, "text"]
  ], true);
  addSkills(skillsWeb, true);
  addLine([
    [dots8],
    ["\"", cEnum.string, "span"],
    ["|", cEnum.cursor, "span"],
    ["\"", cEnum.string, "span"]
  ]);
  addLine([
    [dots6],
    ["],", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots6],
    [words.softDev, cEnum.string, "span"],
    [": [", cEnum.plainText, "text"]
  ], true);
  addSkills(skillsSoft);
  addLine([
    [dots6],
    ["],", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots6],
    [words.other, cEnum.string, "span"],
    [": [", cEnum.plainText, "text"]
  ], true);
  addSkills(skillsOther);
  addLine([
    [dots4],
    ["]};", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots2],
    ["}", cEnum.plainText, "text"]
  ]);
  addLine([
    ["}", cEnum.plainText, "text"],
  ]);
}

/** Add navigation programmatically, to fix issue with scrollLine overflowing */
function addNavigation() {
  const scrollClasses = {
    ".intro": "#intro",
    ".projects": "#projects",
    ".about": "#about",
    ".contact": "#contactTarget"
  };

  const body = document.querySelector("body");
  const assignScrollEvent = (clicked, destination) => {
    clicked.addEventListener("click", () => {
      body.style.overflow = "initial";
      destination.scrollIntoView(true, {behavior: "smooth"});
    });
  };

  for (scrollCl of Object.keys(scrollClasses)) {
    const elements = document.querySelectorAll(scrollCl);
    const targetEl = document.querySelector(scrollClasses[scrollCl]);
    elements.forEach(el => { assignScrollEvent(el, targetEl); });
  }
}

/** Waypoints will make the animations run after you scroll the elements in view */
function addWaypoint(elName, classPairs = {
  ".revealEl": "revealElAnimation",
  ".coverSpan": "coverSpanAnimation"
}) {
  const element = document.getElementById(elName);
  new Waypoint({
    element: element,
    handler: (direction) => {
      for (eventClass of Object.keys(classPairs)) {
        const elements = element.querySelectorAll(eventClass);
        elements.forEach(el => { el.classList.add(classPairs[eventClass]); });
      }
    },
    offset: "95%"
  });
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
const navbarToggleOnScroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

function closeProjectWindow() {
  const projectWindow = document.getElementById("projectWindow");
  const html = document.querySelector("html");
  if (html) { html.className = "autoOverflow"; }
  if (projectWindow) { projectWindow.remove(); }
}

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeProjectWindow();
  }
});

function addClickEventListener(project) {
  const element = document.getElementById(project);

  // This is taken from the project's data-img-big attribute
  /* Like with this custom attribute, you can customize all your projects by adding data- attributes,
  and accessing them like this, and placing them in the elements below. this changes only the image
  for now, but you can add different text for the title and the description too, or modify any other element. */
  const img = element.dataset.imgBig;
  const projURL = element.dataset.url;
  const githubURL = element.dataset?.github || projURL;
  const projTags = element.querySelector('.proj-tags')?.innerHTML;
  const projTitle = element.querySelector('.proj-title')?.innerHTML;
  let desc = null;
  if (lang === "eng") {
    desc = descriptions[projTitle];
  } else if (lang === "ita") {
    desc = descriptionsIt[projTitle];
  }
  const navigateToURL = () => {
    window.open(projURL, "_blank");
  };
  const navigateToGithubURL = () => {
    window.open(githubURL, "_blank");
  };

  // Create new project window, and append all elements to it
  const body = document.querySelector("body");
  const projectWindow = document.createElement("div");
  projectWindow.id = "projectWindow";
  projectWindow.className = "projectImgReveal";
  const imgHolder = document.createElement("div");
  imgHolder.id = "imgHolder";
  imgHolder.className = "revealEl revealElAnimation";

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.className = "revealEl revealElAnimation";

  const backButton = document.createElement("span");
  backButton.id = "backButton";
  backButton.innerHTML = words.back;
  backButton.onclick = closeProjectWindow;

  const tags = document.createElement("span");
  tags.id = "tags";
  tags.className = "tagText";
  tags.innerHTML = projTags;

  const title = document.createElement("h1");
  title.className = "link";
  title.onclick = navigateToGithubURL;
  title.innerHTML = projTitle;

  const description = document.createElement("p");
  description.className = "projDesc";
  description.innerHTML = desc;

  const animatedBTN = document.createElement("a");
  animatedBTN.className = "animatedBTN projectVisitBTN";
  animatedBTN.innerHTML = words.visit;
  animatedBTN.onclick = navigateToURL;
  sidebar.append(backButton);
  sidebar.append(tags);
  sidebar.append(title);
  sidebar.append(description);
  sidebar.append(animatedBTN);

  const imgEl = document.createElement("img");
  imgEl.onclick = navigateToURL;
  imgHolder.append(imgEl);
  projectWindow.append(imgHolder);

  projectWindow.append(sidebar);
  const coverSpan = document.createElement("span");
  coverSpan.className = "coverSpan projectRevealDurationCover coverSpanAnimation";
  projectWindow.append(coverSpan);

  // append the project window to the body, when the project is clicked
  const evFn = (ev) => {
    body.append(projectWindow);
    imgEl.src = img;
    const html = document.querySelector("html");
    if (html) {html.className = "hideOverflow";}
  };
  const boundFn = evFn.bind(this);
  if (projEvents[element.id]) {
    element.removeEventListener("click", projEvents[element.id]);
  }
  projEvents[element.id] = boundFn;
  element.addEventListener("click", projEvents[element.id]);
}

/** The maximum is inclusive and the minimum is inclusive */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeText() {
  const changingText = document.querySelector("#changingText");
  const randomChars = `@#$%{#-.,.#!"!$"$&$"/%£("}[]()/\\'"\`~,;:.<>`;
  const rnLn = randomChars.length - 1;
  String.prototype.replaceAt = function(index, replacement) {
    if (!this[index]) {
      return this;
    }
    if (!replacement) {
      const rand = getRandomIntInclusive(0, rnLn);
      replacement = randomChars[rand];
    }
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }
  const possibleTexts = [
    "Typescript",
    "Node.js",
    "Angular",
    "Firebase",
    "Nginx",
    "HTML5",
    "CSS3",
    "jQuery",
    "Less",
    "Sass",
    "JavaScript",
    "C#"
  ];

  let index = 0;
  let oldText = changingText.innerText;
  setInterval(() => {
    oldText = changingText.innerText;
    const newText = possibleTexts[index];
    let tempText = oldText;
    let loop = 0;
    const loopLimit = 40;
    const changeNextChar = () => {
      loop++;
      if (loop >= loopLimit / 2) {
        const rand = getRandomIntInclusive(0, newText.length - 1);
        const randTT = getRandomIntInclusive(0, tempText.length - 1);
        tempText = tempText.replaceAt(randTT, newText[rand]);
        changingText.innerText = tempText;
      }else {
        const rand = getRandomIntInclusive(0, rnLn);
        const randTT = getRandomIntInclusive(0, tempText.length - 1);
        const randChar = randomChars[rand];
        tempText = tempText.replaceAt(randTT, randChar);
        changingText.innerText = tempText;
      }
      if (loop >= loopLimit) {
        loop = 0;
        changingText.innerText = newText;
        index++;
        if (index >= possibleTexts.length) {
          index = 0;
        }
      } else {
        setTimeout(() => {
          changeNextChar();
        }, 2);
      }
    };
    changeNextChar();
  }, 3000);
}
