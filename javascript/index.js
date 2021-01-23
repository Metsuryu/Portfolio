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

// TODO: Add translations
const descriptions = {
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

function onLoad() {
  changeText();
  AOS.init();
  // Add any additional ID for waypoints here.
  const projectsIDs = ["proj1", "proj2", "proj3", "proj4", "proj5", "proj6", "proj7"];
  projectsIDs.forEach(proj => {
    addWaypoint(proj, {
      ".revealEl": "revealProjAni"
      // ".coverspan": "coverspananimation"
    });
    addClickEventListener(proj);
  });
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
    "Angular 2 - 7",
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
    "Phaser",
    "Nginx",
    "Jasmine",
    "Jest",
    "Karma",
    "p5.js"
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
    "Unity",
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
      "name": "Freelance work",
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
      "duration": "2020-05 | 2020-12"
    },

  ];
  const editorEl = document.querySelector("#codeEditor");
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
        [`"role"`, cEnum.string, "span"],
        [": ", cEnum.plainText, "text"],
        [`"${job.role}"`, cEnum.string, "span"],
        [",", cEnum.plainText, "text"],
      ];
      const line3 = [
        [dots10],
        [`"duration"`, cEnum.string, "span"],
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
    ["// I'm a Full Stack Web Developer", cEnum.comment]
  ]);
  addLine([
    [dots2],
    ["constructor", cEnum.funcName],
    ["() {", cEnum.plainText, "span"]
  ], true);
  addLine([
    [dots4],
    ["this", cEnum.scope],
    [".name", cEnum.plainText, "span"],
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
    ["employmentStatus", cEnum.methods, "span"],
    ["() {", cEnum.plainText, "span"]
  ], true);



  addLine([
    [dots4],
    ["return", cEnum.scope, "span"],
    [" {", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots6],
    ["\"Current\"", cEnum.string, "span"],
    [": ", cEnum.plainText, "text"],
    ["\"Looking for a new job\"", cEnum.string, "span"],
    [",", cEnum.plainText, "text"],
  ], true);
  addLine([
    [dots6],
    ["\"Past\"", cEnum.string, "span"],
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
  // TODO: Add past employment history
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
    ["\"Web Development\"", cEnum.string, "span"],
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
    ["\"Software development\"", cEnum.string, "span"],
    [": [", cEnum.plainText, "text"]
  ], true);
  addSkills(skillsSoft);
  addLine([
    [dots6],
    ["],", cEnum.plainText, "text"]
  ]);
  addLine([
    [dots6],
    ["\"Other\"", cEnum.string, "span"],
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
  const desc = descriptions[projTitle];
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
  backButton.innerHTML = "← Back";
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
  animatedBTN.innerHTML = "VISIT";
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
  element.addEventListener("click", ev => {
    body.append(projectWindow);
    imgEl.src = img;
    const html = document.querySelector("html");
    if (html) { html.className = "hideOverflow"; }
  });
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
