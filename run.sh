#!/bin/bash

echo "Starting backend..."
gnome-terminal -- bash -c "cd backend && npm run dev; exec bash" &

echo "Starting frontend..."
gnome-terminal -- bash -c "cd todo-frontend && npm run dev; exec bash" &

echo "Application started!"
