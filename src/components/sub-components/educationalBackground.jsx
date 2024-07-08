import { useState } from 'react'

function EducationalBackgroundSubComponents() {

    const [strand, setStrand] = useState([])
    const [senior, setSenior] = useState()
    const [transferee, setTransferee] = useState()

    const academic = [
        'Accountancy, Business and Management Strand',
        'Science, Technology, Engineering, and Mathematics (STEM) Strand',
        'Humanities and Social Science (HUMSS) Strand',
        'General Academic Strand (GAS)'
    ]

    const tvl = [
        'Agricultural-Fishery Arts (AFA) Strand',
        'Home Economics (HE) Strand',
        'Industrial Arts (IA) Strand',
        'Information and Communications Technology (ICT) Strand'
    ]

    const na = [
        'N/A'
    ]

    const track = (e) => {
        if (e.target.value === 'Academic Track') {
            setStrand(academic)
        } else if (e.target.value === 'Technical-Vocational-Livelihood (TVL) Track') {
            setStrand(tvl)
        } else {
            setStrand(na)
        }
    }

    function handleInputChange(event) {
        const value = event.target.value;
        if (value.length <= 11 && /^[0-9]*$/.test(value)) {
            event.target.value = value;
        }
    }

    return (
        <div>
            3 of 5
            <div class="progress progress-md mt-1">
                <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated " data-progress="68"></div>
            </div>
            <hr className='mb-3' />
            <h5 className="title mb-3">Educational Background</h5>
            <p>Account registration allows us to collect details required for student admission, including personal information, academic records, preferences, and contact details.</p>
            <div className="row g-3 pt-1">
                <div className="col-sm-5">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-home-alt"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Elementary School Name <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-map-pin"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Elementary School Address <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-calendar"></em>
                            </div>
                            <input type="number" minLength="4" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="4" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Year Graduated <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <hr className='mb-0' />
                <div className="col-sm-5">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-home-alt"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>(Junior) High School Name <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-map-pin"></em>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>(Junior) High School Address <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                                <em class="icon ni ni-calendar"></em>
                            </div>
                            <input type="number" minLength="4" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="4" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                            <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Year Graduated <b className='text-danger'>*</b></i></label>
                        </div>
                    </div>
                </div>
                <hr className='mb-0' />
                <div className="col-sm-5">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => setSenior(e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='province' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Senior High School Graduate?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
                {senior === 'Yes' && (
                    <>
                        <hr className='mb-0' />
                        <div className="col-sm-5">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-home-alt"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>(Senior) High School Name</i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-map-pin"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>(Senior) High School Address</i></label>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-2">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-calendar"></em>
                                    </div>
                                    <input type="number" minLength="4" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="4" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Year Graduated</i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <select onChange={track} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='province' data-ui="lg" id="gender-outlined-select" required>
                                        <option value="" selected disabled>(Senior) High School Track</option>
                                        <option value="Academic Track">Academic Track</option>
                                        <option value="Arts and Design Track">Arts and Design Track</option>
                                        <option value="Sports Track">Sports Track</option>
                                        <option value="Technical-Vocational-Livelihood (TVL) Track">Technical-Vocational-Livelihood (TVL) Track</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <select class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='province' data-ui="lg" id="gender-outlined-select" required>
                                        <option value="" selected disabled>(Senior) High School Strand</option>
                                        {
                                            strand.map((data, index) => (
                                                <option key={index}>{data}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </>
                )}

                <div className="col-sm-5">
                    <div class="form-group">
                        <div class="form-control-wrap">
                            <select onChange={(e) => setTransferee(e.target.value)} class="form-select form-select-lg form-control-outlined form-control form-control-lg" name='province' data-ui="lg" id="gender-outlined-select" required>
                                <option value="" selected disabled>Transferee or Tertiary Level Gradudate?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                {transferee === 'Yes' && (
                    <>
                        <div className="col-sm-2"></div>

                        <div className="col-sm-2"></div>
                        <hr className='mb-0' />
                        <div className="col-sm-5">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-home-alt"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Last School Attended</i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-map-pin"></em>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-middle-name" name="cp1-middle-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-middle-name"><i>Last School Address</i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div class="form-group">
                                <div class="form-control-wrap">
                                    <div class="form-icon form-icon-right">
                                        <em class="icon ni ni-calendar"></em>
                                    </div>
                                    <input type="number" minLength="4" style={{ letterSpacing: '2px' }} onInput={handleInputChange} maxLength="4" pattern="[0-9]" class="form-control form-control-lg form-control-outlined" id="outlined-right-icon cp1-first-name" name="cp1-first-name" placeholder="Enter here.." required />
                                    <label class="form-label-outlined" for="outlined-right-icon cp1-first-name"><i>Year Graduated</i></label>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default EducationalBackgroundSubComponents;
