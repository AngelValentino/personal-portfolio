import { projectsData } from "./project.js";
import { convertToKebabCase } from "../utils.js";
import { checkLanguageError } from "../language.js";

export const translations = {
  en: {
    html: {
      title: 'Angel Valentino / Web Developer',
      'meta-description': "Hi, my name is Angel, and I'm a self-taught software engineer who focuses on developing responsible and accessible user interfaces."
    },
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
      },
      'lang-select-element': {
        ariaLabel: 'Languages available in your preferred language.'
      },
      'lang-select-label': {
        innerText: 'English'
      },
      'english-select-option': {
        innerHTML: 'English'
      },
      'spanish-select-option': {
        innerText: 'Spanish'
      },
      'romanian-select-option': {
        innerText: 'Romanian'
      },
      'catalan-select-option': {
        innerText: 'Catalan'
      }
    },
    navbar: {
      title: {
        title: 'Home'
      },
      'toggle-theme-btn': {
        light: {
          ariaLabel: 'Switch to dark theme',
          title: 'Switch to dark theme'
        },
        dark: {
          ariaLabel: 'Switch to light theme',
          title: 'Switch to light theme'
        }
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
      },
      'lang-select-element': {
        ariaLabel: 'Languages available in your preferred language.'
      },
      'lang-select-label': {
        innerText: 'English'
      },
      'english-select-option': {
        innerText: 'English'
      },
      'spanish-select-option': {
        innerText: 'Spanish'
      },
      'romanian-select-option': {
        innerText: 'Romanian'
      },
      'catalan-select-option': {
        innerText: 'Catalan'
      }
    },
    hero: {
      title: {
        innerHTML: 'Front-End<br />Developer<img aria-hidden="true" role="presentation" class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="">'
      },
      description: {
        innerHTML: `Hi, I'm Angel Valentino. A passionate Front-End Developer based in Spain.<img class="hero__title-location-img" aria-hidden="true" role="presentation" src="images/welcome-title-icons/location-pin2.png" alt="">`
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
      'third-paragraph': {
        innerText: "Currently, I'm expanding my skills by learning back-end development with PHP and SQL."
      },
      'download-button': {
        innerText: 'Download CV',
        href: 'documents/resume-en.pdf'
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
        innerHTML: `Created by <br class="footer__text-link-line-break"><a class="footer__text-link slide-in-and-out underline" aria-label="Go to Angel Valentino's GitHub profile." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>`
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
    html: {
      title: 'Angel Valentino / Desarrollador Web',
      'meta-description': "Hola, mi nombre es Angel y soy un ingeniero de software autodidacta que se centra en desarrollar interfaces de usuario responsables y accesibles."
    },
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
      },
      'lang-select-element': {
        ariaLabel: 'Idiomas disponibles en tu idioma preferido.'
      },
      'lang-select-label': {
        innerText: 'Español'
      },
      'english-select-option': {
        innerHTML: 'Inglés'
      },
      'spanish-select-option': {
        innerText: 'Español'
      },
      'romanian-select-option': {
        innerText: 'Rumano'
      },
      'catalan-select-option': {
        innerText: 'Catalán'
      }
    },
    navbar: {
      title: {
        title: 'Inicio'
      },
      'toggle-theme-btn': {
        light: {
          ariaLabel: 'Cambiar al tema oscuro',
          title: 'Cambiar al tema oscuro'
        },
        dark: {
          ariaLabel: 'Cambiar al tema claro',
          title: 'Cambiar al tema claro'
        }
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
      },
      'lang-select-element': {
        ariaLabel: 'Idiomas disponibles en tu idioma preferido.'
      },
      'lang-select-label': {
        innerText: 'Español'
      },
      'english-select-option': {
        innerHTML: 'Inglés'
      },
      'spanish-select-option': {
        innerText: 'Español'
      },
      'romanian-select-option': {
        innerText: 'Rumano'
      },
      'catalan-select-option': {
        innerText: 'Catalán'
      }
    },
    hero: {
      title: {
        innerHTML: 'Desarrollador<br />Front-End<img aria-hidden="true" role="presentation" class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="">'
      },
      description: {
        innerHTML: `Hola, soy Angel Valentino. Un apasionado Desarrollador Front-End basado en España.<img aria-hidden="true" role="presentation" class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="">`
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
        innerText: 'Descargar CV',
        href: 'documents/resume-es.pdf'
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
        innerHTML: `Creado por <br class="footer__text-link-line-break"><a class="footer__text-link slide-in-and-out underline" aria-label="Ir al perfil de GitHub de Angel Valentino." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>`
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
    html: {
      title: 'Angel Valentino / Dezvoltator Web',
      'meta-description': "Bună, numele meu este Angel și sunt un inginer software autodidact care se concentrează pe dezvoltarea interfețelor de utilizator responsabile și accesibile."
    },
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
      },
      'lang-select-element': {
        ariaLabel: 'Limbile disponibile în limba ta preferată.'
      },
      'lang-select-label': {
        innerText: 'Română'
      },
      'english-select-option': {
        innerHTML: 'Engleză'
      },
      'spanish-select-option': {
        innerText: 'Spaniolă'
      },
      'romanian-select-option': {
        innerText: 'Română'
      },
      'catalan-select-option': {
        innerText: 'Catalan'
      }
    },
    navbar: {
      title: {
        title: 'Acasă'
      },
      'toggle-theme-btn': {
        light: {
          ariaLabel: 'Comută la tema întunecată',
          title: 'Comută la tema întunecată'
        },
        dark: {
          ariaLabel: 'Comută la tema luminoasă',
          title: 'Comută la tema luminoasă'
        }
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
      },
      'lang-select-element': {
        ariaLabel: 'Limbile disponibile în limba ta preferată.'
      },
      'lang-select-label': {
        innerText: 'Română'
      },
      'english-select-option': {
        innerHTML: 'Engleză'
      },
      'spanish-select-option': {
        innerText: 'Spaniolă'
      },
      'romanian-select-option': {
        innerText: 'Română'
      },
      'catalan-select-option': {
        innerText: 'Catalan'
      }
    },
    hero: {
      title: {
        innerHTML: 'Dezvoltator<br />Front-End<img aria-hidden="true" role="presentation" class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="">'
      },
      description: {
        innerHTML: 'Bună, sunt Angel Valentino. Un dezvoltator Front-End pasionat, bazat în Spania.<img aria-hidden="true" role="presentation" class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="">'
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
        innerText: 'Descarcă CV',
        href: 'documents/resume-en.pdf'
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
        innerHTML: 'Creat de <br class="footer__text-link-line-break"><a class="footer__text-link slide-in-and-out underline" aria-label="Accesează profilul lui Angel Valentino de pe GitHub." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>'
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
    html: {
      title: 'Angel Valentino / Desenvolupador Web',
      'meta-description': "Hola, mi nombre es Angel y soy un ingeniero de software autodidacta que se centra en desarrollar interfaces de usuario responsables y accesibles."
    },
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
      },
      'lang-select-element': {
        ariaLabel: 'Idiomes disponibles en el teu idioma preferit.'
      },
      'lang-select-label': {
        innerText: 'Català'
      },
      'english-select-option': {
        innerHTML: 'Anglès'
      },
      'spanish-select-option': {
        innerText: 'Espanyol'
      },
      'romanian-select-option': {
        innerText: 'Romanès'
      },
      'catalan-select-option': {
        innerText: 'Català'
      }
    },
    navbar: {
      title: {
        title: 'Inici'
      },
      'toggle-theme-btn': {
        light: {
          ariaLabel: 'Canvia al tema fosc',
          title: 'Canvia al tema fosc'
        },
        dark: {
          ariaLabel: 'Canvia al tema clar',
          title: 'Canvia al tema clar'
        }
      },
      'toggle-menu-btn': {
        ariaLabel: 'Obrir menú.',
        title: 'Obrir menú'
      },
      'navigation-links-list': {
        ariaLabel: 'Enllaços de navegació de la capçalera.'
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
      },
      'lang-select-element': {
        ariaLabel: 'Idiomes disponibles en el teu idioma preferit.'
      },
      'lang-select-label': {
        innerText: 'Català'
      },
      'english-select-option': {
        innerHTML: 'Anglès'
      },
      'spanish-select-option': {
        innerText: 'Espanyol'
      },
      'romanian-select-option': {
        innerText: 'Romanès'
      },
      'catalan-select-option': {
        innerText: 'Català'
      }
    },
    hero: {
      title: {
        innerHTML: 'Front-End<br />Developer<img aria-hidden="true" role="presentation" class="hero__title-hand-img" src="images/welcome-title-icons/waving-hand.png" alt="">'
      },
      description: {
        innerHTML: `Hola, sóc Angel Valentino. Un apassionat desenvolupador Front-End basat a Espanya.<img aria-hidden="true" role="presentation" class="hero__title-location-img" src="images/welcome-title-icons/location-pin2.png" alt="">`
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
        innerText: 'Descarregar CV',
        href: 'documents/resume-es.pdf'
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
        innerHTML: `Creat per <br class="footer__text-link-line-break"><a class="footer__text-link slide-in-and-out underline" aria-label="Vés al perfil de GitHub d'Angel Valentino." target="_blank" href="https://github.com/AngelValentino">Angel Valentino</a>`
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
  }
};

// Object containing translations for project elements in multiple languages
const projectLanguages = {
  en: {
    imageLink: {
      ariaLabel: 'Go to the live demo of'
    },
    image: {
      alt: 'Screenhsot of'
    },
    moreInfoBtn: {
      title: 'More info',
      ariaLabel: 'More info about'
    },
    closeInfoBtn: {
      title: 'Close more info',
      ariaLabel: 'Close more information about'
    },
    tooltip: {
      innerText: 'Live Demo'
    },
    demoLink: {
      ariaLabel: 'Go to the live demo of'
    },
    demoText: {
      innerText: 'Live Demo'
    },
    codeLink: {
      ariaLabel: 'Go to the code repository of'
    },
    codeText: {
      innerText: 'Code'
    },
    techList: {
      ariaLabel: 'project technologies'
    }
  },
  es: {
    imageLink: {
      ariaLabel: 'Ve a la demostración en vivo de'
    },
    image: {
      alt: 'Captura de pantalla de'
    },
    moreInfoBtn: {
      title: 'Más información',
      ariaLabel: 'Más información sobre'
    },
    closeInfoBtn: {
      title: 'Cerrar más información',
      ariaLabel: 'Cerrar más información sobre'
    },
    tooltip: {
      innerText: 'Demo en Vivo'
    },
    demoLink: {
      ariaLabel: 'Ve a la demostración en vivo de'
    },
    demoText: {
      innerText: 'Demo en Vivo'
    },
    codeLink: {
      ariaLabel: 'Ve al repositorio de código de'
    },
    codeText: {
      innerText: 'Código'
    },
    techList: {
      ariaLabel: 'Tecnologías del proyecto'
    }
  },
  ro: {
    imageLink: {
      ariaLabel: 'Mergi la demonstrația live de'
    },
    image: {
      alt: 'Captură de ecran de'
    },
    moreInfoBtn: {
      title: 'Mai multe informații',
      ariaLabel: 'Mai multe informații despre'
    },
    closeInfoBtn: {
      title: 'Închide mai multe informații',
      ariaLabel: 'Închide mai multe informații despre'
    },
    tooltip: {
      innerText: 'Demo Live'
    },
    demoLink: {
      ariaLabel: 'Mergi la demonstrația live de'
    },
    demoText: {
      innerText: 'Demo Live'
    },
    codeLink: {
      ariaLabel: 'Mergi la repository-ul de cod al'
    },
    codeText: {
      innerText: 'Cod'
    },
    techList: {
      ariaLabel: 'Tehnologiile proiectului'
    }
  },
  ca: {
    imageLink: {
      ariaLabel: 'Ves a la demostració en viu de'
    },
    image: {
      alt: 'Captura de pantalla de'
    },
    moreInfoBtn: {
      title: 'Més informació',
      ariaLabel: 'Més informació sobre'
    },
    closeInfoBtn: {
      title: 'Tanca més informació',
      ariaLabel: 'Tanca més informació sobre'
    },
    tooltip: {
      innerText: 'En Directe'
    },
    demoLink: {
      ariaLabel: 'Ves a la demostració en viu de'
    },
    demoText: {
      innerText: 'En Directe'
    },
    codeLink: {
      ariaLabel: 'Ves al repositori de codi de'
    },
    codeText: {
      innerText: 'Codi'
    },
    techList: {
      ariaLabel: 'Tecnologies del projecte'
    }
  }
};

// Helper function to add project translations to the translations object
function addProjectTranslations(project, lang = 'en', translations) {
  // Check if the project object has a title; log an error and exit if not
  if (!project.title) {
    console.error('Project title is missing. Could not translate the project object.');
    return;
  }
  
  // Convert the project title to kebab case (lowercase and hyphens)
  const kebabCaseProjectTitle = convertToKebabCase(project.title);

  // Add translations for "More Info" and "Close Info" buttons
  translations.projects[`${kebabCaseProjectTitle}-more-info-btn`] = {
    ariaLabel: `${projectLanguages[lang].moreInfoBtn.ariaLabel} ${project.title}.`,
    title: projectLanguages[lang].moreInfoBtn.title
  };
  translations.projects[`${kebabCaseProjectTitle}-close-info-btn`] = {
    ariaLabel: `${projectLanguages[lang].closeInfoBtn.ariaLabel} ${project.title}.`,
    title: projectLanguages[lang].closeInfoBtn.title
  };

  // Add translations for the live demo image link, image and tooltip text
  translations.projects[`${kebabCaseProjectTitle}-img-link`] = {
    ariaLabel: `${projectLanguages[lang].imageLink.ariaLabel} ${project.title}`
  };
  translations.projects[`${kebabCaseProjectTitle}-img`] = {
    alt: `${projectLanguages[lang].image.alt} ${project.title}`
  };
  translations.projects[`${kebabCaseProjectTitle}-tooltip-text`] = {
    innerText: projectLanguages[lang].tooltip.innerText
  };

  // Add translations for the project description, demo, and code repository link
  translations.projects[`${kebabCaseProjectTitle}-description`] = {
    innerHTML: project.description[lang]
  };
  translations.projects[`${kebabCaseProjectTitle}-demo-text`] = {
    innerText: projectLanguages[lang].demoText.innerText
  };
  translations.projects[`${kebabCaseProjectTitle}-demo-link`] = {
    ariaLabel: `${projectLanguages[lang].demoLink.ariaLabel} ${project.title}.`
  };
  translations.projects[`${kebabCaseProjectTitle}-code-text`] = {
    innerText: projectLanguages[lang].codeText.innerText
  };
  translations.projects[`${kebabCaseProjectTitle}-code-link`] = {
    ariaLabel: `${projectLanguages[lang].codeLink.ariaLabel} ${project.title}.`
  };

  // Add translations for the list of technologies used in the project
  translations.projects[`${kebabCaseProjectTitle}-tech-list`] = {
    ariaLabel: projectLanguages[lang].techList.ariaLabel
  };
}

// Handles adding translations to the translation object based on the available language
function handleProjectTranslations() {
  // Iterate over each project in projectData array
  projectsData.forEach(project => {
    // Iterate over each language in projectLanguages
    for (const lang in projectLanguages) {
      // Check for any language errors; skip if an error exists
      if (checkLanguageError(lang)) continue;

      // Warn if the 'projects' object is not found in translations for the current language
      if (!translations[lang].projects) {
        console.warn(`No 'projects' object found inside translations for language: ${lang}. Could not add project translation to the translations object.`);
        continue; // Skip to the next language
      }

      // Add translations for the current project in the specified language
      addProjectTranslations(project, lang, translations[lang]);
    }
  });
}

//* Call the function to add project translations to the global translations object
handleProjectTranslations();