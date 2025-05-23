// Detect if the user prefers reduced motion settings
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function addProgressiveLoading(elements) {
  elements.forEach(imgContainerLm => {
    // Select the thumbnail image within the container
    const thumbnailImg = imgContainerLm.querySelector('img');
  
    // Function to handle actions once the image is fully loaded
    function loaded() {
      // Add the 'loaded' class to the container, indicating the image has loaded
      imgContainerLm.classList.add('loaded');
      // Set the image's 'aria-busy' attribute indicating that has finished loading
      thumbnailImg.ariaBusy = 'false';

      // Delay to smoothly transition from low-res to full-res image
      setTimeout(() => {
        // Remove the low-resolution background image
        imgContainerLm.style.backgroundImage = 'none';
        // Remove blur img container loader background color 
        imgContainerLm.style.backgroundColor = 'transparent';
      }, 250);
    }
  
    // If the image has already been fully loaded, trigger the loaded function immediately
    if (thumbnailImg.complete) {
      loaded();
    } 
    // Otherwise, add an event listener to handle the image load event
    else {
      thumbnailImg.addEventListener('load', loaded);
      // Mark the image as loadeing via 'aria-busy' attribute
      thumbnailImg.ariaBusy = 'true';
    }
  });
}

export function throttle(fun, delay) {
  // Variable to track the timestamp of the last function execution
  let lastTime = 0;

  /* Return a new function that ensures the given function is called 
  at most once every specified delay interval */
  return (...args) => {
    // Get the current timestamp
    const now = new Date().getTime();
    // If the time elapsed since the last execution is less than `delay`, exit early
    if (now - lastTime < delay) return;
    // Update the last execution timestamp to the current time
    lastTime = now;
    // Call the original function with the provided arguments
    fun(...args);
  }
}

// Sets the scroll behavior for the document based on user preferences for motion
export function setScrollBehavior() {
  if (prefersReducedMotion) {
    // If the user prefers reduced motion, disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
  } 
  else {
    // If reduced motion is not preferred, enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}

// Converts a string to kebab-case (lowercase words separated by hyphens)
export function convertToKebabCase(str) {
  return str
    .trim() // Remove any leading or trailing whitespace
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/\s+/g, '-'); // Replace all spaces with hyphens
}

// Traps focus within a specified element
export function trapFocus(e, element) {
  // Select all focusable elements within the given element
  const focusableLms = element.querySelectorAll('div[tabindex]:not([tabindex="-1"]),a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  // Get the first and last focusable elements
  const firstFocusableLm = focusableLms[0]; 
  const lastFocusableLm = focusableLms[focusableLms.length - 1];

  // Check if the Tab key was pressed
  const isTabPressed = (e.key === 'Tab');
  
  // Exit if the Tab key was not pressed
  if (!isTabPressed) { 
    return; 
  }

  if (e.shiftKey) /* shift + tab */ {
    if (document.activeElement === firstFocusableLm) {
      // If 'Shift + Tab' is pressed and focus is on the first element, move focus to the last element
      lastFocusableLm.focus();
      e.preventDefault();
    }
  } 
  else /* tab */ {
    if (document.activeElement === lastFocusableLm) {
      // If Tab is pressed and focus is on the last element, move focus to the first element
      firstFocusableLm.focus();
      e.preventDefault();
    }
  }
}

// Event handler function for closing modal on Escape key
const handleModalCloseAtEscapeKey = closeFun => e => {
  // Close the modal if 'Escape' is pressed
  if (e.key === 'Escape') closeFun();
};

// Event handler function for closing modal on outside click
const handleModalOutsideClick = closeFun => e => {
  if (e.target.matches(matchingClass)){
    // Close modal if the clicked element matches the 'matchingClass'
    closeFun();
  }
};

// Event handler function for trapping focus within the modal content
const handleTrapFocus = modalContentLm => e => {
  trapFocus(e, modalContentLm);
}

// Toggle modal events (add or remove event listeners)
export function toggleModalEvents(eventsHandler, action, closeFun, closeLms, modalContentLm, modalContainerLm, matchingClass) {
  // Helper function to add event listeners
  function addEventListeners() {
    // Create bound event handler functions
    const escKeyHandler = handleModalCloseAtEscapeKey(closeFun, matchingClass);
    const outsideClickHandler = handleModalOutsideClick(closeFun, matchingClass);
    const trapFocusHandler = handleTrapFocus(modalContentLm);

    // Add event listeners if elements exist
    document.body.addEventListener('keydown', escKeyHandler);
    modalContentLm?.addEventListener('keydown', trapFocusHandler);
    modalContainerLm?.addEventListener('click', outsideClickHandler);

    // Add close function to specified element(s)
    if (closeLms) {
      // An array of elements
      if (Array.isArray(closeLms)) {
        closeLms.forEach(closeLm => {
          closeLm.addEventListener('click', closeFun);
        });
      } 
      // Only one element
      else {
        closeLms.addEventListener('click', closeFun);
      }
    }

    // Store handlers on the eventsHandler object to remove them later
    eventsHandler.escKeyHandler = escKeyHandler;
    modalContentLm && (eventsHandler.trapFocusHandler = trapFocusHandler);
    modalContainerLm && (eventsHandler.outsideClickHandler = outsideClickHandler);
    closeLms && (eventsHandler.closeFun = closeFun);
  }

  // Helper function to remove event listeners
  function removeEventListeners() {
    // Remove event listeners if elements exist
    document.body.removeEventListener('keydown', eventsHandler.escKeyHandler);
    modalContentLm?.removeEventListener('keydown', eventsHandler.trapFocusHandler);
    modalContainerLm?.removeEventListener('click', eventsHandler.outsideClickHandler);

    if (closeLms) {
      // An array of elements
      if (Array.isArray(closeLms)) {
        closeLms.forEach(closeLm => {
          closeLm.removeEventListener('click', eventsHandler.closeFun);
        });
      } 
      // Only one element
      else {
        closeLms.removeEventListener('click', eventsHandler.closeFun);
      }
    }

    // Clean up stored handlers
    delete eventsHandler.escKeyHandler;
    modalContentLm && delete eventsHandler.trapFocusHandler;
    modalContainerLm && delete eventsHandler.outsideClickHandler;
    closeLms && delete eventsHandler.closeFun;
  }

  if (action === 'add') {
    addEventListeners();
  } 
  else if (action === 'remove') {
    removeEventListeners();
  }
}

// Toggles focus between modal elements to trap focus within the modal
export function toggleModalFocus(focusBehaviour, firstFocusableLm, lastFocusedLm) {
  if (focusBehaviour === 'add') {
    // Save the currently focused element
    const lastFocusedLm = document.activeElement;
    // Focus on the first focusable element in the modal
    firstFocusableLm.focus();
    // Return the last focused element for later use
    return lastFocusedLm;
  } 
  else if (focusBehaviour === 'return') {
    // Restore focus to the last focused element before the modal was opened
    lastFocusedLm.focus();
  }
}