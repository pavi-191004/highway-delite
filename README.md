Frontend
React + TypeScript

Redux Toolkit for state management

TailwindCSS for styling

Axios for API integration

React Router DOM for navigation

Vite for build and development setup

Backend
Node.js + Express

MongoDB (Atlas) with Mongoose

RESTful API architecture

Validation and error handling middleware

📸 Features
✅ Home Page – Browse all available travel experiences
✅ Details Page – View experience details and available slots
✅ Checkout Page – Collect user details, apply promo codes, show price summary
✅ Result Page – Display booking confirmation or failure message
✅ Promo Code Validation – Apply discounts dynamically
✅ Responsive Design – Optimized for desktop and mobile
✅ Dynamic Data Flow – Fully integrated backend and frontend communication           


setup :
node js version  v22.14.0
mongo Db atlas
tailwind version 
tailwindcss@3.4.18



terminal installation:
frontend:
cd bookit-frontend
npm install axios react-router-dom @reduxjs/toolkit react-redux
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install clsx date-fns
npm start

backend:
cd bookit-backend
npm init -y
npm install express mongoose dotenv cors
npm install -D typescript ts-node-dev @types/node @types/express
To run backend :
npm run dev
npx ts-node src/data/seedData.ts(to just clarify)



promo code is SAVE10 , FLAT100




















