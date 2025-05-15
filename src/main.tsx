
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a small delay to ensure CSS variables are applied
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById("root")!).render(<App />);
});
