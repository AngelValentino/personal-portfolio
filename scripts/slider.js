import { throttle } from "./utils.js";

// Calculates the percentage of how much the slider has been scrolled
function getSliderScrollPercentage(sliderLm) {
  const sliderContainerLm = sliderLm.parentElement;
  // Calculate scroll percentage: (current scroll position / (total scrollable width - visible width)) * 100
  return ((sliderContainerLm.scrollLeft / (sliderContainerLm.scrollWidth - sliderContainerLm.clientWidth)) * 100).toFixed(2);
}

// Updates the progress bar width based on the slider's scroll position
export function updateSliderProgressBar(sliderLm, progressBarLm) {
  // Set the progress bar width based on the slider's scroll percentage
  progressBarLm.style.width = `${getSliderScrollPercentage(sliderLm)}%`;
}

export function addSliderEvents(sliderLm, progressBarLm) {
  // Declare sliderGrabbed inside the function for proper encapsulation and to avoid global interference
  let sliderGrabbed = false;

  // Initial progress bar update when the page loads
  updateSliderProgressBar(sliderLm, progressBarLm);

  // Add a scroll event listener to update the progress bar when the slider is scrolled
  sliderLm.parentElement.addEventListener('scroll', () => {
    updateSliderProgressBar(sliderLm, progressBarLm);
  });

  // Mouse events to handle slider grabbing (mousedown, mouseup, and mouseleave)
  sliderLm.addEventListener('mousedown', () => {
    sliderGrabbed = true; // Set flag to true when mouse is pressed down
    sliderLm.style.cursor = 'grabbing'; // Change cursor to indicate grabbing
  });

  sliderLm.addEventListener('mouseup', () => {
    sliderGrabbed = false; // Set flag to false when mouse is released
    sliderLm.style.cursor = 'grab'; // Restore cursor style
  });

  sliderLm.addEventListener('mouseleave', () => {
    sliderGrabbed = false; // Reset flag when mouse leaves the slider area
    sliderLm.style.cursor = 'grab'; // Restore cursor style
  });

  // Handle mouse movement for dragging the slider
  sliderLm.addEventListener('mousemove', e => {
    // If the slider is grabbed, scroll horizontally based on the mouse movement
    if (sliderGrabbed) sliderLm.parentElement.scrollLeft -= e.movementX;
  });

  // Handle scrolling using the mouse wheel
  sliderLm.addEventListener('wheel', e => {
    e.preventDefault(); // Prevent the default vertical scroll behavior
    sliderLm.parentElement.scrollLeft += e.deltaY;
  });

  // Handle window resize event and update the progress bar accordingly
  window.addEventListener('resize', throttle(updateSliderProgressBar.bind(null, sliderLm, progressBarLm), 100));
}