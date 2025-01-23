import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types/index';

const HomePage: React.FunctionComponent = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;