import { throttle } from "./utils.js";

function getSliderScrollPercentage(sliderLm) {
  const sliderContainerLm = sliderLm.parentElement;
  return ((sliderContainerLm.scrollLeft / (sliderContainerLm.scrollWidth - sliderContainerLm.clientWidth)) * 100).toFixed(2);
}

export function updateSliderProgressBar(sliderLm, progressBarLm) {
  progressBarLm.style.width = `${getSliderScrollPercentage(sliderLm)}%`;
}

export function addSliderEvents(sliderLm, progressBarLm) {
  // Declare sliderGrabbed inside the function for proper encapsulation and to avoid global interference
  let sliderGrabbed = false;

  // Initial progress bar update when the page loads
  updateSliderProgressBar(sliderLm, progressBarLm);

  // Event listener to update the progress bar when the slider is scrolled
  sliderLm.parentElement.addEventListener('scroll', () => {
    updateSliderProgressBar(sliderLm, progressBarLm)
  });

  // Mouse events for grabbing the slider
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
  });

  // Handle mouse movement for dragging the slider
  sliderLm.addEventListener('mousemove', e => {
    if (sliderGrabbed) sliderLm.parentElement.scrollLeft -= e.movementX;
  });

  // Handle scrolling using the mouse wheel
  sliderLm.addEventListener('wheel', e => {
    e.preventDefault();
    sliderLm.parentElement.scrollLeft += e.deltaY;
  });

  // Handle window resize event and update the progress bar accordingly
  window.addEventListener('resize', throttle(updateSliderProgressBar.bind(null, sliderLm, progressBarLm), 100));
}