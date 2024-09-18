import { 
  convertToKebabCase,
  throttle
} from "./utils.js";

import { 
  openMobileMenu, 
  closeMobileMenuAfterLinkClick
} from "./menu.js";

import { 
  projectsData,
  toggleProjectInfoPanel
} from "./data/project.js";

import { LangSelect, generateLangSelectData} from "./LangSelect.js";

import { translations } from "./data/languages.js";

//* DOM REFERENCES
const projectListLm = document.getElementById('project-list');
const navMenuBtn = document.getElementById('navigation-bar__menu-btn');
const mobileMenuLm = document.getElementById('mobile-menu');
const sliderLm = document.getElementById('slider__inner');
const sliderProgressBarInnerLm = document.getElementById('slider__progress-bar-inner');

const toggleThemeBtn = document.getElementById('navigation-bar__toggle-theme-btn');
const coffeeImgLm = document.getElementById('contact__coffee-img');
const coffeeSVGLm = document.getElementById('contact__coffee-icon');
const lightThemeIconLm = document.getElementById('navigation-bar__light-theme-icon');
const darkThemeIconLm = document.getElementById('navigation-bar__dark-theme-icon');

const navbarSelectLangLm = document.getElementById('navigation-bar__custom-select-container');
const mobileMenuSelectLangLm = document.getElementById('mobile-menu__custom-select-container');

const metaDescription = document.querySelector('meta[name="description"]');
const bodyLm = document.body;
const scrollToTopBtn = document.getElementById('footer__scroll-to-top-btn');

//* FLAG VARIABLES
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
let sliderGrabbed = false;
// Initialize a variable to track the last scroll position, starting at 0 (top of the page)
let lastScroll = 0;

//TODO Add a loader until the DOM finishes loading and the text is fully translated
//TODO Improve and refactor styling
//TODO Make download CV button functional
//TODO Add progressive image loading
//TODO? Add parallax scrolling
//TODO Portfolio review

function generateProjectLinkHTML(project) {
  return `
    <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-img-link" class="project__img-link" aria-label="Go to ${project.title} live demo." target="_blank" href="${project.demoUrl}">
      <img aria-hidden="true" role="presentation" class="project__img" src="images/projects-screenshots/${convertToKebabCase(project.title)}.jpg" alt="">
      <div aria-hidden="true" role="presentation" class="project__tooltip">
        <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-tooltip-text" class="project__tooltip-text">Live Demo</p>
        <svg aria-hidden="true" focusable="false" role="presentation" class="project__tooltip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
        </svg>
      </div>
    </a>
  `;
}

function generateProjectTechIconsHTML(techTitles) {
  // Get the respective tech icon images
  return techTitles.map(title => `
    <li>
      <img title="${title}" src="images/tech-icons/${title}-icon.jpg" alt="${title}">
    </li>
  `).join('');
}

function generateProjectInfoHTML(project) {
  return `
    <div id="project__info-${project.id}" class="project__info">
      <h3 class="project__info-title">${project.title}</h3>
      <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-description" class="project__info-summary-text">${project.description.en}</p>
      <ul data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-tech-list" aria-label="Project technologies." class="project__technologies-list">
        ${generateProjectTechIconsHTML(project.technologies)}
      </ul>
      <div class="project__links-container">
        <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-code-link" aria-label="Go to ${project.title} code repository." class="project__link project__code-link" target="_blank" href="${project.codeUrl}">
          <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-code-text" aria-hidden="true" class="project__link-title">Code</p>
          <svg class="project__link-code-icon project__link-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14" />
            </g>
          </svg>
        </a>
        <a data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-demo-link" aria-label="Go to ${project.title} live demo." class="project__link project__demo-link" target="_blank" href="${project.demoUrl}">
          <p data-i18n-section="projects" data-i18n-element="${convertToKebabCase(project.title)}-demo-text" aria-hidden="true" class="project__link-title">Live Demo</p>
          <svg class="project__link-demo-icon project__link-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
          </svg>
        </a>
      </div>
    </div>
  `;
}

function setProjectSymmetry(symmetry, project) {
  if (symmetry === 'original') {
    return `
      ${generateProjectLinkHTML(project)}
      ${generateProjectInfoHTML(project)}
    `;
  } 
  else if (symmetry === 'mirrowed') {
    return `
      ${generateProjectInfoHTML(project)}
      ${generateProjectLinkHTML(project)}
    `;
  }
}

// generate project html
// Translate elememnts and aria labels

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

function generateProjectList() {
  projectListLm.innerHTML = projectsData
    .map((project, i) => generateProjectHTML(i % 2 === 0 ? 'original' : 'mirrowed', project))
    .join('');
}

function getSliderScrollPercentage() {
  const sliderContainerLm = sliderLm.parentElement;
  return ((sliderContainerLm.scrollLeft / (sliderContainerLm.scrollWidth - sliderContainerLm.clientWidth)) * 100).toFixed(2);
}

function updateSliderProgressBar() {
  sliderProgressBarInnerLm.style.width = `${getSliderScrollPercentage()}%`;
}

function changeLanguage(lang = 'en', elementsToBeTranslated) {
  // Set the lang HTML attribute to the curent language
  document.documentElement.setAttribute('lang', lang);
  // Set the current title
  document.title = translations[lang].html.title;
  // Set the meta description to the current language
  metaDescription.setAttribute('content', translations[lang].html['meta-description']);

  elementsToBeTranslated.forEach(element => {
      // Get the section and value keys from the element
      const section = element.getAttribute("data-i18n-section");
      const elementName = element.getAttribute("data-i18n-element");

      // Get the attributes that need to be translated
      const elementValues = translations[lang][section][elementName];

      // Change specified attributes lanuage
      for (let key in elementValues) {
        if (elementValues[key]) {
          element[key] = elementValues[key];
        }
      }
  });

  // Store selected language in localStorage
  localStorage.setItem("preferredLanguage", lang);
}





//TODO INITIAL FUNCTION AND CONSTRUCTOR CALLS

export const navbarSelect = new LangSelect(navbarSelectLangLm, generateLangSelectData('navbar'), 'navbar');
export const mobileMenuSelect = new LangSelect(mobileMenuSelectLangLm, generateLangSelectData('mobile-menu'), 'mobile-menu');

generateProjectList();
const elementsToBeTranslated = document.querySelectorAll("[data-i18n-section]");
updateSliderProgressBar();


//TODO ADD EVENT LISTENERS

//* HIDE OR SHOW NAVBAR ON SCROLL
window.addEventListener("scroll", () => {
  // Get the current vertical scroll position of the page (in pixels)
	const currentScroll = window.scrollY;

  // If the current scroll position is less than or equal to 375px
	if (currentScroll <= 375) {
    // Remove the 'scroll-up' class from the body if it exists
		bodyLm.classList.remove("scroll-up");
    // Exit the function early to prevent further class changes
		return;
	}

  // If the user is scrolling down (current scroll is greater than the last scroll)
  // AND the 'scroll-down' class is not already present add 'scroll-down' class
	if (currentScroll > lastScroll && !bodyLm.classList.contains("scroll-down")) {
    bodyLm.classList.remove("scroll-up");
    bodyLm.classList.add("scroll-down");
    navbarSelect.hideOptions();
	} 
  // If the user is scrolling up (current scroll is less than the last scroll)
  // AND the 'scroll-down' class is currently present add 'scroll-up' class
  else if (currentScroll < lastScroll && bodyLm.classList.contains("scroll-down")) {
		bodyLm.classList.remove("scroll-down");
		bodyLm.classList.add("scroll-up");
	}
  
  // Update the last scroll position with the current scroll position
  // This will be used in the next scroll event to determine the scroll direction
	lastScroll = currentScroll;
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});



//* CHANGE LANGUAGE
// Listen for the custom select 'change' event
navbarSelectLangLm.addEventListener('onSelectChange', e => {
  console.log('Navbar select changed!', e.detail.value);
  changeLanguage(e.detail.value, elementsToBeTranslated);
});

mobileMenuSelectLangLm.addEventListener('onSelectChange', e => {
  console.log('Mobile menu select changed!', e.detail.value);
  changeLanguage(e.detail.value, elementsToBeTranslated);
});


// Check which select is visble at page load
if (navbarSelectLangLm.offsetParent) {
  // Navbar is visible, set the first lang select value from localStorage
  navbarSelect.setActiveOption(null, preferredLanguage, true);
} 
else {
  // Mobile menu is visible, set the first lang select value from localStorage
  mobileMenuSelect.setActiveOption(null, preferredLanguage, true);
}


//* TOGGLE DARK THEME
//TODO Refactor this and add translation support
toggleThemeBtn.addEventListener('click', () => {
  console.log('toggle theme button clicked');
  document.documentElement.classList.toggle('dark-theme');

  if (document.documentElement.classList.contains('dark-theme')) {
    coffeeImgLm.style.display = 'none';
    coffeeSVGLm.style.display = 'inline-block';
    lightThemeIconLm.style.display = 'block';
    darkThemeIconLm.style.display = 'none';
    toggleThemeBtn.title = 'Switch to light theme';
    toggleThemeBtn.ariaLabel = 'Switch to light theme.';
  } 
  else {
    coffeeSVGLm.style.display = 'none'
    coffeeImgLm.style.display = 'inline-block'
    lightThemeIconLm.style.display = 'none';
    darkThemeIconLm.style.display = 'block';
    toggleThemeBtn.title = 'Switch to dark theme';
    toggleThemeBtn.ariaLabel = 'Switch to dark theme.';
  }
});

//* MOBILE MENU
navMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuLm.addEventListener('click', closeMobileMenuAfterLinkClick);

//* PROJECTS
projectListLm.addEventListener('click', toggleProjectInfoPanel);

//* SKILLS SLIDER
sliderLm.parentElement.addEventListener('scroll', updateSliderProgressBar);

sliderLm.addEventListener('mousedown', () => {
  sliderGrabbed = true;
  sliderLm.style.cursor = 'grabbing';
});

sliderLm.addEventListener('mouseup', () => {
  sliderGrabbed = false;
  sliderLm.style.cursor = 'grab';
});

sliderLm.addEventListener('mouseleave', () => {
  sliderGrabbed = false;
})

sliderLm.addEventListener('mousemove', e => {
  if (sliderGrabbed) sliderLm.parentElement.scrollLeft -= e.movementX;
});

sliderLm.addEventListener('wheel', e => {
  e.preventDefault();
  sliderLm.parentElement.scrollLeft += e.deltaY;
});

window.addEventListener('resize', throttle(updateSliderProgressBar, 100));