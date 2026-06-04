import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import Checkout from './Checkout.jsx'

import {
PayPalScriptProvider
}
from '@paypal/react-paypal-js'

import {
BrowserRouter,
Routes,
Route
}
from 'react-router-dom'

createRoot(
document.getElementById('root')
).render(

<StrictMode>

<PayPalScriptProvider

options={{

clientId:
'ATdVOTZmw6YGrVZj-a5BmL-uIHzc9gsbtdXVViksY-QfJbC7ZF1Gv8VG8JRLH1gG4CqbB13wcy1-Tr9z',

intent:'capture',

currency:'USD',

components:'buttons',

enableFunding:'card'

}}

>

<BrowserRouter>

<Routes>

<Route
path="/"
element={<App/>}
/>

<Route
path="/checkout"
element={<Checkout/>}
/>

</Routes>

</BrowserRouter>

</PayPalScriptProvider>

</StrictMode>

)