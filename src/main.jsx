import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardGrid from './navBar.jsx'
// import MyFirstFunction from './FirstFunction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardGrid />
    {/* <MyFirstFunction />     */}
  </StrictMode>,
)
