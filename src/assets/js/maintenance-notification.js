// Maintenance Notification Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Maintenance notification script loaded');

    // Get all navigation links that should show maintenance notification
    const maintenanceLinks = document.querySelectorAll('.greedy-nav .visible-links a:not([href="/"])');
    const maintenancePopup = document.getElementById('maintenance-popup');
    const maintenancePopupClose = document.getElementById('maintenance-popup-close');

    // Debug element existence
    console.log('Maintenance links found:', maintenanceLinks.length);
    console.log('Maintenance popup exists:', !!maintenancePopup);

    // Add click event listeners to all maintenance links
    if (maintenanceLinks.length > 0) {
        maintenanceLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default navigation
                console.log('Maintenance link clicked:', this.textContent);

                if (maintenancePopup) {
                    // Show the maintenance popup
                    maintenancePopup.style.display = 'block';
                    // Small delay to allow display to take effect before animation
                    setTimeout(() => {
                        maintenancePopup.style.opacity = '1';
                        maintenancePopup.style.transform = 'translateY(-50%) translateX(-50%)';
                        console.log('Showing maintenance popup');
                    }, 10);
                } else {
                    console.error('Maintenance popup element not found');
                }
            });
        });
    } else {
        console.error('No maintenance links found');
    }

    // Close popup when close button is clicked
    if (maintenancePopupClose) {
        maintenancePopupClose.addEventListener('click', function() {
            console.log('Close button clicked');
            if (maintenancePopup) {
                maintenancePopup.style.opacity = '0';
                maintenancePopup.style.transform = 'translateY(-40%) translateX(-50%)';
                
                // Hide the popup after animation completes
                setTimeout(() => {
                    maintenancePopup.style.display = 'none';
                }, 300);
            }
        });
    }

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (maintenancePopup && 
            maintenancePopup.style.display === 'block' &&
            !maintenancePopup.contains(e.target) &&
            !Array.from(maintenanceLinks).some(link => link.contains(e.target))) {

            console.log('Clicked outside, closing popup');
            maintenancePopup.style.opacity = '0';
            maintenancePopup.style.transform = 'translateY(-40%) translateX(-50%)';
            
            // Hide the popup after animation completes
            setTimeout(() => {
                maintenancePopup.style.display = 'none';
            }, 300);
        }
    });
});
