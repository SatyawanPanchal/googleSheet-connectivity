import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './Components/Context/Storecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <App/>
  </StoreContextProvider>,
)
