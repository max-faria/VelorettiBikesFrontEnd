import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    if(token){
        setToken(token)
    } else {
        setError("Token is missing")
    }
  },[]);

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();

    if(password !== confirmPassword){
        setError("Passwords do not match")
        return;
    }

    try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/user/reset-password`, {
            token,
            password
        });
        setSuccess('Password has been reset successfully');
        setTimeout(() => navigate('/'), 3000); 
        } catch (err) {
            setError('Failed to reset password. Please try again.');
        }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="">
                New Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="">
                Confirm your password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name="confirm-password"
                required
                
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white py-3 rounded hover:bg-zinc-600"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
