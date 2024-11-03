// import React from 'react';

// const transactionsData = [
//   { id: 'T001', amount: '$500.00', status: 'Completed' },
//   { id: 'T002', amount: '$150.00', status: 'Pending' },
//   { id: 'T003', amount: '$200.00', status: 'Failed' },
// ];

// const Transactions = () => {
//   return (
//     <div className="p-4 sm:p-6 lg:p-8">
//       <h2 className="text-2xl font-bold mb-6 text-content1">Transactions</h2>
//       <div className="card">
//         <div className="card-body">
//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th className="text-left">Transaction ID</th>
//                 <th className="text-left">Amount</th>
//                 <th className="text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactionsData.map((transaction) => (
//                 <tr key={transaction.id}>
//                   <td className="py-2">{transaction.id}</td>
//                   <td className="py-2">{transaction.amount}</td>
//                   <td className="py-2">
//                     <span className={`badge ${transaction.status === 'Completed' ? 'badge-success' : transaction.status === 'Pending' ? 'badge-warning' : 'badge-error'}`}>
//                       {transaction.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transactions;


import React from 'react';

const transactionsData = [
  { id: 1, description: 'Payment received from John Doe', amount: '$500', date: '2024-11-01', status: 'Completed' },
  { id: 2, description: 'Refund to Anna Smith', amount: '-$200', date: '2024-10-30', status: 'Refunded' },
  { id: 3, description: 'Payment received from XYZ Corp.', amount: '$1200', date: '2024-10-29', status: 'Completed' },
  { id: 4, description: 'Subscription fee for October', amount: '-$50', date: '2024-10-28', status: 'Paid' },
  { id: 5, description: 'Chargeback from Mike', amount: '-$150', date: '2024-10-27', status: 'Chargeback' },
];

const Transactions = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
       <h1 className="" style={{fontSize:"20px"}}>Transactions</h1>


      <div className="overflow-x-auto ">
        <table className="table table-zebra table-compact mx-auto " style={{width:'90%'}}>
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Description</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Date</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-4 py-2">{transaction.id}</td>
                <td className="px-4 py-2">{transaction.description}</td>
                <td className="px-4 py-2">{transaction.amount}</td>
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`badge ${
                      transaction.status === 'Completed'
                        ? 'badge-success'
                        : transaction.status === 'Refunded'
                        ? 'badge-warning'
                        : transaction.status === 'Paid'
                        ? 'badge-info'
                        : 'badge-error'
                    }`}
                  >
                    {transaction.status}
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

export default Transactions;
