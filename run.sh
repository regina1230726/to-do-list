#!/bin/bash

# Backend
echo "Backend"
cd backend || exit
npm install
npm run dev &

cd ..

# Frontend
echo "Frontend"
cd todo-frontend || exit
npm install
npm run dev &

echo ""
echo "Backend e Frontend estão a correr"
echo "Frontend: http://localhost:5174"
echo "Backend: http://localhost:3000/api"

wait
