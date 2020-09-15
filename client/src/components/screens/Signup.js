import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const PostData=()=>{
        //network req to server
        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            }
        }
    )}

    return (
        <div className="mycard">
            <div className="auth-card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="Username"
                    class="inputstyle"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    class="inputstyle"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    class="inputstyle"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue">
                    Signup
                </button>
                <h6>
                    Already have an account?
                    <Link to="/login"> Sign in.</Link>
                </h6>

            </div>

        </div>
    )
}

export default Signup