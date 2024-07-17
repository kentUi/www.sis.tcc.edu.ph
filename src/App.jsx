import { useState } from 'react'
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
  const token = localStorage.getItem('token_id')

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

                  {/* <div class="nk-content-inner">
                  <div class="nk-content-body">
                    <div class="nk-block-head nk-block-head-sm">
                      <div class="nk-block-between">
                        <div class="nk-block-head-content">
                          <h3 class="nk-block-title page-title">Academic Records</h3>
                          <p>Documentation of student academic performance, including grades and assessments.</p>
                        </div>
                        <div class="nk-block-head-content">
                          <div class="toggle-wrap nk-block-tools-toggle">
                            <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em
                              class="icon ni ni-menu-alt-r"></em></a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="nk-block ">
                      <div class="row g-gs">
                        <div class="col-sm-12">
                          <div class="card h-100">
                            <div class="card-inner">
                              <table class="datatable-init table">
                                <thead>
                                  <tr>
                                    <th>Course Description</th>
                                    <th width="50">Unit/Type</th>
                                    <th width="50">Midterm</th>
                                    <th width="50">Final</th>
                                    <th width="100">Remarks</th>
                                  </tr>
                                </thead>
                                <tbody>

                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

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
