// WhatsApp Popup Test Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('WhatsApp test script loaded');
    
    // Test function to manually show the popup
    window.testWhatsAppPopup = function() {
        const popup = document.getElementById('whatsapp-popup');
        if (popup) {
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.opacity = '1';
                popup.style.transform = 'translateY(0)';
            }, 10);
            console.log('Test: WhatsApp popup shown');
            return 'Popup shown';
        } else {
            console.error('Test: WhatsApp popup element not found');
            return 'Popup element not found';
        }
    };
    
    // Test function to manually hide the popup
    window.hideWhatsAppPopup = function() {
        const popup = document.getElementById('whatsapp-popup');
        if (popup) {
            popup.style.display = 'none';
            popup.style.opacity = '0';
            popup.style.transform = 'translateY(20px)';
            console.log('Test: WhatsApp popup hidden');
            return 'Popup hidden';
        } else {
            console.error('Test: WhatsApp popup element not found');
            return 'Popup element not found';
        }
    };
    
    // Add a test button to the page for debugging
    const testButton = document.createElement('button');
    testButton.textContent = 'Test WhatsApp Popup';
    testButton.style.position = 'fixed';
    testButton.style.bottom = '100px';
    testButton.style.right = '20px';
    testButton.style.zIndex = '999';
    testButton.style.padding = '10px';
    testButton.style.backgroundColor = '#f1f1f1';
    testButton.style.border = '1px solid #ccc';
    testButton.style.borderRadius = '5px';
    testButton.style.cursor = 'pointer';
    testButton.style.display = 'none'; // Hidden by default, enable in console for testing
    
    testButton.addEventListener('click', function() {
        window.testWhatsAppPopup();
    });
    
    // Append the test button to the body
    document.body.appendChild(testButton);
    
    // Make it available in console
    window.showTestButton = function() {
        testButton.style.display = 'block';
        return 'Test button shown';
    };
});
