import { useState } from 'react'

function GuardianInfoSubComponents() {
    
    function handleInputChange(event) {
        const value = event.target.value;
        if (value.length <= 11 && /^[0-9]*$/.test(value)) {
            event.target.value = value;
        }
    }

    return (
        <div className="nk-stepper-step">
        <h5 className="title mb-3">Personal Information</h5>
        <p>Account registration allows us to collect details required for student admission, including personal information, academic records, preferences, and contact details.</p>
        <div className="row g-3 pt-1">
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
                        <input type="number" minLength="11" style={{letterSpacing: '2px'}} onInput={handleInputChange} maxLength="11" pattern="[0-9]"  class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-last-name" name="cp1-last-name" placeholder="09 .." required />
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
    </div>
    )
}

export default GuardianInfoSubComponents;
