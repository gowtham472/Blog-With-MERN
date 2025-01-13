import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import SpotlightCard from "./components/spcard";

function ArticleList({ articles }) {
    return (
        <div>
            <h1>Articles</h1>
            <SpotlightCard >
            {articles.map((article) => (
                <Link key={article.name} to={`/articles/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                    <button>Read More</button>
                </Link>
            ))}
            </SpotlightCard>
        </div>
    );
}
ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default ArticleList;