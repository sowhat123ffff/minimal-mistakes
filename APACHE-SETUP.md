# Serving Minimal Mistakes with Apache (XAMPP)

This guide explains how to serve your Minimal Mistakes Jekyll site using Apache via XAMPP instead of Jekyll's built-in server.

## Prerequisites

- XAMPP installed (with Apache)
- Jekyll site set up and working

## Step 1: Build the Jekyll Site

Run the included build script to generate the static files:

```
build-for-apache.bat
```

This will create a `_site` directory containing all the static files for your site.

## Step 2: Configure Apache

### Option 1: Access via localhost/minimal-mistakes

The simplest approach is to access your site via `http://localhost/minimal-mistakes`. 

1. Make sure Apache is running in XAMPP
2. Your site should be accessible at `http://localhost/minimal-mistakes`

### Option 2: Set up a Virtual Host (Recommended)

For a more professional setup, you can configure a virtual host:

1. Open `C:\xampp3\apache\conf\extra\httpd-vhosts.conf`
2. Add the contents of the `minimal-mistakes-vhost.conf` file to the end of this file
3. Open `C:\Windows\System32\drivers\etc\hosts` as administrator
4. Add this line: `127.0.0.1 minimal-mistakes.local www.minimal-mistakes.local`
5. Restart Apache in XAMPP
6. Access your site at `http://minimal-mistakes.local`

## Step 3: Troubleshooting

### URL Rewriting

If you encounter 404 errors for pages other than the homepage, make sure:

1. The `.htaccess` file is in the root of your `_site` directory
2. Apache's `mod_rewrite` module is enabled in XAMPP

### File Permissions

If you see "Forbidden" errors, check that Apache has permission to read the files in your `_site` directory.

## Rebuilding the Site

Whenever you make changes to your Jekyll site, you need to:

1. Rebuild the site using `build-for-apache.bat`
2. The changes will be automatically available in Apache

## Benefits of Using Apache

- Better performance for production environments
- More security options
- Ability to use .htaccess for URL rewriting and other configurations
- Integration with other web applications
