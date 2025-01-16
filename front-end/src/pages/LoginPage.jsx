import { useState } from "react";
import {Link , useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import '../App.css';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const Login = async (e) =>{
        e.preventDefault();
        
        if(email === ""){
            setError("Email cannot be empty");
            return;
        }
        if(password === ""){
            setError("Password cannot be empty");
            return;
        }
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        }catch(e){ 
            setError(e.message);
        }
    }

    return (
        <div className="form">
            <h1>Log In</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button onClick={Login} >Log In</button>
            <p>Don&apos;t have an account?</p>
            <Link to="/create-account">Create Account</Link>
        </div>
    )
}