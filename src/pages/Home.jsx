import React from "react";
import Navbar from "../components/Navbar";
import { Container, Typography, Paper, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Customers", description: "Manage customer details", path: "/customer" },
    { title: "Products", description: "View and add products", path: "/product" },
    { title: "Invoices", description: "Create and manage invoices", path: "/invoice" },
    { title: "Reports", description: "Generate and view reports", path: "/reports" },
  ];
                                                                 
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center", mb: 4 }}>
          <Typography variant="h4" gutterBottom>Welcome to the Billing System</Typography>
          <Typography variant="body1">
            Manage your invoices, customers, and products efficiently.
          </Typography>
        </Paper>

        {/* Services Grid */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: "center" }}>
                <CardActionArea onClick={() => navigate(service.path)}>
                  <CardContent>
                   <Typography variant="h6">{service.title}</Typography>
                   <Typography variant="body2" color="textSecondary">{service.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
