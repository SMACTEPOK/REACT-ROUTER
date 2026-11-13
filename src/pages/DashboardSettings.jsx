import React, { useState } from 'react';
export function DashboardSettings() {
  const [name, setName] = useState('Admin');
  return (
    <div>
      <h2 className="lab-card__title">Налаштування</h2>
      <div className="form-field">
        <label>Ім'я профілю</label>
        <input type="text" className="lab-input" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <button className="btn" onClick={() => alert('Збережено!')}>Зберегти</button>
    </div>
  );
}
