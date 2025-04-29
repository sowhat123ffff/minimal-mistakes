import os
import requests
from urllib.parse import urljoin

# Create directory if it doesn't exist
os.makedirs('assets/images/fluxi', exist_ok=True)

# Base URL of the Fluxi website
base_url = 'https://fluxi.pixcelsthemes.com/live-preview/'

# List of image paths to download
image_paths = [
    # Logo
    'assets/images/logo.png',
    'assets/images/logo-white.png',
    
    # Hero section
    'assets/images/hero/hero-image.png',
    'assets/images/hero/shape-1.png',
    'assets/images/hero/shape-2.png',
    'assets/images/hero/shape-3.png',
    
    # Client logos
    'assets/images/clients/client-1.png',
    'assets/images/clients/client-2.png',
    'assets/images/clients/client-3.png',
    'assets/images/clients/client-4.png',
    'assets/images/clients/client-5.png',
    
    # Services
    'assets/images/services/service-1.jpg',
    'assets/images/services/service-2.jpg',
    'assets/images/services/service-3.jpg',
    
    # About
    'assets/images/about/about-image.jpg',
    'assets/images/about/shape-1.png',
    'assets/images/about/shape-2.png',
    
    # Testimonials
    'assets/images/testimonials/testimonial-1.jpg',
    'assets/images/testimonials/testimonial-2.jpg',
    'assets/images/testimonials/testimonial-3.jpg',
    'assets/images/testimonials/quote.svg',
    'assets/images/testimonials/company-1.png',
    'assets/images/testimonials/company-2.png',
    'assets/images/testimonials/company-3.png',
    
    # Blog
    'assets/images/blog/blog-1.jpg',
    'assets/images/blog/blog-2.jpg',
    'assets/images/blog/blog-3.jpg',
    
    # CTA
    'assets/images/cta/shape-1.png',
    'assets/images/cta/shape-2.png',
    
    # Footer
    'assets/images/footer/shape-1.png',
    'assets/images/footer/shape-2.png',
]

# Download each image
for image_path in image_paths:
    try:
        # Construct full URL
        image_url = urljoin(base_url, image_path)
        
        # Create local directory structure if needed
        local_dir = os.path.join('assets/images/fluxi', os.path.dirname(image_path).replace('assets/images/', ''))
        os.makedirs(local_dir, exist_ok=True)
        
        # Local path to save the image
        local_path = os.path.join('assets/images/fluxi', image_path.replace('assets/images/', ''))
        
        # Download the image
        response = requests.get(image_url, stream=True)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Downloaded: {image_path} to {local_path}")
        else:
            print(f"Failed to download: {image_path}, status code: {response.status_code}")
    
    except Exception as e:
        print(f"Error downloading {image_path}: {str(e)}")

print("Download complete!")
