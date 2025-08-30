import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const importedImages = import.meta.glob('./assets/*.png', {
//   eager: true,
//   import: 'default'
// })
//
// const images = {}
// for (const path in importedImages) {
//   const name = path.split('/').pop().split('.')[0]
//   images[name] = importedImages[path]
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
