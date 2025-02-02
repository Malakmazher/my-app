import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
//import App from './App.jsx'
import IncomeUI from './income.jsx'
import TransportationUI from './transportation.jsx'
import AccountsUI from './accounts.jsx'
import HousingAndFoodUI from './housingAndFood.jsx'
import EmptyPage from './EmptyPage.jsx'
import WelcomeUI from './welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/accounts" element={<AccountsUI />} />
        <Route path="/income" element={<IncomeUI />} />
        <Route path="/housing" element={<HousingAndFoodUI />} />
        <Route path="/transportation" element={<TransportationUI />} />
        <Route path="/empty" element={<EmptyPage />} />
        <Route path="/welcome" element={<WelcomeUI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
