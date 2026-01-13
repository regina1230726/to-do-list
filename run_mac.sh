#!/bin/bash

echo "Starting backend..."
osascript -e 'tell app "Terminal" to do script "cd backend && npm run dev"'

echo "Starting frontend..."
osascript -e 'tell app "Terminal" to do script "cd todo-frontend && npm run dev"'

echo "Application started!"
