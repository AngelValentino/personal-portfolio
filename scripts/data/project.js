import { convertToKebabCase } from "../utils.js";

// Get the project list element from the DOM
const projectListLm = document.getElementById('project-list');

// Project data array, containing project information and description in multiple languages
export const projectsData = [
  {
    id: 1,
    title: 'Racing Spirit',
    description: {
      en: 'Racing Spirit is an e-commerce single-page application (SPA), featuring a JSON mock back-end, developed from scratch using HTML, CSS, JavaScript and React. Inspired by <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> design and featuring product images from <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      es: 'Racing Spirit es una aplicación de una sola página (SPA) de comercio electrónico, que cuenta con un back-end simulado en JSON, desarrollada desde cero utilizando HTML, CSS, JavaScript y React. Inspirada en el diseño de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> y con imágenes de productos de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      ro: 'Racing Spirit este o aplicație de tip single-page (SPA) de comerț electronic, care include un back-end simulat în JSON, dezvoltată de la zero folosind HTML, CSS, JavaScript și React. Inspirată de designul <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> și cu imagini de produse de la <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      ca: `Racing Spirit és una aplicació d'una sola pàgina (SPA) de comerç electrònic, que compta amb un back-end simulat en JSON, desenvolupada des de zero utilitzant HTML, CSS, JavaScript i React. Inspirada en el disseny de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> i amb imatges de productes d'<a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.`
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
      es: 'Front-end clon de la página de inicio de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> desarrollado desde cero utilizando HTML, CSS y JavaScript. Incluye videos con información sobre películas de <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a>.',
      ro: 'Clonă Front-end a paginii principale de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> dezvoltată de la zero folosind HTML, CSS și JavaScript. Conține videoclipuri cu informații despre filmele <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a>.',
      ca: `Front-end clon de la pàgina d'inici de <a class="slide-in-and-back underline no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a>  desenvolupat des de zero utilitzant HTML, CSS i JavaScript. Inclou vídeos amb informació sobre les pel·lícules de <a class="slide-in-and-back underline no-wrap" target="blank" href="https://ghiblicollection.com/">Studio Ghibli</a>.`
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
      en: 'TaskFlow is your go-to app for effortless productivity. Easily manage tasks, set reminders, and track your progress. All with a clean, user-friendly and accessible design that helps you stay organized and focused.',
      es: 'TaskFlow es tu aplicación ideal para una productividad sin esfuerzo. Gestiona tareas fácilmente, configura recordatorios y sigue tu progreso. Todo con un diseño limpio, amigable y accesible que te ayuda a mantenerte organizado y enfocado.',
      ro: 'TaskFlow este aplicația ta de bază pentru o productivitate fără efort. Gestionează sarcinile cu ușurință, setează memento-uri și urmărește-ți progresul. Totul cu un design curat, prietenos și accesibil care te ajută să rămâi organizat și concentrat.',
      ca: `TaskFlow és l'aplicació ideal per a una productivitat sense esforç. Gestiona les tasques amb facilitat, configura recordatoris i fes un seguiment del teu progrés. Tot amb un disseny net, intuïtiu i accessible que t'ajuda a mantenir-te organitzat i centrat.`
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

// Generate the HTML for the project's image link
function generateProjectLinkHTML(project) {
  return `
    <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-img-link" class="project__img-link" aria-label="Go to ${project.title} live demo." target="_blank" href="${project.demoUrl}">
      <div class="project__img-container blur-img-loader" style="background-image: url(images/projects-screenshots/${convertToKebabCase(project.title)}-low-res.jpg)">
        <img aria-hidden="true" role="presentation" class="project__img" src="images/projects-screenshots/${convertToKebabCase(project.title)}.jpg" alt="">
      </div>
      <div aria-hidden="true" role="presentation" class="project__tooltip">
        <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-tooltip-text" class="project__tooltip-text">Live Demo</p>
        <svg aria-hidden="true" focusable="false" role="presentation" class="project__tooltip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
        </svg>
      </div>
    </a>
  `;
}

// Generate the HTML for the project technologies icons
function generateProjectTechIconsHTML(techTitles) {
  // Loop through the technologies titles list and get the respective tech icons
  return techTitles.map(title => `
    <li>
      <img title="${title}" src="images/tech-icons/${title}-icon.jpg" alt="${title}">
    </li>
  `).join('');
}

// Generate the project information HTML. Including title, description, technologies list and project links
function generateProjectInfoHTML(project) {
  return `
    <div id="project__info-${project.id}" class="project__info">
      <h3 class="project__info-title">
        <a class="project__info-link appear-bg-from-center" target="_blank" href="${project.demoUrl}">
          ${project.title}
        </a>
      </h3>
      <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-description" class="project__info-summary-text">${project.description.en}</p>
      <ul data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-tech-list" aria-label="Project technologies." class="project__technologies-list">
        ${generateProjectTechIconsHTML(project.technologies)}
      </ul>
      <div class="project__links-container">
        <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-code-link" aria-label="Go to ${project.title} code repository." class="project__link project__code-link slide-in-and-out" target="_blank" href="${project.codeUrl}">
          <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-code-text" aria-hidden="true" class="project__link-title">Code</p>
          <svg class="project__link-code-icon project__link-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14" />
            </g>
          </svg>
        </a>
        <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-demo-link" aria-label="Go to ${project.title} live demo." class="project__link project__demo-link slide-in-and-out" target="_blank" href="${project.demoUrl}">
          <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-demo-text" aria-hidden="true" class="project__link-title">Live Demo</p>
          <svg class="project__link-demo-icon project__link-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
          </svg>
        </a>
      </div>
    </div>
  `;
}

// Determine project's layout symmetry 
function setProjectSymmetry(symmetry, project) {
  // Original layout: image first, info second
  if (symmetry === 'original') {
    return `
      ${generateProjectLinkHTML(project)}
      ${generateProjectInfoHTML(project)}
    `;
  } 
  // Mirrowed layout: info first, image second
  else if (symmetry === 'mirrowed') {
    return `
      ${generateProjectInfoHTML(project)}
      ${generateProjectLinkHTML(project)}
    `;
  }
}

// Generate the HTML for a single project item
function generateProjectHTML(symmetry, project) {
  return `
    <li class="project ${symmetry === 'original' ? 'original' : 'mirrowed'}">
      <button data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-more-info-btn" aria-label="Read more information about ${project.title}." aria-controls="project__info-${project.id}" title="More info" class="project__more-info-btn">
        <svg aria-hidden="true" focusable="false" role="presentation" class="project__more-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="currentColor" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h1.25A2.25 2.25 0 0 1 11 15.968a2.25 2.25 0 0 1 4 0a2.25 2.25 0 0 1 1.988-1.218q.012-.124.012-.25zM6 6.75c0-.414.316-.75.706-.75h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706C6.316 7.5 6 7.164 6 6.75m0 3c0-.414.316-.75.706-.75h3.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75M6.706 12h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75s.316-.75.706-.75m3.544 5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M13 18.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" />
        </svg>
      </button> 
      <button data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-close-info-btn" title="Close more info" aria-label="Close more information about ${project.title}" aria-controls="project__info-${project.id}" class="project__info-close-btn">
        <svg aria-hidden="true" focusable="false" role="presentation" class="project__info-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      ${setProjectSymmetry(symmetry, project)}
    </li>
  `;
}

// Generate and display the project list in the DOM
export function generateProjectList() {
  projectListLm.innerHTML = projectsData
    .map((project, i) => generateProjectHTML(i % 2 === 0 ? 'original' : 'mirrowed', project)) // Alternate the layout for each project: 'original' for even index, 'mirrowed' for odd index
    .join('');
}

// Toggle the visibility of a sibling button
function toggleSiblingBtn(btn, className) {
  // Determine the target button based on the provided class name
  const targetBtn = className === 'show' ? btn.nextElementSibling : btn.previousElementSibling;
  // Toggle the specified class on the target button and focus it
  targetBtn.classList.toggle(className);
  targetBtn.focus();
}

// Handle toggling the project info panel based on user interaction
export function toggleProjectInfoPanel(e) {
  const moreInfoBtn = e.target.closest('.project__more-info-btn');
  const closePanelBtn = e.target.closest('.project__info-close-btn');
  const projectLm = e.target.closest('.project');
  const infoPanelLm = projectLm && projectLm.querySelector('.project__info');
  const imgLinkLm = projectLm && projectLm.querySelector('.project__img-link');

  // If the more info button was clicked
  if (moreInfoBtn) {
    // Show info panel and scroll to top
    infoPanelLm.classList.add('show');
    infoPanelLm.scrollTo(0, 0);
    // Show close panel button and add focus to it
    toggleSiblingBtn(moreInfoBtn, 'show');

    // Hide project image link and more info button
    imgLinkLm.classList.add('hide');
    moreInfoBtn.classList.add('hide');
  }
  // If the close panel button was clicked
  else if (closePanelBtn) {
    // Hide info panel and close info panel button
    infoPanelLm.classList.remove('show');
    closePanelBtn.classList.remove('show');

    // Show project image link and more info button
    imgLinkLm.classList.remove('hide');
    toggleSiblingBtn(closePanelBtn, 'hide');
  }
}