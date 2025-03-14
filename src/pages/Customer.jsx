import { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";


// const Customer = () => {
//   const [customers, setCustomers] = useState([]);
//   const [newCustomer, setNewCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });
//   const [loading, setLoading] = useState(false); // Add loading state

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     setLoading(true); // Set loading to true when fetching
//     try {
//       const response = await CustomerService.getAllCustomers();
//       setCustomers(response.data);
//     } catch (error) {
//       console.error("Error fetching customers:", error);
//     } finally {
//       setLoading(false); // Set loading to false after fetching
//     }
//   };

//   const handleChange = (e) => {
//     setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading when submitting
//     try {
//       await CustomerService.createCustomer(newCustomer);
//       fetchCustomers(); // Refresh customer list
//       setNewCustomer({ name: "", email: "", phone: "", address: "" });
//     } catch (error) {
//       console.error("Error adding customer:", error);
//     } finally {
//       setLoading(false); // Set loading to false after submitting
//     }
//   };

//   const handleDelete = async (id) => {
//     setLoading(true); // Set loading when deleting
//     try {
//       await CustomerService.deleteCustomer(id);
//       fetchCustomers();
//     } catch (error) {
//       console.error("Error deleting customer:", error);
//     } finally {
//       setLoading(false); // Set loading to false after deleting
//     }
//   };

//   return (
//     <div className="container"  >
//       <h2>Customers</h2>

//       {/* Add Customer Form */}
//       <form onSubmit={handleSubmit} >
      
//         <input
//           type="text"
//           name="name"
//           value={newCustomer.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
          
//         />
//         <input
//           type="email"
//           name="email"
//           value={newCustomer.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           value={newCustomer.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//         />
//         <input
//           type="text"
//           name="address"
//           value={newCustomer.address}
//           onChange={handleChange}
//           placeholder="Address"
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Adding..." : "Add Customer"}
//         </button>
//       </form>

//       {/* Customer List */}
//       {loading ? (
//         <p>Loading customers...</p> // Display loading text
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr key={customer.id}>
//                 <td>{customer.name}</td>
//                 <td>{customer.email}</td>
//                 <td>{customer.phone}</td>
//                 <td>{customer.address}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(customer.id)}
//                     disabled={loading}
//                   >
//                     {loading ? "Deleting..." : "Delete"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };


import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await CustomerService.getAllCustomers();
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await CustomerService.createCustomer(newCustomer);
      fetchCustomers();
      setNewCustomer({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      console.error("Error adding customer:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await CustomerService.deleteCustomer(id);
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Customers
      </Typography>

      {/* Customer Form */}
      <Paper sx={{ p: 3,  mb:4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={newCustomer.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={newCustomer.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={newCustomer.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={newCustomer.address}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid>
          <Grid  item xs={12} sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Customer"}
          </Button>
          </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Customer Table */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(customer.id)}
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};



export default Customer;