import React from "react";
import "./signin.css";

function SignIn() {
    return (
        <div className="Signin">
            <div className="content">
                <div class="text">
                    Login
                </div>
                <form action="#">
                    <div class="field">
                        <input required="" type="text" class="input" placeholder="Email" />
                    </div>
                    <div class="field">
                        <input required="" type="password" class="input" placeholder="Password" />
                    </div>
                    <div class="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button class="buttonLogin">Sign in</button>
                    <div class="sign-up">
                        Not a member?
                        <a href="/">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignIn;