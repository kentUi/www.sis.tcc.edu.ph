import { useState, useEffect } from 'react'
import axios from 'axios';

function ProfileDashboardComponents() {

    return (
        <div className="card-aside card-aside-right user-aside toggle-slide toggle-slide-right toggle-break-xxl" data-content="userAside" data-toggle-screen="xxl" data-toggle-overlay="true" data-toggle-body="true">
            <div className="card-inner-group" data-simplebar>
                <div className="card-inner">
                    <div className="user-card user-card-s2">
                        <div className="user-avatar lg bg-white">
                            <img src="/layout/20222864.jpg" />
                        </div>
                        <div className="user-info">
                            <div className="badge bg-outline-light rounded-pill ucap">Midwifery Student</div>
                            <h5>Kay Rejoice D. Waga</h5>
                            <span className="sub-text">student@tcc.edu.ph</span>
                        </div>
                    </div>
                </div>
                <div className="card-inner card-inner-sm">
                    <ul className="btn-toolbar justify-center gx-1">
                        <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-shield-off"></em></a></li>
                        <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-mail"></em></a></li>
                        <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-download-cloud"></em></a></li>
                        <li><a href="#" className="btn btn-trigger btn-icon"><em className="icon ni ni-bookmark"></em></a></li>
                        <li><a href="#" className="btn btn-trigger btn-icon text-danger"><em className="icon ni ni-na"></em></a></li>
                    </ul>
                </div>
                <div className="card-inner">
                    <center>
                        <div className="overline-title-alt mb-2">General Weighted Average</div>
                        <div className="profile-balance">
                            <div className="profile-balance-groupx gx-5">
                                <div className="profile-balance-sub">
                                    <div className="profile-balance-amount">
                                        <div className="number">1.35 </div>
                                    </div>
                                    <div className="profile-balance-subtitle">Semester GWA</div>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
                <div className="card-inner">
                    <div className="row text-center">
                        <div className="col-4">
                            <div className="profile-stats">
                                <span className="amount">8</span>
                                <span className="sub-text">Passed</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="profile-stats">
                                <span className="amount">0</span>
                                <span className="sub-text">Failed</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="profile-stats">
                                <span className="amount">0</span>
                                <span className="sub-text">Dropped</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-inner">
                    <h6 className="overline-title-alt mb-2">Additional</h6>
                    <div className="row g-3">
                        <div className="col-6">
                            <span className="sub-text">Student ID:</span>
                            <span>20242314</span>
                        </div>
                        <div className="col-6">
                            <span className="sub-text">Last Login:</span>
                            <span>15 Feb, 2024 01:02 PM</span>
                        </div>
                        <div className="col-6">
                            <span className="sub-text">Academic Status:</span>
                            <span className="lead-text text-success">Enrolled <span className='fw-normal text-success'>(2023-2024)</span></span>
                        </div>
                        <div className="col-6">
                            <span className="sub-text">Register At:</span>
                            <span>24 Nov, 2019  11:57 PM</span>
                        </div>
                    </div>
                </div>
                <div className="card-inner">
                    <h6 className="overline-title-alt mb-3">Groups</h6>
                    <ul className="g-1">
                        <li className="btn-group">
                            <a className="btn btn-xs btn-light btn-dim" href="#">Midwifery</a>
                            <a className="btn btn-xs btn-icon btn-light btn-dim" href="#"><em className="icon ni ni-cross"></em></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileDashboardComponents;


