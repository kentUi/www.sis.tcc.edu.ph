import { useState, useEffect } from 'react'
import axios from 'axios';

function SubjectDashboardComponents() {

    return (
        <>
            <div className="nk-block">
                <div className="nk-block-head">
                    <h5 className="title">Current Subject & Schedules</h5>
                    <p>You can view your current subject & schedules for this semester.</p>
                </div>
                <div className="nk-block">
                    <div className="">
                        <table className="table table-bordered nowrap">
                            <thead>
                                <tr style={{ fontSize: '13px' }}>
                                    <th>Course</th>
                                    <th>Units</th>
                                    <th>Room & Schedules</th>
                                    <th>Teacher</th>
                                    <th>Midterm</th>
                                    <th>Final</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management and Accident</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) Comlab 4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr>
                                <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) #4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr> <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management and Accident</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) Comlab 4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr>
                                <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) #4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr> <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management and Accident</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) Comlab 4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr>
                                <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) #4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr> <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management and Accident</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) Comlab 4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr>
                                <tr style={{ fontSize: '13px' }}>
                                    <td>LEA 1 - Traffic Management</td>
                                    <td>0</td>
                                    <td>Thu (03:00-05:00 PM) #4</td>
                                    <td>Casino, Kent Russell N.</td>
                                    <td>1.5</td>
                                    <td>1.2</td>
                                    <td><span class="badge badge-dot bg-success">Passed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="nk-divider divider md"></div>
            <div className="nk-block">
                <div className="nk-block-head nk-block-head-sm nk-block-between">
                    <h5 className="title">Teachers' Note</h5>
                </div>
                <div className="bq-note">
                    <div className="bq-note-item">
                        <div className="bq-note-text">
                            <p>Your Grade for Traffic Management and Accident is ... </p>
                        </div>
                        <div className="bq-note-meta">
                            <span className="bq-note-added">Added on <span className="date">November 18, 2024</span> at <span className="time">5:34 PM</span></span>
                            <span className="bq-note-sep sep">|</span>
                            <span className="bq-note-by">By <span>Casino, Kent Russell N.</span></span>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default SubjectDashboardComponents;


