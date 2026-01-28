// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', function() {
    if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroBottom) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===================================
// THEME TOGGLE
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to 'dark-mode'
const currentTheme = localStorage.getItem('theme-mode') || 'dark-mode';
if (currentTheme === 'light-mode') {
    body.classList.add('light-mode');
}

// Theme toggle button click handler
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        // Save preference to localStorage
        const theme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme-mode', theme);
    });
}

// ===================================
// HAMBURGER MENU
// ===================================

const hamburgerMenu = document.getElementById('hamburger-menu');
const navCenter = document.querySelector('.nav-center');

if (hamburgerMenu && navCenter) {
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navCenter.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navCenter.classList.remove('active');
        });
    });
}

// ===================================
// SMOOTH SCROLLING & NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// NAVBAR ACTIVE STATE
// ===================================

const observerOptions = {
    threshold: 0.25,
    rootMargin: '0px 0px -50% 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const scrollRevealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const scrollRevealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, scrollRevealOptions);

// Apply to cards and sections
document.querySelectorAll('.feature-card, .doc-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    scrollRevealObserver.observe(el);
});

// ===================================
// COPY TO CLIPBOARD FOR CODE EXAMPLES
// ===================================

document.querySelectorAll('.code-block').forEach(block => {
    const codeElement = block.querySelector('code');
    if (codeElement) {
        block.style.cursor = 'pointer';
        block.style.position = 'relative';
        
        block.addEventListener('click', function() {
            const text = codeElement.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = block.textContent;
                block.textContent = 'Copied!';
                setTimeout(() => {
                    block.innerHTML = `<code>${originalText}</code>`;
                }, 2000);
            });
        });
    }
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

/* let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll === 0) {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.borderBottomColor = '#222222';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}); */

// ===================================
// BUTTON INTERACTIONS
// ===================================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// FORM SUBMISSION (for future contact form)
// ===================================

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}

// ===================================
// PAGE LOAD ANIMATION
// ===================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.6s ease';
});
