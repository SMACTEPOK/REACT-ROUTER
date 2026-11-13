import React from 'react';
export function DashboardStats() {
  return (
    <div>
      <h2 className="lab-card__title">Статистика</h2>
      <div style={{ height: '200px', border: '2px dashed var(--color-border)', display: 'flex', alignItems: 'flex-end', gap: '10px', padding: '20px' }}>
        {[40, 70, 50, 90, 60].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--color-success)' }}></div>
        ))}
      </div>
    </div>
  );
}
