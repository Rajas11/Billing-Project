import { useEffect, useState } from "react";
import InvoiceService from "../services/InvoiceService";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await InvoiceService.getAllInvoices();
      setInvoices(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this invoice?")) return;
    try {
      await InvoiceService.deleteInvoice(id);
      setInvoices(invoices.filter((invoice) => invoice.id !== id));
    } catch (error) {
      console.error("Error deleting invoice:", error);
    }
  };

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setOpenDialog(true);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      fetchInvoices();
      return;
    }
    const filtered = invoices.filter((invoice) =>
      invoice.id.toString().includes(searchQuery) ||
      invoice.date.includes(searchQuery)
    );
    setInvoices(filtered);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Invoice Management
      </Typography>

      {/* Search Bar */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TextField
          label="Search by ID or Date"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </div>

      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "auto", mt: 4 }} />
      ) : invoices.length === 0 ? (
        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          No invoices available.
        </Typography>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Total</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>${invoice.total}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleViewInvoice(invoice)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(invoice.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Invoice View Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Invoice Details</DialogTitle>
        <DialogContent>
          {selectedInvoice && (
            <>
              <Typography variant="body1"><b>ID:</b> {selectedInvoice.id}</Typography>
              <Typography variant="body1"><b>Date:</b> {selectedInvoice.date}</Typography>
              <Typography variant="body1"><b>Total:</b> ${selectedInvoice.total}</Typography>
              <Typography variant="body1"><b>Items:</b></Typography>
              <ul>
                {selectedInvoice.items?.map((item, index) => (
                  <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Invoice;
