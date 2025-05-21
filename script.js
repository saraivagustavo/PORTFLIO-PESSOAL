// Navbar scroll effect
// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');

    // Use as cores do CSS para manter consistência
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
    
    if (window.scrollY > 50) {
        navbar.style.background = `rgba(${hexToRgb(bgColor)}, 0.95)`;
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = `rgba(${hexToRgb(bgColor)}, 0.95)`;
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Função auxiliar para converter HEX para RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

// Smooth scroll for navigation links
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

// Add animation to certification cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'transform 0.5s ease-out';
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 8px 20px rgba(148, 137, 121, 0.4)';
    });

    card.addEventListener('mouseleave', function () {
        // Remove estilos sem transição
        this.style.transition = 'none';
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

// Add hover effect to skill items using fixed theme color
document.querySelectorAll('.skill-items span').forEach(skill => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

    skill.addEventListener('mouseover', function () {
        this.style.transform = 'translateY(-2px) scale(1.05)';
        this.style.boxShadow = `0 0 10px ${primaryColor}`;
        this.style.borderColor = primaryColor;
    });

    skill.addEventListener('mouseout', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
        this.style.borderColor = 'var(--primary-color)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Animate experience cards on scroll
const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    card.style.transition = 'all 0.5s ease-out';
    card.style.transitionDelay = `${index * 0.1}s`;
    experienceObserver.observe(card);
});

// Add typing effect to tagline
const tagline = document.querySelector('.tagline');
const text = tagline.textContent;
tagline.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Modal para certificados
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cert-card");
    const modal = document.getElementById("cert-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-btn");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            if (imgSrc) {
                modal.style.display = "block";
                modalImg.src = imgSrc;
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalImg.src = "";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            modalImg.src = "";
        }
    });
});

const hamburger = document.getElementById('hamburger');
const navContent = document.querySelector('.nav-content');

hamburger.addEventListener('click', () => {
    navContent.classList.toggle('active');
});