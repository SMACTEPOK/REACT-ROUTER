import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="nav-header">
      <Link to="/" className="nav-brand">✱ CRAFTMARKET</Link>
      
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Головна</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Про нас</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Послуги</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Блог</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Дашборд</NavLink>
        
        <div className="nav-auth">
          {isAuthenticated ? (
            <>
              <span className="nav-user">{user.email}</span>
              <button className="btn btn--small btn--danger" onClick={handleLogout}>Вийти</button>
            </>
          ) : (
            <Link to="/login" className="btn btn--small">Увійти</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
