import { useState, useEffect } from 'react'
import axios from 'axios';

function HeaderDashboardComponents() {

    return (
        <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between g-3">
                <div className="nk-block-head-content">
                    <h3 className="nk-block-title page-title">Student / <strong className="text-primary small">Kay Rejoice D. Waga</strong></h3>
                    <div className="nk-block-des text-soft">
                        <ul className="list-inline">
                            <li>Student ID: <span className="text-base">20242314</span></li>
                            <li>Last Login: <span className="text-base">15 Feb, 2024 01:02 PM</span></li>
                        </ul>
                    </div>
                </div>
                <div className="nk-block-head-content">
                    <a href="html/user-list-regular.html" className="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em className="icon ni ni-arrow-left"></em><span>Back</span></a>
                    <a href="html/user-list-regular.html" className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"><em className="icon ni ni-arrow-left"></em></a>
                </div>
            </div>
        </div>
    )
}

export default HeaderDashboardComponents;


