import React from 'react'
import ReactDOM from 'react-dom/client'
import { FinanzasApp } from './components/FinanzasApp'
import './css/main.css';
import './css/normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FinanzasApp />
  </React.StrictMode>
)
