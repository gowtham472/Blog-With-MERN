import './Popup.css';

export default function Popup({ heading, content, handleClose, handleConfirm }) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>{heading}</h2>
                <p>{content}</p>
                <div>
                    <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                    <button className="cancel-btn" onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}