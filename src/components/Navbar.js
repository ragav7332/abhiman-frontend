import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="navbar-start">
        <span className="navbar-item text-xl font-bold">Dashboard</span>
      </div>
      <div className="navbar-center">
        <Link 
          to="/home" 
          className={`navbar-item ${location.pathname === '/home' ? 'text-primary' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/analytics" 
          className={`navbar-item ${location.pathname === '/analytics' ? 'text-primary' : ''}`}
        >
          Analytics
        </Link>
        <Link 
          to="/users" 
          className={`navbar-item ${location.pathname === '/users' ? 'text-primary' : ''}`}
        >
          Users
        </Link>
        <Link 
          to="/notifications" 
          className={`navbar-item ${location.pathname === '/notifications' ? 'text-primary' : ''}`}
        >
          Notifications
        </Link>
        <Link 
          to="/transactions" 
          className={`navbar-item ${location.pathname === '/transactions' ? 'text-primary' : ''}`}
        >
          Transactions
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="navbar-item">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;