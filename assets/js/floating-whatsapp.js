document.addEventListener('DOMContentLoaded', function() {
    console.log('WhatsApp script loaded');

    // Get the floating WhatsApp button and popup elements
    const floatingWhatsAppButton = document.getElementById('floating-whatsapp-button');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappPopupClose = document.getElementById('whatsapp-popup-close');
    const whatsappPopupOption = document.getElementById('whatsapp-popup-option');

    // Debug element existence
    console.log('WhatsApp button exists:', !!floatingWhatsAppButton);
    console.log('WhatsApp popup exists:', !!whatsappPopup);

    // Set the WhatsApp phone number
    const whatsappNumber = '60164390224';

    // Make sure the button exists before adding event listeners
    if (floatingWhatsAppButton) {
        console.log('Adding click event to WhatsApp button');

        // Toggle popup when button is clicked - using direct style manipulation for reliability
        floatingWhatsAppButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('WhatsApp button clicked');

            // Add spin animation to the button icon
            const buttonIcon = this.querySelector('i');
            if (buttonIcon) {
                // Remove existing animation class if present
                buttonIcon.classList.remove('spin');

                // Force reflow to restart animation
                void buttonIcon.offsetWidth;

                // Add animation class
                buttonIcon.classList.add('spin');

                // Remove animation class after it completes
                setTimeout(() => {
                    buttonIcon.classList.remove('spin');
                }, 800);
            }

            if (whatsappPopup) {
                // Force display with inline styles
                if (whatsappPopup.style.display === 'block') {
                    whatsappPopup.style.display = 'none';
                    whatsappPopup.style.opacity = '0';
                    whatsappPopup.style.transform = 'translateY(20px)';
                    console.log('Hiding popup');
                } else {
                    whatsappPopup.style.display = 'block';
                    // Small delay to allow display to take effect before animation
                    setTimeout(() => {
                        whatsappPopup.style.opacity = '1';
                        whatsappPopup.style.transform = 'translateY(0)';
                        console.log('Showing popup');
                    }, 10);
                }
            } else {
                console.error('WhatsApp popup element not found');
            }
        });
    } else {
        console.error('WhatsApp button element not found');
    }

    // Close popup when close button is clicked
    if (whatsappPopupClose) {
        whatsappPopupClose.addEventListener('click', function() {
            console.log('Close button clicked');
            if (whatsappPopup) {
                whatsappPopup.style.display = 'none';
                whatsappPopup.style.opacity = '0';
                whatsappPopup.style.transform = 'translateY(20px)';
            }
        });
    }

    // Handle option click
    if (whatsappPopupOption) {
        // Set default message
        const message = 'Hello, I would like to chat with your support team.';

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Update the WhatsApp link
        whatsappPopupOption.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        console.log('WhatsApp link set to:', whatsappPopupOption.href);
    }

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (whatsappPopup && whatsappPopup.style.display === 'block' &&
            !whatsappPopup.contains(e.target) &&
            e.target !== floatingWhatsAppButton &&
            !floatingWhatsAppButton.contains(e.target)) {

            console.log('Clicked outside, closing popup');
            whatsappPopup.style.display = 'none';
            whatsappPopup.style.opacity = '0';
            whatsappPopup.style.transform = 'translateY(20px)';
        }
    });
});
