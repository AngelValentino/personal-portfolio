import { 
  throttle,
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

import { LangSelect, generateLangSelectData} from "./LangSelect.js";

import { changeLanguage, translateElement, checkLanguageError, getPreferredLanguage } from "./data/language.js";

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
const preferredLanguage = getPreferredLanguage();
const preferredTheme = getPreferredTheme();
let sliderGrabbed = false;
// Initialize a variable to track the last scroll position, starting at 0 (top of the page)
let lastScroll = 0;


//TODO Portfolio and accessibility review

export function getPreferredTheme() {
  return localStorage.getItem('preferredTheme') || 'light';
}

function getSliderScrollPercentage() {
  const sliderContainerLm = sliderLm.parentElement;
  return ((sliderContainerLm.scrollLeft / (sliderContainerLm.scrollWidth - sliderContainerLm.clientWidth)) * 100).toFixed(2);
}

function updateSliderProgressBar() {
  sliderProgressBarInnerLm.style.width = `${getSliderScrollPercentage()}%`;
}

function setTheme(theme) {
  function updateToggleBtnAttrsLang(choosedTheme) {
    translateElement(getPreferredLanguage(), toggleThemeBtn, choosedTheme);
  }

  const applyThemeStyles = (isDark) => {
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

//TODO INITIAL FUNCTION AND CONSTRUCTOR CALLS

export const navbarSelect = new LangSelect(navbarSelectLangLm, generateLangSelectData('navbar'), 'navbar');
export const mobileMenuSelect = new LangSelect(mobileMenuSelectLangLm, generateLangSelectData('mobile-menu'), 'mobile-menu');

generateProjectList();
const elementsToBeTranslated = document.querySelectorAll("[data-i18n-section]");
setTheme(preferredTheme);
updateSliderProgressBar();
addProgressiveLoading(document.querySelectorAll('.blur-img-loader'));

//TODO END OF INITIAL FUNCTION AND CONSTRUCTOR CALLS

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
  if (checkLanguageError(e.detail.value)) return;
  changeLanguage(e.detail.value, elementsToBeTranslated);
});

mobileMenuSelectLangLm.addEventListener('onSelectChange', e => {
  if (checkLanguageError(e.detail.value)) return;
  changeLanguage(e.detail.value, elementsToBeTranslated);
});



function updateActiveLangOnLoad() {
  // Check which select is visble at page load
  if (navbarSelectLangLm.offsetParent) {
    if (checkLanguageError(preferredLanguage)) return;
    // Navbar is visible, set the first lang select value from localStorage
    navbarSelect.setActiveOption(null, preferredLanguage, true);
  } 
  else {
    if (checkLanguageError(preferredLanguage)) return;
    // Mobile menu is visible, set the first lang select value from localStorage
    mobileMenuSelect.setActiveOption(null, preferredLanguage, true);
  }
}

updateActiveLangOnLoad();




//* TOGGLE DARK THEME
toggleThemeBtn.addEventListener('click', () => {
  const isDarkTheme = document.documentElement.classList.toggle('dark-theme');
  setTheme(isDarkTheme ? 'dark' : 'light');
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

//* ENSURE THE DOM IS FULLY LOADED BEFORE MANIPULATING IT
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

//TODO END OF ADD EVENT LISTENERS