import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "{API_KEY}",
  authDomain: "blog-4e74b.firebaseapp.com",
  projectId: "blog-4e74b",
  storageBucket: "blog-4e74b.firebasestorage.app",
  messagingSenderId: "255035829577",
  appId: "1:255035829577:web:dfd828d92f3e44c54dfe98",
  measurementId: "G-299TS3T34X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
