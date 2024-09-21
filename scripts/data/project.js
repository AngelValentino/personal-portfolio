export const projectsData = [
  {
    id: 1,
    title: 'Racing Spirit',
    description: {
      en: '<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://racing-spirit.pages.dev/">Racing Spirit</a> is an e-commerce single-page application (SPA), featuring a JSON mock back-end, developed from scratch using HTML, CSS, JavaScript and React. Inspired by <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> design and featuring product images from <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      es: '<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://racing-spirit.pages.dev/">Racing Spirit</a> es una aplicación de una sola página (SPA) de comercio electrónico, que cuenta con un back-end simulado en JSON, desarrollada desde cero utilizando HTML, CSS, JavaScript y React. Inspirada en el diseño de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> y con imágenes de productos de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      ro: '<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://racing-spirit.pages.dev/">Racing Spirit</a> este o aplicație de tip single-page (SPA) de comerț electronic, care include un back-end simulat în JSON, dezvoltată de la zero folosind HTML, CSS, JavaScript și React. Inspirată de designul <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> și cu imagini de produse de la <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      ca: `<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://racing-spirit.pages.dev/">Racing Spirit</a> és una aplicació d'una sola pàgina (SPA) de comerç electrònic, que compta amb un back-end simulat en JSON, desenvolupada des de zero utilitzant HTML, CSS, JavaScript i React. Inspirada en el disseny de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> i amb imatges de productes d'<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.`
    },
    technologies: [
      'html',
      'css',
      'javascript',
      'react'
    ],
    codeUrl: 'https://github.com/AngelValentino/racing-spirit',
    demoUrl: 'https://racing-spirit.pages.dev/'
  },
  {
    id: 2,
    title: 'YouTube Clone',
    description: {
      en: 'Front-end <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> home page clone developed from scratch using HTML, CSS and JavaScript. Featuring videos containing information about <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a> movies.',
      es: 'Clon de la página de inicio de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> en Front-end desarrollado desde cero utilizando HTML, CSS y JavaScript. Incluye videos con información sobre películas de <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a>.',
      ro: 'Clonă a paginii de pornire <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> Front-end dezvoltată de la zero folosind HTML, CSS și JavaScript. Conține videoclipuri cu informații despre filmele <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a>.',
      ca: `Clon de la pàgina d'inici de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> en Front-end desenvolupat des de zero utilitzant HTML, CSS i JavaScript. Inclou vídeos amb informació sobre les pel·lícules de <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a>.`
    },
    technologies: [
      'html',
      'css',
      'javascript'
    ],
    codeUrl: 'https://github.com/AngelValentino/youtube-clone',
    demoUrl: 'https://youtube-clone1.pages.dev/'
  },
  {
    id: 3,
    title: 'TaskFlow',
    description: {
      en: '<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://taskflow1.pages.dev/">TaskFlow</a> is your go-to app for effortless productivity. Easily manage tasks, set reminders, and track your progress. All with a clean, user-friendly and accessible design that helps you stay organized and focused.',
      es: '<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://taskflow1.pages.dev/">TaskFlow</a> es tu aplicación ideal para una productividad sin esfuerzo. Gestiona tareas fácilmente, configura recordatorios y sigue tu progreso. Todo con un diseño limpio, amigable y accesible que te ayuda a mantenerte organizado y enfocado.',
      ro: '<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://taskflow1.pages.dev/">TaskFlow</a> este aplicația ta de bază pentru o productivitate fără efort. Gestionează sarcinile cu ușurință, setează memento-uri și urmărește-ți progresul. Totul cu un design curat, prietenos și accesibil care te ajută să rămâi organizat și concentrat.',
      ca: `<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://taskflow1.pages.dev/" és l'aplicació ideal per a una productivitat sense esforç. Gestiona les tasques amb facilitat, configura recordatoris i fes un seguiment del teu progrés. Tot amb un disseny net, intuïtiu i accessible que t'ajuda a mantenir-te organitzat i centrat.`
    },
    technologies: [
      'html',
      'css',
      'javascript'
    ],
    codeUrl: 'https://github.com/AngelValentino/TaskFlow',
    demoUrl: 'https://taskflow1.pages.dev/'
  }
];

function toggleSiblingBtn(btn, className) {
  const targetBtn = className === 'show' ? btn.nextElementSibling : btn.previousElementSibling;
  targetBtn.classList.toggle(className);
  targetBtn.focus();
}

export function toggleProjectInfoPanel(e) {
  const moreInfoBtn = e.target.closest('.project__more-info-btn');
  const closePanelBtn = e.target.closest('.project__info-close-btn');
  const projectLm = e.target.closest('.project');
  const infoPanelLm = projectLm && projectLm.querySelector('.project__info');
  const imgLinkLm = projectLm && projectLm.querySelector('.project__img-link');

  if (moreInfoBtn) {
    // Show info panel and scroll to top
    infoPanelLm.classList.add('show');
    infoPanelLm.scrollTo(0, 0);
    // Show close panel button and add focus
    toggleSiblingBtn(moreInfoBtn, 'show');

    // Hide project image link and more info button
    imgLinkLm.classList.add('hide');
    moreInfoBtn.classList.add('hide');
  }
  else if (closePanelBtn) {
    // Hide info panel and close info panel button
    infoPanelLm.classList.remove('show');
    closePanelBtn.classList.remove('show');

    // Show project image link and more info button
    imgLinkLm.classList.remove('hide');
    toggleSiblingBtn(closePanelBtn, 'hide');
  }
}