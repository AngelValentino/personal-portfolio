import { 
  addProgressiveLoading
} from "./utils.js";

import { 
  openMobileMenu, 
  closeMobileMenuAfterLinkClick
} from "./menu.js";

import { 
  toggleProjectInfoPanel,
  generateProjectList
} from "./data/project.js";

import { 
  addSliderEvents 
} from "./slider.js";

import { 
  LangSelect, 
  generateLangSelectData
} from "./LangSelect.js";

import { 
  handleLangSelectChange,
  getPreferredLanguage, 
  translateElement,
  updateActiveLangOnLoad
} from "./language.js";

//* DOM REFERENCES
const projectListLm = document.getElementById('project-list');
const navMenuBtn = document.getElementById('navigation-bar__menu-btn');
const mobileMenuLm = document.getElementById('mobile-menu');
const sliderLm = document.getElementById('slider__inner');
const sliderProgressBarInnerLm = document.getElementById('slider__progress-bar-inner');
const toggleThemeBtn = document.getElementById('navigation-bar__toggle-theme-btn');
const coffeeImgContainerLm = document.getElementById('contact__coffee-img-container');
const coffeeSVGLm = document.getElementById('contact__coffee-icon');
const lightThemeIconLm = document.getElementById('navigation-bar__light-theme-icon');
const darkThemeIconLm = document.getElementById('navigation-bar__dark-theme-icon');
const navbarSelectLangLm = document.getElementById('navigation-bar__custom-select-container');
const mobileMenuSelectLangLm = document.getElementById('mobile-menu__custom-select-container');
const bodyLm = document.body;
const scrollToTopBtn = document.getElementById('footer__scroll-to-top-btn');

//* FLAG VARIABLES
let lastScroll = 0;


//TODO Overall review and add comments

export function getPreferredTheme() {
  return localStorage.getItem('preferredTheme') || 'light';
}

function setTheme(theme) {
  function updateToggleBtnAttrsLang(choosedTheme) {
    translateElement(getPreferredLanguage(), toggleThemeBtn, choosedTheme);
  }

  function applyThemeStyles(isDark) {
    document.documentElement.classList.toggle('dark-theme', isDark);
    
    coffeeSVGLm.style.display = isDark ? 'inline-block' : 'none';
    coffeeImgContainerLm.style.display = isDark ? 'none' : 'inline-block';
    
    lightThemeIconLm.style.display = isDark ? 'block' : 'none';
    darkThemeIconLm.style.display = isDark ? 'none' : 'block';
    
    updateToggleBtnAttrsLang(isDark ? 'dark' : 'light');
  };

  const isDarkTheme = theme === 'dark';
  applyThemeStyles(isDarkTheme);
  
  localStorage.setItem('preferredTheme', theme);
}

function updateBodyClassOnScroll() {
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
}

//* INITIAL FUNCTION AND CONSTRUCTOR CALLS

export const navbarSelect = new LangSelect(navbarSelectLangLm, generateLangSelectData('navbar'), 'navbar');
export const mobileMenuSelect = new LangSelect(mobileMenuSelectLangLm, generateLangSelectData('mobile-menu'), 'mobile-menu');

generateProjectList();
const elementsToBeTranslated = document.querySelectorAll("[data-i18n-section]");

setTheme(getPreferredTheme());
addProgressiveLoading(document.querySelectorAll('.blur-img-loader'));

//* END OF INITIAL FUNCTION AND CONSTRUCTOR CALLS

//* ADD EVENT LISTENERS

// HIDE OR SHOW NAVBAR ON SCROLL
window.addEventListener("scroll", updateBodyClassOnScroll);

// Scroll to top
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// CHANGE LANGUAGE
// Listen for the custom select 'change' event
navbarSelectLangLm.addEventListener('onSelectChange', handleLangSelectChange(elementsToBeTranslated));
mobileMenuSelectLangLm.addEventListener('onSelectChange', handleLangSelectChange(elementsToBeTranslated));
// Update the active language on load
updateActiveLangOnLoad(navbarSelect, mobileMenuSelect);

// TOGGLE THEME
toggleThemeBtn.addEventListener('click', () => {
  const isDarkTheme = document.documentElement.classList.toggle('dark-theme');
  setTheme(isDarkTheme ? 'dark' : 'light');
});

// MOBILE MENU
navMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuLm.addEventListener('click', closeMobileMenuAfterLinkClick);

// PROJECTS
projectListLm.addEventListener('click', toggleProjectInfoPanel);

// SKILLS SLIDER
addSliderEvents(sliderLm, sliderProgressBarInnerLm);

// DOM LOADER
document.addEventListener('DOMContentLoaded', () => {
  // Get references to loader elements
  const bouncerLoaderContainerLm = document.getElementById('bouncer-container');
  const bouncerLoaderLm = document.getElementById('bouncer-loader');
  
  // Annouce that the element has stopped loading
  bouncerLoaderContainerLm.ariaBusy = 'false';
  // Hide the loader by setting its opacity to 0
  bouncerLoaderContainerLm.style.backgroundColor = 'transparent';
  bouncerLoaderLm.style.opacity = 0;

  // Set loader dispay to none
  setTimeout(() => {
    bouncerLoaderContainerLm.style.display = 'none';
  }, 500);
});

//* END OF ADD EVENT LISTENERS