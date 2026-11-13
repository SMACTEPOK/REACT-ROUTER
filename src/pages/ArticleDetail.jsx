import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { articles } from '../data/articles';

export function ArticleDetail() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="page-container">
        <div className="lab-card">
          <h2 className="lab-card__title">Помилка 404</h2>
          <p>Статтю не знайдено.</p>
          <button className="btn" onClick={() => navigate('/blog')}>← Назад до блогу</button>
        </div>
      </div>
    );
  }

  const currentIndex = articles.findIndex(a => a.id === articleId);
  const prevArticle = articles[currentIndex - 1];
  const nextArticle = articles[currentIndex + 1];

  return (
    <div className="page-container">
      <div className="breadcrumbs">
        <Link to="/">Головна</Link> / <Link to="/blog">Блог</Link> / <span>{article.title}</span>
      </div>
      
      <div className="lab-card">
        <h1 className="page-title" style={{ fontSize: '36px', marginBottom: '10px' }}>{article.title}</h1>
        <p className="blog-meta" style={{ marginBottom: '30px' }}>Автор: {article.author} | {article.date}</p>
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '16px' }}>
          {article.content}
        </div>
      </div>

      <div className="article-nav">
        {prevArticle ? (
          <Link to={`/blog/${prevArticle.id}`} className="btn">← {prevArticle.title}</Link>
        ) : <div></div>}
        {nextArticle && (
          <Link to={`/blog/${nextArticle.id}`} className="btn">{nextArticle.title} →</Link>
        )}
      </div>
      
      <button className="btn" style={{ marginTop: '20px' }} onClick={() => navigate('/blog')}>← Повернутися до блогу</button>
    </div>
  );
}
