import { 
  addProgressiveLoading,
  throttle
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
} from "./components/LangSelect.js";

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

//* FUNCTION DECLARATIONS

// Retrieve the preferred theme from local storage, defaults to 'light'
export function getPreferredTheme() {
  return localStorage.getItem('preferredTheme') || 'light';
}

// Apply the selected theme (either 'dark' or 'light')
function setTheme(theme) {
  // Update the toggle theme button's language based on the current theme and language
  function updateToggleBtnAttrsLang(choosedTheme) {
    translateElement(getPreferredLanguage(), toggleThemeBtn, choosedTheme);
  }

  function applyThemeStyles(isDark) {
    // Toggle the 'dark-theme' class on the root element based on the theme
    document.documentElement.classList.toggle('dark-theme', isDark);
    
    // Show/hide coffee SVG or image based on the theme
    coffeeSVGLm.style.display = isDark ? 'inline-block' : 'none';
    coffeeImgContainerLm.style.display = isDark ? 'none' : 'inline-block';
    
    // Show light theme icon in dark mode, dark theme icon in light mode
    lightThemeIconLm.style.display = isDark ? 'block' : 'none';
    darkThemeIconLm.style.display = isDark ? 'none' : 'block';
    
    // Update the language attributes on the theme toggle button
    updateToggleBtnAttrsLang(isDark ? 'dark' : 'light');
  };

  const isDarkTheme = theme === 'dark';
  applyThemeStyles(isDarkTheme);
  
  localStorage.setItem('preferredTheme', theme); // Store the user's theme preference in local storage
}

// Update body scroll class based on scroll position
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
    navbarSelect.hideOptions(); // Hide language options
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

//* END OF FUNCTION DECLARATIONS

//* INITIAL FUNCTION AND CONSTRUCTOR CALLS

// Create language select instances for the navbar and mobile menu
export const navbarSelect = new LangSelect(navbarSelectLangLm, generateLangSelectData('navbar'), 'navbar');
export const mobileMenuSelect = new LangSelect(mobileMenuSelectLangLm, generateLangSelectData('mobile-menu'), 'mobile-menu');

// Generate the project list dynamically
generateProjectList();
// Select all elements that need to be translated on the page
const elementsToBeTranslated = document.querySelectorAll("[data-i18n-section]");

// Apply the user's preferred theme on page load
setTheme(getPreferredTheme());

// Add progressive image loading functionality to all blur image loaders
addProgressiveLoading(document.querySelectorAll('.blur-img-loader'));

//* END OF INITIAL FUNCTION AND CONSTRUCTOR CALLS

//* ADD EVENT LISTENERS

// HIDE OR SHOW NAVBAR ON SCROLL
// Listen to the window's scroll event and throttle the scroll update function
window.addEventListener("scroll", updateBodyClassOnScroll);

// Scroll to the top of the page when the "scroll to top" button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// CHANGE LANGUAGE
// Handle language change in both the navbar and mobile menu
navbarSelectLangLm.addEventListener('onSelectChange', handleLangSelectChange(elementsToBeTranslated));
mobileMenuSelectLangLm.addEventListener('onSelectChange', handleLangSelectChange(elementsToBeTranslated));

// Update the active language when the page loads
updateActiveLangOnLoad(navbarSelect, mobileMenuSelect);

// TOGGLE THEME
// Toggle the theme (dark/light) when the theme button is clicked
toggleThemeBtn.addEventListener('click', () => {
  const isDarkTheme = document.documentElement.classList.toggle('dark-theme');
  setTheme(isDarkTheme ? 'dark' : 'light');
});

// MOBILE MENU
// Open mobile menu when the menu button is clicked and add accessibility support, such as close at 'Escape' key
navMenuBtn.addEventListener('click', openMobileMenu);
// Close the mobile menu after a navigation link is clicked
mobileMenuLm.addEventListener('click', closeMobileMenuAfterLinkClick);

// PROJECTS
// Add slider-related event listeners for user interaction
projectListLm.addEventListener('click', toggleProjectInfoPanel);

// SKILLS SLIDER
addSliderEvents(sliderLm, sliderProgressBarInnerLm);

// DOM LOADER
// When the DOM content is fully loaded, hide the loader
document.addEventListener('DOMContentLoaded', () => {
  // Get references to loader elements
  const bouncerLoaderContainerLm = document.getElementById('bouncer-container');
  const bouncerLoaderLm = document.getElementById('bouncer-loader');
  
  // Annouce that the element has stopped loading
  bouncerLoaderContainerLm.ariaBusy = 'false';
  // Hide the loader by setting its opacity to 0
  bouncerLoaderContainerLm.style.backgroundColor = 'transparent';
  bouncerLoaderLm.style.opacity = 0;

  // After 500ms, completely hide the loader
  setTimeout(() => {
    bouncerLoaderContainerLm.style.display = 'none';
  }, 500);
});

//* END OF ADD EVENT LISTENERS