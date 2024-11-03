
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiActivity, FiUsers, FiBell, FiDollarSign } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa'

import '../pages/Sidebar.css';  // Custom styles for sidebar

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`d-flex flex-column vh-150  sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} >
      
      
      <button className="btn toggle-btn" onClick={toggleSidebar}>
           <FaBars />
      </button>
      
      <ul className="nav flex-column">
        <li className="nav-item ">
          <Link to="/home" className="nav-link text-white d-flex align-items-center  vh-300">
            <FiActivity className="me-2" />
            {isOpen && <span className="sidebar-text">Analytics</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link text-white d-flex align-items-center  vh-300">
            <FiUsers className="me-2" />
            {isOpen && <span className="sidebar-text">Users</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/notifications" className="nav-link text-white d-flex align-items-center  vh-300">
            <FiBell className="me-2" />
            {isOpen && <span className="sidebar-text">Notifications</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/transactions" className="nav-link text-white d-flex align-items-center  vh-300">
            <FiDollarSign className="me-2" />
            {isOpen && <span className="sidebar-text">Transactions</span>}
          </Link>
        </li>
       
   
      </ul>
    </div>
  );
}

export default Sidebar;

