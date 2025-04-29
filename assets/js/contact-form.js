document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp functionality
    const whatsappButton = document.getElementById('whatsapp-button');

    // Set the WhatsApp phone number
    const whatsappNumber = '60164390224'; // Malaysian number

    if (whatsappButton) {
        // Set default message
        const message = 'Hello, I would like to chat with your support team.';

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Update the WhatsApp link
        whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Add hover effect
        whatsappButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        whatsappButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
    }
});
