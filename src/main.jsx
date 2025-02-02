import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
//import App from './App.jsx'
import IncomeUI from './income.jsx'
import TransportationUI from './transportation.jsx'
import AccountsUI from './accounts.jsx'
import HousingAndFoodUI from './housingAndFood.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/income" element={<IncomeUI />} />
        <Route path="/transportation" element={<TransportationUI />} />
        <Route path="/accounts" element={<AccountsUI />} />
        <Route path="/housing" element={<HousingAndFoodUI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
