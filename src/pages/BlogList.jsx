import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export function BlogList() {
  return (
    <div className="page-container">
      <h1 className="page-title">Блог</h1>
      <div className="blog-grid">
        {articles.map(article => (
          <div key={article.id} className="blog-card">
            <h3>{article.title}</h3>
            <p className="blog-meta">{article.author} • {article.date}</p>
            <p>{article.excerpt}</p>
            <Link to={`/blog/${article.id}`} className="btn btn--small" style={{ marginTop: 'auto' }}>Читати далі →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
