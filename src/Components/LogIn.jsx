import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    console.log("component rendered");

    let [name , setName] = useState("");
    let [password , setPassword] = useState("");
    let navigate = useNavigate();

    let handleLogin = (e)=>{
        e.preventDefault();

        let currentUser = null;

        fetch("http://localhost:5505/users")
        .then(res=>res.json())
        .then((data)=>{
            for (let i = 0; i < data.length; i++) 
            {
                if(data[i].name == name)
                {
                    currentUser = data[i];
                }
            }
            if(currentUser==null)
            {
                toast.error("User not found , please give a valid username !!");
            }
            else if(currentUser.password !=  password)
            {
                toast.warning("Invalid password !! , please try again")
            }
            else{
                toast.success("login Successfull");
                setTimeout(()=>{ 
                    localStorage.setItem("currentUser" , JSON.stringify(currentUser))
                    navigate("/") 
                } , 1500)
            }
        })
    }

    return ( 
    <div className="login"> 
        <h1>Login to use the App</h1>

        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Name" 
            value={name} onChange={(e)=>{setName(e.target.value);}}/>

            
            <input type="password" placeholder="Password" 
            value={password} onChange={(e)=>{setPassword(e.target.value);}}/>

            <input type="submit" value="Login" />

            <span>Forgot Password ? <Link to="/">click here</Link></span>

        </form>

        <span>Don't have a account ? <Link to="/signup">create here</Link></span>

        <ToastContainer />

    </div> );
}
export default Login;
