// ResetPassword.jsx
import { updateUserPassword } from '@/features/user/user.action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const { isResetPasswordSuccess, isResetPasswordLoading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams(); // Get the token from the route
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the new passwords match
    if (newPassword !== confirmNewPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const payload = {
      otp: Number(token),
      password: newPassword,
      confirmPassword: confirmNewPassword,
    };
    dispatch(updateUserPassword(payload));
  };

  useEffect(() => {
    if (isResetPasswordSuccess) {
      toast.success('password reset successfully');
      navigate('/login');
    }
  }, [isResetPasswordSuccess, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-grey-700  font-semibold border rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isResetPasswordLoading ? 'updating password' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
