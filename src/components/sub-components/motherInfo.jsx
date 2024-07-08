import { useState } from 'react'

function MotherInfoSubComponents() {

    function handleInputChange(event) {
        const value = event.target.value;
        if (value.length <= 11 && /^[0-9]*$/.test(value)) {
            event.target.value = value;
        }
    }

    return (
        <div className="nk-stepper-step">
            2 of 5
            <div class="progress progress-md mt-1">
                <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated " data-progress="34"></div>
            </div>
            <hr className='mb-3' />
            <h5 className="title mb-3">Mother`s Information</h5>
            <p>The following data and information will be collected for Guidance and Counseling purpose.</p>
            <div className="row g-3 pt-1">
                <div className="col-sm-6 ">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Mother's First Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.. (Optional)" />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Mother's Middle Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Mother's Last Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-call"></em>
                            </div>
                            <input type="number" minLength="11" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="09 .." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Mother's Phone Number here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-notify"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Mother's Occupation here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Is Living Outside the Country</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-sm-12 pt-0 mt-0 px-2"><h6 className=''>Father`s Information</h6></div>
                <div className="col-sm-6 ">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Father's First Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.. (Optional)" />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Father's Middle Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Father's Last Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-call"></em>
                            </div>
                            <input type="number" minLength="11" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="09 .." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Father's Phone Number here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-notify"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Father's Occupation here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='gender' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Is Living Outside the Country</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotherInfoSubComponents;
