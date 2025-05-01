#!/bin/bash
echo "Building Jekyll site for Nginx..."

# Navigate to your Jekyll site directory
cd /var/www/html/website/minimal-mistakes

# Create a Nginx-specific config file if it doesn't exist
if [ ! -f _config.nginx.yml ]; then
    cat > _config.nginx.yml << EOL
# Nginx-specific configuration
# Use this when building for Nginx with:
# bundle exec jekyll build --config _config.yml,_config.nginx.yml

# Set the base URL to match your Nginx setup
baseurl: "/website/minimal-mistakes"

# Set the URL to your production URL
url: "https://nothingshop.site"

# Disable Jekyll's built-in server-specific features
serving: false
EOL
    echo "Created _config.nginx.yml"
fi

# Build the site with Nginx-specific configuration
bundle exec jekyll build --config _config.yml,_config.nginx.yml

# Set proper permissions
chown -R www-data:www-data _site
find _site -type d -exec chmod 755 {} \;
find _site -type f -exec chmod 644 {} \;

echo "Jekyll build completed."
echo "Static files are in the _site directory."
echo ""
echo "Your site should be accessible at https://nothingshop.site/website/minimal-mistakes"
