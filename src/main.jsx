import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyFirstFunction from './FirstFunction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFirstFunction />
    
  </StrictMode>,
)
