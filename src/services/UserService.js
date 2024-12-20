/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const USER_API_BASE_URL = "https://tams.azurewebsites.net/api/users";
const ROLE_API_BASE_URL = "https://tams.azurewebsites.net/auth/role";
const SIGNUP_API_BASE_URL = "https://tams.azurewebsites.net/auth/signup"; // Địa chỉ API tạo người dùng mới

class UserService {
  getInfoUser(token) {
    // Set the Authorization header in the config object
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Pass the config object as the second parameter
    return axios.get(USER_API_BASE_URL + "/profile", config);
  }

  // Phương thức tạo người dùng mới
  signup(token, userData) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.post(SIGNUP_API_BASE_URL, userData, config);
  }

  updateUserInfo(token, formData) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
  
    return axios.post(USER_API_BASE_URL + "/update", formData, config);
  }
  
  // Method to get user role
  getUserRole(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.get(ROLE_API_BASE_URL, config);
  }

  getAllUsers(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.get(USER_API_BASE_URL + "/get/all", config);
  }

  getDashboardHousehold(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return axios.get(`https://tams.azurewebsites.net/api/dashboard/household`, config);
}
}

export default new UserService();