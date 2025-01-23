import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types/index';

const ArticleCard: React.FunctionComponent<{ article: Article }> = ({ article }) => (
  <div className="col-md-4">
    <div className="card mb-4">
      <img src={article.image_url} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.summary.slice(0, 100)}...</p>
        <p className="text-muted">Published: {new Date(article.published_at).toLocaleDateString()}</p>
        <Link to={`/article/${article.id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  </div>
);
export default ArticleCard