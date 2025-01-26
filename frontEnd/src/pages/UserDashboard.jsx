import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const data = useSelector((state) => state.loan.loan);

  // Validate and parse values
  const loanRequired = parseFloat(data?.loanRequired) || 0;
  const loanDeposit = parseFloat(data?.loanDeposit) || 0;
  const monthsRequired = parseInt(data?.monthsRequired, 10) || 1; // Prevent division by 0

  // Calculate monthly installment, ensuring no negative or NaN values
  const monthlyInstallment = monthsRequired > 0 
    ? ((loanRequired - loanDeposit) / monthsRequired).toFixed(2) 
    : "N/A";

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">User Dashboard</h2>

      {data ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Loan Details</h3>

          <div className="space-y-2">
            {data.name && (
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Name:</span>
                <span>{data.name}</span>
              </div>
            )}

            {data.email && (
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Email:</span>
                <span>{data.email}</span>
              </div>
            )}

            {data.cnic && (
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">CNIC:</span>
                <span>{data.cnic}</span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Loan Required:</span>
              <span>PKR {loanRequired.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Loan Deposit:</span>
              <span>PKR {loanDeposit.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Months Required:</span>
              <span>{monthsRequired} months</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Monthly Installment:</span>
              <span>
                {isNaN(monthlyInstallment) || monthlyInstallment < 0
                  ? "Invalid data"
                  : `PKR ${monthlyInstallment}`}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No loan data available.</p>
      )}
    </div>
  );
};

export default UserDashboard;
