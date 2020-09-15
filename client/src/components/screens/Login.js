import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Login = () => {
    const history = useHistory()

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const PostData=()=>{
        //validation check
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "Invalid Email address"})
        return
    }

        //network req to server
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password:password,
                email:email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                M.toast({html:"Successfully Signed in"})
                history.push('/')// to navigate to home
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="mycard">
            <div className="auth-card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="Email"
                    className="inputstyle"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    className="inputstyle"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue"
                onClick={()=>PostData()}
                >
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