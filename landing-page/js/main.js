/**
 * FULIMA - Fundación Líderes del Mañana
 * Main JavaScript File
 * Handles all interactivity, animations, UX enhancements, and multilingual support
 * 
 * Brand Colors:
 * - Dark Blue: #003366
 * - Gold: #FFD700
 * - Light Blue: #29ABE2
 * - Green: #7BC043
 * - Red: #E32636
 * - Cream: #F8F7F4
 */

'use strict';

// =============================================
// MULTILINGUAL TRANSLATIONS
// =============================================
const translations = {
    es: {
        nav: { inicio: 'Inicio', nosotros: 'Nosotros', impacto: 'Impacto', testimonios: 'Testimonios', apoyar: 'Apoyar', contacto: 'Contacto' },
        hero: { badge: 'Fundación Líderes del Mañana', title1: 'Ayúdanos', title2: 'Ayudarlos', desc: 'Somos una plataforma global de fundraising que transforma donaciones en <strong>oportunidades, disciplina, liderazgo y propósito</strong> para los niños y jóvenes del sur de Bogotá.', btn1: 'Cómo apoyar', btn2: 'Ver Impacto', stat1: 'Idiomas', stat2: 'Alcance Mundial', stat3: 'Transparencia' },
        about: { label: 'Nosotros', title: '¿Quiénes Somos?', subtitle: '<strong>FULIMA</strong> (Fundación Líderes del Mañana) es una entidad legalmente constituida que sirve como plataforma para la recaudación de donaciones globales.', p1: 'Nuestra principal labor es transformar las contribuciones en <strong>oportunidades, disciplina, liderazgo y propósito</strong> para familias y jóvenes del sur de Bogotá y, a futuro, toda Colombia.', missionTitle: 'Misión', missionText: 'Brindar oportunidades a jóvenes del sur de Bogotá y, a futuro, a toda Colombia. Ofrecemos más que entrenamiento deportivo: construimos disciplina, liderazgo y propósito, especialmente en entornos difíciles con falta de orientación y acceso a espacios de crecimiento.', visionTitle: 'Visión', visionText: 'Ser una organización que brinda esperanza y futuro al expandir su labor a toda Colombia y al sostener la fundación mediante la recaudación de donaciones en el exterior.', valuesTitle: 'Nuestros Valores', valuesText: 'Transparencia, compromiso social, amor por los niños y jóvenes, y una fe inquebrantable en que <strong>¡Primero Los Niños!</strong>', badge1: 'Esperanza', badge2: 'Futuro', badge3: 'Protección', badge4: 'Comunidad', badge5: 'Liderazgo', traj1: 'Legalmente', traj1d: 'Constituida', traj2: 'Sinergia', traj2d: 'Con Dededar', traj3: 'Global', traj3d: 'ES · EN · FR' },
        diff: { label: '¿Por qué FULIMA?', title: 'Nuestra Diferencia', subtitle: 'Tres pilares fundamentales nos hacen únicos en nuestra labor de transformar vidas.', card1Title: 'Enfoque Global y Multilingüe', card1Text: 'Plataforma internacional de fundraising disponible en <strong>inglés, español y francés</strong>, permitiendo recibir donaciones desde cualquier parte del mundo.', card2Title: 'Transparencia con Evidencia de Impacto', card2Text: 'Evidenciamos de manera directa y tangible el impacto de los fondos recaudados mediante <strong>videos cortos</strong> que muestran la entrega de ayudas a familias de estratos 1, 2 y 3.', card3Title: 'Flexibilidad Operativa Total', card3Text: 'No nos limitamos a una actividad específica. Tenemos la capacidad de recibir donaciones y sostener diferentes iniciativas sociales con flexibilidad operativa para maximizar nuestro impacto.' },
        impact: { stat1: 'Idiomas Disponibles', stat2: 'Alcance Internacional', stat3: 'Transparencia Garantizada', stat4: 'Impacto Social' },
        testimonials: { label: 'Testimonios', title: 'Impacto en Acción', subtitle: 'Mira cómo tus donaciones se transforman en ayuda tangible para quienes más lo necesitan.', video1Title: 'FULIMA - Nuestra Labor', video1Desc: 'Conoce nuestro impacto y misión', video2Title: 'Testimonio de Impacto', video2Desc: 'Historias reales de cambio', galleryTitle: 'Galería de Impacto', gallerySub: 'Imágenes que reflejan nuestra labor' },
        donate: { badge: 'Haz la Diferencia', title: 'Tu Donación <span class="text-fulima-gold">Transforma Vidas</span>', desc: 'Cada contribución, sin importar su tamaño, nos ayuda a sostener nuestra fundación y continuar brindando esperanza y oportunidades a quienes más lo necesitan.', boxTitle: 'Cómo apoyar', boxText: 'Esta página es informativa. Si deseas apoyar o conocer las opciones disponibles, por favor contáctanos directamente. No procesamos pagos en línea desde esta landing. Te guiaremos paso a paso por canales seguros.', btnWhatsapp: 'Contactar por WhatsApp', btnEmail: 'Enviar email' },
        blog: { label: 'Blog', title: 'Noticias y Eventos', subtitle: 'Mantente al día con nuestras actividades, eventos y el progreso de nuestros programas.', card1Date: 'Próximamente', card1Title: 'Nuevos Programas Deportivos', card1Text: 'Estamos desarrollando nuevas actividades deportivas para jóvenes del sur de Bogotá.', card1Link: 'Leer más', card2Date: 'Próximamente', card2Title: 'Entrega de Mercados con Dededar', card2Text: 'En sinergia con Dededar, continuamos llevando alimentos a familias de estratos 1, 2 y 3.', card2Link: 'Leer más', card3Date: 'Próximamente', card3Title: 'Expansión a Nivel Nacional', card3Text: 'Nuestro objetivo es llevar nuestra labor a toda Colombia, brindando esperanza y futuro.', card3Link: 'Leer más' },
        contact: { label: 'Contacto', title: 'Contáctanos', subtitle: '¿Tienes preguntas o quieres saber más sobre cómo puedes ayudar? Escríbenos y te responderemos a la brevedad.', nameLabel: 'Nombre completo', namePlaceholder: 'Tu nombre', phoneLabel: 'Teléfono', phonePlaceholder: 'Tu teléfono', emailLabel: 'Correo electrónico', emailPlaceholder: 'tu@email.com', messageLabel: 'Mensaje', messagePlaceholder: 'Escribe tu mensaje aquí...', submitBtn: 'Enviar Mensaje', infoTitle: 'Información de Contacto', phoneTitle: 'Teléfono / WhatsApp', emailTitle: 'Email', locationTitle: 'Ubicación', locationValue: 'Bogotá, Colombia', langTitle: 'Idiomas' },
        newsletter: { title: 'Suscríbete a Nuestro Boletín', desc: 'Recibe noticias sobre nuestro impacto, eventos especiales y formas de ayudar.', placeholder: 'Tu correo electrónico', btn: 'Suscribirme' },
        footer: { desc: 'Transformando donaciones en oportunidades, disciplina, liderazgo y propósito para los niños y jóvenes de Colombia.', motto: '¡Primero Los Niños!', quickLinks: 'Enlaces Rápidos', contactTitle: 'Contacto', followTitle: 'Síguenos', privacy: 'Tus datos están seguros. No compartimos información personal.', copyright: 'Todos los derechos reservados.', privacyLink: 'Política de Privacidad', heartText: 'Ayúdanos a Ayudarlos - ¡Primero Los Niños!' },
        cookie: { text: 'Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra ', accept: 'Aceptar', decline: 'Rechazar' },
        formErrors: { required: 'Por favor completa todos los campos requeridos.', invalidEmail: 'Por favor ingresa un correo electrónico válido.', sending: 'Enviando...', success: '¡Mensaje enviado con éxito! Te responderemos a la brevedad.', error: 'Hubo un error al enviar. Por favor intenta de nuevo.', connectionError: 'Hubo un error de conexión. Por favor intenta de nuevo.', subscribeSuccess: '¡Gracias por suscribirte! Te mantendremos informado.', subscribeError: 'Por favor ingresa un correo electrónico válido.' }
    },
    en: {
        nav: { inicio: 'Home', nosotros: 'About', impacto: 'Impact', testimonios: 'Testimonials', apoyar: 'Support', contacto: 'Contact' },
        hero: { badge: 'Fundación Líderes del Mañana', title1: 'Help Us', title2: 'Help Them', desc: 'We are a global fundraising platform that transforms donations into <strong>opportunities, discipline, leadership and purpose</strong> for children and youth in southern Bogotá.', btn1: 'How to Support', btn2: 'See Impact', stat1: 'Languages', stat2: 'Worldwide Reach', stat3: 'Transparency' },
        about: { label: 'About Us', title: 'Who We Are?', subtitle: '<strong>FULIMA</strong> (Fundación Líderes del Mañana) is a legally constituted entity that serves as a platform for global fundraising.', p1: 'Our main work is to transform contributions into <strong>opportunities, discipline, leadership and purpose</strong> for families and young people in southern Bogotá and, in the future, all of Colombia.', missionTitle: 'Mission', missionText: 'To provide opportunities for young people in southern Bogotá and, in the future, all of Colombia. We offer more than sports training: we build discipline, leadership and purpose, especially in difficult environments.', visionTitle: 'Vision', visionText: 'To be an organization that provides hope and future by expanding its work throughout Colombia and sustaining the foundation through fundraising abroad.', valuesTitle: 'Our Values', valuesText: 'Transparency, social commitment, love for children and youth, and an unwavering faith that <strong>Children First!</strong>', badge1: 'Hope', badge2: 'Future', badge3: 'Protection', badge4: 'Community', badge5: 'Leadership', traj1: 'Legally', traj1d: 'Constituted', traj2: 'Synergy', traj2d: 'With Dededar', traj3: 'Global', traj3d: 'ES · EN · FR' },
        diff: { label: 'Why FULIMA?', title: 'Our Difference', subtitle: 'Three fundamental pillars make us unique in our work to transform lives.', card1Title: 'Global & Multilingual Focus', card1Text: 'International fundraising platform available in <strong>English, Spanish and French</strong>, allowing us to receive donations from anywhere in the world.', card2Title: 'Transparency with Impact Evidence', card2Text: 'We directly and tangibly evidence the impact of funds raised through <strong>short videos</strong> showing aid delivery to families.', card3Title: 'Total Operational Flexibility', card3Text: 'We are not limited to a specific activity. We have the capacity to receive donations and sustain different social initiatives with operational flexibility.' },
        impact: { stat1: 'Available Languages', stat2: 'International Reach', stat3: 'Guaranteed Transparency', stat4: 'Social Impact' },
        testimonials: { label: 'Testimonials', title: 'Impact in Action', subtitle: 'See how your donations turn into tangible help for those who need it most.', video1Title: 'FULIMA - Our Work', video1Desc: 'Learn about our impact and mission', video2Title: 'Impact Testimonial', video2Desc: 'Real stories of change', galleryTitle: 'Impact Gallery', gallerySub: 'Images that reflect our work' },
        donate: { badge: 'Make a Difference', title: 'Your Donation <span class="text-fulima-gold">Transforms Lives</span>', desc: 'Every contribution, no matter its size, helps us sustain our foundation and continue providing hope and opportunities to those who need it most.', boxTitle: 'How to Support', boxText: 'This page is informational. If you wish to support or learn about available options, please contact us directly. We do not process online payments from this landing page.', btnWhatsapp: 'Contact via WhatsApp', btnEmail: 'Send email' },
        blog: { label: 'Blog', title: 'News & Events', subtitle: 'Stay up to date with our activities, events and program progress.', card1Date: 'Coming Soon', card1Title: 'New Sports Programs', card1Text: 'We are developing new sports activities for youth in southern Bogotá.', card1Link: 'Read more', card2Date: 'Coming Soon', card2Title: 'Food Delivery with Dededar', card2Text: 'In synergy with Dededar, we continue bringing food to families.', card2Link: 'Read more', card3Date: 'Coming Soon', card3Title: 'National Expansion', card3Text: 'Our goal is to expand our work throughout Colombia, providing hope and future.', card3Link: 'Read more' },
        contact: { label: 'Contact', title: 'Contact Us', subtitle: 'Do you have questions or want to know more about how you can help? Write to us and we will respond shortly.', nameLabel: 'Full Name', namePlaceholder: 'Your name', phoneLabel: 'Phone', phonePlaceholder: 'Your phone', emailLabel: 'Email', emailPlaceholder: 'your@email.com', messageLabel: 'Message', messagePlaceholder: 'Write your message here...', submitBtn: 'Send Message', infoTitle: 'Contact Information', phoneTitle: 'Phone / WhatsApp', emailTitle: 'Email', locationTitle: 'Location', locationValue: 'Bogotá, Colombia', langTitle: 'Languages' },
        newsletter: { title: 'Subscribe to Our Newsletter', desc: 'Receive news about our impact, special events and ways to help.', placeholder: 'Your email', btn: 'Subscribe' },
        footer: { desc: 'Transforming donations into opportunities, discipline, leadership and purpose for the children and youth of Colombia.', motto: 'Children First!', quickLinks: 'Quick Links', contactTitle: 'Contact', followTitle: 'Follow Us', privacy: 'Your data is safe. We do not share personal information.', copyright: 'All rights reserved.', privacyLink: 'Privacy Policy', heartText: 'Help Us Help Them - Children First!' },
        cookie: { text: 'We use cookies to improve your experience. By continuing to browse, you accept our ', accept: 'Accept', decline: 'Decline' },
        formErrors: { required: 'Please complete all required fields.', invalidEmail: 'Please enter a valid email.', sending: 'Sending...', success: 'Message sent successfully! We will respond shortly.', error: 'There was an error sending. Please try again.', connectionError: 'Connection error. Please try again.', subscribeSuccess: 'Thank you for subscribing! We will keep you informed.', subscribeError: 'Please enter a valid email.' }
    },
    fr: {
        nav: { inicio: 'Accueil', nosotros: 'À Propos', impacto: 'Impact', testimonios: 'Témoignages', apoyar: 'Soutenir', contacto: 'Contact' },
        hero: { badge: 'Fondation Leaders de Demain', title1: 'Aidez-nous', title2: 'À les Aider', desc: 'Nous sommes une plateforme mondiale de collecte de fonds qui transforme les dons en <strong>opportunités, discipline, leadership et but</strong> pour les enfants et les jeunes du sud de Bogotá.', btn1: 'Comment Soutenir', btn2: 'Voir Impact', stat1: 'Langues', stat2: 'Portée Mondiale', stat3: 'Transparence' },
        about: { label: 'À Propos', title: 'Qui Sommes-Nous ?', subtitle: '<strong>FULIMA</strong> (Fondation Leaders de Demain) est une entité légalement constituée qui sert de plateforme pour la collecte mondiale de dons.', p1: 'Notre travail principal est de transformer les contributions en <strong>opportunités, discipline, leadership et but</strong> pour les familles et les jeunes du sud de Bogotá et, à l\'avenir, de toute la Colombie.', missionTitle: 'Mission', missionText: 'Offrir des opportunités aux jeunes du sud de Bogotá et, à l\'avenir, à toute la Colombie. Nous offrons plus qu\'un entraînement sportif : nous construisons la discipline, le leadership et le but.', visionTitle: 'Vision', visionText: 'Être une organisation qui apporte espoir et avenir en étendant son travail à toute la Colombie et en soutenant la fondation par la collecte de fonds à l\'étranger.', valuesTitle: 'Nos Valeurs', valuesText: 'Transparence, engagement social, amour pour les enfants et les jeunes, et une foi inébranlable que <strong>Les Enfants D\'abord !</strong>', badge1: 'Espoir', badge2: 'Avenir', badge3: 'Protection', badge4: 'Communauté', badge5: 'Leadership', traj1: 'Légalement', traj1d: 'Constituée', traj2: 'Synergie', traj2d: 'Avec Dededar', traj3: 'Global', traj3d: 'ES · EN · FR' },
        diff: { label: 'Pourquoi FULIMA?', title: 'Notre Différence', subtitle: 'Trois piliers fondamentaux nous rendent uniques dans notre travail de transformation des vies.', card1Title: 'Approche Globale et Multilingue', card1Text: 'Plateforme internationale de collecte de fonds disponible en <strong>anglais, espagnol et français</strong>, permettant de recevoir des dons du monde entier.', card2Title: 'Transparence avec Preuve d\'Impact', card2Text: 'Nous démontrons de manière directe et tangible l\'impact des fonds collectés grâce à des <strong>vidéos courtes</strong> montrant la livraison d\'aide aux familles.', card3Title: 'Flexibilité Opérationnelle Totale', card3Text: 'Nous ne nous limitons pas à une activité spécifique. Nous avons la capacité de recevoir des dons et de soutenir différentes initiatives sociales.' },
        impact: { stat1: 'Langues Disponibles', stat2: 'Portée Internationale', stat3: 'Transparence Garantie', stat4: 'Impact Social' },
        testimonials: { label: 'Témoignages', title: 'Impact en Action', subtitle: 'Voyez comment vos dons se transforment en aide tangible pour ceux qui en ont le plus besoin.', video1Title: 'FULIMA - Notre Travail', video1Desc: 'Découvrez notre impact et notre mission', video2Title: 'Témoignage d\'Impact', video2Desc: 'Histoires réelles de changement', galleryTitle: 'Galerie d\'Impact', gallerySub: 'Des images qui reflètent notre travail' },
        donate: { badge: 'Faites la Différence', title: 'Votre Don <span class="text-fulima-gold">Transforme des Vies</span>', desc: 'Chaque contribution, quelle que soit sa taille, nous aide à soutenir notre fondation et à continuer d\'offrir espoir et opportunités.', boxTitle: 'Comment Soutenir', boxText: 'Cette page est informative. Si vous souhaitez soutenir ou connaître les options disponibles, veuillez nous contacter directement.', btnWhatsapp: 'Contacter via WhatsApp', btnEmail: 'Envoyer un email' },
        blog: { label: 'Blog', title: 'Actualités et Événements', subtitle: 'Restez informé de nos activités, événements et progrès.', card1Date: 'À Venir', card1Title: 'Nouveaux Programmes Sportifs', card1Text: 'Nous développons de nouvelles activités sportives pour les jeunes du sud de Bogotá.', card1Link: 'Lire plus', card2Date: 'À Venir', card2Title: 'Distribution Alimentaire avec Dededar', card2Text: 'En synergie avec Dededar, nous continuons à apporter de la nourriture aux familles.', card2Link: 'Lire plus', card3Date: 'À Venir', card3Title: 'Expansion Nationale', card3Text: 'Notre objectif est d\'étendre notre travail dans toute la Colombie.', card3Link: 'Lire plus' },
        contact: { label: 'Contact', title: 'Contactez-Nous', subtitle: 'Des questions ou envie d\'en savoir plus sur comment aider ? Écrivez-nous et nous vous répondrons rapidement.', nameLabel: 'Nom Complet', namePlaceholder: 'Votre nom', phoneLabel: 'Téléphone', phonePlaceholder: 'Votre téléphone', emailLabel: 'Email', emailPlaceholder: 'votre@email.com', messageLabel: 'Message', messagePlaceholder: 'Écrivez votre message ici...', submitBtn: 'Envoyer', infoTitle: 'Informations de Contact', phoneTitle: 'Téléphone / WhatsApp', emailTitle: 'Email', locationTitle: 'Localisation', locationValue: 'Bogotá, Colombie', langTitle: 'Langues' },
        newsletter: { title: 'Abonnez-vous à Notre Newsletter', desc: 'Recevez des nouvelles sur notre impact, les événements spéciaux et les façons d\'aider.', placeholder: 'Votre email', btn: 'S\'abonner' },
        footer: { desc: 'Transformer les dons en opportunités, discipline, leadership et but pour les enfants et les jeunes de Colombie.', motto: 'Les Enfants D\'abord !', quickLinks: 'Liens Rapides', contactTitle: 'Contact', followTitle: 'Suivez-Nous', privacy: 'Vos données sont en sécurité. Nous ne partageons pas d\'informations personnelles.', copyright: 'Tous droits réservés.', privacyLink: 'Politique de Confidentialité', heartText: 'Aidez-nous à les Aider - Les Enfants D\'abord !' },
        cookie: { text: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre ', accept: 'Accepter', decline: 'Refuser' },
        formErrors: { required: 'Veuillez remplir tous les champs obligatoires.', invalidEmail: 'Veuillez entrer un email valide.', sending: 'Envoi en cours...', success: 'Message envoyé avec succès ! Nous vous répondrons bientôt.', error: 'Une erreur est survenue. Veuillez réessayer.', connectionError: 'Erreur de connexion. Veuillez réessayer.', subscribeSuccess: 'Merci de vous être abonné ! Nous vous tiendrons informé.', subscribeError: 'Veuillez entrer un email valide.' }
    }
};

// =============================================
// DOM READY - Initialize everything
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initActiveSection();
    initDonationAmounts();
    initBackToTop();
    initPrivacyModal();
    initContactForm();
    initNewsletterForm();
    initLanguageSwitcher();
    initCookieConsent();
});

// =============================================
// AOS (Animate On Scroll) Initialization
// =============================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            disable: 'mobile'
        });
    }
}

// =============================================
// LANGUAGE SWITCHER - Full Implementation
// =============================================
let currentLang = 'es';

function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn, .lang-btn-mobile');
    
    // Restore saved language
    const savedLang = localStorage.getItem('fulimaLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Apply initial language
    applyLanguage(currentLang);
    updateLangButtons(currentLang);
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (!lang || !translations[lang]) return;
            
            currentLang = lang;
            localStorage.setItem('fulimaLang', lang);
            
            applyLanguage(lang);
            updateLangButtons(lang);
        });
    });
}

function updateLangButtons(lang) {
    document.querySelectorAll('.lang-btn, .lang-btn-mobile').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = t;
        for (const key of keys) {
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                value = null;
                break;
            }
        }
        if (value !== null) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.innerHTML = value;
            }
        }
    });
    
    // Update cookie consent text if visible
    const cookieText = document.querySelector('.cookie-consent p');
    if (cookieText) {
        cookieText.innerHTML = '<i class="fas fa-cookie-bite text-fulima-gold mr-2"></i>' + t.cookie.text + '<a href="#privacidad" class="text-fulima-gold hover:text-white transition-colors">' + t.footer.privacyLink + '</a>.';
        const acceptBtn = document.getElementById('accept-cookies');
        const declineBtn = document.getElementById('decline-cookies');
        if (acceptBtn) acceptBtn.textContent = t.cookie.accept;
        if (declineBtn) declineBtn.textContent = t.cookie.decline;
    }
    
    // Refresh AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// =============================================
// NAVBAR - Scroll behavior
// =============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;
    
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    let isOpen = false;
    
    function toggleMenu() {
        isOpen = !isOpen;
        mobileMenu.classList.toggle('hidden');
        menuBtn.innerHTML = isOpen ? 
            '<i class="fas fa-times text-2xl"></i>' : 
            '<i class="fas fa-bars text-2xl"></i>';
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    menuBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isOpen) toggleMenu();
        });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024 && isOpen) {
            toggleMenu();
        }
    });
}

// =============================================
// SMOOTH SCROLL for anchor links
// =============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// =============================================
// ACTIVE SECTION
// =============================================
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    function updateActiveSection() {
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
    }
    
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    updateActiveSection();
}

// =============================================
// DONATION AMOUNT SELECTOR
// =============================================
function initDonationAmounts() {
    const amountBtns = document.querySelectorAll('.donation-amount-btn');
    const customInput = document.getElementById('custom-amount');
    
    amountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            amountBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            if (customInput) customInput.value = '';
        });
    });
    
    if (customInput) {
        customInput.addEventListener('focus', function() {
            amountBtns.forEach(b => b.classList.remove('active'));
        });
        customInput.addEventListener('input', function() {
            amountBtns.forEach(b => b.classList.remove('active'));
        });
    }
}

// =============================================
// BACK TO TOP
// =============================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        backToTopBtn.classList.toggle('show', window.pageYOffset > 500);
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================
// PRIVACY MODAL
// =============================================
function initPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    const closeBtn = document.getElementById('close-modal');
    const privacyLinks = document.querySelectorAll('a[href="#privacidad"]');
    if (!modal) return;
    
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    privacyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
}

// =============================================
// CONTACT FORM
// =============================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const t = translations[currentLang].formErrors;
        const formData = new FormData(form);
        
        if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
            showFormMessage(form, t.required, 'error');
            return;
        }
        
        if (!isValidEmail(formData.get('email'))) {
            showFormMessage(form, t.invalidEmail, 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> ' + t.sending;
        
        fetch('https://formspree.io/f/mpqnklzd', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                showFormMessage(form, t.success, 'success');
                form.reset();
            } else {
                showFormMessage(form, t.error, 'error');
            }
        })
        .catch(() => {
            showFormMessage(form, t.connectionError, 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });
}

// =============================================
// NEWSLETTER FORM
// =============================================
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const t = translations[currentLang].formErrors;
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email || !isValidEmail(email)) {
            showFormMessage(form, t.subscribeError, 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> ' + t.sending;
        
        setTimeout(function() {
            showFormMessage(form, t.subscribeSuccess, 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    });
}

// =============================================
// COOKIE CONSENT
// =============================================
function initCookieConsent() {
    if (localStorage.getItem('cookieConsent')) return;
    
    const t = translations[currentLang];
    const consent = document.createElement('div');
    consent.className = 'cookie-consent';
    consent.innerHTML = `
        <div class="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-white/80 font-nunito text-sm">
                <i class="fas fa-cookie-bite text-fulima-gold mr-2"></i>
                ${t.cookie.text}
                <a href="#privacidad" class="text-fulima-gold hover:text-white transition-colors">${t.footer.privacyLink}</a>.
            </p>
            <div class="flex gap-3 flex-shrink-0">
                <button id="accept-cookies" class="px-5 py-2 bg-fulima-gold text-fulima-dark-blue font-nunito font-bold rounded-lg hover:bg-fulima-dark-blue hover:text-fulima-gold transition-all text-sm">${t.cookie.accept}</button>
                <button id="decline-cookies" class="px-5 py-2 bg-white/10 text-white font-nunito font-semibold rounded-lg hover:bg-white/20 transition-all text-sm">${t.cookie.decline}</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(consent);
    
    setTimeout(function() { consent.classList.add('show'); }, 1000);
    
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        consent.classList.remove('show');
        setTimeout(function() { consent.remove(); }, 500);
    });
    
    document.getElementById('decline-cookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        consent.classList.remove('show');
        setTimeout(function() { consent.remove(); }, 500);
    });
}

// =============================================
// HELPER FUNCTIONS
// =============================================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(form, message, type) {
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    const messageEl = document.createElement('div');
    messageEl.className = `form-message p-4 rounded-xl font-nunito text-sm font-semibold ${
        type === 'success' 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
    }`;
    
    messageEl.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    form.parentNode.insertBefore(messageEl, form.nextSibling);
    
    setTimeout(function() {
        if (messageEl.parentNode) {
            messageEl.style.transition = 'opacity 0.5s ease';
            messageEl.style.opacity = '0';
            setTimeout(function() { messageEl.remove(); }, 500);
        }
    }, 5000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    }).format(amount);
}

function showPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="text-center">
            <img src="assets/logo/logo-64.png" alt="FULIMA" class="loader-logo mx-auto mb-4">
            <div class="w-12 h-12 border-4 border-fulima-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
    `;
    document.body.appendChild(loader);
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
            setTimeout(function() { loader.remove(); }, 500);
        }, 500);
    });
}

// =============================================
// PERFORMANCE OPTIMIZATIONS
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => { img.loading = 'lazy'; });
    }
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => { iframe.setAttribute('loading', 'lazy'); });
});

// =============================================
// SERVICE WORKER REGISTRATION
// =============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('[FULIMA] Service Worker registered:', registration.scope);
            })
            .catch(error => {
                console.log('[FULIMA] Service Worker registration failed:', error);
            });
    });
}

// =============================================
// CONSOLE BRANDING
// =============================================
console.log(
    '%c FULIMA ',
    'background: #003366; color: #FFD700; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 5px; font-family: Fredoka, sans-serif;'
);
console.log(
    '%c Fundación Líderes del Mañana - ¡Primero Los Niños! ',
    'font-size: 14px; color: #003366; font-family: Nunito, sans-serif;'
);