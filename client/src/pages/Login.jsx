import React, { useRef, useState } from 'react';
import './Login.css';

const Login = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

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
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
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
                                            <i className="fas fa-user"></i>
                                        </div>
                                    )}
                                </label>
                                <input
                                    ref={fileInputRef}
                                    id="profile-image-upload"
                                    className="img-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Bio" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New to our community ?</h3>
                        <p>Discover a world of possibilities! Join us and explore a vibrant community where ideas flourish and connections thrive.</p>
                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                            Sign up
                        </button>
                    </div>
                    <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of Our Valued Members</h3>
                        <p>Thank you for being part of our community. Your presence enriches our shared experiences. Let's continue this journey together!</p>
                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                            Sign in
                        </button>
                    </div>
                    <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
