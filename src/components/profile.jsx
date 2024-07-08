import { useState, useEffect } from 'react'
import axios from 'axios';

import PerosnalInfoProfileComponents from './student-profile/personalInformation.jsx'
import FamilyInfoProfileComponents from './student-profile/familyBackground.jsx'

function SettingsComponents() {


    return (
        <>
            <div className="nk-content-body">
                <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                        <div className="nk-block-head-content">
                            <h3 className="nk-block-title page-title">Student Profile</h3>
                            <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                        </div>
                        <div className="nk-block-head-content">
                            <div className="toggle-wrap nk-block-tools-toggle">
                                <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em
                                    className="icon ni ni-menu-alt-r"></em>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-block">
                    <div className="card">
                        <FamilyInfoProfileComponents />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsComponents;


