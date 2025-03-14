import axios from "axios";

const API_URL = "http://localhost:1001/api/auth"; // Backend URL

const AuthService = {
  // ✅ Signup User
  signup: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      throw error;
    }
  },

  // ✅ Login User
  login: async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, loginData);
      return response.data;
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      throw error;
    }
  },
};
export default AuthService;