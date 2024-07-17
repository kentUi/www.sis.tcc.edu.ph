import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom';

import LayoutTop from './layouts/header.jsx'
import LayoutSideMenu from './layouts/sidemenu.jsx'
import LayoutFooter from './layouts/footer.jsx'

import Login from './components/auth/login.jsx'

import AdmissionComponents from './components/admission.jsx'

import SettingsComponents from './components/profile.jsx'
import DashboardComponents from './components/dashboard/index.jsx'
import DashboardAcademicComponents from './components/dashboard/academic.jsx'
import DashboardFinanceComponents from './components/dashboard/finance.jsx'
import DashboardNotificationComponents from './components/dashboard/notification.jsx'
import DashboardActivityComponents from './components/dashboard/activities.jsx'

function App() {

  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token_id');
    setToken(storedToken);
  }, []);

  if (token == null) {
    return <Login />
  } else {
    return (
      <>
        <div className="nk-app-root">
          <div className="nk-main ">
            <LayoutSideMenu />
            <div className="nk-wrap ">
              <LayoutTop />
              <div className="nk-content ">
                <div className="container-fluid">

                  <Routes>
                    <Route path="/" element={<DashboardComponents />} />
                    <Route path="/dashboard" element={<DashboardComponents />} />
                    <Route path="/dashboard/academic" element={<DashboardAcademicComponents />} />
                    <Route path="/dashboard/finance" element={<DashboardFinanceComponents />} />
                    <Route path="/dashboard/notification" element={<DashboardNotificationComponents />} />
                    <Route path="/dashboard/activities" element={<DashboardActivityComponents />} />

                    <Route path="/settings" element={<SettingsComponents />} />
                  </Routes>

                </div>
              </div>
              <LayoutFooter />
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default App
