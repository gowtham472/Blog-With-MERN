import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

export default function AddCommentForm({ onAddComment }) {
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');

    return (
        <div className="form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={nameText}
                    onChange={(e) => setNameText(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
            </label>
            <label>
                Comment:
                <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment"
                    required
                />
            </label>
            <button onClick={() => onAddComment({ nameText, commentText }, setNameText(''), setCommentText(''))} type="submit">
                Add Comment
            </button>
        </div>
    );
}

AddCommentForm.propTypes = {
    onAddComment: PropTypes.func.isRequired,
};