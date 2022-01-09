import { useEffect, useState } from "react";
import SkeletonArticle from "../skeleton/SkeletonArticle";

const Article = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await resp.json();
      setArticles(data);
    }, 5000);
  });

  return (
    <div>
      <h2>Article</h2>

      {articles &&
        articles.map((article) => (
          <div className="articles" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
    </div>
  );
};

export default Article;
