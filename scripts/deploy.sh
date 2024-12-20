#!/bin/bash
# Purpose: Automate deployment process

echo "Building frontend..."
cd ../frontend
npm run build

echo "Deploying backend..."
cp -r ../htdocs /var/www/html/social-media-app

echo "Done! Application deployed."

# To develop further: Add environment-specific configurations and integrate CI/CD pipeline.
