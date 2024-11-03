// import React, { useState } from "react";
// import {

//   Line,
 
// } from "recharts";
// import {
//   FiUsers,
//   FiUserPlus,
//   FiUserCheck,
//   FiCalendar,

// } from "react-icons/fi";

// const chartData = [
//   { day: "Day 1", registrations: 700, referrals: 300 },
//   { day: "Day 2", registrations: 650, referrals: 280 },
//   { day: "Day 3", registrations: 500, referrals: 250 },
//   { day: "Day 4", registrations: 450, referrals: 200 },
//   { day: "Day 5", registrations: 400, referrals: 220 },
//   { day: "Day 6", registrations: 450, referrals: 230 },
//   { day: "Day 7", registrations: 150, referrals: 100 },
//   { day: "Day 8", registrations: 800, referrals: 400 },
//   { day: "Day 9", registrations: 700, referrals: 350 },
//   { day: "Day 10", registrations: 600, referrals: 300 },
// ];

// const StatCard = ({ icon: Icon, title, value, className }) => (
//   <div className={`card ${className}`}>
//     <div className="card-body">
//       <div className="flex items-center gap-2">
//         <Icon className="w-5 h-5" />
//         <h3 className="text-content2">{title}</h3>
//       </div>
//       <p className="text-2xl font-semibold mt-2">{value}</p>
//     </div>
//   </div>
// );

// const Analytics = () => {
//   const [dateRange, setDateRange] = useState("Last 7 Days");

//   const getChartDataByDateRange = (range) => {
//     switch (range) {
//       case "Last 7 Days":
//         return chartData.slice(-7);
//       case "Last 10 Days":
//         return chartData;
//       default:
//         return chartData;
//     }
//   };

//   const data = getChartDataByDateRange(dateRange);

//   return (
//     <div className="min-h-screen bg-surface-50 dashboard-container">
//       <h2 style={{ fontSize: "20px" }}>Analytics</h2>

//       <div className="md:ml-56 min-h-screen">
//         <div className="navbar bg-surface-100">
//           <div className="navbar-end">
//             <select
//               value={dateRange}
//               onChange={(e) => setDateRange(e.target.value)}
//               className="btn btn-outline"
//             >
//               <option value="Last 7 Days">Last 7 Days</option>
//               <option value="Last 10 Days">Last 10 Days</option>
//             </select>
//           </div>
//         </div>

//         <div className="p-4 sm:p-6 lg:p-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//             <div
//               className=""
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Adjust as needed
//                 gap: "16px", // Space between cards
//                 padding: "16px", // Optional padding for the container
//               }}
//             >
//               <StatCard
//                 icon={FiUsers}
//                 title="Users"
//                 value="140"
//                 className="bg-primary/10"
//               />
//               <StatCard
//                 icon={FiUserPlus}
//                 title="Referral Users"
//                 value="64"
//                 className="bg-secondary/10"
//               />
//               <StatCard
//                 icon={FiUserCheck}
//                 title="Today's Organic Users"
//                 value="76"
//                 className="bg-success/10"
//               />
//               <StatCard
//                 icon={FiCalendar}
//                 title="This Week Users"
//                 value="679"
//                 className="bg-warning/10"
//               />
//               <StatCard
//                 icon={FiCalendar}
//                 title="This Month Users"
//                 value="22,727"
//                 className="bg-error/10"
//               />
//               <StatCard
//                 icon={FiCalendar}
//                 title="Last Month Users"
//                 value="71,291"
//                 className="bg-info/10"
//               />
//             </div>
//           </div>

//           <div className="card">
//             <div className="card-body">
//               <h3 className="card-header">Data for: {dateRange}</h3>
//               <div className="h-64 sm:h-80">
//                 {/* <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={data}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="day" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line
//                       type="monotone"
//                       dataKey="registrations"
//                       stroke="#8884d8"
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="referrals"
//                       stroke="#82ca9d"
//                     />
//                   </LineChart>
//                 </ResponsiveContainer> */}

// <Line id="line-chart" data={data} options={{ responsive: true }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;


import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Ensure all necessary components are imported
import {
  FiUsers,
  FiUserPlus,
  FiUserCheck,
  FiCalendar,
} from "react-icons/fi";

const chartData = [
  { day: "Day 1", registrations: 700, referrals: 300 },
  { day: "Day 2", registrations: 650, referrals: 280 },
  { day: "Day 3", registrations: 500, referrals: 250 },
  { day: "Day 4", registrations: 450, referrals: 200 },
  { day: "Day 5", registrations: 400, referrals: 220 },
  { day: "Day 6", registrations: 450, referrals: 230 },
  { day: "Day 7", registrations: 150, referrals: 100 },
  { day: "Day 8", registrations: 800, referrals: 400 },
  { day: "Day 9", registrations: 700, referrals: 350 },
  { day: "Day 10", registrations: 600, referrals: 300 },
  { day: "Day 11", registrations: 650, referrals: 370 },
  { day: "Day 12", registrations: 720, referrals: 420 },
  { day: "Day 13", registrations: 730, referrals: 410 },
  { day: "Day 14", registrations: 800, referrals: 450 },
  { day: "Day 15", registrations: 900, referrals: 480 },
  { day: "Day 16", registrations: 850, referrals: 460 },
  { day: "Day 17", registrations: 950, referrals: 500 },
  { day: "Day 18", registrations: 700, referrals: 380 },
  { day: "Day 19", registrations: 800, referrals: 390 },
  { day: "Day 20", registrations: 750, referrals: 370 },
  { day: "Day 21", registrations: 680, referrals: 340 },
  { day: "Day 22", registrations: 600, referrals: 300 },
  { day: "Day 23", registrations: 620, referrals: 310 },
  { day: "Day 24", registrations: 610, referrals: 330 },
  { day: "Day 25", registrations: 500, referrals: 250 },
  { day: "Day 26", registrations: 450, referrals: 240 },
  { day: "Day 27", registrations: 470, referrals: 230 },
  { day: "Day 28", registrations: 800, referrals: 400 },
  { day: "Day 29", registrations: 750, referrals: 370 },
  { day: "Day 30", registrations: 900, referrals: 460 },
];


const StatCard = ({ icon: Icon, title, value, className }) => (
  <div className={`card ${className}`}>
    <div className="card-body">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5" />
        <h3 className="text-content2">{title}</h3>
      </div>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  </div>
);

const Analytics = () => {
  const [dateRange, setDateRange] = useState("Last 7 Days");

  const getChartDataByDateRange = (range) => {
    switch (range) {
      case "Last 7 Days":
        return chartData.slice(-7);
      case "Last 10 Days":
        return chartData.slice(-10);
      case "last 20 Days":
        return chartData.slice(-20);
      case "All":
        return chartData;
      default:
        return chartData;
    }
  };

  const data = getChartDataByDateRange(dateRange);

  return (
    <div className="min-h-screen bg-surface-50 dashboard-container">
      <h2 style={{ fontSize: "20px" }}>Analytics</h2>

      <div className="md:ml-56 min-h-screen">
        <div className="navbar bg-surface-100">
          <div className="navbar-end">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="btn btn-outline"
            >
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 10 Days">Last 10 Days</option>
              <option value="Last 20 Days">Last 20 Days</option>
              <option value="All">All</option>
            </select>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div
              className=""
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "16px",
                padding: "16px",
              }}
            >
              <StatCard
                icon={FiUsers}
                title="Users"
                value="140"
                className="bg-primary/10"
              />
              <StatCard
                icon={FiUserPlus}
                title="Referral Users"
                value="64"
                className="bg-secondary/10"
              />
              <StatCard
                icon={FiUserCheck}
                title="Today's Organic Users"
                value="76"
                className="bg-success/10"
              />
              <StatCard
                icon={FiCalendar}
                title="This Week Users"
                value="679"
                className="bg-warning/10"
              />
              <StatCard
                icon={FiCalendar}
                title="This Month Users"
                value="22,727"
                className="bg-error/10"
              />
              <StatCard
                icon={FiCalendar}
                title="Last Month Users"
                value="71,291"
                className="bg-info/10"
              />
            </div>
          </div>

          <div>
  <div className="card-body">
    <h3 className="card-header">Data for: {dateRange}</h3>
    <div className="h-64 md:h-80">
      <ResponsiveContainer width="100%" height={450}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="registrations"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="referrals"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
