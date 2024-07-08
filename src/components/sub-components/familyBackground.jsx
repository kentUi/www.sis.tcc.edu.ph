import { useState } from 'react'

function FamilyBackgroundSubComponents() {

    const [wg, setWG] = useState('');

    function handleInputChange(event) {
        const value = event.target.value;
        if (value.length <= 11 && /^[0-9]*$/.test(value)) {
            event.target.value = value;
        }
    }

    return (
        <div>
            2 of 5
            <div class="progress progress-md mt-1">
                <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated " data-progress="40"></div>
            </div>
            <hr className='mb-3' />
            <h5 className="title mb-3">Family Background</h5>
            <p>The following data and information will be collected for <b>Guidance and Counseling</b> purpose.</p>

            <div className="row g-3 pt-1 ">
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='pstatus' data-ui="lg" id="pstatus-outlined-select" required>
                                <option value="" selected disabled>Parent's Living Status</option>
                                <option value="Living Together">Living Together</option>
                                <option value="Separated">Separated</option>
                                <option value="Not Applicable">Not Applicable</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='deceased' data-ui="lg" id="deceased-outlined-select" required>
                                <option value="" selected disabled>Parent's Deceased Status</option>
                                <option value="Not Applicable">Not Applicable</option>
                                <option value="Mother">Mother</option>
                                <option value="Father">Father</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='income' data-ui="lg" id="income-outlined-select" required>
                                <option value="" selected disabled>Parent's Monthly Income</option>
                                <option value="3,000.00 - Below">₱ 3,000.00 - Below</option>
                                <option value="3,001.00 - 5,000.00">₱ 3,001.00 - ₱ 5,000.00</option>
                                <option value="5,001.00 - 10,000.00">₱ 5,001.00 - ₱ 10,000.00</option>
                                <option value="10,000.00 - 20,000.00">₱ 10,000.00 - ₱ 20,000.00</option>
                                <option value="20,001.00 - Above">₱ 20,001.00 - Above</option>
                                <option value="Not Applicable">Not Applicable</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-home-alt"></em>
                            </div>
                            <input type="number" minLength="0" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-fm-sibling" name="cp1-fm-sibling" placeholder="0" required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-fm-sibling"><i>Total Number of Siblings</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-users"></em>
                            </div>
                            <input type="number" minLength="0" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-fm-child" name="cp1-fm-child" placeholder="0" required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-fm-child"><i>Total Number of Your Children</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => setWG(e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='wg' data-ui="lg" id="wg-outlined-select" required>
                                <option value="" selected disabled>Living with Guarduian</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="col-sm-12 pt-0 mt-0 px-2"><h6 className=''>Mother`s Information</h6></div>
                <div className="col-sm-6 ">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-m-first-name" name="cp1-m-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-m-first-name"><i>Mother's First Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-m-middle-name" name="cp1-m-middle-name" placeholder="Enter here.. (Optional)" />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-m-middle-name"><i>Mother's Middle Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-m-last-name" name="cp1-m-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-m-last-name"><i>Mother's Last Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-call"></em>
                            </div>
                            <input type="number" minLength="11" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-m-phone-name" name="cp1-m-phone-name" placeholder="09 .." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-m-phone-name"><i>Mother's Phone Number here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-notify"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-m-occ-name" name="cp1-m-occ-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-m-occ-name"><i>Mother's Occupation here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='m-lotc' data-ui="lg" id="m-lotc-outlined-select" required>
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
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-f-first-name" name="cp1-f-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-f-first-name"><i>Father's First Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-f-middle-name" name="cp1-f-middle-name" placeholder="Enter here.. (Optional)" />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-f-middle-name"><i>Father's Middle Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-user"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-f-last-name" name="cp1-f-last-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-f-last-name"><i>Father's Last Name here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-call"></em>
                            </div>
                            <input type="number" minLength="11" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="11" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-f-phone-name" name="cp1-f-phone-name" placeholder="09 .." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-f-phone-name"><i>Father's Phone Number here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-notify"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-occ-name" name="cp1-f-occ-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-occ-name"><i>Father's Occupation here..</i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='f-lotc' data-ui="lg" id="f-lotc-outlined-select" required>
                                <option value="" selected disabled>Is Living Outside the Country</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                {wg === 'Yes' && (

                    <div className="row g-3 pt-0 mt-0" >
                        <hr />
                        <div className="col-sm-12 pt-0 mt-0 px-2"><h6 className=''>Guardian`s Information</h6></div>
                        <div className="col-sm-6 ">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-user"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Guardian's First Name here..</i></label>
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
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Guardian's Middle Name here..</i></label>
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
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Guardian's Last Name here..</i></label>
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
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Guardian's Phone Number here..</i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-users"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Guardian's Relationship here..</i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-map-pin"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-last-name"><i>Guardian's Address here..</i></label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FamilyBackgroundSubComponents;
