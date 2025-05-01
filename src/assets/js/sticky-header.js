// Sticky Header Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sticky header script loaded');

    const header = document.querySelector('.masthead');
    let lastScrollTop = 0;
    let scrollThreshold = 50; // Minimum scroll amount before showing/hiding header
    
    // Initial check to add scrolled class if page is already scrolled on load
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    }

    // Function to handle scroll events
    function handleScroll() {
        const currentScrollTop = window.scrollY;
        
        // Add scrolled class for shadow effect when scrolled
        if (currentScrollTop > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Handle header visibility based on scroll direction
        if (currentScrollTop > lastScrollTop && currentScrollTop > 150) {
            // Scrolling down & past threshold - hide header
            header.classList.add('scroll-down');
            header.classList.remove('scroll-up');
        } else {
            // Scrolling up or at top - show header
            header.classList.add('scroll-up');
            header.classList.remove('scroll-down');
        }
        
        lastScrollTop = currentScrollTop;
    }
    
    // Add scroll event listener with throttling for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});
