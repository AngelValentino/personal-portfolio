import { translations } from "./data/translations.js";
import { getPreferredTheme } from "./main.js";

// Retrieves the user's preferred language from localStorage, defaults to 'en' if not set
export function getPreferredLanguage() {
  return localStorage.getItem('preferredLanguage') || 'en';
}

// Checks if the specified language exists in the translations object
export function checkLanguageError(lang) {
  if (!translations[lang]) {
    console.error(`No language: '${lang}' has been found in the translations object. Could not translate the selected elements.`);
    return true;
  } 
}

// Checks for translation errors related to a specific, ready to be translated, element 
export function checkTranslateError(elementName, lang, section, element) {
  // Check if the language exists
  if (checkLanguageError(lang)) return true;
  
  // Warn if the element name does not exist and return true to indicate an error
  if (!elementName) {
    console.warn(`No 'data-i18n-element' attribute has been found inside: ${element.outerHTML}`);
    return true;
  }
  // Warn if the specified section does not exist for the given language
  else if (!translations[lang][section]) {
    console.warn(`No section: '${section}' has been found in language: '${lang}'`);
    return true;
  } 
  // Warn if the specified element does not exist within the section
  else if (!translations[lang][section][elementName]) {
    console.warn(`No element: '${elementName}' has been found inside section: '${section}'`);
    return true;
  } 

  // No errors found
  return false;
}

// Translates a single element based on the specified language and theme
export function translateElement(lang, element, currentTheme) {
  // Get the section and and translations element key from the current element
  const section = element.getAttribute("data-i18n-section"); // There will always be a section attribute as this is how the element array is being queried
  const elementName = element.getAttribute("data-i18n-element");

  // Check for translation errors before proceeding
  if (checkTranslateError(elementName, lang, section, element)) return;

  // Access the translation values for the specified element
  let elementValues = translations[lang][section][elementName]; // Get the attributes that need to be translated

  // Handle the theme toggle button based on the current theme
  if (element.classList.contains('navigation-bar__toggle-theme-btn')) {
    currentTheme = currentTheme || getPreferredTheme(); // Get the preferred theme if not provided
    elementValues = elementValues[currentTheme]; // Get theme-specific theme values
  }

 // Update the element attributes and content with the translated values
  for (let key in elementValues) {
    if (elementValues[key]) {
      element[key] = elementValues[key]; // Update the element's attribute or content(innerText or innerHTML)
    }
  }
}

// Changes the website language and updates relevant elements
export function changeLanguage(lang = 'en', elementsToBeTranslated) {
  const metaDescription = document.querySelector('meta[name="description"]');
  
  // Check for language errors; if found, stop code execution
  if (checkLanguageError(lang)) return;

  // Set the lang HTML attribute to the curent language
  document.documentElement.setAttribute('lang', lang);

  // Check if the metaDescription element exists
  if (!metaDescription) {
    console.warn(`Meta description element not found. Unable to update description for language: '${lang}'.`);
  }
  // Check if translations exist for the current language
  else if (!translations[lang].html) {
    console.warn(`No 'html' key has been found for language: '${lang}'. Unable to update document title and meta description.`);
  } 
  else {
    // Update the document title to the current language's title
    document.title = translations[lang].html.title || document.title; // Preserve current title if not found
    // Update the meta description for the current language
    metaDescription.setAttribute('content', translations[lang].html['meta-description'] || "Hi, my name is Angel, and I'm a self-taught software engineer who focuses on developing responsible and accessible user interfaces."); // Default to english if not found 
  }

  // Translate each element that needs to be translated
  for (const element of elementsToBeTranslated) {
    translateElement(lang, element);
  }

  // Store selected language in localStorage
  localStorage.setItem('preferredLanguage', lang);
}

export function handleLangSelectChange(elementsToBeTranslated) {
  return e => {
    if (checkLanguageError(e.detail.value)) return;
    changeLanguage(e.detail.value, elementsToBeTranslated);
  }
}

export function updateActiveLangOnLoad(navbarSelect, mobileMenuSelect) {
  const navbarSelectLangLm = document.getElementById('navigation-bar__custom-select-container');
  const preferredLanguage = getPreferredLanguage();
  
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