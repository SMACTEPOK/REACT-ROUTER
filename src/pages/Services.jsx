import React from 'react';
export function Services() {
  return (
    <div className="page-container">
      <h1 className="page-title">Послуги</h1>
      <div className="services-grid">
        <div className="service-card"><h3>Розробка UI</h3><p>Створення сучасних інтерфейсів</p></div>
        <div className="service-card"><h3>SPA Архітектура</h3><p>Побудова односторінкових додатків</p></div>
        <div className="service-card"><h3>Оптимізація</h3><p>Покращення швидкості завантаження</p></div>
      </div>
    </div>
  );
}
