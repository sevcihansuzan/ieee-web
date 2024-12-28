document.addEventListener('DOMContentLoaded', function () {
    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');

        // Handle click events for mobile
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                e.stopPropagation();
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown && other.classList.contains('show')) {
                        other.classList.remove('show');
                    }
                });
                dropdown.classList.toggle('show');
            }
        });

        // Handle mouse events for desktop
        dropdown.addEventListener('mouseenter', function () {
            if (window.innerWidth > 991) {
                dropdown.classList.add('show');
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            if (window.innerWidth > 991) {
                dropdown.classList.remove('show');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.navbar-collapse')) {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });

    // Add slide animation to menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.add('collapsing-slide');
    });
});