/** Find browser language, and translate on load */
const userLang = navigator.language || navigator.userLanguage;
if(userLang == "it-IT" || userLang == "it") {
  toItalian();
}else {
  toEnglish();
};

/* Add tag highlighting */
const tags = document.querySelectorAll(".tag");
tags.forEach(el => {
  el.addEventListener("click", () => {
    tags.forEach(i => {
      i.innerHTML === el.innerHTML && i.classList.toggle("selected");
    });
  });
});

/** When the button with "btn" id is clicked, toggles the text with "desc" id */
function toggleDesc(btn, desc) {
  const button = document.querySelector(btn);
  const description = document.querySelector(desc);

  button.addEventListener("click", () => {
    description.classList.toggle("hidden");
    button.firstElementChild.classList.toggle("icon-down-arrow");
    button.firstElementChild.classList.toggle("icon-up-arrow");
  });
};

toggleDesc("#lanteaMore", "#lanteaMoreTxt");
toggleDesc("#crawlerMore", "#crawlerMoreTxt");
// toggleDesc("#icdmMore", "#icdmMoreTxt");
toggleDesc("#solsysMore", "#solsysMoreTxt");
toggleDesc("#missoniMore", "#missoniMoreTxt");
toggleDesc("#stone30More", "#stone30MoreTxt");
toggleDesc("#stoneIslandMore", "#stoneIslandMoreTxt");
toggleDesc("#cartierMore", "#cartierMoreTxt");
toggleDesc("#recruiterMore", "#recruiterMoreTxt");
toggleDesc("#unannouncedMore", "#unannouncedMoreTxt");

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

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("darkMode");
}

/** Translates to Italian */
function toItalian() {
  trTxt("more", `Dettagli <p class="icon-down-arrow"></p>`, true);
  trTxt("downloadID", `<a title="Scarica il mio CV" href="Resume%20Mario%20Cannistr%C3%A0%20-%20Web%20Developer.pdf" download="Mario Cannistrà -
  Full Stack Web Developer - Resume.pdf">Scarica il mio CV <span class="icon-download"></span></a>`);
  trTxt("htitleID", `Mario Cannistrà - Web Developer Full Stack - Portfolio`);
  trTxt("profileID", `Sono uno sviluppatore di siti Web. <br>Vivo in Italia, e parlo Inglese fluentemente.<br>Sono specializzato
  nello sviluppo front-end e back-end,<br>e ho esperienza nello sviluppo di applicazioni per computer.<br>
  Lavoro occasionalmente come freelancer, aiutando<br>
  clienti con problemi di programmazione su
  <a target='_blank' href='https://www.codementor.io/@mariocannistrawork' rel="noopener noreferrer">codementor</a>.`);
  trTxt("locationID", `<span class='icon-map-marker'></span><p> Catanzaro, Italia</p>`);
  trTxt("githubID", `<img src="img/GitHub-Mark-32px.png" alt="GitHub"> Il mio profilo GitHub`);

  trTxt("cartierMoreTxt",
    `Nel 2021 sono tornato a far parte di YNAP, per lavorare con un nuovo team sul sito e-commerce di Cartier.`);
  trTxt("stoneIslandMoreTxt",
  `Nel tempo che ho trascorso a YNAP da sviluppatore Front-end questo è stato uno dei tre siti sul quale ho
  lavorato con il mio team, insieme a Stone Island 30 e Missoni.<br>
  Quando ho iniziato, la maggior parte del lavoro per Stone Island era incentrata sull'accessibilità,
  dato che il sito era nel mezzo di una grande rinnovazione per soddisfare le norme previste.<br>
  Oltre all'accessibilità, abbiamo sviluppato nuove funzionalità come notifiche e nuove pagine, e risolto bug esistenti.<br>
  Stone Island ha due parti, una principale che usa C# come linguaggio per le viste (cshtml)
  e per la logica di back-end, e un altra che usa PHP.`);
  trTxt("stone30MoreTxt",
  `Nel tempo che ho trascorso a YNAP da sviluppatore Front-end questo è stato uno dei tre siti sul quale ho
  lavorato con il mio team, insieme a Stone Island e Missoni.<br>
  Questo progetto è iniziato verso la fine della mia permanenza a YNAP, dopo il completamento della versione accessibile di Stone Island,
  e per questo ho lavorato a Stone Island 30 per soli due mesi.<br>
  Questo è un completo rinnovamento di Stone Island 30 iniziato da zero, usando React con Gatsby, e incentrato sull'accessibilità.`);
  trTxt("missoniMoreTxt",
  `Nel tempo che ho trascorso a YNAP da sviluppatore Front-end questo è stato uno dei tre siti sul quale ho
  lavorato con il mio team, insieme a Stone Island e Stone Island 30.<br>
  Quando ho iniziato, Missoni era già accessibile, quindi il team era concentrato principalmente sulla versione accessibile di Stone Island.<br>
  Quando nuove funzionalità venivano richieste, venivano sviluppate con in mente l'accessibilità, e il tempo rimanente era usato per manutenzione
  e per risolvere bug esistenti.<br>
  Missoni ha due parti, una principale che usa C# come linguaggio per le viste (cshtml)
  e per la logica di back-end, e un altra che usa PHP.`);
  trTxt("lanteaMoreTxt",
  `Ho lavorato su Lantea dal 2017-09-12 al 2019-02-01, quando il progetto è stato sospeso.<br>
  Lantea è una piattaforma che permette agli autori di scrivere e postare articoli, e guadagnare condividendo il reddito ricavato dalle inserzioni.<br>
  Quando ho iniziato, Lantea era in uno stato iniziale di sviluppo, alcune funzionalità erano già parzialmente implementate,
  ma a quel punto si è deciso che sarebbe stato meglio rifattorizzare quasi tutto, passando da AngularJS a Angular 2+.<br>
  Per questo motivo, la maggior parte di questa versione del sito è stata sviluppata da me, con l'eccezzione di risorse grafiche,
  parte dell' HTML e CSS adattai dalla versione precedente, e del codice di altri due sviluppatori che ci lavoravano occasionalmente.<br>
  Funzionalità che ho implementato includono, ma non sono limitate a: funzionalità
  <a href='https://it.wikipedia.org/wiki/Tavola_CRUD' rel="noopener noreferrer">CRUD</a> per gli articoli,
  chat di messaggistica istantanea che permette l'upload di immagini, commenti, strumenti
  per amministratori, bozze, notificazioni, funzione di ricerca per articoli,
  statistiche, impostazioni varie, amici (followers), medaglie (achievements), e verifica
  dei token da server per la sicurezza delle operazioni sensibili.<br>
  Il sito non è mai stato rilasciato ufficialmente, ma una versione per la maggior
  parte funzionale è disponibile <a href='https://new-lantea.web.app/' rel="noopener noreferrer">online qui.</a>`);
  /* trTxt("icdmMoreTxt",
  `I Cecchini Del Mare è stato commissionato dall'
  <a target='_blank' href='https://www.facebook.com/groups/cecchinidelmare/' rel="noopener noreferrer">omonimo gruppo di Facebook.</a><br>
  Il sito permete agli utenti di trasmettere la propria posizione e chattare con tutti gli utenti connessi.
  Per fare queso, le coordinate e altre informazioni (nome, immagine del profilo...) di ogni utente sono aggiunte
  a un database Mongo, e sono vengono in seguito utilizzate da ogni client per mostrare gli utenti sulla mappa
  e nella lista di utenti online.<br>
  La chat è fatta con Socket.IO, ed è abbastanza leggera e veloce. Permette agli utenti di inviare messaggi privati,
  salva la cronologia della chat nei Cookies, ha funzionalità per controllare se il messaggio è stato inviato
  correttamente, e quando viene aperta, mostra la distanza tra i due utenti se possibile.<br>
  Lo sviluppo non ha presentato molti problemi tecnici, ma mi ha aiutato comunque a migliorare le mie abilità.`); */
  trTxt("crawlerMoreTxt", `Crawler usa poco HTML e CSS, dato che la maggior parte del lavoro si è concetrato sulla
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
  non devono essere sempre una priorità, specialmente quando le differenze sono insignificanti.`);
  trTxt("solsysMoreTxt",
  `Un semplice 'gioco' che dimostra le orbite dei pianeti e le loro lune, permette di cambiarne la velocità,
  e permette di esplorare il sistema solare con un astronave.`);
  trTxt("recruiterMoreTxt",
  `Sviluppato un'applicazione a pagina singola reattiva utilizzando Angular e Firebase. Implementata una pagina di lavori con annunci e un'interfaccia di amministrazione per la gestione degli annunci di lavoro e delle recensioni LinkedIn. Utilizzato Angular per lo sviluppo frontend, Firebase per i servizi backend e SASS per lo styling.`);
  trTxt("unannouncedMoreTxt",
  `Maggiori dettagli saranno disponibili dopo il rilascio del progetto.`);

  trTxt("skillsID", `Abilità`);
  trTxt("wbID", `Tecnologie web`);
  trTxt("swID", `Tecnologie Software`);
  trTxt("otherID", `Altro`);
  trTxt("titleID", `Sviluppatore Web`);
  trTxt("projectsID", `Progetti`);

  trTxt("SolSysDescID", `Un sistema solare animato sviluppato con Phaser.`);
  trTxt("crawlerDescID", `Un clone del gioco Snake. Ho sviluppato questa pagina per dimostrare le tecnologie
  <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank' rel="noopener noreferrer"> MEAN</a>.`)
  /* trTxt("ICDMDescID", `Un social network <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' rel="noopener noreferrer" target='_blank'>
  MEAN</a> per pescatori subacquei. Permette di condividere la propria posizine tramite geolocalizzazione, e di chattare.`); */
  trTxt("LanteaDescID", `Una piattaforma per scrittori.<br>Permette agli autori di guadagnare soldi scrivendo articoli.`);
  trTxt("MissoniDescID", `Il sito E-commerce di Missoni, una casa di moda Italiana.`);
  trTxt("Stone30DescID", `Un sito sviluppato per un evento speciale per Stone Island.`);
  trTxt("StoneIslandDescID", `Il sito E-commerce di Stone Island, una casa di moda Italiana.`);
  trTxt("cartierDescID", `Il sito E-commerce di Cartier, un conglomerato Francese di beni di lusso che disegna, produce, distribuisce,
  e vende gioielleria, beni di pelle, e orologi.`);
  trTxt("recruiterDescID", `Un sito web moderno per un reclutatore professionale, con elenchi di lavori e una pagina di amministrazione per la gestione dei contenuti.`);
  trTxt("unannouncedDescID", `Un progetto personale non annunciato attualmente in fase di sviluppo.`);
};

/** Translates to English */
function toEnglish() {
  trTxt("more", `Details <p class="icon-down-arrow"></p>`, true);
  trTxt("downloadID", `<a title='Download my resume' href='Resume%20Mario%20Cannistr%C3%A0%20-%20Web%20Developer.pdf'
  download='Mario Cannistrà - Full Stack Web Developer - Resume.pdf' target='_blank'>Download my resume <span class='icon-download'></span></a>`);
  trTxt("htitleID", `Mario Cannistrà - Full Stack Web Developer - Portfolio`);
  trTxt("profileID", `I'm a Full Stack Web Developer.<br>
  I live in Italy, and I speak English and Italian fluently.<br>
  I focus on front-end and back-end web development,<br>
  and I have some experience in software development.<br>
  I occasionally work as a freelancer, helping
  people with their programming problems on
  <a target='_blank' href='https://www.codementor.io/@mariocannistrawork' rel="noopener noreferrer">codementor</a>.`);
  trTxt("locationID", `<span class='icon-map-marker'></span><p> Catanzaro, Italy</p>`);
  trTxt("githubID", `<img src="img/GitHub-Mark-32px.png" alt="GitHub"> My GitHub profile`);

  trTxt("cartierMoreTxt",
    `In 2021 I returned at YNAP, to work with a new team on the Cartier e-commerce website.`);
  trTxt("stoneIslandMoreTxt",
  `In my time at YNAP as a Front-end developer this was one of the three websites I worked on with my team, along with Stone Island 30, and Missoni.<br>
  When I joined, the majority of the work on this site revolved around accessibility, as the site was in the middle of a
  major overhaul to comply with better standards.<br>
  Additionally to the accessibility, we developed new features, such as push notifications and new pages, and fixed existing bugs.<br>
  Stone Island has two parts, a main one that uses C# as language for the views (cshtml) and back-end logic, and another that uses PHP.`);
  trTxt("stone30MoreTxt",
  `In my time at YNAP as a Front-end developer this was one of the three websites I worked on with my team, along with Stone Island, and Missoni.<br>
  This project started near the end of my time at YNAP, when we completed the accessibility release of Stone Island, because of that I only worked
  on this for two months.<br>
  This is a complete overhaul of Stone Island 30 starting from zero using React with Gatsby, and focusing on accessibility.`);
  trTxt("missoniMoreTxt",
  `In my time at YNAP as a Front-end developer this was one of the three websites
  I worked on with my team, along with Stone Island, and Stone Island 30.<br>
  When I joined, this site was already accessible, so the focus for our team was implementing the accessibility release for Stone Island.<br>
  When new features were requested we implemented them with accessibility in mind,
  and the remaining time was spent on maintanance and fixing existing bugs.<br>
  Missoni has two parts, a main one that uses C# as language for the views (cshtml) and back-end logic, and another that uses PHP.`);
  trTxt("lanteaMoreTxt",
  `I worked on Lantea from 2017-09-12 to 2019-02-01, when the project was suspended.<br>
  Lantea is a platform that lets authors write and post articles, and earn money with revenue sharing from advertisement.<br>
  When I joined, Lantea was on early stages of development, some of the features were already partially implemented,
  but it was decided to make a large refactor and rework almost everything, moving from AngularJS to Angular 2+.<br>
  Because of that, most of the current version of the site was developed by me, with the exception of the art assets,
  some of the HTML and CSS adapted from the previous version of the site, and some code by two other developers that worked on it occasionally.<br>
  Features that I implemented include, but are not limited to:
  <a href='https://en.wikipedia.org/wiki/Create,_read,_update_and_delete' rel="noopener noreferrer">CRUD</a> functionalities for articles,
  instant messaging chat that also allows the upload of pictures, a comment system, admin tools, drafts, notifications, search for articles,
  statistics, various settings, followers, achievements, and securing sensitive operations with server-side token verification.<br>
  The website was never officially launched, but a mostly functional live version is available
  <a href='https://new-lantea.web.app/' rel="noopener noreferrer">online here.</a>`);
  /* trTxt("icdmMoreTxt",
  `I Cecchini Del Mare (Snipers of the Sea in Italian) was commissioned by
  <a target='_blank' href='https://www.facebook.com/groups/cecchinidelmare/' rel="noopener noreferrer">the Facebook group of the same name.</a><br>
  The website allows people to share their current location, so that everyone connected will be able
  to see them on the map, and chat with them.
  To do this, the coordinates and other data (name, profile picture...) of each user are added to a Mongo database,
  and they are retrived by each client to be displayed on the map, and in the list of online users.<br>
  The chat is made with Socket.IO, and is fairly lightweight. It allows users to send private messages to eachother,
  it saves the chat history in the cookies, has functionality to check if the message was sent correctly,
  and when opened, shows the distance between the two users if possible.<br>
  The development didn't present too many technical problems, but it helped me gain quite a lot of experience.`); */
  trTxt("crawlerMoreTxt",
  `Crawler uses little HTML and CSS, as most of the work went into the game, I opted for a simple look for the page.<br>
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
  and performance is not always a priority, especially when differences are insignificant.`);
  trTxt("solsysMoreTxt",
  `A simple 'game' where you can see the orbits of the planets and their moons, change their speed, and use a starship to explore the solar system.`);
  trTxt("recruiterMoreTxt",
  `Developed a responsive single-page application using Angular and Firebase. Implemented a jobs page with listings and an admin interface for managing job postings and LinkedIn reviews. Utilized Angular for frontend development, Firebase for backend services, and SASS for styling.`);
  trTxt("unannouncedMoreTxt",
  `More details will be available after the project's release.`);

  trTxt("skillsID", `Skills`);
  trTxt("wbID", `Website development`);
  trTxt("swID", `Software development`);
  trTxt("otherID", `Other`);
  trTxt("titleID", `Full Stack Web Developer`);
  trTxt("projectsID", `Projects`);

  trTxt("SolSysDescID", `Animated solar system made using Phaser.`);
  trTxt("crawlerDescID", `A clone of the game Snake. I made this to demonstrate the
  <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank'>MEAN stack</a> technologies.`);
  /* trTxt("ICDMDescID", `A <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' rel="noopener noreferrer" target='_blank'>MEAN</a>
  social network for spearfishers. It allows users to share their current location through geolocation, and chat with eachother.`); */
  trTxt("LanteaDescID", `A platform for writers.<br>It allows authors to earn money by writing articles.`);
  trTxt("MissoniDescID", `The E-commerce website for Missoni, a high-end Italian fashion house.`);
  trTxt("Stone30DescID", `A site developed for a special event for Stone Island.`);
  trTxt("StoneIslandDescID", `The E-commerce website for Stone Island, a high-end Italian fashion house.`);
  trTxt("cartierDescID", `The E-commerce for Cartier, a French luxury-goods conglomerate that designs, manufactures,
  distributes, and sells jewellery, leather goods, and watches.`);
  trTxt("recruiterDescID", `A modern website for a professional recruiter, featuring job listings and an admin page for content management.`);
  trTxt("unannouncedDescID", `An unannounced personal project currently in development.`);
};
