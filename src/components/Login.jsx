import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const { setAccountId, setToken } = useContext(AuthContext); // Use AuthContext
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await axios.post("http://localhost:8080/auth/signin", {
        email,
        password,
      });

      if (response.data && response.data.jwt) {
        // Save token and userId in AuthContext
        setToken(response.data.jwt);
        setAccountId(response.data.userId); // Assuming userId comes in the response

        navigate("/");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r ">
      <div className="w-full p-8 m-auto bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Đăng Nhập
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-lg font-medium text-green-900">
              Email
            </label>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              required
              className="w-full p-3 mt-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-green-900">
              Mật Khẩu
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              required
              className="w-full p-3 mt-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Đăng Nhập
          </button>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </form>
        <div className="mt-6 text-center text-gray-600">Hoặc</div>
        <Link
          to="/register"
          className="block text-center text-green-600 hover:underline mt-4"
        >
          Tạo tài khoản mới
        </Link>
      </div>
    </div>
  );
};

export default Login;
