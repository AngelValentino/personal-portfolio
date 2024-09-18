import { translations } from "./data/languages.js";

export function generateLangSelectData(section) {
  return [
    { 
      content: `
        <img src="./images/flag-icons/united-states-flag.png">
        <span data-i18n-section="${section}" data-i18n-element="english-select-option">English</span>
      `,
      label: 'english',
      value: 'en',
    },
    { 
      content: `
        <img src="./images/flag-icons/spain-flag.png">
        <span data-i18n-section="${section}" data-i18n-element="spanish-select-option">Spanish</span>
      `,
      label: 'spanish', 
      value: 'es', 
    },
    { 
      content: `
        <img src="./images/flag-icons/romania-flag.png">
        <span data-i18n-section="${section}" data-i18n-element="romanian-select-option">Romanian</span>
      `,
      label: 'romanian', 
      value: 'ro', 
    },
    { 
      content: `
        <img src="./images/flag-icons/catalonia-flag.png">
        <span data-i18n-section="${section}" data-i18n-element="catalan-select-option">Catalan</span>
      `,
      label: 'catalan', 
      value: 'ca', 
    },
  ];
}

export class LangSelect {
  constructor(root, data, section) {
    root.innerHTML = LangSelect.generateSelectHTML(data, section);
    this.typedCharacters = ''; // To store the characters typed by the user
    this.typingTimer = null; // Timer to reset the search

    this.lms = {
      selectLm: root,
      labelLm: root.querySelector('.custom-select-label'),
      chevronLm: root.querySelector('.custom-select__chevron-icon'),
      optionsListLm: root.querySelector('.custom-select__options'),
      optionLms: [...root.querySelectorAll('.custom-select__option')]
    }

    this.selectedOption = this.lms.optionLms[0];
    this.previousOption = this.selectedOption;
    this.updateLabel(this.selectedOption);

    this.lms.labelLm.addEventListener("click", () => {
      this.toggleOptions();
    });

    this.lms.selectLm.addEventListener("blur", () => {
      this.closeOptions(this.selectedOption);
    })

    this.lms.selectLm.addEventListener('keydown', e => {
      e.stopPropagation();
      // Prevent scrolling behavior for specific keys, but allow others (like Tab)
      if (["Space", "ArrowUp", "ArrowDown"].includes(e.code)) {
        e.preventDefault();  // Prevent scrolling for Space, ArrowUp, and ArrowDown
      }
      switch (e.code) {
        case "Space":
          this.toggleOptions();
          break
        case "ArrowUp": {
          const prevOption = this.lms.optionLms[this.selectedOptionIndex - 1]
          if (prevOption) {
            this.setActiveOption(prevOption);
          }
          break;
        }
        case "ArrowDown": {
          const nextOption = this.lms.optionLms[this.selectedOptionIndex + 1]
          if (nextOption) {
            this.setActiveOption(nextOption);
          }
          break;
        }
        case "Enter":
        case "Escape":
          if (this.lms.optionsListLm.classList.contains('show')) {
            this.closeOptions(this.selectedOption);
          }
          break;
        default:
          this.handleSearch(e.key); // Handle search input
          break;
      }
    })

    this.lms.optionsListLm.addEventListener('click', e => {
      const clickedOption = e.target.closest('.custom-select__option');

      if (clickedOption) {
        this.closeOptions(clickedOption);
      }
    });
  }

  get selectedOptionIndex() {
    return this.lms.optionLms.indexOf(this.selectedOption);
  }

  toggleOptions() {
    this.lms.optionsListLm.classList.toggle("show");
    if (this.lms.optionsListLm.classList.contains("show")) {
      // Scroll to the selected option when the dropdown opens
      this.selectedOption.scrollIntoView({ block: "nearest" });
      this.lms.chevronLm.classList.add('active');
    } 
    else {
      this.lms.chevronLm.classList.remove('active');
    }
  }

  hideOptions() {
    this.lms.optionsListLm.classList.remove("show");
    this.lms.chevronLm.classList.remove('active');
  }

  updateLabel(currentOption) {
    // Clone current options to modify it
    const currentOptionClone = currentOption.cloneNode(true)
    // Get the </span> element with the option text 
    const spanLm = currentOptionClone.querySelector('span')

    // Delete option translate data attribute
    delete spanLm.dataset.i18nElement
    // Add label translate attribute
    spanLm.dataset.i18nElement = 'section-label'

    // Tranlslate the the with the current option language
    const section = spanLm.getAttribute("data-i18n-section");
    const elementName = spanLm.getAttribute("data-i18n-element");

    const elementValues = translations[currentOption.dataset.value][section][elementName];

    for (const key in elementValues) {
      if (elementValues[key]) {
        spanLm[key] = elementValues[key];
      }
    }

    // Add it to the label
    this.lms.labelLm.innerHTML = currentOptionClone.innerHTML;
  }

  dispatchEvent(currentOption) {
    const changeEvent = new CustomEvent('onSelectChange', {
      detail: {
        value: currentOption.dataset.value,
        label: currentOption.dataset.label,
        content: currentOption.innerHTML
      }
    });
    this.lms.selectLm.dispatchEvent(changeEvent);
  }

  setActiveOption(currentOption, preferredLanguage, isEventDispatched, isToggleMenu) {
    if (preferredLanguage && !currentOption) {
      const matchedOption = this.lms.optionLms.find(option => option.dataset.value === preferredLanguage);
      currentOption = matchedOption;
    }

    // Check if the current option is different from the previous option
    if (currentOption !== this.selectedOption) {
      console.log('not the same, set it')
      // Remove active state from the last selected option
      this.selectedOption.classList.remove('selected');

      // Add active state to the current selected option
      currentOption.classList.add('selected');
      currentOption.scrollIntoView({ block: "nearest" }); // Scroll into view
      this.updateLabel(currentOption);

      // Update selected option
      this.selectedOption = currentOption;
    } 

    // Update previous section withou dispatching an event
    if (isToggleMenu) this.previousOption = this.selectedOption;

    if (isEventDispatched && (this.previousOption !== this.selectedOption)) {
      this.dispatchEvent(currentOption);
      console.log('manual dispatch');
        
      // Update previous option after event dispatch
      this.previousOption = this.selectedOption;
    }
  }

  closeOptions(currentOption) {
    // Set the active option without dispatching the event if the value hasn't changed
    this.setActiveOption(currentOption, null, true);
    // Hide options list
    this.hideOptions();
  }
  
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
      this.setActiveOption(matchingOption);
      matchingOption.scrollIntoView({ block: "nearest" });
    }
  
    // Set a timer to reset the typedCharacters after 1 second of no typing
    this.typingTimer = setTimeout(() => {
      this.typedCharacters = '';
    }, 1000);
  }

  // Static method to generate options
  static generateOptions(data) {
    return data.map(({ label, value, content }, i) => `
      <li data-value="${value}" data-label="${label}" class="custom-select__option${i === 0 ? ' selected' : ''}">${content}</li>
    `).join('');
  }

  // Static method to generate the select element
  static generateSelectHTML(data, section) {
    return `
      <span class="custom-select-label"></span>
      <svg class="custom-select__chevron-icon" aria-hidden="true" focusable="false" role="presentation" class="accordion__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      <ul aria-label="Languages Available in Your Preferred Language." data-i18n-section="${section}" data-i18n-element="select-options-list" class="custom-select__options">
        ${this.generateOptions(data, section)}
      </ul>
    `;
  }
}