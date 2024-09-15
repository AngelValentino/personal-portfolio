export class Select {
  constructor(root, data) {
    root.innerHTML = Select.generateSelect(data);
    this.typedCharacters = ''; // To store the characters typed by the user
    this.typingTimer = null; // Timer to reset the search

    this.lms = {
      selectLm: root,
      labelLm: root.querySelector('.custom-select-label'),
      chevronLm: root.querySelector('.custom-select__arrow-icon'),
      optionsListLm: root.querySelector('.custom-select-options'),
      optionLms: [...root.querySelectorAll('.custom-select-option')]
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
      const clickedOption = e.target.closest('.custom-select-option');

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
    this.lms.labelLm.innerHTML = currentOption.innerHTML;
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

  setActiveOption(currentOption) {
    // Check if the current option is different from the previous option
    if (currentOption !== this.selectedOption) {
      // Remove active state from the last selected option
      this.selectedOption.classList.remove('selected');

      // Add active state to the current selected option
      currentOption.classList.add('selected');
      currentOption.scrollIntoView({ block: "nearest" }); // Scroll into view
      this.updateLabel(currentOption);

      // Update selected option
      this.selectedOption = currentOption;
    }
  }

  closeOptions(currentOption) {
    // Set the active option without dispatching the event if the value hasn't changed
    this.setActiveOption(currentOption);

    // Only dispatch the event if the selected option is different from the previous one
    if (this.previousOption !== this.selectedOption) {
      this.dispatchEvent(this.selectedOption);
    }

    // Update previous option after event dispatch
    this.previousOption = this.selectedOption;

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

    console.log(this.typedCharacters)
    console.log(matchingOption)
  
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
      <li data-value="${value}" data-label="${label}" class="custom-select-option${i === 0 ? ' selected' : ''}">${content}</li>
    `).join('');
  }

  // Static method to generate the select element
  static generateSelect(data) {
    return `
      <span class="custom-select-label"></span>
      <svg class="custom-select__arrow-icon" aria-hidden="true" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
      <ul class="custom-select-options">
        ${this.generateOptions(data)}
      </ul>
    `;
  }
}