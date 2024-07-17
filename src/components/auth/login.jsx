import { useState, useEffect } from 'react'
import axios from 'axios';

function Login() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const login = axios.create({
        baseURL: 'http://localhost/tcc-proxy-server-api/index.php/api/',
    });

    const AuthLogin = async () => {
        try {
            //const response = await login.post('/login/', { username: '20231054', password: '12345!' });

            localStorage.setItem('token_id', '12345')
            window.location.href = '/dashboard'

        } catch (error) {
            console.error('Error fetching information data:', error);
        }
    };

    return (
        <div class="nk-app-root ">
            <div class="nk-main ">
                <div class="nk-wrap nk-wrap-nosidebar">
                    <div class="nk-content ">
                        <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                            <div class="card">
                                <div class="card-inner card-inner-lg">
                                    <div class="nk-block-head">
                                        <div class="nk-block-head-content">
                                            <center>
                                                <img src="/logo.png" height="60" alt="" />
                                                <hr />
                                            </center>
                                            <h4 class="nk-block-title">Sign-In</h4>
                                            <div class="nk-block-des">
                                                <p>Access the Dashlite panel using your email and passcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={AuthLogin}>
                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="default-01">Email or Username</label>
                                            </div>
                                            <div class="form-control-wrap">
                                                <input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or username" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="password">Passcode</label>
                                                <a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html">Forgot Code?</a>
                                            </div>
                                            <div class="form-control-wrap">
                                                <a href="#" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                    <em class="passcode-icon icon-show icon ni ni-eye"></em>
                                                    <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                </a>
                                                <input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your passcode" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-lg btn-primary btn-block">Sign in</button>
                                        </div>
                                    </form>
                                    <div class="text-center pt-4 pb-3">
                                        <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                    </div>
                                    <ul class="nav justify-center gx-4">
                                        <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="nk-footer nk-auth-footer-full">
                            <div class="container wide-lg">
                                <div class="row g-3">
                                    <div class="col-lg-6 order-lg-last">
                                        <ul class="nav nav-sm justify-content-center justify-content-lg-end">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Terms & Condition</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Privacy Policy</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Help</a>
                                            </li>
                                            <li class="nav-item dropup">
                                                <a class="dropdown-toggle dropdown-indicator has-indicator nav-link" data-bs-toggle="dropdown" data-offset="0,10"><span>English</span></a>
                                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                    <ul class="language-list">
                                                        <li>
                                                            <a href="#" class="language-item">
                                                                <img src="./images/flags/english.png" alt="" class="language-flag" />
                                                                <span class="language-name">English</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="language-item">
                                                                <img src="./images/flags/spanish.png" alt="" class="language-flag" />
                                                                <span class="language-name">Español</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="language-item">
                                                                <img src="./images/flags/french.png" alt="" class="language-flag" />
                                                                <span class="language-name">Français</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="language-item">
                                                                <img src="./images/flags/turkey.png" alt="" class="language-flag" />
                                                                <span class="language-name">Türkçe</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="nk-block-content text-center text-lg-left">
                                            <p class="text-soft">&copy; 2022 Dashlite. All Rights Reserved.</p>
                                        </div>
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

export default Login;


