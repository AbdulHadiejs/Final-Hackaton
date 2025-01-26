import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
// import { useAuth } from '../context/AppContext';
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
  const navigate = useNavigate()
  const [showRegisterMessage, setShowRegisterMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Access auth methods from context
  // const { signUp, signIn, signUpWithGoogle } = useAuth();

  // const handleRegisterPrompt = (e) => {
  //   e.preventDefault();
  //   setShowRegisterMessage(true);
  //   setMessage('');
  // };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage('');

  //   try {
  //     if (showRegisterMessage) {
  //       // Call signUp method from context
  //       await signUp(email, password);
  //       setMessage('Account created successfully!. Redirecting...');
  //       navigate('/')
  //       setShowRegisterMessage(false);
  //     } else {
  //       // Call signIn method from context
  //       await signIn(email, password);
  //       setMessage('Login successful! Redirecting...');
  //       navigate('/')
  //     }
  //   } catch (error) {
  //     setMessage(error.message || 'An error occurred. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGoogleSignIn = async () => {
  //   setLoading(true);
  //   setMessage('');

  //   try {
  //     // Call Google Sign-In method from context
  //     await signUpWithGoogle();
  //     setMessage('Google Sign-In successful! Redirecting...');
  //     navigate('/');

  //   } catch (error) {
  //     setMessage(error.message || 'An error occurred during Google Sign-In.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {showRegisterMessage ? 'Register Now' : 'Login to Your Account'}
        </h1>

        {/* Feedback Message */}
        {message && (
          <p
            className={`mb-4 text-center ${
              message.includes('success') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message}
          </p>
        )}

        {/* Form */}
        <form
        //  onSubmit={handleFormSubmit}
         >
          {/* Email Input */}
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              required
            />
          </label>

          {/* Password Input */}
          <label className="block mb-6">
            <span className="block text-sm font-medium text-gray-700">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg transition mb-4 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {loading ? 'Processing...' : showRegisterMessage ? 'Register' : 'Login'}
          </button>
        </form>

        {/* Sign-Up Prompt */}
        <p className="text-sm text-center text-gray-600 mb-4">
          {showRegisterMessage ? (
            <>
              Already have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegisterMessage(false);
                  setMessage('');
                }}
                className="text-blue-500 hover:underline"
              >
                Login
              </a>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <a
                href="#"
                // onClick={handleRegisterPrompt}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </a>
            </>
          )}
        </p>

        {/* Google Sign-In */}
        <button
          // onClick={handleGoogleSignIn}
          disabled={loading}
          className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition"
        >
          <FaGoogle className="text-red-500 mr-2" />
          <span>{loading ? 'Processing...' : 'Sign in with Google'}</span>
        </button>

        {/* Footer Text */}
        <p className="text-xs text-center text-gray-500 mt-6">
          © 2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
