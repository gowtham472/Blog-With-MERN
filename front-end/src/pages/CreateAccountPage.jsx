import { useState } from "react";
import {Link , useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import '../App.css';

export default function CreateAccountPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const createAccount = async (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }
        try{
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        }catch(e){ 
            setError(e.message);
        }
    }

    return (
        <div className="form">
            <h1>Create Account</h1>
            {error && <p>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            <button onClick={createAccount} >Create Account</button>

            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
        </div>
    )
}