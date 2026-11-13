import React from 'react';
export function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">Про нас</h1>
      <div className="lab-card">
        <h2 className="lab-card__title">Про проєкт</h2>
        <p>Цей проєкт створено для вивчення React Router у межах лабораторної роботи №13.</p>
        <p>Використані технології: React 19, Vite, React Router DOM.</p>
      </div>
    </div>
  );
}
