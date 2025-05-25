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
});
