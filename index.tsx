

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar?.classList.add('nav-scrolled');
    } else {
        navbar?.classList.remove('nav-scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu?.classList.toggle('hidden');
    // Re-initialize icons if menu opens to ensure visibility
    // @ts-ignore - Fix for missing lucide property on window object
    if (window.lucide) window.lucide.createIcons();
}

menuToggle?.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
    });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Robust Icon init
function initIcons() {
    // @ts-ignore
    if (window.lucide) {
        // @ts-ignore
        window.lucide.createIcons();
    } else {
        setTimeout(initIcons, 100);
    }
}

initIcons();
window.addEventListener('load', initIcons);
