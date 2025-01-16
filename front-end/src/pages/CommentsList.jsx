import '../App.css';
import PropTypes from 'prop-types';

export default function CommentsList({ comments }) {
    return (
        <div className="comments-container">
            <h3>Comments</h3>
            {comments.map(comment => (
                <div className="comment" key={comment.text}>
                    <h4>{comment.postedBy}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
)}

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            postedBy: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};
