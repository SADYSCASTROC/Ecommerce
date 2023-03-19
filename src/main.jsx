import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductsApp } from './ProductsApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>
    <ProductsApp />
    </BrowserRouter>
   </React.StrictMode> 
)
