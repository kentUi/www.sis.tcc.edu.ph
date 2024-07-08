import { useState } from 'react'

function OtherInfoSubComponents() {

    const [pwd, setPWD] = useState()
    const [working, setWorking] = useState()
    const [ip, setIP] = useState()
    const [m4p, set4ps] = useState()

    function handleInputChange(event) {
        const value = event.target.value;
        if (value.length <= 11 && /^[0-9]*$/.test(value)) {
            event.target.value = value;
        }
    }

    return (
        <div>
            4 of 5
            <div class="progress progress-md mt-1">
                <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated " data-progress="80"></div>
            </div>
            <hr className='mb-3' />
            <h5 className="title mb-3">Other Information</h5>
            <p>The following data and information will be collected for <b>Guidance and Counseling</b> purpose.</p>
            <div className="row g-3 pt-1">
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => setPWD(e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Are you a Person with Disability?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    pwd === 'Yes' && (
                        <>
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <div class="form-control-wrap">
                                        <div class="form-icon form-icon-right">
                                            <em class="icon ni ni-notify"></em>
                                        </div>
                                        <input type="text" class="form-control error form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                                        <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Type of Disability here..</i></label>
                                    </div>
                                </div>
                            </div>
                            <hr className='mb-0' />
                        </>
                    )
                }

                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => setWorking(e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Are you a Working Student?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                {
                    working === 'Yes' && (
                        <>
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <div class="form-control-wrap">
                                        <div class="form-icon form-icon-right">
                                            <em class="icon ni ni-notify"></em>
                                        </div>
                                        <input type="text" class="form-control error form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                                        <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Nature of Work here..</i></label>
                                    </div>
                                </div>
                            </div>
                            <hr className='mb-0' />
                        </>
                    )
                }

                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => setIP(e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Are you a Indigenous People?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                {
                    ip === 'Yes' && (
                        <>
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <div class="form-control-wrap">
                                        <div class="form-icon form-icon-right">
                                            <em class="icon ni ni-notify"></em>
                                        </div>
                                        <input type="text" class="form-control error form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                                        <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Please Specify here..</i></label>
                                    </div>
                                </div>
                            </div>
                            <hr className='mb-0' />
                        </>
                    )
                }


                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select  onChange={(e) => set4ps(e.target.value)}class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Member of 4Ps?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                {
                    m4p === 'Yes' && (
                        <>
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <div class="form-control-wrap">
                                        <div class="form-icon form-icon-right">
                                            <em class="icon ni ni-notify"></em>
                                        </div>
                                        <input type="text" class="form-control error form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                                        <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>4P's Number here..</i></label>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                <hr className='mb-0' />
            </div>
        </div>
    )
}

export default OtherInfoSubComponents;
