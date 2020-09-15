import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const history = useHistory()

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const PostData=()=>{
        //validation check
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "Invalid Email address"})
        return
    }

        //network req to server
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                M.toast({html:data.message})
                history.push('/login')
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
                    placeholder="Username"
                    className="inputstyle"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
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