import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import './App.css';
import useUser from './useUser';
import { useState } from 'react';
import Popup from './components/Popup';  // Import the Popup component

export default function NavBar() {
    const { isLoading, user } = useUser();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const email = user?.email;

    const handleSignOut = async () => {
        await signOut(getAuth());
        navigate('/');
    };

    const handlePopupClose = () => setShowPopup(false);
    const handlePopupConfirm = () => {
        handleSignOut();
        setShowPopup(false);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            {isLoading ? (
                <ul>Loading...</ul>
            ) : (
                <>
                    {user && (
                        <ul>
                            <p>{email}</p>
                        </ul>
                    )}
                    <ul>
                        {user ? (
                            <>
                                <button onClick={() => setShowPopup(true)}>Sign Out</button>
                                {showPopup && (
                                    <Popup
                                        heading="Confirm Sign Out"
                                        content="Are you sure you want to sign out?"
                                        handleClose={handlePopupClose}
                                        handleConfirm={handlePopupConfirm}
                                    />
                                )}
                            </>
                        ) : (
                            <button onClick={() => navigate('/login')}>Sign In</button>
                        )}
                    </ul>
                </>
            )}
        </nav>
    );
}
