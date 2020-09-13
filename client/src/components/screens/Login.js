import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="mycard">
            <div className="auth-card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="Email"
                    class="inputstyle"
                />
                <input
                    type="text"
                    placeholder="Password"
                    class="inputstyle"
                />
                <button className="btn waves-effect waves-light #64b5f6 blue">
                    Login
                </button>
                <h6>
                    Don't have an account?
                    <Link className="link" to="/signup"> Sign up.</Link>
                </h6>

            </div>

        </div>
    )
}

export default Login