// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { VALID_CREDENTIALS } from '../constants/auth';

//  const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     // Check if credentials are valid
//     if (!newErrors.email && !newErrors.password) {
//       const isValid = VALID_CREDENTIALS.some(
//         cred => cred.email === formData.email && cred.password === formData.password
//       );
//       if (!isValid) {
//         newErrors.auth = 'Invalid email or password';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       navigate('/home');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-slate-100">
//       <div className="card w-96 bg-white p-8">
//         <div className="card-body">
//           <h2 className="card-header text-2xl font-bold text-center mb-6">Login</h2>
          
//           {/* <div className="mb-6 p-4 bg-slate-50 rounded-lg">
//             <h3 className="text-sm font-semibold mb-2">Demo Credentials:</h3>
//             <div className="text-sm text-slate-600">
//               {VALID_CREDENTIALS.map((cred, index) => (
//                 <div key={index} className="mb-1">
//                   <div>Email: {cred.email}</div>
//                   <div>Password: {cred.password}</div>
//                   {index < VALID_CREDENTIALS.length - 1 && <hr className="my-1" />}
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//               {errors.email && <span className="form-error">{errors.email}</span>}
//             </div>
//             <div className="form-group mt-4">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="input"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//               {errors.password && <span className="form-error">{errors.password}</span>}
//             </div>
//             {errors.auth && (
//               <div className="mt-4 text-red-500 text-sm text-center">{errors.auth}</div>
//             )}
//             <div className="card-footer mt-6">
//               <button type="submit" className="btn btn-primary w-full">
//                 Login
//               </button>
//             </div>
//           </form>
//           <p className="text-center mt-4">
//             Don't have an account? 
//             <Link to="/register" className="text-primary hover:text-primary-focus ml-1">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { VALID_CREDENTIALS } from '../constants/auth';
import { FiInfo } from 'react-icons/fi'; // Importing user and info icons

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showDemoCredentials, setShowDemoCredentials] = useState(false); // State for demo credentials visibility

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // Check if credentials are valid
    if (!newErrors.email && !newErrors.password) {
      const isValid = VALID_CREDENTIALS.some(
        cred => cred.email === formData.email && cred.password === formData.password
      );
      if (!isValid) {
        newErrors.auth = 'Invalid email or password';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/home');
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc' // Light background color
    }}>
      <div className="card w-96 bg-white p-8" style={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <h2 className="card-header text-2xl font-bold text-center mb-6" style={{ color: '#000' }}>Login</h2>
          
          <div style={{ padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '4px', marginBottom: '20px' }}>
            <h3 className="text-sm font-semibold mb-2 flex items-center" style={{ color: '#000' }}>
              Demo Credentials:
              <button
                onClick={() => setShowDemoCredentials(!showDemoCredentials)} // Toggle visibility
                style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '5px' }}
              >
                <FiInfo className="text-blue-500" />
              </button>
            </h3>
            {showDemoCredentials && (
              <div className="" style={{ color: '#000' }}>
                {VALID_CREDENTIALS.map((cred, index) => (
                  <div key={index} className="mb-1">
                    <div>Email: {cred.email}</div>
                    <div>Password: {cred.password}</div>
                    {index < VALID_CREDENTIALS.length - 1 && <hr className="my-1" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} style={{gap:'30px'}}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#000' }}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            </div>
            <div className="form-group mt-4" style={{marginBottom:'15px'}}>
              <label className="form-label" style={{ color: '#000' }}>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
            </div>
            {errors.auth && (
              <div style={{color:'red'}}>{errors.auth}</div>
            )}
            <div className="card-footer mt-6" style={{justifyContent:'center',gap:'30px'}}>
              <button type="submit" className="btn btn-primary" >
                Login
              </button>
            </div>
          </form>
          <p style={{ color: '#000' }}>
            Don't have an account? 
            <Link to="/register" className="text-primary hover:text-primary-focus ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
