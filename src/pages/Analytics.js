// import React from 'react';
// import Navbar from '../components/Navbar';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   Bar
// } from 'recharts';

// const Analytics = () => {
//   // Dummy data for analytics
//   const userStats = {
//     totalUsers: 15420,
//     referralUsers: 4230,
//     todayOrganic: 45,
//     weekUsers: 312,
//     monthUsers: 1250,
//     lastMonthUsers: 980
//   };

//   // Dummy data for registration vs referrals chart
//   const registrationData = [
//     { month: 'Jan', registrations: 850, referrals: 320 },
//     { month: 'Feb', registrations: 920, referrals: 380 },
//     { month: 'Mar', registrations: 880, referrals: 400 },
//     { month: 'Apr', registrations: 1100, referrals: 450 },
//     { month: 'May', registrations: 1250, referrals: 520 },
//     { month: 'Jun', registrations: 1400, referrals: 580 },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-100">
//       <Navbar />
      
//       <div className="container mx-auto px-4 py-6">
//         {/* User Statistics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           <div className="card bg-white">
//             <div className="card-body p-6">
//               <h3 className="card-header text-slate-600">Total Users</h3>
//               <p className="text-2xl font-bold mt-2">{userStats.totalUsers.toLocaleString()}</p>
//             </div>
//           </div>
          
//           <div className="card bg-white">
//             <div className="card-body p-6">
//               <h3 className="card-header text-slate-600">Referral Users</h3>
//               <p className="text-2xl font-bold mt-2">{userStats.referralUsers.toLocaleString()}</p>
//             </div>
//           </div>
          
//           <div className="card bg-white">
//             <div className="card-body p-6">
//               <h3 className="card-header text-slate-600">Today's Organic Users</h3>
//               <p className="text-2xl font-bold mt-2">{userStats.todayOrganic}</p>
//             </div>
//           </div>
          
//           <div className="card bg-white">
//             <div className="card-body p-6">
//               <h3 className="card-header text-slate-600">This Week's Users</h3>
//               <p className="text-2xl font-bold mt-2">{userStats.weekUsers}</p>
//             </div>
//           </div>
          
//           <div className="card bg-white">
//             <div className="card-body p-6">
//               <h3 className="card-header text-slate-600">This Month's Users</h3>
//               <p className="text-2xl font-bold mt-2">{userStats.monthUsers}</p>
//             </div>
//           </div>
          
//           <div className="card bg-white">
//             <div className="card-body p-6">
//               <h3 className="card-header text-slate-600">Last Month's Users</h3>
//               <p className="text-2xl font-bold mt-2">{userStats.lastMonthUsers}</p>
//             </div>
//           </div>
//         </div>

//         {/* Registration vs Referrals Chart */}
//         <div className="card bg-white">
//           <div className="card-body p-6">
//             <h3 className="card-header mb-4">Registrations vs Referrals</h3>
//             <div className="h-96">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={registrationData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="registrations" fill="var(--primary)" name="Total Registrations" />
//                   <Bar dataKey="referrals" fill="var(--success)" name="Referrals" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Growth Trend Chart */}
//         <div className="card bg-white mt-6">
//           <div className="card-body p-6">
//             <h3 className="card-header mb-4">User Growth Trend</h3>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={registrationData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line 
//                     type="monotone" 
//                     dataKey="registrations" 
//                     stroke="var(--primary)" 
//                     strokeWidth={2}
//                     name="Total Registrations"
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="referrals" 
//                     stroke="var(--success)" 
//                     strokeWidth={2}
//                     name="Referrals"
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';
import { FaUsers, FaUserPlus, FaUserCheck, FaCalendarAlt, FaCalendarDay, FaBars } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai'; // Import the replacement icon

const chartData = [
  { day: 'Day 1', registrations: 700, referrals: 300 },
  { day: 'Day 2', registrations: 650, referrals: 280 },
  { day: 'Day 3', registrations: 500, referrals: 250 },
  { day: 'Day 4', registrations: 450, referrals: 200 },
  { day: 'Day 5', registrations: 400, referrals: 220 },
  { day: 'Day 6', registrations: 450, referrals: 230 },
  { day: 'Day 7', registrations: 150, referrals: 100 },
];

const StatCard = ({ icon: Icon, title, value, className }) => (
  <div className={`p-4 rounded-lg shadow-md ${className} transition-all duration-300 hover:shadow-lg`}>
    <div className="flex items-center space-x-2">
      <Icon className="w-5 h-5" />
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    </div>
    <p className="mt-2 text-2xl font-semibold">{value}</p>
  </div>
);

const Analytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="md:ml-56 min-h-screen">
        {/* Top Bar */}
        <div className="bg-white shadow-sm">
          <div className="px-4 py-4 flex justify-between items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <FaBars className="w-6 h-6" />
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
              Select Date Range
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-6">Analytics</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatCard 
              icon={FaUsers} 
              title="Users" 
              value="140" 
              className="bg-green-50"
            />
            <StatCard 
              icon={FaUserPlus} 
              title="Referral Users" 
              value="64" 
              className="bg-blue-50"
            />
            <StatCard 
              icon={FaUserCheck} 
              title="Today's Organic Users" 
              value="76" 
              className="bg-green-50"
            />
            <StatCard 
              icon={FaCalendarAlt} 
              title="This Week Users" 
              value="679" 
              className="bg-blue-50"
            />
            <StatCard 
              icon={FaCalendarDay} 
              title="This Month Users" 
              value="22,727" 
              className="bg-blue-50"
            />
            <StatCard 
              icon={AiOutlineCalendar}  // Use replacement icon
              title="Last Month Users" 
              value="71,291" 
              className="bg-blue-50"
            />
          </div>

          {/* Chart */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Last 7 Days: Registrations vs Referrals</h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="day" 
                    tick={{ fontSize: 12 }}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="registrations" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    fill="#93C5FD"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="referrals" 
                    stroke="#EC4899" 
                    strokeWidth={2}
                    fill="#FBD5E8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
