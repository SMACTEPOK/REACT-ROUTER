import React from 'react';
export function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">Головна</h1>
      <div className="lab-card">
        <h2 className="lab-card__title">Ласкаво просимо до SPA</h2>
        <p>Це демонстрація клієнтської маршрутизації за допомогою React Router.</p>
        <p>Навігація відбувається миттєво, без перезавантаження сторінки.</p>
      </div>
    </div>
  );
}
