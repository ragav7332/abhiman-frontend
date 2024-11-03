import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
// import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Notifications from './pages/Notifications';
import Transactions from './pages/Transactions';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import './pages/Sidebar.css'



// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <div className="content p-4">
//         <Sidebar />
//           <Routes>
//           <Route exact path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//             <Route path="/" element={<Home />} />
          
//             <Route path="/users" element={<Users />} />
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="/transactions" element={<Transactions />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Routes that do not need Header and Sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes that need Header and Sidebar */}
          <Route element={<ProtectedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>

          {/* Redirect to login for any unmatched routes */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

// Protected layout component
const ProtectedLayout = () => {
  return (
    <>
      <Header />
     
      <div className="content p-4">
      <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </>
  );
};

export default App;