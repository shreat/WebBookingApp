import { StrictMode } from 'react'
<<<<<<< HEAD
import { createRoot }  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
=======
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> bcde91807c66792c1dd490dcc3451b050c31c3c3
