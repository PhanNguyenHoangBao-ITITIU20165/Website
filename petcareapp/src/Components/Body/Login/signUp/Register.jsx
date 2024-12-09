import cs from './register.module.css';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

import Dog from '../../../../assests/loginpage/doglogo.png';
import DogBackGround from '../../../../assests/loginpage/backgroundDog.png';
import Background from '../../../../assests/registerpage/background.png';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Validator } from '../../../Validator/Validator';
import { checkRegister, verifyOTP, resendOTP } from '../../../apiClient/UserApi';
import { Box, Modal, TextField, Typography, Button } from '@mui/material';
// import { Modal, Button, Input, Form } from 'antd';
import { useAuth } from '../../../security/AuthContext';
import { useCookies } from 'react-cookie';

export default function Register() {
    const [userData, setUserData] = useState({
        userUserName: '',
        userFullName: '',
        userPassword: '',
        userEmail: '',
        userRole: 'user',
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [OTP, setOtp] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const authContext = useAuth();
    const { setCookie } = useCookies(['username', 'password']);
    const [isInvalidOTP, setIsInvalidOTP] = useState(false);


    async function register(user) {
        try {
            const response = await checkRegister(user);
            if(response.status == 200){
                setModalOpen(true);
            }
        } catch (error) {
            setErrorMessage(true);
        }
    }

    async function checkOTP(value) {
        const userDataTemp = {
            userUserName: userData.userUserName,
            otp: value,
        };
        console.log(userDataTemp);
        try {
            const checking = await verifyOTP(userDataTemp);
            if (checking.status == 200) {
                alert('Register successfully');
                // console.log(userData);
                // const user = {
                //     userUserName: userData.userUserName,
                //     userPassword: userData.userPassword,
                // };
                // await authContext.login(user);
                // setCookie('username', userData.userUserName);
                // setCookie('password', userData.userPassword);
                // navigate('/Home');
                navigate('/Login');
            }else{
                // console.log("vo dayyy")
                
                // console.log(isInvalidOTP)
            }
        } catch (error) {
            console.log("vo dayyy")
            setIsInvalidOTP(true);
            setErrorMessage(true);
        }
    }

    async function resendOtp(data) {
        console.log(data);
        try {
            await resendOTP(data);
            alert('Resend successfully');
        } catch (error) {
            setErrorMessage(true);
            alert('Resend fail');
        }
    }

    // Modal
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleInputOtpChange = (event) => {
        setOtp(event.target.value);
        setIsInvalidOTP(false)
    };

    useEffect(() => {
        Validator(
            {
                form: '#form_register',
                formGroupSelector: '#form-group',
                errorSelector: '.form-message',
                rules: [
                    Validator.isRequired('#username', 'It can not be empty'),
                    Validator.isRequired('#password', 'It can not be empty'),
                    Validator.isRequired('#confirmPassword', 'It can not be empty'),
                    Validator.isRequired('#email', 'It can not be empty'),
                    Validator.isRequired('#fullname', 'It can not be empty'),
                    Validator.isRequired('#phoneno', 'It can not be empty'),

                    Validator.minLength('#password', 6),
                    Validator.isConfirmed(
                        '#confirmPassword',
                        function () {
                            return document.querySelector('#form_register #confirmPassword').value;
                        },
                        "It's incorrect",
                    ),
                    Validator.isEmail('#email', 'It should be in email type'),
                ],
                onSubmit: function (data) {
                    // register(data);

                    const user = {
                        userUserName: data.username,
                        userFullName: data.fullname,
                        userPassword: data.password,
                        userEmail: data.email,
                        userRole: 'user',
                    };

                    setUserData(user);
                    register(user);
                },
            },
            setUsername,
            setPassword,
        );
    }, []);

    function handleOnchangeUsername(e) {
        setUsername(e.target.value);
        e.target.classList.remove('input-error');
    }
    function handleOnchangePassword(e) {
        setPassword(e.target.value);
        e.target.classList.remove('input-error');
    }

    function handleOnchangeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
        e.target.classList.remove('input-error');
    }

    function handleOnchangeFullname(e) {
        setFullname(e.target.value);
        e.target.classList.remove('input-error');
    }

    function handleOnchangeEmail(e) {
        setEmail(e.target.value);
        e.target.classList.remove('input-error');
    }

    function handleOnchangePhoneNumber(e) {
        setEmail(e.target.value);
        e.target.classList.remove('input-error');
    }

    function handleShowPassword() {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }
    function handleShowConfirmPassword() {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    }

    return (
        <div className={cs['wrapper']}>
            {/* <img className={cs['bg-img']} src={Background} alt=""></img> */}
            <div className={cs['big-logo']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="330" height="369" viewBox="0 0 330 369" fill="none">
                    <path
                        opacity="0.1"
                        d="M423.039 189.399C418.805 204.867 410.337 218.274 399.213 227.135C390.33 234.222 380.243 237.929 370.322 237.929C366.586 237.929 362.934 237.413 359.322 236.357C346.206 232.474 335.579 221.692 330.183 206.769C325.243 193.165 324.911 177.16 329.146 161.687C333.421 146.218 341.888 132.812 352.971 123.95C365.176 114.217 379.704 110.853 392.862 114.728C405.98 118.612 416.647 129.393 422.044 144.317C426.941 157.921 427.314 173.926 423.039 189.399ZM145.506 150.301C161.114 150.301 176.016 141.31 186.392 125.623C195.815 111.4 201.004 92.7707 201.004 73.1572C201.004 53.5263 195.815 34.8969 186.392 20.674C176.015 4.99141 161.113 -4 145.506 -4C129.856 -4 114.955 4.99049 104.577 20.674C95.1964 34.8969 90.0075 53.5263 90.0075 73.1572C90.0075 92.7707 95.1964 111.4 104.577 125.623C114.955 141.31 129.857 150.301 145.506 150.301ZM280.495 150.301C296.145 150.301 311.046 141.31 321.424 125.623C330.804 111.4 335.993 92.7707 335.993 73.1572C335.993 53.5263 330.804 34.8969 321.424 20.674C311.046 4.99141 296.144 -4 280.495 -4C264.887 -4 249.985 4.99049 239.608 20.674C230.186 34.8969 224.997 53.5263 224.997 73.1572C224.997 92.7707 230.186 111.4 239.608 125.623C249.985 141.31 264.887 150.301 280.495 150.301ZM96.8562 161.697C92.5812 146.22 84.1134 132.814 73.0295 123.951C60.8259 114.218 46.2978 110.854 33.1387 114.729C19.9806 118.613 9.35363 129.394 3.95708 144.317C-0.941001 157.921 -1.31397 173.927 2.96102 189.4C7.19536 204.868 15.6631 218.274 26.7868 227.136C35.67 234.223 45.7569 237.93 55.6777 237.93C59.372 237.93 63.0663 237.414 66.636 236.358C79.7942 232.474 90.4212 221.693 95.8168 206.77C100.758 193.166 101.091 177.161 96.8562 161.697ZM294.442 199.416C271.694 174.674 242.803 161.057 213 161.057C183.197 161.057 154.264 174.674 131.6 199.416C109.931 223.012 94.8225 255.753 89.0106 291.624C85.3163 314.507 92.0403 336.53 107.524 352.042C123.629 368.184 144.675 373.085 165.264 365.508C180.498 359.881 196.562 357.029 213 357.029C229.438 357.029 245.503 359.881 260.737 365.508C267.088 367.845 273.48 369 279.748 369C293.82 369 307.311 363.21 318.435 352.042C333.96 336.531 340.684 314.507 336.989 291.624C331.178 255.752 316.069 223.011 294.442 199.416Z"
                        fill="#FD7E14"
                    />
                </svg>
            </div>
            <div className={cs['register-form-container']}>
                <div className={cs['register-form']}>
                    <div className={cs['logo']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                            <path
                                d="M39.722 18.1473C39.3244 19.5988 38.5293 20.8568 37.4848 21.6883C36.6507 22.3533 35.7036 22.7011 34.772 22.7011C34.4213 22.7011 34.0783 22.6527 33.7392 22.5536C32.5076 22.1892 31.5097 21.1776 31.0031 19.7772C30.5393 18.5007 30.5081 16.9989 30.9057 15.547C31.3071 14.0955 32.1022 12.8376 33.1428 12.0061C34.2888 11.0928 35.6529 10.7771 36.8885 11.1407C38.1201 11.5051 39.1218 12.5168 39.6285 13.9171C40.0883 15.1937 40.1234 16.6954 39.722 18.1473ZM13.6625 14.4786C15.128 14.4786 16.5273 13.635 17.5016 12.163C18.3864 10.8284 18.8736 9.08037 18.8736 7.23995C18.8736 5.39791 18.3864 3.64984 17.5016 2.31525C16.5272 0.843698 15.128 0 13.6625 0C12.193 0 10.7939 0.843612 9.81945 2.31525C8.93863 3.64984 8.45141 5.39791 8.45141 7.23995C8.45141 9.08037 8.93863 10.8284 9.81945 12.163C10.7939 13.635 12.1931 14.4786 13.6625 14.4786ZM26.3376 14.4786C27.807 14.4786 29.2062 13.635 30.1806 12.163C31.0614 10.8284 31.5487 9.08037 31.5487 7.23995C31.5487 5.39791 31.0614 3.64984 30.1806 2.31525C29.2062 0.843698 27.8069 0 26.3376 0C24.872 0 23.4728 0.843612 22.4984 2.31525C21.6137 3.64984 21.1265 5.39791 21.1265 7.23995C21.1265 9.08037 21.6137 10.8284 22.4984 12.163C23.4728 13.635 24.872 14.4786 26.3376 14.4786ZM9.09448 15.5479C8.69307 14.0957 7.89797 12.8377 6.85723 12.0061C5.71135 11.0928 4.34721 10.7772 3.11162 11.1408C1.87611 11.5052 0.878275 12.5169 0.371557 13.9172C-0.0883569 15.1937 -0.123377 16.6955 0.27803 18.1474C0.675621 19.5989 1.47072 20.8569 2.51519 21.6884C3.34929 22.3534 4.29642 22.7012 5.22795 22.7012C5.57484 22.7012 5.92172 22.6528 6.25691 22.5537C7.49241 22.1893 8.49025 21.1776 8.99689 19.7773C9.46087 18.5008 9.49207 16.999 9.09448 15.5479ZM27.6471 19.0873C25.5112 16.7656 22.7984 15.4879 20 15.4879C17.2016 15.4879 14.4849 16.7656 12.3568 19.0873C10.3222 21.3014 8.90352 24.3736 8.3578 27.7395C8.01092 29.8867 8.64228 31.9532 10.0961 33.4087C11.6084 34.9234 13.5845 35.3834 15.5177 34.6723C16.9482 34.1443 18.4566 33.8767 20 33.8767C21.5435 33.8767 23.0519 34.1444 24.4823 34.6723C25.0787 34.8916 25.6789 35 26.2675 35C27.5887 35 28.8555 34.4567 29.9 33.4087C31.3577 31.9533 31.9891 29.8868 31.6422 27.7395C31.0966 24.3735 29.6778 21.3013 27.6471 19.0873Z"
                                fill="#FD7E14"
                            />
                        </svg>
                        <p className={cs['name']}>PetPalz</p>
                    </div>

                    <div className={cs['register']}>
                        <h4>Sign Up</h4>
                        <p>Create your Hope UI account</p>
                    </div>
                    <form id="form_register" className={cs['register-frame']}>
                        <div id="form-group">
                            <p className={cs['register-info']}>Full name</p>
                            <div className={cs['register-info-container']}>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    placeholder="Enter your full name"
                                    value={fullname}
                                    name="fullname"
                                    onChange={handleOnchangeFullname}
                                />
                            </div>
                            <span className="form-message"></span>
                        </div>
                        <div id="form-group">
                            <p className={cs['register-info']}>User name</p>
                            <div className={cs['register-info-container']}>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter your user name"
                                    name="username"
                                    onChange={handleOnchangeUsername}
                                />
                            </div>
                            <span className="form-message"></span>
                            {errorMessage && (
                                <span
                                    style={{
                                        color: 'red',
                                        'margin-top': '15px',
                                        alignSelf: 'center',
                                    }}
                                    className="form-message"
                                >
                                    Your username has already used!
                                </span>
                            )}
                        </div>
                        <div id="form-group">
                            <p className={cs['register-info']}>Email</p>
                            <div className={cs['register-info-container']}>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email address"
                                    name="email"
                                    onChange={handleOnchangeEmail}
                                />
                            </div>
                            <span className="form-message"></span>
                        </div>
                        <div id="form-group">
                            <p className={cs['register-info']}>Phone No.</p>
                            <div className={cs['register-info-container']}>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneno"
                                    placeholder="Enter your phone number"
                                    name="phoneno"
                                    onChange={handleOnchangePhoneNumber}
                                />
                            </div>
                            <span className="form-message"></span>
                        </div>
                        <div id="form-group">
                            <p className={cs['register-info']}>Password</p>
                            <div className={cs['register-info-container']}>
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
                        <div id="form-group">
                            <p className={cs['register-info']}>Confirm password</p>
                            <div className={cs['register-info-container']}>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="form-control"
                                    value={confirmPassword}
                                    placeholder="Confirm your password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    onChange={handleOnchangeConfirmPassword}
                                />
                                <FontAwesomeIcon
                                    icon={showConfirmPassword ? faEyeSlash : faEye}
                                    onClick={handleShowConfirmPassword}
                                    className={cs['show-icon']}
                                />
                            </div>
                            <span className="form-message"></span>
                        </div>
                        <div className={cs['agreement']}>
                            <input type="checkbox" />
                            <p className={cs['question']}>I agree with the terms of use</p>
                        </div>

                        <div id="form-group">
                            {/* <button className="btn_form" onClick={handleOpenModal}>
                                Sign up
                            </button> */}
                            
                            <button type="submit" className="btn_form" > 
                                Sign up
                            </button>
                        </div>
                        
                        <Modal open={modalOpen} onClose={handleCloseModal}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 500,
                                    height: 550,
                                    bgcolor: 'background.paper',
                                    boxShadow: 10,
                                    borderRadius: 2,
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                                container
                                component="form"
                            >  
                                <Typography
                                    variant="h3"
                                    fontWeight={600}
                                    color="#4B5175"
                                    alignItems="center"
                                    marginBottom={7}
                                >
                                    OTP confirmation
                                </Typography>
                                {isInvalidOTP && (
                                <span style={{ color: 'red', fontSize: '14px', marginTop: '5px', marginBot: '25px' }}>
                                    Invalid OTP. Please try again.
                                </span>
                                )} 
                                <TextField
                                    required
                                    variant="outlined"
                                    type="password"
                                    value={OTP}
                                    label="Enter OTP"
                                    sx={{
                                        width: '80%',
                                        fontSize: '30px',
                                        '&.MuiOutlinedInput-notchedOutline': { fontSize: '30px' , marginTop: '35px'  },
                                    }}
                                    onChange={handleInputOtpChange}
                                />

                                <Button
                                    size="large"
                                    variant="contained"
                                    sx={{ width: '60%', marginTop: '20px', color: '#ffffff', fontSize: '16px' }}
                                    onClick={() => checkOTP(OTP)}
                                >
                                    Submit
                                </Button>
                                <Button
                                    onClick={() => resendOtp(userData)}
                                    sx={{ marginTop: '10px', fontSize: '14px' }}
                                >
                                    Resend OTP
                                </Button>
                            </Box>
                        </Modal>
                    </form>
                    <div className={cs['other-account-container']}>
                        <p>or sign up with other accounts?</p>
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
                        <div className={cs['already-have-account']}>
                            <p>Already have an account ? </p>
                            <Link to="/Login" className={cs['to-sign-in-page']}>
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

