import { useState } from 'react'

function LayoutSideMenu() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-sidebar-brand">
                        <a href="html/index.html" className="logo-link nk-sidebar-logo">
                            {/*  style="height: 50px;" */}
                            <img className="logo-dark" style={{ height: '50px'}} src="/logo.png" alt="logo" />
                            <img className="logo-small logo-img logo-img-small" src="/logo.png" alt="logo-small" />
                        </a>
                    </div>
                    <div className="nk-menu-trigger me-n2">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em
                            className="icon ni ni-arrow-left"></em></a>
                        <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                            data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                    </div>
                </div>
                <div className="nk-sidebar-element">
                    <div className="nk-sidebar-content">
                        <div className="nk-sidebar-menu" data-simplebar>
                            <ul className="nk-menu">
                                <li className="nk-menu-heading pt-0">
                                    <h6 className="overline-title text-primary-alt">menu</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/dashboard" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashboard"></em></span>
                                        <span className="nk-menu-text">Dashboard</span>
                                    </a>
                                </li>
                                {/* <li class="nk-menu-item has-sub">
                                    <a href="#" class="nk-menu-link nk-menu-toggle" data-bs-original-title="" title="">
                                        <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb-fill"></em></span>
                                        <span class="nk-menu-text">Projects</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/project-card.html" class="nk-menu-link" data-bs-original-title="" title=""><span class="nk-menu-text">Project Cards</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/project-list.html" class="nk-menu-link" data-bs-original-title="" title=""><span class="nk-menu-text">Project List</span></a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li className="nk-menu-item">
                                    <a href="/area" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-calendar"></em></span>
                                        <span className="nk-menu-text">Class Schedules</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/coordinator" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-template"></em></span>
                                        <span className="nk-menu-text">Student Clearance</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/winner" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-file-docs"></em></span>
                                        <span className="nk-menu-text">Academic Records</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/digitsl" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-money"></em></span>
                                        <span className="nk-menu-text">Financial Records</span>
                                    </a>
                                </li>
                                <li className="nk-menu-heading pt-3">
                                    <h6 className="overline-title text-primary-alt">Others</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/reset" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-folder-list"></em></span>
                                        <span className="nk-menu-text">Faculty Evaluation</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/reset" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-cc-secure"></em></span>
                                        <span className="nk-menu-text">Request School ID</span>
                                    </a>
                                </li><li className="nk-menu-item">
                                    <a href="/reset" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-monitor"></em></span>
                                        <span className="nk-menu-text">Online Enrollment</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/reset" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-archive"></em></span>
                                        <span className="nk-menu-text">Online Voting</span>
                                    </a>
                                </li>
                                <li className="nk-menu-heading pt-3">
                                    <h6 className="overline-title text-primary-alt">Settings</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/settings/change-password" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-setting"></em></span>
                                        <span className="nk-menu-text">Change Password</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/logout" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-power"></em></span>
                                        <span className="nk-menu-text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutSideMenu;