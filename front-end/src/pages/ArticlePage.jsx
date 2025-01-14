import { useParams,useLoaderData } from "react-router-dom";
import articles from "../article-content";
import axios from "axios";
import CommentsList from "./CommentsList";
import { useState } from "react";
import AddCommentForm from "./AddCommentForm";

export default function ArticlePage() {
    const { name } = useParams();
    const {upvotes:initialUpvotes,comments:initialcomments} = useLoaderData();
    const [upvotes,setUpvotes] = useState(initialUpvotes);
    const [comments,setComments] = useState(initialcomments);

    const article = articles.find(article => article.name === name);
    async function onUpvoteClicked() {
        const response = await axios.post(`/api/articles/${name}/upvote`);
        const updatedArticleData = response.data;
        setUpvotes(updatedArticleData.upvotes);
    }
    async function onAddComment({ nameText, commentText }) {
        const response = await axios.post(`/api/articles/${name}/comments`, {
            postedBy: nameText,
            text: commentText,
        });
        const updatedArticleData = response.data;
        setComments(updatedArticleData.comments);
    }
    
    return (
        <div>
            <h1>{article.title}</h1>
            <button onClick={onUpvoteClicked}>Upvote</button>
            <p>This article has been upvoted {upvotes} times</p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <AddCommentForm onAddComment={onAddComment} />
            <CommentsList comments={comments} />
        </div>
    )
}

export async function loader ({params}){ {
    const response = await axios.get('/api/articles/' + params.name);
    const {upvotes,comments} = response.data;
    return { upvotes, comments };
  }
}