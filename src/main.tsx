import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router'

import "./style/mainStyle.css"
import './style/Layouts.css'
import './style/components.css'
import './style/UserWorkSpace.css'
import './style/shells.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
