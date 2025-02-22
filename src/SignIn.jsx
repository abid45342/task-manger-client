import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
        });
        navigate('/routine'); // Redirect after successful login
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path d="M10 2.5C5.81 2.5 2 5.58 2 9.84s3.81 7.34 8 7.34c2.8 0 5.26-1.11 7.03-2.96l4.49 4.49-1.76 1.76-4.49-4.49C14.91 16.71 12.5 17.5 10 17.5c-3.3 0-6-2.42-6-5.16 0-2.56 2.32-4.62 5.18-4.62 2.23 0 4.12 1.56 4.79 3.64H16.28C15.55 7.73 13.5 6.5 10 6.5c-2.6 0-4.71 1.94-4.71 4.34 0 2.39 2.1 4.15 4.71 4.15 1.49 0 2.85-.5 3.91-1.34l4.51 4.51 1.77-1.77-4.51-4.51C13.63 13.51 12.02 14 10 14c-3.34 0-6-2.66-6-5.16 0-2.7 2.18-4.87 4.87-4.87 2.68 0 4.88 2.15 4.88 4.87z"/>
          </svg>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
