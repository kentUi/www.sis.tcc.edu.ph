import { useState, useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

import HeaderDashboardComponents from './components/header'
import ProfileDashboardComponents from './components/profile'
import GradesDashboardComponents from './components/grades'

function DashboardAcademicComponents() {

    return (
        <>
            <div className="nk-content-body">
                <HeaderDashboardComponents />
                <div className="nk-block">
                    <div className="card">
                        <div className="card-aside-wrap">
                            <div className="card-content">
                                <ul className="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
                                    <li className="nav-item">
                                        <Link to='/dashboard' className="nav-link"><em className="icon ni ni-calendar"></em><span>Current Subject & Schedules</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/dashboard/academic' className="nav-link active" href="#"><em className="icon ni ni-file-docs"></em><span>Academic Records</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/dashboard/finance' className="nav-link" href="#"><em className="icon ni ni-money"></em><span>Financial Records</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/dashboard/notification' className="nav-link" href="#"><em className="icon ni ni-bell"></em><span>Notifications</span> <span className="badge bg-danger">2</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/dashboard/activities' className="nav-link" href="#"><em className="icon ni ni-activity"></em><span>Activities</span></Link>
                                    </li>
                                    <li className="nav-item nav-item-trigger d-xxl-none">
                                        <a href="#" className="toggle btn btn-icon btn-trigger" data-target="userAside"><em className="icon ni ni-user-list-fill"></em></a>
                                    </li>
                                </ul>
                                <div className="card-inner">
                                    <GradesDashboardComponents />
                                </div>
                            </div>
                            <ProfileDashboardComponents />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardAcademicComponents;


