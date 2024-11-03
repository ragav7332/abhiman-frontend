// import React from 'react';
// import '../pages/Header.css';  // Custom styles for header


// function Header() {
//   return (
//     <nav className="navbar navbar-dark bg-warning px-3">
//       <div className="d-flex align-items-center gap-4">
       
//         {/* <img src='DataVisualization.png' alt="Logo" className="logo me-2" /> */}
      
//         <span className="navbar-brand mb-0 h1">Dashboard Design App</span>
//       </div>
//     </nav>
//   );
// }

// export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const onLogout =()=>{
        navigate('/login')
    }

  return (
    <nav className="navbar navbar-dark bg-warning" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
      <div className="d-flex align-items-center gap-4">
        <span className="navbar-brand mb-0 h1">Dashboard Design App</span>
      </div>
      <button 
        onClick={onLogout}
        className="btn btn-danger"
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Header;
