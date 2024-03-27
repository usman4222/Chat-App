import React, { useRef, useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import Typography from '@mui/material/Typography'
// import { useStrongPassword } from '6pp';
import { useFileHandler, useInputValidation } from '6pp';
import { usernameValidator } from '../utlis/validators';

const Login = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const bio = useInputValidation("")
    const email = useInputValidation("")
    const username = useInputValidation("", usernameValidator)
    // const password = useStrongPassword()
    const password = useInputValidation("")
    const avatar = useFileHandler("single")

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"><FaUser /></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            {username.error && (
                                <Typography color="error" variant="caption">{username.error}</Typography>
                            )}
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"><FaLock /></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            {password.error && (
                                <Typography color="error" variant="caption">{password.error}</Typography>
                            )}
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="profile-badge">
                            <div className="profile-pic">
                                <label htmlFor="profile-image-upload" className="circular-image-container" >
                                    {image ? (
                                        <img alt="User Pic" src={image} className="circular-image" />
                                    ) : (
                                        <div className="dummy-image">
                                            <i className="fas fa-user">
                                                {/* <FaUser/> */}
                                            </i>
                                        </div>
                                    )}
                                </label>
                                <input
                                    ref={fileInputRef}
                                    id="profile-image-upload"
                                    className="img-input"
                                    type="file"
                                    accept="image/*"
                                    // onChange={avatar.changeHandler}
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"><FaUser /></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            {username.error && (
                                <Typography color="error" variant="caption">{username.error}</Typography>
                            )}
                        </div>
                        {/* <div className="input-field">
                            <i className="fas fa-user"><FaUserPen/></i>
                            <input type="text" placeholder="Bio" />
                        </div> */}
                        <div className="input-field">
                            <i className="fas fa-envelope"><MdEmail /></i>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email.value}
                                onChange={email.changeHandler}
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"><FaLock /></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            {password.error && (
                                <Typography color="error" width={"fit-content"} display={"block"} variant="caption">{password.error}</Typography>
                            )}
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                    </form>
                </div>
            </div >
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Welcome Back to Our Chat App!</h3>
                        <p>Welcome back! Sign in to your account to continue your conversations and stay connected with your contacts.</p>
                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                            Sign up
                        </button>
                    </div>
                    <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3> Welcome to Our Chat App!</h3>
                        <p>Join our vibrant community of users and start connecting with friends, family, and colleagues in real-time.</p>
                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                            Sign in
                        </button>
                    </div>
                    <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Login;
