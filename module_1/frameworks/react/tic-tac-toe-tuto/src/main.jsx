// Il est la passerelle entre le composant que vous avez créé dans le fichier App.js et le navigateur web.
import { StrictMode } from 'react'
// React
import { createRoot } from 'react-dom/client'
// La bibliothèque React qui parle aux navigateurs web (React DOM)
import './index.css'
// Les styles de vos composants
import App from './App.jsx'
// Le composant que vous avez créé dans App.js

// Le reste du fichier connecte tout ça et injecte le résultat final dans index.html au sein du dossier
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
