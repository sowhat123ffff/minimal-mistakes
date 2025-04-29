import os
import requests
from urllib.parse import urljoin
import time

# Create directory if it doesn't exist
os.makedirs('assets/images/fluxi', exist_ok=True)

# Base URL of the Fluxi website
base_url = 'https://fluxi.pixcelsthemes.com/fluxi/'

# List of specific image paths to download
image_paths = [
    # Logo
    'assets/images/logo/logo-1.svg',
    'assets/images/logo/logo-one-dark.svg',
    
    # Banner/Hero
    'assets/images/banner/01.png',
    'assets/images/banner/short/01.png',
    'assets/images/banner/short/02.png',
    'assets/images/banner/short/03.png',
    'assets/images/banner/short/04.png',
    'assets/images/banner/short/05.png',
    'assets/images/banner/short/06.png',
    
    # Testimonials
    'assets/images/testimonials/avatars/01.png',
    'assets/images/testimonials/avatars/02.png',
    'assets/images/testimonials/avatars/03.png',
    'assets/images/testimonials/avatars/07.png',
    'assets/images/testimonials/logo/quote.png',
    'assets/images/testimonials/logo/01.svg',
    'assets/images/testimonials/logo/02.svg',
    'assets/images/testimonials/logo/03.svg',
    'assets/images/testimonials/logo/21.svg',
    'assets/images/testimonials/logo/22.svg',
    'assets/images/testimonials/logo/23.svg',
    'assets/images/testimonials/shape/01.png',
    'assets/images/testimonials/shape/02.png',
    
    # Brand logos
    'assets/images/brand/01.svg',
    'assets/images/brand/02.svg',
    'assets/images/brand/03.svg',
    'assets/images/brand/04.svg',
    'assets/images/brand/05.svg',
    'assets/images/brand/21.svg',
    'assets/images/brand/22.svg',
    'assets/images/brand/23.svg',
    'assets/images/brand/24.svg',
    
    # Services
    'assets/images/service/01.jpg',
    'assets/images/service/02.jpg',
    'assets/images/service/03.png',
    'assets/images/service/07.png',
    'assets/images/service/shape/01.png',
    'assets/images/service/shape/02.png',
    'assets/images/service/shape/03.png',
    'assets/images/service/shape/04.png',
    'assets/images/service/shape/05.png',
    'assets/images/service/shape/06.png',
    
    # About
    'assets/images/about/shape/01.png',
    'assets/images/about/shape/02.png',
    'assets/images/about/shape/03.png',
    'assets/images/about/shape/04.png',
    
    # Blog
    'assets/images/blog/01.png',
    'assets/images/blog/02.png',
    'assets/images/blog/03.png',
    'assets/images/blog/shape/01.png',
    'assets/images/blog/shape/02.png',
    'assets/images/blog/shape/03.png',
    
    # Pricing
    'assets/images/pricing/01.png',
    'assets/images/pricing/02.png',
    
    # Subscription
    'assets/images/subscribtion/shape/01.png',
    'assets/images/subscribtion/shape/02.png',
    'assets/images/subscribtion/shape/03.png',
    'assets/images/subscribtion/shape/04.png',
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
        
        # Add a small delay to avoid overwhelming the server
        time.sleep(0.5)
    
    except Exception as e:
        print(f"Error downloading {image_path}: {str(e)}")

print("Download complete!")
