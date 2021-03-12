import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/components/account/AccountView';
import AddAssetsView from 'src/components/addAssets/AddAssetsView';
import DashboardView from 'src/components/reports/DashboardView';
import LoginView from 'src/components/auth/LoginView';
import Logout from 'src/components/auth/Logout';
import NotFoundView from 'src/components/errors/NotFoundView';
import FinancialNewsView from 'src/components/financialNews/FinancialNewsView';
import RegisterView from 'src/components/auth/RegisterView';
// import SettingsView from 'src/components/settings/SettingsView';


const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/account', element: <AccountView /> },
      { path: '/add-assets', element: <AddAssetsView /> },
      { path: '/dashboard', element: <DashboardView /> },
      { path: '/news', element: <FinancialNewsView /> },
      // { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: 'logout', element: <Logout /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
