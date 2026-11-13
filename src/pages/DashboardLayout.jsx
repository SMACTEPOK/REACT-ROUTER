import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <h3 className="sidebar-title">МЕНЮ</h3>
        <nav>
          <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Огляд</NavLink>
          <NavLink to="/dashboard/stats" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Статистика</NavLink>
          <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Налаштування</NavLink>
        </nav>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
