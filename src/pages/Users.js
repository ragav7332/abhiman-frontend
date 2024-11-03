import React from 'react';

const usersData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'Viewer' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor' },
  { id: 5, name: 'Eve White', email: 'eve@example.com', role: 'Viewer' },
];

const Users = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 style={{fontSize:"20px"}}>Users</h2>


      <div className="overflow-x-auto">
        <table className="table table-zebra table-compact " style={{width:'80%'}}>
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`badge ${
                      user.role === 'Admin'
                        ? 'badge-primary'
                        : user.role === 'Editor'
                        ? 'badge-secondary'
                        : 'badge-info'
                    }`}
                  >
                    {user.role}
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

export default Users;
