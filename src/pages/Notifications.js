// import React from 'react';
// import { FiBell } from 'react-icons/fi';

// const notificationsData = [
//   { id: 1, type: 'System', message: 'Scheduled maintenance on Nov 10', date: '2024-11-02' },
//   { id: 2, type: 'Alert', message: 'Unusual login detected', date: '2024-11-01' },
//   { id: 3, type: 'Message', message: 'New feature update available', date: '2024-10-31' },
// ];

// const Notifications = () => {
//   return (
//     <div className="p-4 sm:p-6 lg:p-8">
//       <h2 className="text-2xl font-bold mb-6 text-content1">Notifications</h2>
//       <div className="card">
//         <div className="card-body">
//           <ul className="space-y-4">
//             {notificationsData.map((notification) => (
//               <li key={notification.id} className="flex items-start gap-4">
//                 <FiBell className="text-primary w-5 h-5" />
//                 <div>
//                   <h3 className="text-content1 font-medium">{notification.type}</h3>
//                   <p className="text-content2">{notification.message}</p>
//                   <small className="text-sm text-content3">{notification.date}</small>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notifications;


import React from 'react';

const notificationsData = [
  { id: 1, type: 'Message', content: 'You have a new message from John.', date: '2024-11-01', status: 'Unread' },
  { id: 2, type: 'Alert', content: 'Your account balance is low.', date: '2024-10-30', status: 'Read' },
  { id: 3, type: 'Reminder', content: 'Meeting scheduled at 3 PM today.', date: '2024-10-29', status: 'Unread' },
  { id: 4, type: 'Message', content: 'Anna commented on your post.', date: '2024-10-28', status: 'Read' },
  { id: 5, type: 'Alert', content: 'Update your profile information.', date: '2024-10-27', status: 'Unread' },
];

const Notifications = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2  style={{fontSize:"20px"}}>Notifications</h2>

 
      <div className="overflow-x-auto">
        <table className="table table-zebra table-compact" style={{width:'90%'}}>
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Type</th>
              <th className="text-left">Content</th>
              <th className="text-left">Date</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {notificationsData.map((notification) => (
              <tr key={notification.id}>
                <td className="px-4 py-2">{notification.id}</td>
                <td className="px-4 py-2">{notification.type}</td>
                <td className="px-4 py-2">{notification.content}</td>
                <td className="px-4 py-2">{notification.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`badge ${
                      notification.status === 'Unread'
                        ? 'badge-warning'
                        : 'badge-success'
                    }`}
                  >
                    {notification.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
