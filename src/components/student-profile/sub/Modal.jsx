import { useState, useEffect } from 'react'
import axios from 'axios';

function ModalProfileComponents() {

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
        <div className="modal fade" role="dialog" id="profile-edit">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <a href="#" className="close" data-bs-dismiss="modal"><em className="icon ni ni-cross-sm"></em></a>
                    <div className="modal-body modal-body-lg">
                        <h5 className="title">Update Profile</h5>
                        <ul className="nk-nav nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#personal">Personal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#address">Address</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="personal">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="full-name">Full Name</label>
                                            <input type="text" className="form-control form-control-lg" id="full-name" value="Abu Bin Ishtiyak" placeholder="Enter Full name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="display-name">Display Name</label>
                                            <input type="text" className="form-control form-control-lg" id="display-name" value="Ishtiyak" placeholder="Enter display name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="phone-no">Phone Number</label>
                                            <input type="text" className="form-control form-control-lg" id="phone-no" value="+880" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="birth-day">Date of Birth</label>
                                            <input type="text" className="form-control form-control-lg date-picker" id="birth-day" placeholder="Enter your birth date" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="latest-sale" />
                                            <label className="custom-control-label" for="latest-sale">Use full name to display </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                            <li>
                                                <a href="#" data-bs-dismiss="modal" className="btn btn-lg btn-primary">Update Profile</a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-dismiss="modal" className="link link-light">Cancel</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="address">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="address-l1">Address Line 1</label>
                                            <input type="text" className="form-control form-control-lg" id="address-l1" value="2337 Kildeer Drive" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="address-l2">Address Line 2</label>
                                            <input type="text" className="form-control form-control-lg" id="address-l2" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="address-st">State</label>
                                            <input type="text" className="form-control form-control-lg" id="address-st" value="Kentucky" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label" for="address-county">Country</label>
                                            <select className="form-select js-select2" id="address-county" data-ui="lg">
                                                <option>Canada</option>
                                                <option>United State</option>
                                                <option>United Kindom</option>
                                                <option>Australia</option>
                                                <option>India</option>
                                                <option>Bangladesh</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                            <li>
                                                <a href="#" className="btn btn-lg btn-primary">Update Address</a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-dismiss="modal" className="link link-light">Cancel</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProfileComponents;
