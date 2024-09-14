import { projectsData } from "./project.js";
import { convertToKebabCase } from "../utils.js";

export const translations = {
  en: {
    'mobile-menu': {
      'close-btn': {
        ariaLabel: 'Close menu.',
        title: 'Close menu'
      },
      'navigation-links-list': {
        ariaLabel: 'Navigation links.'
      },
      'home-link': {
        innerText: 'Home'
      },
      'about-link': {
        innerText: 'About'
      },
      'projects-link': {
        innerText: 'Projects'
      },
      'contact-link': {
        innerText: 'Contact'
      }
    },
    navbar: {
      title: {
        title: 'Home'
      },
      'toggle-theme-btn': {
        ariaLabel: 'Switch to dark theme',
        title: 'Switch to dark theme'
      },
      'toggle-menu-btn': {
        ariaLabel: 'Open menu.',
        title: 'Open menu'
      },
      'navigation-links-list': {
        ariaLabel: 'Header navigation links.'
      },
      'home-link': {
        innerText: 'Home'
      },
      'about-link': {
        innerText: 'About'
      },
      'projects-link': {
        innerText: 'Projects'
      },
      'contact-link': {
        innerText: 'Contact'
      }
    },
    hero: {
      title: {
        innerHTML: 'Front-End<br />Developer<img class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="waving hand icon">'
      },
      'description': {
        innerHTML: `Hi, I'm Angel Valentino. A passionate Front-End Developer based in Spain.<img class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="location pin">`
      },
      'social-list': {
        ariaLabel: "Angel Valentino's social links."
      },
      'freecodecamp-link': {
        ariaLabel: "Go to Angel Valentino's freecodecamp profile.",
      },
      'linkedin-link': {
        ariaLabel: "Go to Angel Valentino's LinkedIn profile.",
      },
      'github-link': {
        ariaLabel: "Go to Angel Valentino's Github profile."
      },
      'avatar-image': {
        alt: 'japanese tiger drawing'
      },
      'tech-stach-list': {
        ariaLabel: "Angel Valentino's tech stack."
      },
      'tech-stach-title': {
        innerText: 'Tech stack'
      }
    },
    about: {
      image: {
        alt: 'japanese tiger drawing'
      },
      title: {
        innerText: 'About me'
      },
      'first-paragraph': {
        innerText: "Hi, my name is Angel, and I'm a self-taught software engineer who focuses on developing responsible and accessible user interfaces. I also enjoy sewing in my free time as a creative hobby."
      },
      'second-paragraph': {
        innerText: "I firmly believe that mastering the basics is essential for a deep understanding of any craft. Whether it's sewing or coding, the best way to learn is by diving in without training wheels. That's why I emphasize working with HTML/CSS and vanilla JavaScript, even though I'm proficient with libraries and frameworks such as React or Bootstrap."
      },
      'third-paragaph': {
        innerText: "Currently, I'm expanding my skills by learning back-end development with PHP and SQL."
      },
      'download-button': {
        innerText: 'Download CV'
      }
    },
    projects: {
      title: {
        innerText: 'Projects'
      },
      list: {
        ariaLabel: 'Angel Valentino projects list.'
      },
    },
    skills: {
      title: {
        innerText: 'Skills'
      },
      list: {
        ariaLabel: "Angel Valentino's skills."
      }
    },
    contact: {
      'form-title': {
        innerText: 'Contact Me'
      },
      'name-label': {
        innerText: 'Name'
      },
      'name-input': {
        placeholder: 'Name*'
      },
      'email-label': {
        innerText: 'Email'
      },
      'email-input': {
        placeholder: 'Email*'
      },
      'textarea-label': {
        innerText: 'Message'
      },
      'textarea-input': {
        placeholder: 'Message*'
      },
      'textarea-submit-button': {
        innerText: 'Send Message'
      },
      icon: {
        ariaLabel: 'Hot coffee with cookies.'
      },
      image: {
        alt: 'Hot coffee with cookies.'
      },
      title: {
        innerHTML: '<span>How do you</span><br />take your coffee?'
      }
    },
    footer: {
      text: {
        innerHTML: `Created by <a aria-label="Go to Angel Valentino's GitHub profile." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>`
      },
      'social-list': {
        ariaLabel: "Angel Valentino's social links."
      },
      'freecodecamp-link': {
        ariaLabel: "Go to Angel Valentino's freecodecamp profile.",
      },
      'linkedin-link': {
        ariaLabel: "Go to Angel Valentino's LinkedIn profile.",
      },
      'github-link': {
        ariaLabel: "Go to Angel Valentino's Github profile."
      },
      'scroll-to-top-button': {
        ariaLabel: 'Scroll to top.',
        title: 'Scroll to top'
      }
    }
  },
  es: {
    'mobile-menu': {
      'close-btn': {
        ariaLabel: 'Cerrar menú.',
        title: 'Cerrar menú'
      },
      'navigation-links-list': {
        ariaLabel: 'Enlaces de navegación.'
      },
      'home-link': {
        innerText: 'Inicio'
      },
      'about-link': {
        innerText: 'Sobre mí'
      },
      'projects-link': {
        innerText: 'Proyectos'
      },
      'contact-link': {
        innerText: 'Contacto'
      }
    },
    navbar: {
      title: {
        title: 'Inicio'
      },
      'toggle-theme-btn': {
        ariaLabel: 'Cambiar al tema oscuro',
        title: 'Cambiar al tema oscuro'
      },
      'toggle-menu-btn': {
        ariaLabel: 'Abrir menú.',
        title: 'Abrir menú'
      },
      'navigation-links-list': {
        ariaLabel: 'Enlaces de navegación del encabezado.'
      },
      'home-link': {
        innerText: 'Inicio'
      },
      'about-link': {
        innerText: 'Sobre mí'
      },
      'projects-link': {
        innerText: 'Proyectos'
      },
      'contact-link': {
        innerText: 'Contacto'
      }
    },
    hero: {
      title: {
        innerHTML: 'Desarrollador<br />Front-End<img class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="icono de mano saludando">'
      },
      'description': {
        innerHTML: `Hola, soy Angel Valentino. Un apasionado Desarrollador Front-End basado en España.<img class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="pin de ubicación">`
      },
      'social-list': {
        ariaLabel: "Enlaces sociales de Angel Valentino."
      },
      'freecodecamp-link': {
        ariaLabel: "Ir al perfil de freecodecamp de Angel Valentino.",
      },
      'linkedin-link': {
        ariaLabel: "Ir al perfil de LinkedIn de Angel Valentino.",
      },
      'github-link': {
        ariaLabel: "Ir al perfil de GitHub de Angel Valentino."
      },
      'avatar-image': {
        alt: 'dibujo de tigre japonés'
      },
      'tech-stach-list': {
        ariaLabel: "Tecnologías con las que Angel Valentino tiene familiaridad con."
      },
      'tech-stach-title': {
        innerText: 'Tecnologías'
      }
    },
    about: {
      image: {
        alt: 'dibujo de tigre japonés'
      },
      title: {
        innerText: 'Sobre mí'
      },
      'first-paragraph': {
        innerText: "Hola, mi nombre es Angel y soy un ingeniero de software autodidacta que se enfoca en desarrollar interfaces de usuario dinámicas y accesibles. También coso en mi tiempo libre como pasatiempo creativo."
      },
      'second-paragraph': {
        innerText: "Creo firmemente que dominar lo básico es esencial para una comprensión profunda de cualquier oficio. Ya sea coser o programar, la mejor manera de aprender es ir directo. Por eso, hago hincapié en trabajar con HTML/CSS y JavaScript puro, aunque también soy competente con bibliotecas y frameworks como React o Bootstrap."
      },
      'third-paragraph': {
        innerText: "Actualmente, estoy ampliando mis habilidades aprendiendo desarrollo back-end con PHP y SQL."
      },
      'download-button': {
        innerText: 'Descargar CV'
      }
    },
    projects: {
      title: {
        innerText: 'Proyectos'
      },
      list: {
        ariaLabel: 'Lista de proyectos de Angel Valentino.'
      },
    },
    skills: {
      title: {
        innerText: 'Habilidades'
      },
      list: {
        ariaLabel: "Habilidades de Angel Valentino."
      }
    },
    contact: {
      'form-title': {
        innerText: 'Contáctame'
      },
      'name-label': {
        innerText: 'Nombre'
      },
      'name-input': {
        placeholder: 'Nombre*'
      },
      'email-label': {
        innerText: 'Correo electrónico'
      },
      'email-input': {
        placeholder: 'Correo electrónico*'
      },
      'textarea-label': {
        innerText: 'Mensaje'
      },
      'textarea-input': {
        placeholder: 'Mensaje*'
      },
      'textarea-submit-button': {
        innerText: 'Enviar mensaje'
      },
      icon: {
        ariaLabel: 'Café caliente con galletas.'
      },
      image: {
        alt: 'Café caliente con galletas.'
      },
      title: {
        innerHTML: '<span>¿Cómo tomas</span><br />tu café?'
      }
    },
    footer: {
      text: {
        innerHTML: `Creado por <a aria-label="Ir al perfil de GitHub de Angel Valentino." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>`
      },
      'social-list': {
        ariaLabel: "Enlaces sociales de Angel Valentino."
      },
      'freecodecamp-link': {
        ariaLabel: "Ir al perfil de freecodecamp de Angel Valentino.",
      },
      'linkedin-link': {
        ariaLabel: "Ir al perfil de LinkedIn de Angel Valentino.",
      },
      'github-link': {
        ariaLabel: "Ir al perfil de GitHub de Angel Valentino."
      },
      'scroll-to-top-button': {
        ariaLabel: 'Desplazar hacia arriba.',
        title: 'Desplazar hacia arriba'
      }
    }
  },
  ro: {
    'mobile-menu': {
      'close-btn': {
        ariaLabel: 'Închide meniul.',
        title: 'Închide meniul'
      },
      'navigation-links-list': {
        ariaLabel: 'Linkuri de navigare.'
      },
      'home-link': {
        innerText: 'Acasă'
      },
      'about-link': {
        innerText: 'Despre'
      },
      'projects-link': {
        innerText: 'Proiecte'
      },
      'contact-link': {
        innerText: 'Contact'
      }
    },
    navbar: {
      title: {
        title: 'Acasă'
      },
      'toggle-theme-btn': {
        ariaLabel: 'Comută la tema întunecată',
        title: 'Comută la tema întunecată'
      },
      'toggle-menu-btn': {
        ariaLabel: 'Deschide meniul.',
        title: 'Deschide meniul'
      },
      'navigation-links-list': {
        ariaLabel: 'Linkuri de navigare în antet.'
      },
      'home-link': {
        innerText: 'Acasă'
      },
      'about-link': {
        innerText: 'Despre'
      },
      'projects-link': {
        innerText: 'Proiecte'
      },
      'contact-link': {
        innerText: 'Contact'
      }
    },
    hero: {
      title: {
        innerHTML: 'Front-End<br />Developer<img class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="iconă mână care salută">'
      },
      'description': {
        innerHTML: 'Bună, sunt Angel Valentino. Un dezvoltator Front-End pasionat, bazat în Spania.<img class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="Pin de locație.">'
      },
      'social-list': {
        ariaLabel: "Linkuri sociale ale lui Angel Valentino."
      },
      'freecodecamp-link': {
        ariaLabel: "Accesează profilul lui Angel Valentino de pe freecodecamp.",
      },
      'linkedin-link': {
        ariaLabel: "Accesează profilul lui Angel Valentino de pe LinkedIn.",
      },
      'github-link': {
        ariaLabel: "Accesează profilul lui Angel Valentino de pe Github."
      },
      'avatar-image': {
        alt: 'desen cu tigru japonez'
      },
      'tech-stach-list': {
        ariaLabel: "Tehnologiile pe care Angel Valentino le utilizează."
      },
      'tech-stach-title': {
        innerText: 'Tehnologii'
      }
    },
    about: {
      image: {
        alt: 'desen cu tigru japonez'
      },
      title: {
        innerText: 'Despre mine'
      },
      'first-paragraph': {
        innerText: "Bună, numele meu este Angel și sunt un inginer de software autodidact care se concentrează pe dezvoltarea de interfețe de utilizator dinamici și accesibile. Îmi place, de asemenea, să cos în timpul meu liber ca hobby creativ."
      },
      'second-paragraph': {
        innerText: "Cred cu tărie că stăpânirea bazelor este esențială pentru o înțelegere profundă a oricărei meserii. Fie că este vorba despre cusut sau programare, cel mai bun mod de a învăța este să te implicați în mod direct. De aceea, pun accent pe lucrul cu HTML/CSS și JavaScript pur, chiar dacă sunt familiarizat cu biblioteci și frameworks precum React sau Bootstrap."
      },
      'third-paragraph': {
        innerText: "În prezent, îmi extind abilitățile învățând dezvoltare back-end cu PHP și SQL."
      },
      'download-button': {
        innerText: 'Descarcă CV'
      }
    },
    projects: {
      title: {
        innerText: 'Proiecte'
      },
      list: {
        ariaLabel: 'Lista proiectelor lui Angel Valentino.'
      },
    },
    skills: {
      title: {
        innerText: 'Abilități'
      },
      list: {
        ariaLabel: "Abilități ale lui Angel Valentino."
      }
    },
    contact: {
      'form-title': {
        innerText: 'Contactează-mă'
      },
      'name-label': {
        innerText: 'Nume'
      },
      'name-input': {
        placeholder: 'Nume*'
      },
      'email-label': {
        innerText: 'Email'
      },
      'email-input': {
        placeholder: 'Email*'
      },
      'textarea-label': {
        innerText: 'Mesaj'
      },
      'textarea-input': {
        placeholder: 'Mesaj*'
      },
      'textarea-submit-button': {
        innerText: 'Trimite mesajul'
      },
      icon: {
        ariaLabel: 'Cafea fierbinte cu biscuiți.'
      },
      image: {
        alt: 'Cafea fierbinte cu biscuiți.'
      },
      title: {
        innerHTML: '<span>Cum îți place</span><br />cafeaua?'
      }
    },
    footer: {
      text: {
        innerHTML: 'Creat de <a aria-label="Accesează profilul lui Angel Valentino de pe GitHub." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>'
      },
      'social-list': {
        ariaLabel: "Linkuri sociale ale lui Angel Valentino."
      },
      'freecodecamp-link': {
        ariaLabel: "Accesează profilul lui Angel Valentino de pe freecodecamp.",
      },
      'linkedin-link': {
        ariaLabel: "Accesează profilul lui Angel Valentino de pe LinkedIn.",
      },
      'github-link': {
        ariaLabel: "Accesează profilul lui Angel Valentino de pe Github."
      },
      'scroll-to-top-button': {
        ariaLabel: 'Derulează în sus.',
        title: 'Derulează în sus'
      }
    }
  },
  ca: {
    'mobile-menu': {
      'close-btn': {
        ariaLabel: 'Tancar el menú.',
        title: 'Tancar el menú'
      },
      'navigation-links-list': {
        ariaLabel: 'Enllaços de navegació.'
      },
      'home-link': {
        innerText: 'Inici'
      },
      'about-link': {
        innerText: 'Sobre'
      },
      'projects-link': {
        innerText: 'Projectes'
      },
      'contact-link': {
        innerText: 'Contacte'
      }
    },
    navbar: {
      title: {
        title: 'Inici'
      },
      'toggle-theme-btn': {
        ariaLabel: 'Canviar al tema fosc',
        title: 'Canviar al tema fosc'
      },
      'toggle-menu-btn': {
        ariaLabel: 'Obrir menú.',
        title: 'Obrir menú'
      },
      'navigation-links-list': {
        ariaLabel: 'Enllaços de navegació del capçalera.'
      },
      'home-link': {
        innerText: 'Inici'
      },
      'about-link': {
        innerText: 'Sobre'
      },
      'projects-link': {
        innerText: 'Projectes'
      },
      'contact-link': {
        innerText: 'Contacte'
      }
    },
    hero: {
      title: {
        innerHTML: 'Front-End<br />Developer<img class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="icona de mà onada">'
      },
      'description': {
        innerHTML: `Hola, sóc Angel Valentino. Un apassionat desenvolupador Front-End basat a Espanya.<img class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="pin de localització">`
      },
      'social-list': {
        ariaLabel: "Enllaços socials d'Angel Valentino."
      },
      'freecodecamp-link': {
        ariaLabel: "Vés al perfil de freecodecamp d'Angel Valentino.",
      },
      'linkedin-link': {
        ariaLabel: "Vés al perfil de LinkedIn d'Angel Valentino.",
      },
      'github-link': {
        ariaLabel: "Vés al perfil de Github d'Angel Valentino."
      },
      'avatar-image': {
        alt: 'dibuix de tigre japonès'
      },
      'tech-stach-list': {
        ariaLabel: "Tecnologies conegudes per Angel Valentino."
      },
      'tech-stach-title': {
        innerText: 'Tecnologies'
      }
    },
    about: {
      image: {
        alt: 'dibuix de tigre japonès'
      },
      title: {
        innerText: 'Sobre mi'
      },
      'first-paragraph': {
        innerText: "Hola, em dic Angel, i sóc un enginyer de programació autodidacta que es concentra en desenvolupar interfícies d'usuari responsables i accessibles. També gaudeixo cosint en el meu temps lliure com a afició creativa."
      },
      'second-paragraph': {
        innerText: "Crec fermament que dominar els fonaments és essencial per a una comprensió profunda de qualsevol ofici. Ja sigui cosint o programant, la millor manera d'aprendre és submergint-se directament. Per això, dono importància a treballar amb HTML/CSS i JavaScript pur, tot i que sóc competent amb biblioteques i frameworks com React o Bootstrap."
      },
      'third-paragraph': {
        innerText: "Actualment, estic ampliant les meves habilitats aprenent desenvolupament back-end amb PHP i SQL."
      },
      'download-button': {
        innerText: 'Descarregar CV'
      }
    },
    projects: {
      title: {
        innerText: 'Projectes'
      },
      list: {
        ariaLabel: "Llista de projectes d'Angel Valentino."
      },
    },
    skills: {
      title: {
        innerText: 'Habilitats'
      },
      list: {
        ariaLabel: "Habilitats d'Angel Valentino."
      }
    },
    contact: {
      'form-title': {
        innerText: "Contacta'm"
      },
      'name-label': {
        innerText: 'Nom'
      },
      'name-input': {
        placeholder: 'Nom*'
      },
      'email-label': {
        innerText: 'Email'
      },
      'email-input': {
        placeholder: 'Correu electronic*'
      },
      'textarea-label': {
        innerText: 'Missatge'
      },
      'textarea-input': {
        placeholder: 'Missatge*'
      },
      'textarea-submit-button': {
        innerText: 'Enviar missatge'
      },
      icon: {
        ariaLabel: 'Cafè calent amb galetes.'
      },
      image: {
        alt: 'Cafè calent amb galetes.'
      },
      title: {
        innerHTML: '<span>Com prefereixes</span><br />el teu cafè?'
      }
    },
    footer: {
      text: {
        innerHTML: `Creat per <a aria-label="Vés al perfil de GitHub d'Angel Valentino." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>`
      },
      'social-list': {
        ariaLabel: "Enllaços socials d'Angel Valentino."
      },
      'freecodecamp-link': {
        ariaLabel: "Vés al perfil de freecodecamp d'Angel Valentino.",
      },
      'linkedin-link': {
        ariaLabel: "Vés al perfil de LinkedIn d'Angel Valentino.",
      },
      'github-link': {
        ariaLabel: "Vés al perfil de Github d'Angel Valentino."
      },
      'scroll-to-top-button': {
        ariaLabel: 'Desplaçar-se fins a dalt.',
        title: 'Desplaçar-se fins a dalt'
      }
    }
  },
};


//TODO Refactor this
projectsData.forEach(project => {
  const projectTitle = convertToKebabCase(project.title)

  // Project controls
  translations.en.projects[`${projectTitle}-more-info-btn`] = {
    ariaLabel: `Read more information about ${project.title}.`,
    title: 'More info'
  }
  translations.en.projects[`${projectTitle}-close-info-btn`] = {
    ariaLabel: `Close more information about ${project.title}.`,
    title: 'Close more info'
  }

  // Poject Link
  translations.en.projects[`${projectTitle}-img-link`] = {
    ariaLabel: `Go to ${project.title} live demo.`
  }
  translations.en.projects[`${projectTitle}-tooltip-text`] = {
    innerText: 'Live Demo'
  }

  // Project info
  translations.en.projects[`${projectTitle}-description`] = {
    innerText: `${project.description.en}`
  }
  translations.en.projects[`${projectTitle}-demo-text`] = {
    innerText: 'Live Demo'
  }
  translations.en.projects[`${projectTitle}-demo-link`] = {
    ariaLabel: `Go to ${project.title} live demo.`
  }
  translations.en.projects[`${projectTitle}-code-text`] = {
    innerText: 'Code'
  }
  translations.en.projects[`${projectTitle}-code-link`] = {
    ariaLabel: `Go to ${project.title} code repository.`
  }
  translations.en.projects[`${projectTitle}-tech-list`] = {
    ariaLabel: 'Project technologies.'
  }


  //? es
  translations.es.projects[`${projectTitle}-more-info-btn`] = {
    ariaLabel: `Leer más información sobre ${project.title}.`,
    title: 'Más información'
  }
  translations.es.projects[`${projectTitle}-close-info-btn`] = {
    ariaLabel: `Cerrar más información sobre ${project.title}.`,
    title: 'Cerrar más información'
  }

  // Project Link
  translations.es.projects[`${projectTitle}-img-link`] = {
    ariaLabel: `Ir a la demo en vivo de ${project.title}.`
  }
  translations.es.projects[`${projectTitle}-tooltip-text`] = {
    innerText: 'Demo en Vivo'
  }

  // Project info
  translations.es.projects[`${projectTitle}-description`] = {
    innerText: `${project.description.es}`
  }
  translations.es.projects[`${projectTitle}-demo-text`] = {
    innerText: 'Demo en Vivo'
  }
  translations.es.projects[`${projectTitle}-demo-link`] = {
    ariaLabel: `Ir a la demo en vivo de ${project.title}.`
  }
  translations.es.projects[`${projectTitle}-code-text`] = {
      innerText: 'Código'
  }
  translations.es.projects[`${projectTitle}-code-link`] = {
    ariaLabel: `Ir al repositorio de código de ${project.title}.`
  }
  translations.es.projects[`${projectTitle}-tech-list`] = {
    ariaLabel: 'Tecnologías del proyecto.'
  }


  //? ro

  translations.ro.projects[`${projectTitle}-more-info-btn`] = {
    ariaLabel: `Citește mai multe informații despre ${project.title}.`,
    title: 'Mai multe informații'
  }
  translations.ro.projects[`${projectTitle}-close-info-btn`] = {
    ariaLabel: `Închide mai multe informații despre ${project.title}.`,
    title: 'Închide mai multe informații'
  }

  // Project Link
  translations.ro.projects[`${projectTitle}-img-link`] = {
    ariaLabel: `Accesează demo-ul live al proiectului ${project.title}.`
  }
  translations.ro.projects[`${projectTitle}-tooltip-text`] = {
    innerText: 'Demo Live'
  }

  // Project info
  translations.ro.projects[`${projectTitle}-description`] = {
    innerText: `${project.description.ro}`
  }
  translations.ro.projects[`${projectTitle}-demo-text`] = {
    innerText: 'Demo Live'
  }
  translations.ro.projects[`${projectTitle}-demo-link`] = {
    ariaLabel: `Accesează demo-ul live al proiectului ${project.title}.`
  }
  translations.ro.projects[`${projectTitle}-code-text`] = {
    innerText: 'Cod'
  }
  translations.ro.projects[`${projectTitle}-code-link`] = {
    ariaLabel: `Accesează depozitul de cod al proiectului ${project.title}.`
  }
  translations.ro.projects[`${projectTitle}-tech-list`] = {
    ariaLabel: 'Tehnologiile proiectului.'
  }

  //? ca
  translations.ca.projects[`${projectTitle}-more-info-btn`] = {
    ariaLabel: `Llegeix més informació sobre ${project.title}.`,
    title: 'Més informació'
  }
  translations.ca.projects[`${projectTitle}-close-info-btn`] = {
    ariaLabel: `Tanca més informació sobre ${project.title}.`,
    title: 'Tanca més informació'
  }

  // Project Link
  translations.ca.projects[`${projectTitle}-img-link`] = {
    ariaLabel: `Accedeix a la demo en directe del projecte ${project.title}.`
  }
  translations.ca.projects[`${projectTitle}-tooltip-text`] = {
    innerText: 'En Directe'
  }

  // Project info
  translations.ca.projects[`${projectTitle}-description`] = {
    innerText: `${project.description.ca}`
  }
  translations.ca.projects[`${projectTitle}-demo-text`] = {
    innerText: 'En Directe'
  }
  translations.ca.projects[`${projectTitle}-demo-link`] = {
    ariaLabel: `Accedeix a la demo en directe del projecte ${project.title}.`
  }
  translations.ca.projects[`${projectTitle}-code-text`] = {
    innerText: 'Codi'
  }
  translations.ca.projects[`${projectTitle}-code-link`] = {
    ariaLabel: `Accedeix al repositori de codi del projecte ${project.title}.`
  }
  translations.ca.projects[`${projectTitle}-tech-list`] = {
    ariaLabel: 'Tecnologies del projecte.'
  }
})



console.log(translations.en)
