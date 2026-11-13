import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    login(email);
    navigate(from, { replace: true });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Вхід</h1>
      <div className="lab-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2 className="lab-card__title">Авторизація</h2>
        <p style={{ marginBottom: '20px', color: 'var(--color-muted)' }}>Введіть будь-який email для входу.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Email</label>
            <input type="email" className="lab-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@test.com" required />
          </div>
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>Увійти</button>
        </form>
      </div>
    </div>
  );
}
