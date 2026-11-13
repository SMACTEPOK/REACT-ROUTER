import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/Navigation';
import { PrivateRoute } from './components/PrivateRoute';
import { Loader } from './components/Loader';
import './App.css';

// Lazy Loading (Завдання 4)
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const BlogList = lazy(() => import('./pages/BlogList').then(m => ({ default: m.BlogList })));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail').then(m => ({ default: m.ArticleDetail })));
const DashboardLayout = lazy(() => import('./pages/DashboardLayout').then(m => ({ default: m.DashboardLayout })));
const DashboardOverview = lazy(() => import('./pages/DashboardOverview').then(m => ({ default: m.DashboardOverview })));
const DashboardStats = lazy(() => import('./pages/DashboardStats').then(m => ({ default: m.DashboardStats })));
const DashboardSettings = lazy(() => import('./pages/DashboardSettings').then(m => ({ default: m.DashboardSettings })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Navigation />
          <main className="app__main">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:articleId" element={<ArticleDetail />} />
                <Route path="/login" element={<LoginPage />} />
                
                {/* Захищені та вкладені маршрути */}
                <Route path="/dashboard" element={
                  <PrivateRoute>
                    <DashboardLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<DashboardOverview />} />
                  <Route path="stats" element={<DashboardStats />} />
                  <Route path="settings" element={<DashboardSettings />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="app__footer">
            <p>© 2026 CRAFTMARKET · Лабораторна робота 13 · React Router</p>
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
