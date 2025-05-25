/* JavaScript for interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme switcher ---
    const themeSwitcher = document.querySelector('.theme-switcher');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (themeSwitcher && body && themeIcon) {
        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                themeIcon.textContent = '🌙';
            } else {
                themeIcon.textContent = '☀️';
            }
        });
    } // else { console.error('Theme switcher elements not found.'); } // Silencing for now

    // --- Modals ---
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');

    // Buttons to open modals
    const openRegisterModalHeaderBtns = document.querySelectorAll('header .register-btn');
    const openLoginModalHeaderBtns = document.querySelectorAll('header .login-btn');

    // CTA buttons that should open the register modal
    // Hero section: "Jetzt starten"
    const heroStartBtn = document.querySelector('.hero-cta-buttons .btn-primary');
    // How it Works section: "Jetzt Teil der Community werden"
    const howItWorksCTA = document.querySelector('.how-it-works-section .cta-container .btn-primary');
    // Assuming there will be a "Jetzt kostenlos registrieren" button in a potential "Abschluss-CTA" section.
    // For now, these are the main ones. If more are added, they would need selectors here.

    // Links to switch between modals
    const showLoginModalLink = document.getElementById('showLoginModalLink');
    const showRegisterModalLink = document.getElementById('showRegisterModalLink');

    // Close buttons
    const closeButtons = document.querySelectorAll('.modal .close-button');

    function openModal(modal) {
        if (modal) modal.style.display = 'flex';
    }

    function closeModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    openRegisterModalHeaderBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); openModal(registerModal); }));
    openLoginModalHeaderBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); openModal(loginModal); }));

    if (heroStartBtn) {
        heroStartBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(registerModal); });
    }
    if (howItWorksCTA) {
        howItWorksCTA.addEventListener('click', (e) => { e.preventDefault(); openModal(registerModal); });
    }

    if (showLoginModalLink) {
        showLoginModalLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(registerModal);
            openModal(loginModal);
        });
    }

    if (showRegisterModalLink) {
        showRegisterModalLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(loginModal);
            openModal(registerModal);
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest modal parent and close it
            const modalToClose = button.closest('.modal');
            closeModal(modalToClose);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === registerModal) {
            closeModal(registerModal);
        }
        if (event.target === loginModal) {
            closeModal(loginModal);
        }
    });

    // Placeholder for form submission handling (not part of this subtask)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Register form submitted (placeholder)');
            // Actual registration logic would go here
            // closeModal(registerModal); // Optionally close modal on submit
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Login form submitted (placeholder)');
            // Actual login logic would go here
            // closeModal(loginModal); // Optionally close modal on submit
        });
    }

    // --- Testimonial Slider ---
    const slides = document.querySelectorAll('.testimonial-section .testimonial-card');
    const prevBtn = document.querySelector('.testimonial-section .prev-btn');
    const nextBtn = document.querySelector('.testimonial-section .next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    if (slides.length > 0) { // Ensure slides exist before adding listeners
        showSlide(currentSlide); // Show the first slide initially

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-section .faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (question && answer) {
                question.addEventListener('click', () => {
                    // Optional: Close other open answers
                    // faqItems.forEach(otherItem => {
                    //     if (otherItem !== item) {
                    //         otherItem.querySelector('.faq-answer').style.display = 'none';
                    //         otherItem.querySelector('.faq-question').classList.remove('active');
                    //     }
                    // });

                    const isVisible = answer.style.display === 'block';
                    answer.style.display = isVisible ? 'none' : 'block';
                    question.classList.toggle('active', !isVisible);
                });
            }
        });
    }

    // --- Ensure Final CTA .register-btn opens modal ---
    // The existing modal script:
    // const openRegisterModalHeaderBtns = document.querySelectorAll('header .register-btn');
    // already targets elements with 'register-btn' within the header.
    // We need to ensure it also targets buttons outside the header if they also have '.register-btn'
    // Let's check the existing selector for opening register modals.
    // If it's too specific (e.g., `header .register-btn`), we need to broaden it or add a new one.

    // Current selector for header register buttons:
    // `const openRegisterModalHeaderBtns = document.querySelectorAll('header .register-btn');`
    // This only gets register buttons in the header.
    // We need a more general selector for all register buttons meant to open the modal.

    // Let's adjust the modal opening logic slightly or add to it.
    // The prompt for modals was:
    // `const openRegisterModalHeaderBtns = document.querySelectorAll('header .register-btn');`
    // `const openLoginModalHeaderBtns = document.querySelectorAll('header .login-btn');`
    // And then CTAs were added separately:
    // `if (heroStartBtn) { heroStartBtn.addEventListener('click', ...); }`
    // `if (howItWorksCTA) { howItWorksCTA.addEventListener('click', ...); }`

    // So, we'll add a specific listener for the final CTA button.
    const finalCtaRegisterBtn = document.querySelector('.final-cta-buttons .register-btn');
    if (finalCtaRegisterBtn && registerModal) { // registerModal is already defined
        finalCtaRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(registerModal); // openModal function is already defined
        });
    }

    // --- Hamburger Menu ---
    const hamburgerIcon = document.querySelector('.hamburger-icon-placeholder');
    const mainNav = document.querySelector('header nav'); // Select the main navigation

    if (hamburgerIcon && mainNav) {
        hamburgerIcon.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-nav-active');
            // Optional: Change hamburger icon to 'X' when menu is open
            if (mainNav.classList.contains('mobile-nav-active')) {
                hamburgerIcon.textContent = '✕'; // Close icon
            } else {
                hamburgerIcon.textContent = '☰'; // Hamburger icon
            }
        });
    }

    // Optional: Close mobile menu if a nav link is clicked (for single-page navigation)
    if (mainNav) {
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // This assumes links are for navigation on the same page or will trigger a page load.
                // If it's a single-page app where content loads dynamically without page refresh,
                // and the link click doesn't inherently hide the menu (e.g. by page reload),
                // then explicitly hiding is good.
                if (mainNav.classList.contains('mobile-nav-active')) {
                    mainNav.classList.remove('mobile-nav-active');
                    if (hamburgerIcon) { // Ensure hamburgerIcon exists before changing its content
                        hamburgerIcon.textContent = '☰';
                    }
                }
            });
        });
    }

    // --- Scroll Animations ---
    const sectionsToAnimate = document.querySelectorAll('section'); // Target all <section> elements

    if (sectionsToAnimate.length > 0) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of the item is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: unobserve the element after it's visible to prevent re-triggering
                    // observer.unobserve(entry.target);
                }
                // Optional: To make it re-trigger if scrolling up and then down again (remove unobserve)
                // else {
                //     entry.target.classList.remove('is-visible');
                // }
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

        sectionsToAnimate.forEach(section => {
            section.classList.add('fade-in-section'); // Add base class for animation
            intersectionObserver.observe(section);
        });
    }
});
