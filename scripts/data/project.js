export const projectsData = [
  {
    id: 1,
    title: 'Racing Spirit',
    description: 'Racing Spirit is an e-commerce single-page application (SPA), featuring a JSON mock back-end, developed from scratch using HTML, CSS, JavaScript and React. Inspired by DoomsdayCo design and featuring product images from Iron Heart.',
    technologies: [
      'html',
      'css',
      'javascript',
      'react'
    ],
    codeUrl: 'https://github.com/AngelValentino/racing-spirit',
    demoUrl: 'https://racing-spirit.pages.dev/'
  },
  {
    id: 2,
    title: 'YouTube Clone',
    description: 'Front-end YouTube home page clone developed from scratch using HTML, CSS and JavaScript. Featuring videos containing information about Studio Ghibli movies.',
    technologies: [
      'html',
      'css',
      'javascript'
    ],
    codeUrl: 'https://github.com/AngelValentino/youtube-clone',
    demoUrl: 'https://youtube-clone1.pages.dev/'
  },
  {
    id: 3,
    title: 'TaskFlow',
    description: 'TaskFlow is your go-to app for effortless productivity. Easily manage tasks, set reminders, and track your progress. All with a clean, user-friendly and accessible design that helps you stay organized and focused.',
    technologies: [
      'html',
      'css',
      'javascript'
    ],
    codeUrl: 'https://github.com/AngelValentino/TaskFlow',
    demoUrl: 'https://taskflow1.pages.dev/'
  }
];

function toggleSiblingBtn(btn, className) {
  const targetBtn = className === 'show' ? btn.nextElementSibling : btn.previousElementSibling;
  targetBtn.classList.toggle(className);
  targetBtn.focus();
}

export function toggleProjectInfoPanel(e) {
  const moreInfoBtn = e.target.closest('.project__more-info-btn');
  const closePanelBtn = e.target.closest('.project__info-close-btn');
  const projectLm = e.target.closest('.project');
  const infoPanelLm = projectLm && projectLm.querySelector('.project__info');
  const imgLinkLm = projectLm && projectLm.querySelector('.project__img-link');

  if (moreInfoBtn) {
    // Show info panel and scroll to top
    infoPanelLm.classList.add('show');
    infoPanelLm.scrollTo(0, 0);
    // Show close panel button and add focus
    toggleSiblingBtn(moreInfoBtn, 'show');

    // Hide project image link and more info button
    imgLinkLm.classList.add('hide');
    moreInfoBtn.classList.add('hide');
  }
  else if (closePanelBtn) {
    // Hide info panel and close info panel button
    infoPanelLm.classList.remove('show');
    closePanelBtn.classList.remove('show');

    // Show project image link and more info button
    imgLinkLm.classList.remove('hide');
    toggleSiblingBtn(closePanelBtn, 'hide');
  }
}