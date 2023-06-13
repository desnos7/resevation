import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import header from "./components/header.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header/>
    <App />
  </React.StrictMode>,
)
