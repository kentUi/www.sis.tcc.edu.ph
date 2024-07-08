import { useState } from 'react'

import MotherInfoSubComponents from './sub-components/motherInfo.jsx'
import OtherInfoSubComponents from './sub-components/otherInformation.jsx'
import GuardianInfoSubComponents from './sub-components/guardianInfo.jsx'
import FamilyBackgroundSubComponents from './sub-components/familyBackground.jsx'
import PersonalInfoSubComponents from './sub-components/personalinformation.jsx'
import EducationalBackgroundSubComponents from './sub-components/educationalBackground.jsx'

function AdmissionComponents() {

    return (
        <>
            <div className="card" style={{ minHeight: '700px' }}>
                <form className="nk-stepper stepper-init is-alter nk-stepper-s1" action="#" id="stepper-create-profile" autoComplete='off'>
                    <div className="row g-0 col-sep col-sep-md col-sep-xl">
                        <div className="col-md-9 col-xl-9">
                            <div className="card-inner">
                                <div className="nk-stepper-content">
                                    <div className="nk-stepper-steps stepper-steps">
                                        <div className="nk-stepper-step">
                                            <PersonalInfoSubComponents />
                                        </div>
                                        <div className="nk-stepper-step">
                                            <FamilyBackgroundSubComponents />
                                        </div>
                                        <div className="nk-stepper-step">
                                            <EducationalBackgroundSubComponents />
                                        </div>
                                        <div className="nk-stepper-step">
                                          <OtherInfoSubComponents />
                                        </div>
                                        <div className="nk-stepper-step">
                                           {/* <FamilyStatusSubComponents /> */}
                                        </div>
                                        <div className="nk-stepper-step">
                                            {/* <FamilyStatusSubComponents /> */}
                                        </div>
                                    </div>
                                    <ul className="nk-stepper-pagination pt-4 gx-4 gy-2 stepper-pagination">
                                        <li className="step-prev"><button className="btn btn-dim btn-primary">Back</button></li>
                                        <li className="step-next"><button className="btn btn-primary">Continue</button></li>
                                        <li className="step-submit"><button className="btn btn-primary">Submit</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xl-3" style={{ display: 'block' }}>
                            <div className="card-inner">
                                <ul className="nk-stepper-nav nk-stepper-nav-s1 stepper-nav is-vr mt-1">
                                    <li>
                                        <div className="step-item">
                                            <div className="step-text">
                                                <div className="lead-text">Profile Type</div>
                                                <div className="sub-text">Different types of profiles</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="step-item">
                                            <div className="step-text">
                                                <div className="lead-text">Profile Info</div>
                                                <div className="sub-text">Enter the profile info</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="step-item">
                                            <div className="step-text">
                                                <div className="lead-text">Profile Details</div>
                                                <div className="sub-text">Select the app database type</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="step-item">
                                            <div className="step-text">
                                                <div className="lead-text">Billing Information</div>
                                                <div className="sub-text">Looking for more information</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="step-item">
                                            <div className="step-text">
                                                <div className="lead-text">Completed</div>
                                                <div className="sub-text">Review and Submit</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="step-item">
                                            <div className="step-text">
                                                <div className="lead-text">Completed</div>
                                                <div className="sub-text">Review and Submit</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdmissionComponents;
