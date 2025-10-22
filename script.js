// Navigation and page transitions
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroText = document.querySelector('.hero-text');
    const heroButton = document.querySelector('.cta-button');

    // Animate elements on page load
    setTimeout(() => {
        heroTitle.classList.add('animate-in');
        setTimeout(() => {
            heroText.classList.add('animate-in');
            setTimeout(() => {
                heroButton.classList.add('animate-in');
            }, 300);
        }, 300);
    }, 300);

    // Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Page transition effects
    const pageTransition = () => {
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', e => {
                if (!link.href.includes('#')) {
                    e.preventDefault();
                    const target = link.href;
                    document.body.classList.add('page-transition');
                    setTimeout(() => {
                        window.location.href = target;
                    }, 500);
                }
            });
        });
    };

    pageTransition();

    // Scroll animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});