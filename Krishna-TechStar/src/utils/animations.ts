// Enhanced animations and scroll effects for the portfolio website

// Intersection Observer for scroll animations
const observerOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

// Create intersection observer
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target as HTMLElement;
      
      // Add animation class based on element type
      if (element.classList.contains('animate-on-scroll')) {
        element.classList.add('animate-fade-in-up');
      }
      if (element.classList.contains('animate-slide-left')) {
        element.classList.add('animate-slide-in-left');
      }
      if (element.classList.contains('animate-slide-right')) {
        element.classList.add('animate-slide-in-right');
      }
      if (element.classList.contains('animate-morph')) {
        element.classList.add('animate-morph-in');
      }
      if (element.classList.contains('animate-zoom')) {
        element.classList.add('animate-zoom-in');
      }
      
      // Animate skill bars
      if (element.classList.contains('skill-bar-fill')) {
        const percentage = element.getAttribute('data-percentage');
        if (percentage) {
          setTimeout(() => {
            element.style.width = percentage;
          }, 200);
        }
      }
      
      // Add stagger effect for project cards
      if (element.classList.contains('project-card')) {
        const siblings = element.parentNode?.children;
        if (siblings) {
          const index = Array.from(siblings).indexOf(element);
          element.style.animationDelay = `${index * 0.1}s`;
          element.classList.add('animate-slide-in-bottom');
        }
      }
      
      // Add stagger effect for skill tags
      if (element.classList.contains('skill-tag')) {
        const siblings = element.parentNode?.children;
        if (siblings) {
          const index = Array.from(siblings).indexOf(element);
          element.style.animationDelay = `${index * 0.05}s`;
          element.classList.add('animate-fade-in-scale');
        }
      }
      
      // Stop observing once animated
      scrollObserver.unobserve(element);
    }
  });
}, observerOptions);

// Initialize animations
export const initializeAnimations = (): void => {
  // Observe elements for scroll animations
  const elementsToAnimate = document.querySelectorAll([
    '.animate-on-scroll',
    '.animate-slide-left',
    '.animate-slide-right',
    '.animate-morph',
    '.animate-zoom',
    '.skill-bar-fill',
    '.project-card',
    '.skill-tag',
    '.about-card',
    '.skill-category',
    '.experience-item',
    '.club-experience-card'
  ].join(', '));
  
  elementsToAnimate.forEach(el => scrollObserver.observe(el));
  
  // Add interactive effects
  addInteractiveEffects();
  
  // Add parallax effects
  addParallaxEffects();
  
  // Add scroll progress
  addScrollProgress();
  
  // Add cursor trail on desktop
  if (window.innerWidth > 768) {
    addCursorTrail();
  }
};

// Add interactive hover effects
const addInteractiveEffects = (): void => {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.hero-cta, .project-btn, .form-submit');
  buttons.forEach(button => {
    button.addEventListener('click', createRippleEffect);
  });
  
  // Add tilt effect to cards
  const cards = document.querySelectorAll('.project-card, .about-card, .skill-category');
  cards.forEach(card => {
    card.addEventListener('mouseenter', addTiltEffect);
    card.addEventListener('mouseleave', removeTiltEffect);
    card.addEventListener('mousemove', updateTiltEffect);
  });
};

// Create ripple effect on button click
const createRippleEffect = (e: Event): void => {
  const button = e.currentTarget as HTMLElement;
  const mouseEvent = e as MouseEvent;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = mouseEvent.clientX - rect.left - size / 2;
  const y = mouseEvent.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
    animation: ripple 0.6s ease-out;
  `;
  
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
};

// Add tilt effect to cards
const addTiltEffect = (e: Event): void => {
  const target = e.currentTarget as HTMLElement;
  target.style.transformStyle = 'preserve-3d';
};

const removeTiltEffect = (e: Event): void => {
  const target = e.currentTarget as HTMLElement;
  target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
};

const updateTiltEffect = (e: Event): void => {
  const card = e.currentTarget as HTMLElement;
  const mouseEvent = e as MouseEvent;
  const rect = card.getBoundingClientRect();
  const x = mouseEvent.clientX - rect.left;
  const y = mouseEvent.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

// Add parallax effects
const addParallaxEffects = (): void => {
  const parallaxElements = document.querySelectorAll('.hero-floating-element');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.2 + (index * 0.1);
      (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
};

// Add scroll progress indicator
const addScrollProgress = (): void => {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
  });
};

// Add mouse cursor trail effect
const addCursorTrail = (): void => {
  const trail: HTMLElement[] = [];
  const trailLength = 10;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: var(--primary-color);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      opacity: ${1 - i / trailLength};
      transition: all 0.1s ease;
    `;
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  document.addEventListener('mousemove', (e: MouseEvent) => {
    trail.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }, index * 20);
    });
  });
};

// Add smooth scrolling for navigation links
export const initializeSmoothScrolling = (): void => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
};