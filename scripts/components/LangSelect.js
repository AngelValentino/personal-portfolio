import { translations } from "../data/translations.js";
import { checkTranslateError } from "../language.js";

// Function to generate language selection options based on a section identifier
export function generateLangSelectData(section) {
  return [
    { 
      content: `
        <img aria-hidden="true" role="presentation" src="./images/flag-icons/united-states-flag.png" alt="">
        <span data-i18n-section="${section}" data-i18n-element="english-select-option">English</span>
      `,
      label: 'english',
      value: 'en',
    },
    { 
      content: `
        <img aria-hidden="true" role="presentation" src="./images/flag-icons/spain-flag.png" alt="">
        <span data-i18n-section="${section}" data-i18n-element="spanish-select-option">Spanish</span>
      `,
      label: 'spanish', 
      value: 'es', 
    },
    { 
      content: `
        <img aria-hidden="true" role="presentation" src="./images/flag-icons/romania-flag.png" alt="">
        <span data-i18n-section="${section}" data-i18n-element="romanian-select-option">Romanian</span>
      `,
      label: 'romanian', 
      value: 'ro', 
    },
    { 
      content: `
        <img aria-hidden="true" role="presentation" src="./images/flag-icons/catalonia-flag.png" alt="">
        <span data-i18n-section="${section}" data-i18n-element="catalan-select-option">Catalan</span>
      `,
      label: 'catalan', 
      value: 'ca', 
    },
  ];
}

// Class to create a language selector component
export class LangSelect {
  constructor(root, data, section) {
    root.innerHTML = LangSelect.generateSelectHTML(data, section); // Generate the HTML for the select element
    this.typedCharacters = ''; // Store the characters typed by the user
    this.typingTimer = null; // Timer to reset the search input

    // Store references to DOM elements
    this.lms = {
      selectLm: root,
      labelLm: root.querySelector('.custom-select__label-container'),
      chevronLm: root.querySelector('.custom-select__chevron-icon'),
      optionsListLm: root.querySelector('.custom-select__options'),
      optionLms: [...root.querySelectorAll('.custom-select__option')]
    }

    // Initialize the selected and previous options
    this.selectedOption = this.lms.optionLms[0]; // Default selected option
    this.previousOption = this.selectedOption; // Previous selected option
    this.lms.selectLm.setAttribute('aria-activedescendant', this.selectedOption.id); // Set ARIA attribute for accessibility
    this.updateLabel(this.selectedOption); // Update the label to match the selected option

    // Toggle options at label click
    this.lms.labelLm.addEventListener("click", () => {
      this.toggleOptions();
    });

    // Close options when focus is lost
    this.lms.selectLm.addEventListener("blur", () => {
      this.closeOptions(this.selectedOption);
    })

    // Keydown event listener for keyboard navigation
    this.lms.selectLm.addEventListener('keydown', e => {
      // Prevent scrolling behavior for specific keys, but allow others (like Tab)
      if (["Space", "ArrowUp", "ArrowDown"].includes(e.code)) {
        e.preventDefault();  // Prevent scrolling for Space, ArrowUp, and ArrowDown
      }
      switch (e.code) {
        case "Space":
          this.toggleOptions(); // Toggle options on Space key
          break
        case "ArrowUp": {
          const prevOption = this.lms.optionLms[this.selectedOptionIndex - 1]; // Get previous option
          if (prevOption) {
            this.setActiveOption(prevOption); // Set it as active
          }
          break;
        }
        case "ArrowDown": {
          const nextOption = this.lms.optionLms[this.selectedOptionIndex + 1]; // Get next option
          if (nextOption) {
            this.setActiveOption(nextOption); // Set it as active
          }
          break;
        }
        case "Enter":
        case "Escape":
          if (this.lms.optionsListLm.classList.contains('show')) {
            this.closeOptions(this.selectedOption); // Close options on Enter/Escape
            e.stopPropagation(); // Prevents closing the mobile menu when closing the select options with 'Escape' key
          }
          break;
        default:
          this.handleSearch(e.key); // Handle search input
          break;
      }
    })

    // Click event listener for selecting an option
    this.lms.optionsListLm.addEventListener('click', e => {
      const clickedOption = e.target.closest('.custom-select__option');

      if (clickedOption) {
        this.closeOptions(clickedOption); // Close options and select the clicked option
      }
    });
  }

  // Get the index of the currently selected option
  get selectedOptionIndex() {
    return this.lms.optionLms.indexOf(this.selectedOption);
  }

  // Toggle the visibility of the options list
  toggleOptions() {
    this.lms.optionsListLm.classList.toggle("show"); // Toggle "show" class for visibility
    // Open options list
    if (this.lms.optionsListLm.classList.contains("show")) {
      // Scroll to the selected option when the dropdown opens
      this.selectedOption.scrollIntoView({ block: "nearest" });
      this.lms.chevronLm.classList.add('active'); // Add active class to chevron
      this.lms.selectLm.ariaExpanded = true; // Update ARIA attribute
    } 
    // Close options list
    else {
      this.lms.chevronLm.classList.remove('active'); // Remove active class from chevron
      this.lms.selectLm.ariaExpanded = false; // Update ARIA attribute
    }
  }

  // Hide the options list
  hideOptions() {
    this.lms.optionsListLm.classList.remove('show'); // Remove "show" class
    this.lms.chevronLm.classList.remove('active'); // Remove active class from chevron
    this.lms.selectLm.ariaExpanded = false; // Update ARIA attribute
  }

  // Update the label based on the currently selected option
  updateLabel(currentOption) {
    // Clone current options to modify it
    const currentOptionClone = currentOption.cloneNode(true);
    // Get the </span> element with the option text 
    const spanLm = currentOptionClone.querySelector('span');

    // Remove the existing translate data attribute
    delete spanLm.dataset.i18nElement;
    // Set new label translate attribute
    spanLm.dataset.i18nElement = 'lang-select-label';

    const section = spanLm.getAttribute("data-i18n-section"); // Get the section for translation
    const elementName = spanLm.getAttribute("data-i18n-element"); // Get the element name for translation

    // Check for translation errors before accessing the element and updating the label
    if (checkTranslateError(elementName, currentOption.dataset.value, section)) return;

    // Access the element values and translate it if there are no errors
    const elementValues = translations[currentOption.dataset.value][section][elementName];

    for (const key in elementValues) {
      if (elementValues[key]) {
        spanLm[key] = elementValues[key]; // Update the span with the translated values
      }
    }

    // Update the label with the new content
    this.lms.labelLm.innerHTML = currentOptionClone.innerHTML;
  }

  // Dispatch a custom event when the selected option changes
  dispatchEvent(currentOption) {
    const changeEvent = new CustomEvent('onSelectChange', {
      detail: {
        value: currentOption.dataset.value,
        label: currentOption.dataset.label,
        content: currentOption.innerHTML
      }
    });
    this.lms.selectLm.dispatchEvent(changeEvent); // Dispatch the event
  }

  // Set the active option
  setActiveOption(currentOption, preferredLanguage, isEventDispatched, isMobileMenu) {
    if (preferredLanguage && !currentOption) {
      const matchedOption = this.lms.optionLms.find(option => option.dataset.value === preferredLanguage);
      currentOption = matchedOption; // Set the current option to the preferred language
    }

    // Check if the current option is different from the previous option
    if (currentOption !== this.selectedOption) {
      // Remove active state from the last selected option
      this.selectedOption.classList.remove('selected');
      this.selectedOption.ariaSelected = false;

      // Add active state to the current selected option
      currentOption.classList.add('selected');
      currentOption.ariaSelected = true;
      currentOption.scrollIntoView({ block: "nearest" }); // Scroll into view
      this.updateLabel(currentOption); // Update the label for the selected option
      this.lms.selectLm.setAttribute('aria-activedescendant', currentOption.id); // Set select element's aria-activedescendant to the id of the current option

      // Update selected option
      this.selectedOption = currentOption;
    } 

    // Update previous section without dispatching an event if "isMobileMenu" is true
    if (isMobileMenu) this.previousOption = this.selectedOption;

    // Dispatch change event if the selected option has changed
    if (isEventDispatched && (this.previousOption !== this.selectedOption)) {
      this.dispatchEvent(currentOption);
      // Update previous option after event dispatch
      this.previousOption = this.selectedOption;
    }
  }

  // Close the options list
  closeOptions(currentOption) {
    // Set the active option without dispatching the event if the value hasn't changed
    this.setActiveOption(currentOption, null, true);
    // Hide options list
    this.hideOptions();
  }
  
  // Handle search input in the options list
  handleSearch(char) {
    // Reset the typing timer
    clearTimeout(this.typingTimer);
  
    // Add the typed character to the input
    this.typedCharacters += char.toLowerCase();
  
    // Search for the first matching option
    const matchingOption = this.lms.optionLms.find(option => 
      option.dataset.label.toLowerCase().startsWith(this.typedCharacters)
    );
  
    if (matchingOption) {
      this.setActiveOption(matchingOption); // Set the matched option as active
      matchingOption.scrollIntoView({ block: "nearest" }); // Scroll into view
    }
  
    // Set a timer to reset the "typedCharacters" after 1 second of no typing
    this.typingTimer = setTimeout(() => {
      this.typedCharacters = ''; // Reset typed characters
    }, 1000);
  }

  // Static method to generate options for the select element
  static generateOptions(data, section) {
    return data.map(({ label, value, content }, i) => `
      <li 
        id="${section === 'navbar' ? 'navigation-bar' : section}__${label}-option"
        class="custom-select__option${i === 0 ? ' selected' : ''}"
        role="option" aria-selected="${i === 0}"
        data-value="${value}"
        data-label="${label}"
      >
        ${content}
      </li>
    `).join('');
  }

  // Static method to generate the select element's HTML structure
  static generateSelectHTML(data, section) {
    return `
      <span class="custom-select__label-container"></span>
      <svg class="custom-select__chevron-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      <ul role="listbox" id="${section === 'navbar' ? 'navigation-bar' : section}__custom-select-options" class="custom-select__options">
        ${this.generateOptions(data, section)}
      </ul>
    `;
  }
}