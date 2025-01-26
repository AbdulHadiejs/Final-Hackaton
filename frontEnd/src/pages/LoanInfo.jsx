import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { addLoan } from '../store/reducers/loanSlice'; 
import { useNavigate } from 'react-router';

const LoanInfo = () => {
  const navigate = useNavigate()
  const [loanRequired, setLoanRequired] = useState('');
  const [loanDeposit, setLoanDeposit] = useState('');
  const [monthsRequired, setMonthsRequired] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch(); // Initialize the Redux dispatch function

  const calculateFunct = (e) => {
    e.preventDefault();
    if (loanRequired && monthsRequired && loanDeposit) {
      const loanRequiredNum = parseFloat(loanRequired);
      const loanDepositNum = parseFloat(loanDeposit);
      const monthsRequiredNum = parseInt(monthsRequired, 10);

      if (!isNaN(loanRequiredNum) && !isNaN(loanDepositNum) && !isNaN(monthsRequiredNum)) {
        const PkrforEachMonth = (loanRequiredNum - loanDepositNum) / monthsRequiredNum;
        alert(`You will pay ${PkrforEachMonth.toFixed(2)} each month.`);
        setModalVisible(true);
      } else {
        alert('Please enter valid numbers for all fields.');
      }
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!cnic || !email || !name) {
      alert('All fields are required!');
      return;
    }

    // Prepare loan data
    const loanData = {
      loanRequired,
      loanDeposit,
      monthsRequired,
      cnic,
      email,
      name,
    };

    // Dispatch loan data to Redux store
    dispatch(addLoan(loanData));

    alert('Details verified and saved successfully!');
    setModalVisible(false); // Close the modal
    // Optionally clear the form
    setLoanRequired('');
    setLoanDeposit('');
    setMonthsRequired('');
    setCnic('');
    setEmail('');
    setName('');
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <form className="space-y-6" onSubmit={calculateFunct}>
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-semibold text-gray-700">
            How much loan is required
          </label>
          <input
            onChange={(e) => setLoanRequired(e.target.value)}
            type="number"
            id="loanAmount"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={loanRequired}
          />
        </div>

        <div>
          <label htmlFor="depositAmount" className="block text-sm font-semibold text-gray-700">
            How much initial loan will you deposit
          </label>
          <input
            onChange={(e) => setLoanDeposit(e.target.value)}
            type="number"
            id="depositAmount"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={loanDeposit}
          />
        </div>

        <div>
          <label htmlFor="repaymentTime" className="block text-sm font-semibold text-gray-700">
            In how much time you will submit the loan
          </label>
          <input
            onChange={(e) => setMonthsRequired(e.target.value)}
            type="number"
            id="repaymentTime"
            placeholder="write in months"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={monthsRequired}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Verify Your Details</h3>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label htmlFor="cnic" className="block text-sm font-semibold text-gray-700">
                  CNIC
                </label>
                <input
                  type="text"
                  id="cnic"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <button
                onClick={()=> navigate('/userDashboard')}
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanInfo;
