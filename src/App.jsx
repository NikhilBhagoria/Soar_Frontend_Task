import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { SidebarProvider } from './context/SidebarContext'
import MainLayout from './components/layout/MainLayout/MainLayout'
import { SettingsProvider } from './context/SettingsContext'

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const Settings = lazy(() => import('./pages/Settings/Settings'))
const Transactions = lazy(() => import('./pages/Transactions/Transactions'))
const Accounts = lazy(() => import('./pages/Accounts/Accounts'))
const Investments = lazy(() => import('./pages/Investments/Investments'))
const CreditCards = lazy(() => import('./pages/CreditCards/CreditCards'))
const Loans = lazy(() => import('./pages/Loans/Loans'))
const Services = lazy(() => import('./pages/Services/Services'))
const MyPrivileges = lazy(() => import('./pages/MyPrivileges/MyPrivileges'))

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

function App() {
  return (
    <SettingsProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/credit-cards" element={<CreditCards />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/services" element={<Services />} />
                <Route path="/my-privileges" element={<MyPrivileges />} />
              </Route>
              <Route path='*' element={<div>404</div>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SidebarProvider>
    </SettingsProvider>
  )
}

export default App
