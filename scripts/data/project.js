import { convertToKebabCase } from "../utils.js";

// Get the project list element from the DOM
const projectListLm = document.getElementById('project-list');

// Toggle info panel logic event handler
const infoPanelEventHandler = {};

// Project data array, containing project information and description in multiple languages
export const projectsData = [
  {
    id: '967cfa4a-54db-42c7-a4b1-89968b596017',
    title: 'TaskFlow',
    description: {
      en: 'TaskFlow is your go-to app for effortless productivity. Manage tasks, set reminders, and track progress with a clean, accessible UI. It is a vanilla JavaScript SPA using MVC, connected with a secure PHP RESTful JWT auth API, Redis rate limited and CORS. Using a MySQL DB.',
      es: 'TaskFlow es tu app para productividad sin esfuerzo. Gestiona tareas, crea recordatorios y sigue el progreso con una interfaz limpia y accesible. SPA en JavaScript puro (MVC), conectada a una PHP RESTful JWT auth API, limitada por Redis y CORS. Usa una MySQL DB.',
      ro: 'TaskFlow este aplicația ta pentru productivitate fără efort. Gestionează sarcini, setează memento-uri și urmărește progresul cu o interfață curată și accesibilă. SPA în JavaScript pur cu MVC conectată la API RESTful JWT în PHP, limitat prin Redis și CORS. Folosește o MySQL DB.',
      ca: `TaskFlow és la teva app per a productivitat sense esforç. Gestiona tasques, crea recordatoris i segueix el progrés amb una interfície neta i accessible. SPA en JavaScript pur MVC connectada amb una API RESTful JWT en PHP, limitada per Redis i CORS. Usant o MySQL DB.`
    },
    technologies: [
      'html',
      'css',
      'javascript',
      'php',
      'sql',
      'redis'
    ],
    codeUrl: 'https://github.com/AngelValentino/TaskFlow',
    demoUrl: 'https://taskflowapp.net/',
    videoUrl: 'https://www.youtube.com/watch?v=iwnIOa8g1bs'
  },
  {
    id: 'd588f5d8-c4e2-4ed4-bcff-867adc10b277',
    title: 'YouTube Clone',
    description: {
      en: 'Front-end <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> home page clone developed from scratch using HTML, CSS and JavaScript. Featuring videos containing information about <a class="slide-in-and-back underline fixed-height no-wrap" target="blank" href="https://www.netflix.com/es-en/browse/genre/81227213">Studio Ghibli</a> movies.',
      es: 'Front-end clon de la página de inicio de <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> desarrollado desde cero utilizando HTML, CSS y JavaScript. Incluye videos con información sobre películas de <a class="slide-in-and-back underline fixed-height no-wrap" target="blank" href="https://www.netflix.com/es/browse/genre/81227213">Studio Ghibli</a>.',
      ro: 'Clonă Front-end a paginii principale de <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a> dezvoltată de la zero folosind HTML, CSS și JavaScript. Conține videoclipuri cu informații despre filmele <a class="slide-in-and-back underline fixed-height no-wrap" target="blank" href="https://www.netflix.com/es-en/browse/genre/81227213">Studio Ghibli</a>.',
      ca: `Front-end clon de la pàgina d'inici de <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.youtube.com/">YouTube</a>  desenvolupat des de zero utilitzant HTML, CSS i JavaScript. Inclou vídeos amb informació sobre les pel·lícules de <a class="slide-in-and-back underline fixed-height no-wrap" target="blank" href="https://www.netflix.com/es/browse/genre/81227213">Studio Ghibli</a>.`
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
    id: '5c307f0d-0efd-4276-8b25-9f6a02db61f6',
    title: 'Racing Spirit',
    description: {
      en: 'Racing Spirit is an e-commerce single-page application (SPA), featuring a JSON server mock back-end, developed from scratch using HTML, CSS, JavaScript and React. Inspired by <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> design and featuring product images from <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      es: 'Racing Spirit es una SPA de comercio electrónico con un back-end simulado por JSON server, desarrollada desde cero utilizando HTML, CSS, JavaScript y React. Inspirada en el diseño de <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> y con imágenes de productos de <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      ro: 'Racing Spirit este o aplicație SPA de comerț electronic, cu un back-end simulat prin JSON server, dezvoltată de la zero folosind HTML, CSS, JavaScript și React. Inspirată de designul <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> și cu imagini de produse de la <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.',
      ca: `Racing Spirit és una aplicació SPA de comerç electrònic amb un back-end simulat amb JSON server, desenvolupada des de zero utilitzant HTML, CSS, JavaScript i React. Inspirada en el disseny de <a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://doomsdayco.com/">DoomsdayCo</a> i amb imatges de productes d'<a class="slide-in-and-back underline fixed-height no-wrap" target="_blank" href="https://www.ironheart.co.uk/">Iron Heart</a>.`
    },
    technologies: [
      'html',
      'css',
      'javascript',
      'react',
      'node'
    ],
    codeUrl: 'https://github.com/AngelValentino/racing-spirit',
    demoUrl: 'https://racing-spirit.pages.dev/'
  },
];

// Generate the HTML for the project's image link
function generateProjectLinkHTML(project) {
  return `
    <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-img-link" class="project__img-link" aria-label="Go to ${project.title} live demo." target="_blank" href="${project.demoUrl}">
      <div class="project__img-container blur-img-loader" style="background-image: url(assets/images/projects-screenshots/${convertToKebabCase(project.title)}-low-res.jpg)">
        <img data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-img" class="project__img" src="assets/images/projects-screenshots/${convertToKebabCase(project.title)}.jpg" alt="${project.title} screenshot.">
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
      <img title="${title}" src="assets/images/tech-icons/${title}-icon.jpg" alt="${title}">
    </li>
  `).join('');
}

// Generate the project information HTML. Including title, description, technologies list and project links
function generateProjectInfoHTML(project) {
  return `
    <div id="project__info-${project.id}" class="project__info">
      <h3 class="project__title">
        <a class="project__demo-link appear-bg-from-center" target="_blank" href="${project.demoUrl}">
          ${project.title}
        </a>
        ${project.videoUrl 
          ? `
            <a title="Video walkthrough" aria-label="Go to the video walkthrough for ${project.title}." data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-video-link" class="project__video-link" href="${project.videoUrl}" target="_blank">
              <svg class="project__video-link-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4.625 5.63a1.235 1.235 0 0 1 1.715-.992c.504.216 1.568.702 2.916 1.48a28 28 0 0 1 2.74 1.786a1.234 1.234 0 0 1 0 1.98a28 28 0 0 1-2.74 1.784a28 28 0 0 1-2.916 1.482a1.234 1.234 0 0 1-1.715-.992a29 29 0 0 1-.176-3.264c0-1.551.112-2.719.176-3.264" />
                </g>
              </svg>
            </a>
            ` 
          : ''
        }
      </h3>
      <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-description" class="project__summary-text">${project.description.en}</p>
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
    <li id="${project.id}" class="project ${symmetry === 'original' ? 'original' : 'mirrowed'}">
      <button data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-more-info-btn" aria-label="Read more information about ${project.title}." aria-controls="project__info-${project.id}" title="More info" class="project__more-info-btn">
        <svg aria-hidden="true" focusable="false" role="presentation" class="project__more-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="currentColor" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h1.25A2.25 2.25 0 0 1 11 15.968a2.25 2.25 0 0 1 4 0a2.25 2.25 0 0 1 1.988-1.218q.012-.124.012-.25zM6 6.75c0-.414.316-.75.706-.75h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706C6.316 7.5 6 7.164 6 6.75m0 3c0-.414.316-.75.706-.75h3.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75M6.706 12h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75s.316-.75.706-.75m3.544 5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M13 18.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" />
        </svg>
      </button> 
      <button data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-close-info-btn" title="Close more info" aria-label="Close more information about ${project.title}" aria-controls="project__info-${project.id}" class="project__close-btn">
        <svg aria-hidden="true" focusable="false" role="presentation" class="project__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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

// Toggles visibility of the close and more info buttons, and sets focus based on which button is visible
function togglePanelBtns(closeInfoBtn, moreInfoBtn) {
  // Toggle visibility classes for both buttons
  closeInfoBtn.classList.toggle('show'); // Show/hide the close button
  moreInfoBtn.classList.toggle('hide'); // Show/hide the more info button

  // Checks wich button is visible and adds focus to it
  if (closeInfoBtn.offsetParent) {
    // Close info button is visible, set focus
    closeInfoBtn.focus();
  } 
  else if (moreInfoBtn.offsetParent) {
    // More info button is visible, set focus
    moreInfoBtn.focus();
  }
}

// Handles closing the info panel via "Escape" key
function handleCloseInfoPanelAtEscKey(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn) {
  return e => {
    if (e.key === 'Escape') {
      hideInfoPanel(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn);
    }
  }
}

// Hides the info panel and restores the initial state of the buttons and image
function hideInfoPanel(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn) {
  infoPanelLm.classList.remove('show'); // Remove the 'show' class to hide the info panel
  imgLinkLm.classList.remove('hide'); // Restore visibility of the image link
  togglePanelBtns(closeInfoBtn, moreInfoBtn); // Toggle the buttons back to their initial state

  // Remove the "Escape" key event listener when the info panel is hidden
  projectLm.removeEventListener('keydown', infoPanelEventHandler[projectLm.id]);
  // Remove function reference if not needed
  delete infoPanelEventHandler[projectLm.id];
}

// Shows the info panel and hides the image, toggles the buttons, and sets up the "Escape" key handler
function showInfoPanel(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn) {
  // Create the "Escape" key event handler and store it in the infoPanelEventHandler object
  const closeInfoPanelAtEscKey = handleCloseInfoPanelAtEscKey(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn);
  infoPanelEventHandler[projectLm.id] = closeInfoPanelAtEscKey;
  
  // Add the 'show' class to display the info panel and scroll to the top of the panel
  infoPanelLm.classList.add('show');
  infoPanelLm.scrollTo(0, 0);
  // Hide the image and toggle the buttons to display the close button
  imgLinkLm.classList.add('hide');
  togglePanelBtns(closeInfoBtn, moreInfoBtn);

  // Add an event listener to handle closing the info panel when the "Escape" key is pressed
  projectLm.addEventListener('keydown', closeInfoPanelAtEscKey); 
}

// Handles toggling the project info panel based on which button (more info or close) was clicked
export function toggleProjectInfoPanel(e) {
  // Get the closest project container based on the clicked target
  const projectLm = e.target.closest('.project');
  
  // Check if the more info or close panel buttons were clicked
  const isMoreInfoBtnClicked = e.target.closest('.project__more-info-btn');
  const isClosePanelBtnClicked = e.target.closest('.project__close-btn');

  // If a project element is found and one of the buttons was clicked
  if (projectLm && (isClosePanelBtnClicked || isMoreInfoBtnClicked)) {
    // Get the required DOM elements inside the project
    const infoPanelLm = projectLm.querySelector('.project__info');
    const imgLinkLm = projectLm.querySelector('.project__img-link');
    const moreInfoBtn = projectLm.querySelector('.project__more-info-btn');
    const closeInfoBtn = projectLm.querySelector('.project__close-btn');

    // If the more info button was clicked, show the info panel
    if (isMoreInfoBtnClicked) {
      showInfoPanel(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn);
    }
    // If the close panel button was clicked, hide the info panel
    else if (isClosePanelBtnClicked) {
      hideInfoPanel(projectLm, imgLinkLm, infoPanelLm, moreInfoBtn, closeInfoBtn);
    }
  }
}