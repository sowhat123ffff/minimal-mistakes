// Direct WhatsApp Popup Implementation
document.addEventListener('DOMContentLoaded', function() {
    console.log('WhatsApp direct implementation loaded');

    // Create the WhatsApp button and popup directly in JavaScript
    function createWhatsAppElements() {
        // Check if elements already exist - either our own implementation or the original one
        if (document.getElementById('js-floating-whatsapp') ||
            document.getElementById('floating-whatsapp-button') ||
            document.querySelector('.floating-whatsapp')) {
            console.log('WhatsApp elements already exist - not creating duplicate');
            return;
        }

        // Create container
        const container = document.createElement('div');
        container.id = 'js-floating-whatsapp';
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.right = '20px';
        container.style.zIndex = '1000';

        // Create button
        const button = document.createElement('button');
        button.id = 'js-whatsapp-button';
        button.style.width = '60px';
        button.style.height = '60px';
        button.style.borderRadius = '50%';
        button.style.backgroundColor = '#25D366';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
        button.style.cursor = 'pointer';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.fontSize = '30px';
        button.style.transition = 'all 0.3s ease';
        button.innerHTML = '<i class="fab fa-whatsapp"></i>';

        // Create popup
        const popup = document.createElement('div');
        popup.id = 'js-whatsapp-popup';
        popup.style.position = 'absolute';
        popup.style.bottom = '70px';
        popup.style.right = '0';
        popup.style.width = '220px';
        popup.style.backgroundColor = 'white';
        popup.style.borderRadius = '10px';
        popup.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.2)';
        popup.style.padding = '15px';
        popup.style.display = 'none';

        // Create popup header
        const popupHeader = document.createElement('div');
        popupHeader.style.display = 'flex';
        popupHeader.style.alignItems = 'center';
        popupHeader.style.justifyContent = 'space-between';
        popupHeader.style.marginBottom = '10px';

        // Create popup title
        const popupTitle = document.createElement('h4');
        popupTitle.textContent = 'Chat with us';
        popupTitle.style.margin = '0';
        popupTitle.style.fontSize = '16px';
        popupTitle.style.fontWeight = '600';
        popupTitle.style.color = '#1d1c3d';

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.id = 'js-whatsapp-close';
        closeButton.innerHTML = '<i class="fas fa-times"></i>';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.color = '#6e6e8a';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '18px';
        closeButton.style.padding = '0';
        closeButton.style.lineHeight = '1';

        // Create option link
        const optionLink = document.createElement('a');
        optionLink.id = 'js-whatsapp-option';
        optionLink.textContent = 'Build your website with us today!';
        optionLink.href = 'https://wa.me/60164390224?text=' + encodeURIComponent('Hello, I would like to chat with your support team.');
        optionLink.style.display = 'block';
        optionLink.style.padding = '10px 15px';
        optionLink.style.backgroundColor = '#f9f9fc';
        optionLink.style.borderRadius = '8px';
        optionLink.style.color = '#1d1c3d';
        optionLink.style.textDecoration = 'none';
        optionLink.style.fontWeight = '500';
        optionLink.style.marginTop = '10px';
        optionLink.style.transition = 'all 0.3s ease';
        optionLink.style.border = '1px solid #e9e9ef';

        // Add hover effect to option link
        optionLink.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#25D366';
            this.style.color = 'white';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
        });

        optionLink.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f9f9fc';
            this.style.color = '#1d1c3d';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        // Add arrow to popup
        const arrow = document.createElement('div');
        arrow.style.position = 'absolute';
        arrow.style.bottom = '-8px';
        arrow.style.right = '25px';
        arrow.style.width = '16px';
        arrow.style.height = '16px';
        arrow.style.backgroundColor = 'white';
        arrow.style.transform = 'rotate(45deg)';
        arrow.style.boxShadow = '4px 4px 5px rgba(0, 0, 0, 0.1)';

        // Assemble the elements
        popupHeader.appendChild(popupTitle);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(optionLink);
        popup.appendChild(arrow);
        container.appendChild(button);
        container.appendChild(popup);
        document.body.appendChild(container);

        // Add event listeners
        button.addEventListener('click', function() {
            // Add spin animation to the button icon
            const buttonIcon = this.querySelector('i');
            if (buttonIcon) {
                // Create and apply spin animation
                buttonIcon.style.animation = 'none';

                // Force reflow to restart animation
                void buttonIcon.offsetWidth;

                // Apply spin animation with smoother cubic-bezier easing
                buttonIcon.style.animation = 'spin 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                buttonIcon.style.willChange = 'transform';
                buttonIcon.style.backfaceVisibility = 'hidden';
                buttonIcon.style.transformStyle = 'preserve-3d';

                // Remove animation after it completes
                setTimeout(() => {
                    buttonIcon.style.animation = 'none';
                    buttonIcon.style.willChange = 'auto';
                    // Restore pulse animation after spin completes
                    setTimeout(() => {
                        buttonIcon.style.animation = '';
                    }, 10);
                }, 800);
            }

            // Toggle popup display
            if (popup.style.display === 'block') {
                popup.style.display = 'none';
            } else {
                popup.style.display = 'block';
            }
        });

        closeButton.addEventListener('click', function() {
            popup.style.display = 'none';
        });

        // Add animations to button
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(180deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            #js-whatsapp-button {
                animation: pulse 2s infinite;
            }

            #js-whatsapp-button:hover {
                transform: scale(1.1) translateY(-5px);
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
                background-color: #128C7E;
            }
        `;
        document.head.appendChild(style);

        console.log('WhatsApp elements created');
    }

    // Create the elements after a short delay to ensure the DOM is fully loaded
    setTimeout(createWhatsAppElements, 1000);
});
