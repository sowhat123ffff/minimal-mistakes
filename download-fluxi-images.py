import os
import requests
from urllib.parse import urljoin
import re
from bs4 import BeautifulSoup

# Create directory if it doesn't exist
os.makedirs('assets/images/fluxi', exist_ok=True)

# Base URL of the Fluxi website
base_url = 'https://fluxi.pixcelsthemes.com/fluxi/'

# Get the HTML content
response = requests.get(base_url)
html_content = response.text

# Parse HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Find all image tags
img_tags = soup.find_all('img')

# Extract image URLs
image_urls = []
for img in img_tags:
    src = img.get('src')
    if src:
        # Make absolute URL
        abs_url = urljoin(base_url, src)
        image_urls.append((src, abs_url))

# Download each image
for src_path, image_url in image_urls:
    try:
        # Create local directory structure if needed
        local_dir = os.path.join('assets/images/fluxi', os.path.dirname(src_path).replace('assets/images/', ''))
        os.makedirs(local_dir, exist_ok=True)
        
        # Local path to save the image
        local_path = os.path.join('assets/images/fluxi', src_path.replace('assets/images/', ''))
        
        # Download the image
        response = requests.get(image_url, stream=True)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Downloaded: {src_path} to {local_path}")
        else:
            print(f"Failed to download: {src_path}, status code: {response.status_code}")
    
    except Exception as e:
        print(f"Error downloading {src_path}: {str(e)}")

print("Download complete!")
