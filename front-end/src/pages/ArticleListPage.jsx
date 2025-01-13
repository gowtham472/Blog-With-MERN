import ArticleList from "../ArticleList";
import articles from "../article-content";
function ArticleListPage() {
    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default ArticleListPage;