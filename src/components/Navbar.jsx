import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Billing System
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/product">Products</Button>
        <Button color="inherit" component={Link} to="/customer">Customer</Button>
        <Button color="inherit" component={Link} to="/invoice">Invoices</Button>
        <Button color="inherit" component={Link} to="/report">Reports</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
