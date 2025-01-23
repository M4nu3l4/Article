import React from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../types/index';

const ArticleDetail: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = React.useState<Article | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (!article) {
    return <div className="text-center my-5">Article not found</div>;
  }

  return (
    <div className="container my-4">
      <h1>{article.title}</h1>
      <p className="text-muted">Published: {new Date(article.published_at).toLocaleDateString()}</p>
      <img src={article.image_url} className="img-fluid my-4" alt={article.title} />
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read Full Article</a>
    </div>
  );
};

export default ArticleDetail;