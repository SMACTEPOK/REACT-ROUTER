import React from 'react';
export function DashboardOverview() {
  return (
    <div>
      <h2 className="lab-card__title">Огляд</h2>
      <div className="stats-grid">
        <div className="stat-box"><h3>Користувачі</h3><p className="stat-number">1,248</p></div>
        <div className="stat-box"><h3>Дохід</h3><p className="stat-number">₴ 45K</p></div>
        <div className="stat-box"><h3>Активні сесії</h3><p className="stat-number">89</p></div>
      </div>
    </div>
  );
}
