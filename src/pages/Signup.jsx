import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });
  const nav= useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        role: `ROLE_${formData.role.toUpperCase()}`, // ✅ Fix role format
      };
      const response = await AuthService.signup(formattedData);
      console.log("Signup Successful:", response);
      <Alert severity="success">SignUped Welcome</Alert>
         nav("/");
    } catch (err) {
      setError(err.response?.data?.message || "Error signing up");
    }
  };

  

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
      <Paper elevation={3} sx={{ padding: 4, width: "100%", textAlign: "center" }}>
      <Typography variant="h5">Signup</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSignup}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
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

        <Button variant="contained" color="primary" fullWidth type="submit">
          Signup
        </Button>
      </form>
      </Paper>
            </Box>
    </Container>
  );
};

export default Signup;
