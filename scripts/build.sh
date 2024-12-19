#!/bin/bash

# Build React frontend
echo "Building frontend..."
cd frontend && npm install && npm run build

# Build React Native mobile app
echo "Building mobile app..."
cd mobile && npm install && npx react-native run-android

echo "Build completed!"
