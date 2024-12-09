import cs from './login.module.css';
import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Background from '../../../../assests/loginpage/background.png';
import { useEffect, useState } from 'react';
import { Validator } from '../../../Validator/Validator';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../security/AuthContext';

import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
    const navigate = useNavigate();

    const authContext = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(['username', 'password']);

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        Validator({
            form: '#form_login',
            formGroupSelector: '#form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#username', 'It can not be empty'),
                Validator.isRequired('#password', 'It can not be empty'),

                Validator.minLength('#password', 6),
            ],
            onSubmit: async function (data) {
                const user = {
                    userUserName: data.username,
                    userPassword: data.password,
                };

                if (await authContext.login(user)) {
                    setCookie('username', data.username);
                    setCookie('password', data.password);
                    navigate('/Home');
                } else {
                    setErrorMessage(true);
                }
            },
        });
    }, []);

    function handleOnchangeUsername(e) {
        setUsername(e.target.value);
        e.target.classList.remove('input-error');
    }
    function handleOnchangePassword(e) {
        setPassword(e.target.value);
        e.target.classList.remove('input-error');
    }

    function handleForgotPassword() {
        alert('Good luck next time !!!');
    }

    function handleShowPassword() {
        // Toggle the state to show or hide the password
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <div className={cs['wrapper']}>
            <div className={cs['big-logo']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="317" height="317" viewBox="0 0 317 317" fill="none">
                    <path
                        opacity="0.1"
                        d="M314.039 137.399C309.805 152.867 301.337 166.274 290.213 175.135C281.33 182.222 271.243 185.929 261.322 185.929C257.586 185.929 253.934 185.413 250.322 184.357C237.206 180.474 226.579 169.692 221.183 154.769C216.243 141.165 215.911 125.16 220.146 109.687C224.421 94.2179 232.888 80.8118 243.971 71.9503C256.176 62.2171 270.704 58.8532 283.862 62.7284C296.98 66.6118 307.647 77.393 313.044 92.3165C317.941 105.921 318.314 121.926 314.039 137.399ZM36.5056 98.3007C52.1136 98.3007 67.0156 89.3102 77.3924 73.623C86.8147 59.4001 92.0036 40.7707 92.0036 21.1572C92.0036 1.52631 86.8147 -17.1031 77.3924 -31.326C67.0147 -47.0086 52.1128 -56 36.5056 -56C20.8559 -56 5.95486 -47.0095 -4.42284 -31.326C-13.8036 -17.1031 -18.9925 1.52631 -18.9925 21.1572C-18.9925 40.7707 -13.8036 59.4001 -4.42284 73.623C5.95486 89.3102 20.8568 98.3007 36.5056 98.3007ZM171.495 98.3007C187.145 98.3007 202.046 89.3102 212.424 73.623C221.804 59.4001 226.993 40.7707 226.993 21.1572C226.993 1.52631 221.804 -17.1031 212.424 -31.326C202.046 -47.0086 187.144 -56 171.495 -56C155.887 -56 140.985 -47.0095 130.608 -31.326C121.186 -17.1031 115.997 1.52631 115.997 21.1572C115.997 40.7707 121.186 59.4001 130.608 73.623C140.985 89.3102 155.887 98.3007 171.495 98.3007ZM-12.1438 109.697C-16.4188 94.2198 -24.8866 80.8136 -35.9705 71.9512C-48.1741 62.218 -62.7022 58.8541 -75.8613 62.7293C-89.0194 66.6127 -99.6464 77.3939 -105.043 92.3174C-109.941 105.921 -110.314 121.927 -106.039 137.4C-101.805 152.868 -93.3369 166.274 -82.2132 175.136C-73.33 182.223 -63.2431 185.93 -53.3223 185.93C-49.628 185.93 -45.9337 185.414 -42.364 184.358C-29.2058 180.474 -18.5788 169.693 -13.1832 154.77C-8.24179 141.166 -7.90948 125.161 -12.1438 109.697ZM185.442 147.416C162.694 122.674 133.803 109.057 104 109.057C74.1965 109.057 45.2641 122.674 22.5997 147.416C0.931274 171.012 -14.1775 203.753 -19.9894 239.624C-23.6837 262.507 -16.9597 284.53 -1.47622 300.042C14.6295 316.184 35.6748 321.085 56.264 313.508C71.4983 307.881 87.5624 305.029 104 305.029C120.438 305.029 136.503 307.881 151.737 313.508C158.088 315.845 164.48 317 170.748 317C184.82 317 198.311 311.21 209.435 300.042C224.96 284.531 231.684 262.507 227.989 239.624C222.178 203.752 207.069 171.011 185.442 147.416Z"
                        fill="#FD7E14"
                    />
                </svg>
            </div>
            <div className={cs['login-form-container']}>
                <form id="form_login" className={cs['login-form']}>
                    <div className={cs['logo']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                            <path
                                d="M39.722 18.1473C39.3244 19.5988 38.5293 20.8568 37.4848 21.6883C36.6507 22.3533 35.7036 22.7011 34.772 22.7011C34.4213 22.7011 34.0783 22.6527 33.7392 22.5536C32.5076 22.1892 31.5097 21.1776 31.0031 19.7772C30.5393 18.5007 30.5081 16.9989 30.9057 15.547C31.3071 14.0955 32.1022 12.8376 33.1428 12.0061C34.2888 11.0928 35.6529 10.7771 36.8885 11.1407C38.1201 11.5051 39.1218 12.5168 39.6285 13.9171C40.0883 15.1937 40.1234 16.6954 39.722 18.1473ZM13.6625 14.4786C15.128 14.4786 16.5273 13.635 17.5016 12.163C18.3864 10.8284 18.8736 9.08037 18.8736 7.23995C18.8736 5.39791 18.3864 3.64984 17.5016 2.31525C16.5272 0.843698 15.128 0 13.6625 0C12.193 0 10.7939 0.843612 9.81945 2.31525C8.93863 3.64984 8.45141 5.39791 8.45141 7.23995C8.45141 9.08037 8.93863 10.8284 9.81945 12.163C10.7939 13.635 12.1931 14.4786 13.6625 14.4786ZM26.3376 14.4786C27.807 14.4786 29.2062 13.635 30.1806 12.163C31.0614 10.8284 31.5487 9.08037 31.5487 7.23995C31.5487 5.39791 31.0614 3.64984 30.1806 2.31525C29.2062 0.843698 27.8069 0 26.3376 0C24.872 0 23.4728 0.843612 22.4984 2.31525C21.6137 3.64984 21.1265 5.39791 21.1265 7.23995C21.1265 9.08037 21.6137 10.8284 22.4984 12.163C23.4728 13.635 24.872 14.4786 26.3376 14.4786ZM9.09448 15.5479C8.69307 14.0957 7.89797 12.8377 6.85723 12.0061C5.71135 11.0928 4.34721 10.7772 3.11162 11.1408C1.87611 11.5052 0.878275 12.5169 0.371557 13.9172C-0.0883569 15.1937 -0.123377 16.6955 0.27803 18.1474C0.675621 19.5989 1.47072 20.8569 2.51519 21.6884C3.34929 22.3534 4.29642 22.7012 5.22795 22.7012C5.57484 22.7012 5.92172 22.6528 6.25691 22.5537C7.49241 22.1893 8.49025 21.1776 8.99689 19.7773C9.46087 18.5008 9.49207 16.999 9.09448 15.5479ZM27.6471 19.0873C25.5112 16.7656 22.7984 15.4879 20 15.4879C17.2016 15.4879 14.4849 16.7656 12.3568 19.0873C10.3222 21.3014 8.90352 24.3736 8.3578 27.7395C8.01092 29.8867 8.64228 31.9532 10.0961 33.4087C11.6084 34.9234 13.5845 35.3834 15.5177 34.6723C16.9482 34.1443 18.4566 33.8767 20 33.8767C21.5435 33.8767 23.0519 34.1444 24.4823 34.6723C25.0787 34.8916 25.6789 35 26.2675 35C27.5887 35 28.8555 34.4567 29.9 33.4087C31.3577 31.9533 31.9891 29.8868 31.6422 27.7395C31.0966 24.3735 29.6778 21.3013 27.6471 19.0873Z"
                                fill="#FD7E14"
                            />
                        </svg>
                        <p className={cs['name']}>PetPalz</p>
                    </div>

                    <div className={cs['sign-in']}>
                        <h4>Sign In</h4>
                        <p>Sign in to stay connected</p>
                    </div>
                    {errorMessage && (
                        <span
                            style={{
                                color: 'red',
                                margin: '15px',
                                alignSelf: 'center',
                            }}
                            className="form-message"
                        >
                            Your Username or Password is incorrect!
                        </span>
                    )}
                    {console.log(errorMessage)}
                    <div id="form_login" className={cs['sign-in-frame']}>
                        <div id="form-group">
                            <p className={cs['email']}>Username</p>
                            <div className={cs['email-container']}>
                                <input
                                    type="text"
                                    className="form-control" //{cs['email-input']}
                                    value={username}
                                    placeholder="Enter your username"
                                    name="username"
                                    id="username"
                                    onChange={handleOnchangeUsername}
                                />
                            </div>
                            <span className="form-message"></span>
                        </div>
                        <div id="form-group">
                            <p className={cs['password']}>Password</p>
                            <div className={cs['password-container']}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control" //{cs['password-input']}
                                    value={password}
                                    placeholder="Enter your password"
                                    name="password"
                                    id="password"
                                    onChange={handleOnchangePassword}
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    onClick={handleShowPassword}
                                    className={cs['show-icon']}
                                />
                            </div>
                            <span className="form-message"></span>
                        </div>
                        <div className={cs['remember-forgot']}>
                            <div className={cs['remember-container']}>
                                <input type="checkbox" />
                                <p className={cs['question']}>Remember me ?</p>
                            </div>
                            <p className={cs['forgot']} onClick={handleForgotPassword}>
                                Forgot Password
                            </p>
                        </div>
                        <div id="form-group">
                            <button type="submit" className="btn_form">
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div className={cs['other-account-container']}>
                        <p>or sign in with other accounts?</p>
                        <div className={cs['other-account']}>
                            <div className={cs['google']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                >
                                    <g filter="url(#filter0_d_100_34307)">
                                        <rect x="8" y="4" width="24" height="24" rx="12" fill="white" />
                                        <mask
                                            id="mask0_100_34307"
                                            maskUnits="userSpaceOnUse"
                                            x="12"
                                            y="8"
                                            width="16"
                                            height="16"
                                        >
                                            <path
                                                d="M20 24C24.4183 24 28 20.4183 28 16C28 15.4116 27.9365 14.838 27.8159 14.2857H20V17.6H24.4054C23.7516 19.4 22.0259 20.6857 20 20.6857C17.4122 20.6857 15.3143 18.5878 15.3143 16C15.3143 13.4122 17.4122 11.3143 20 11.3143C21.3191 11.3143 22.5109 11.8593 23.3624 12.7365L25.6945 10.3811C24.2439 8.91109 22.2284 8 20 8C15.5817 8 12 11.5817 12 16C12 20.4183 15.5817 24 20 24Z"
                                                fill="#C4C4C4"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_100_34307)">
                                            <path
                                                d="M6.85718 16.0293L12 11.6573L17.7143 16.1145L12 20.343L6.85718 16.0293Z"
                                                fill="#FEBD01"
                                            />
                                            <path
                                                d="M12 11.6572L18.4571 5.20008L25.4286 7.71437L28.4571 13.0858L19.8286 13.4287L17.7143 16.1144L12 11.6572Z"
                                                fill="#FF4131"
                                            />
                                            <path
                                                d="M19.6572 13.9429L28.9144 13.7144L28.8001 17.8286L26.5144 22.7429L21.8287 19.0858L19.6572 18.0572V13.9429Z"
                                                fill="#0286F7"
                                            />
                                            <path
                                                d="M12 20.3433L17.7143 16.1147L18.3429 18.9719L21.8286 19.0862L26.5143 22.7433L21.7714 24.8005L15.8857 24.4576L12 20.3433Z"
                                                fill="#01A94D"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_100_34307"
                                            x="0"
                                            y="0"
                                            width="40"
                                            height="40"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0.0627451 0 0 0 0 0.160784 0 0 0 0.1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_100_34307"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_100_34307"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className={cs['facebook']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                >
                                    <g filter="url(#filter0_d_100_34315)">
                                        <path
                                            d="M32.0002 15.9992C32.0002 9.37225 26.6279 4 20 4C13.3724 4 8 9.37225 8 15.9992C8 22.6262 13.3724 28 20 28C26.6281 28 32.0002 22.6262 32.0002 15.9992Z"
                                            fill="#395196"
                                        />
                                        <path
                                            d="M21.0573 13.1575V12.0208C21.0573 11.4672 21.4268 11.3379 21.6855 11.3379C21.945 11.3379 23.2809 11.3379 23.2809 11.3379V8.90374L21.0844 8.89404C18.6464 8.89404 18.0928 10.7105 18.0928 11.8734V13.1575H16.6833V16.0009H18.105C18.105 19.2228 18.105 23.1077 18.105 23.1077H20.9475C20.9475 23.1077 20.9475 19.1832 20.9475 16.0009H23.0573L23.3168 13.1575H21.0573Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_100_34315"
                                            x="0"
                                            y="0"
                                            width="40.0002"
                                            height="40"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0.0627451 0 0 0 0 0.160784 0 0 0 0.1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_100_34315"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_100_34315"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={cs['do-not-have-account']}>
                            <p>Don’t have an account?</p>
                            <Link to="/Register" className={cs['to-sign-up-page']}>
                                Sign up
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            {/* <img src={Background} alt="" className={cs['bg-img']}></img> */}
        </div>
    );
}