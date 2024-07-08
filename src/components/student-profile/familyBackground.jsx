import { useState, useEffect } from 'react'
import axios from 'axios';

import ModalProfileComponents from './sub/Modal.jsx';
import SettingsProfileComponents from './sub/Settings.jsx';

function FamilyInfoProfileComponents() {

    const [minDate] = useState('1985-01-01');
    const [maxDate] = useState(getMaxDate());

    const [region, setRegion] = useState([]);
    const [province, setProvince] = useState([]);
    const [citymun, setCityMun] = useState([]);
    const [brgy, setBrgy] = useState([]);

    const [postal, setPostalCode] = useState('******');

    const [detail, setDetail] = useState(null);

    const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzb3VyY2UiOiJhNzFkMTRmZTY3Yzk4YzRlZDRmNDc4Njg3OTJkZWUwZjY1YmExZTRhOThlNDZkZTZkNmVhMmJlNGQwNzA4MzBlIiwibm9uY2UiOiIxMDc4ZWY1OGExNzgzNzVlNWFkOTlkZDY2N2FhNWE4YWEzNjQ0ZDIzNzQ2MDJkOTk2Yjg1MDNlN2IzODZlZDM4ZmQyMjlmY2RjNzIyZTA5OWZkZjVjM2E5MmI0M2Y5NGFhOGU1NmIyMmE0YzJkMDFmZDYyZjVlNmZkNGI0MTE5NDJjNWU1MDc3ZDhhMDNhMmYwNWMyNzY4MjNmMjRmNmEwMDUwMzIyOTg3MTBhODBjMWQxY2QzYjE3M2ZhY2U0NTU3MDhmMTRjODQzZDU1ZDIyYTE3YzYxOGM0OTk4NTNiM2I1OTgyYTE1ZDg2ODJmYzVmMDc1YzM2MjgxYmM2NzlkM2M0ZGI5NjRkYWZhZGRkNjNmOTg4ZjMzZDMxNzZhZWEwMTliZGYzYTFkZmUxNmIzMmRiN2RmZDA3NzkyNzU4OGEyYjUyZDNiZGE4YzYyZjBiNzgxY2E3MWE0OTMyYmMyYTUzMTQ1NmQ5YjQ2MTE5OTVkZDU2MDk3MzRmM2UyOGQ4OWRkOTViYzBmODdmNzc2ZTkyZmU3NjM2Mzk0NGVmMGY2ZjM4ODUwMDI5OWQxMTA3NDY4NjY1ZTc0Y2YzMGEzMzkzMjk3NGU0YzQzM2UxYTFjMGU4ODg0ODc4MTdjMDhlMmVkMGU2Zjc2NjM4NmY5ZWM1NDJlYzcyMWI0MjQiLCJleHAiOjE3MjAyNTU2MjV9.MzekGWGpN5Yim9cBO8PoMFjKVLz0Gd02-VmSCKqPL0xW5lVDwkoJ8lEZlt4irN2IDB_5LYJ-HDQ117JYDQUBfg';

    const api = axios.create({
        baseURL: 'http://localhost/tcc-proxy-server-api/index.php/api/',
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        }
    });

    const instance = axios.create({
        baseURL: 'https://qproxy.xyz/public/api',
    });

    const getInformation = async () => {
        try {
            const response = await api.post('/get-info/', { id: '20231054' });
            setDetail(response.data);
        } catch (error) {
            console.error('Error fetching information data:', error);
        }
    };

    const getAddress = async (type, code) => {
        try {
            switch (type) {
                case 'region':
                    const region = await instance.get(`/ph-address/${type}`);
                    setRegion(region.data);
                    break;
                case 'province':
                    const province = await instance.get(`/ph-address/${type}/${code}`);
                    setProvince(province.data);
                    break;
                case 'city-municipality':
                    const citymun = await instance.get(`/ph-address/${type}/${code}`);
                    setCityMun(citymun.data);
                    break;
                case 'barangay':
                    const brgy = await instance.get(`/ph-address/${type}/${code}`);
                    getAddress('postal-code', code);
                    setBrgy(brgy.data);
                    break;
                case 'postal-code':
                    const postalcode = await instance.get(`/ph-address/${type}/${code}`);
                    setPostalCode(postalcode.data[0].postal_code);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error('Error fetching address data:', error);
        }
    }

    function getMaxDate() {
        const today = new Date();
        const futureDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        const dd = String(futureDate.getDate()).padStart(2, '0');
        const mm = String(futureDate.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = futureDate.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }

    function handleInputChange(event) {
        const value = event.target.value;
        if (value.length <= 11 && /^[0-9]*$/.test(value)) {
            event.target.value = value;
        }
    }

    useEffect(() => {
        getInformation();
        getAddress('region', '');
    }, []);

    return (
        <>
            <div className="card-aside-wrap">
                <div className="card-inner card-inner-lg">
                    <div className="nk-block-head nk-block-head-lg pb-4">
                        <div className="nk-block-between">
                            <div className="nk-block-head-content">
                                <h4 className="nk-block-title mb-0 ">Family Background</h4>
                            </div>
                            <div className="nk-block-head-content align-self-start d-lg-none">
                                <a href="#" className="toggle btn btn-icon btn-trigger mt-n1" data-target="userAside"><em className="icon ni ni-menu-alt-r"></em></a>
                            </div>
                        </div>
                    </div>
                    <div className="nk-block">
                        <div className="nk-data data-list">
                            <div className="data-head">
                                <h6 className="overline-title">Mother`s Information</h6>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Full Name</span>
                                    <span className="data-value">
                                        {detail ? (
                                            <span className="data-value">{detail.info_fname} {detail.info_mname[0]}. {detail.info_lname} {detail.info_sname}</span>
                                        ) : (
                                            <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                        )}
                                    </span>
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Gender</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_sex}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Civil Status</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_civilstatus}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Religion</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_religion}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-head">
                                <h6 className="overline-title">Father`s Information</h6>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Full Name</span>
                                    <span className="data-value">
                                        {detail ? (
                                            <span className="data-value">{detail.info_fname} {detail.info_mname[0]}. {detail.info_lname} {detail.info_sname}</span>
                                        ) : (
                                            <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                        )}
                                    </span>
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Gender</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_sex}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Civil Status</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_civilstatus}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Religion</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_religion}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-head">
                                <h6 className="overline-title">Father`s Information</h6>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Full Name</span>
                                    <span className="data-value">
                                        {detail ? (
                                            <span className="data-value">{detail.info_fname} {detail.info_mname[0]}. {detail.info_lname} {detail.info_sname}</span>
                                        ) : (
                                            <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                        )}
                                    </span>
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Gender</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_sex}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Civil Status</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_civilstatus}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Religion</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_religion}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-head">
                                <h6 className="overline-title">Father`s Information</h6>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Full Name</span>
                                    <span className="data-value">
                                        {detail ? (
                                            <span className="data-value">{detail.info_fname} {detail.info_mname[0]}. {detail.info_lname} {detail.info_sname}</span>
                                        ) : (
                                            <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                        )}
                                    </span>
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2" data-bs-toggle="modal" data-bs-target="#profile-edit">
                                <div className="data-col">
                                    <span className="data-label">Gender</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_sex}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Civil Status</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_civilstatus}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                            <div className="data-item p-2">
                                <div className="data-col">
                                    <span className="data-label">Religion</span>
                                    {detail ? (
                                        <span className="data-value">{detail.info_religion}</span>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}
                                </div>
                                <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg" data-toggle-body="true" data-content="userAside" data-toggle-screen="lg" data-toggle-overlay="true">
                    <div className="card-inner-group" data-simplebar>
                        <div className="card-inner">
                            <div className="user-card">
                                <div className="user-avatar bg-white border-white">
                                    <img src="/user.png" height="40" />
                                </div>
                                <div className="user-info">
                                    {detail ? (
                                        <>
                                            <span className="lead-text">{detail.info_fname} {detail.info_mname[0]}. {detail.info_lname} {detail.info_sname}</span>
                                            <span className="sub-text">{detail.info_email}</span>
                                        </>
                                    ) : (
                                        <i><img src="/loading.gif" height="32" /> Please wait...</i>
                                    )}

                                </div>
                                <div className="user-action">
                                    <div className="dropdown">
                                        <a className="btn btn-icon btn-trigger me-n2" data-bs-toggle="dropdown" href="#"><em className="icon ni ni-more-v"></em></a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <ul className="link-list-opt no-bdr">
                                                <li><a href="#"><em className="icon ni ni-camera-fill"></em><span>Change Photo</span></a></li>
                                                <li><a href="#"><em className="icon ni ni-edit-fill"></em><span>Update Profile</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-inner p-0">
                            <ul className="link-list-menu">
                                <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-fill-c"></em><span>Personal Infomation</span></a></li>
                                
                                <li>
                                    <a className='active' href="html/user-profile-notification.html">
                                        <em className="icon ni ni-users-fill"></em>
                                        <span>Family Background</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="html/user-profile-notification.html">
                                        <em className="icon ni ni-home-fill"></em>
                                        <span>Household Status</span>
                                    </a>
                                </li>
                                <li><a href="html/user-profile-notification.html"><em className="icon ni ni-list-thumb-fill"></em><span>Academic Record</span></a></li>
                                <li><a href="html/user-profile-notification.html"><em className="icon ni ni-user-fill"></em><span>Demographic Info.</span></a></li>
                                <SettingsProfileComponents />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ModalProfileComponents />
        </>
    )
}

export default FamilyInfoProfileComponents;
