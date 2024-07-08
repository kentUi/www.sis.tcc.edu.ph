import { useState, useEffect } from 'react'
import axios from 'axios';

function PersonalInfoSubComponents() {

    const [minDate] = useState('1985-01-01');
    const [maxDate] = useState(getMaxDate());

    const [region, setRegion] = useState([]);
    const [province, setProvince] = useState([]);
    const [citymun, setCityMun] = useState([]);
    const [brgy, setBrgy] = useState([]);

    const [postal, setPostalCode] = useState('******');

    const instance = axios.create({
        baseURL: 'https://qproxy.xyz/public/api',
    });

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
        getAddress('region', '');
    }, []);

    return (
        <div>
            1 of 5
            <div class="progress progress-md mt-1">
                <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated " data-progress="17"></div>
            </div>
            <hr className='mb-3' />
            <h5 className="title mb-3">Personal Information</h5>
            <p>Account registration allows us to collect details required for student admission, including personal information, academic records, preferences, and contact details.</p>
            <div className="row g-3 pt-1">
                <div className="col-sm-6 ">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined " id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Write your first name here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined " id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.. (Optional)" />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Write your middle name here.. </i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined " id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Write your last name here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" data-ui="lg" id="outlined-select" >
                                <option value="" selected disabled>Select your suffix name here..</option>
                                <option value="N/A">N/A</option>
                                <option value="Jr.">Jr.</option>
                                <option value="Sr.">Sr.</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr className='mb-1' />
                <div className="col-sm-3">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Select your gender here..</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='civil' data-ui="lg" id="cs-outlined-select" required>
                                <option value="" selected disabled>Select your civil status here..</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Separated">Separated</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <input type="date" max={maxDate} class=" form-control-outlined form-control form-control-lg " id="outlined-date-picker" required />
                            <label class="form-label-outlined" for="outlined-date-picker">Select your birthday here.. <b className='text-danger'>*</b></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-home-alt"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined " id="outlined-right-icon cp1-birthplace-name" name="cp1-birthplace-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-birthplace-name"><i>Enter Your Religion here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-map-pin"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined " id="outlined-right-icon cp1-birthplace-name" name="cp1-birthplace-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-birthplace-name"><i>Enter Your Place of Birth here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 ">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-call"></em>
                            </div>
                            <input type="number" minLength="11" defaultValue="09" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-mobile-name" name="cp1-mobile-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-mobile-name"><i>Write your active phone phone here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-mail"></em>
                            </div>
                            <input type="email" class="form-control form-control-lg form-control-outlined " id="outlined-right-icon cp1-email-name" name="cp1-email-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-email-name"><i>Write your email address here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <hr className='mb-1' />
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => getAddress('province', e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='region' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Select your region address here..</option>
                                {region.map((region) => (
                                    <option key={region.id} value={region.regCode}>
                                        {region.regDesc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select disabled={province.length <= 0} onChange={(e) => getAddress('city-municipality', e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='province' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Select your provice address here..</option>
                                {province.map((province) => (
                                    <option key={province.id} value={province.provCode}>
                                        {province.provDesc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select disabled={citymun.length <= 0} onChange={(e) => getAddress('barangay', e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='city' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Select your city/municipality here..</option>
                                {citymun.map((citymun) => (
                                    <option key={citymun.id} value={citymun.citymunCode}>
                                        {citymun.citymunDesc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select disabled={brgy.length <= 0} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='brgy' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Select your barangay here..</option>
                                {brgy.map((brgy) => (
                                    <option key={brgy.id} value={brgy.brgyCode}>
                                        {brgy.brgyDesc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-map-pin"></em>
                            </div>
                            <input type="text" value={postal} class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-postal-name" name="cp1-postal-name" placeholder="Enter here.." readOnly style={{ backgroundColor: '#fff' }} />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-postal-name"><i>Your postal code here.. <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>                
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-map-pin"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-street-name" name="cp1-street-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-street-name"><i>Enter your street here..</i></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoSubComponents;
