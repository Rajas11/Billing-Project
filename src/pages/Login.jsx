import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(formData);
      console.log("Login Successful:", response);
      alert("Login Successful!");
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
        <Paper elevation={3} sx={{ padding: 4, width: "100%", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="#">Forgot Password?</Link>
            </Box>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} type="submit">
              Login
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/signup">Register</Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
