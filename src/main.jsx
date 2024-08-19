import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WatherApp} from './WatherApp'
import './WeatherApp.css'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <WatherApp />
 
  </StrictMode>,
)
