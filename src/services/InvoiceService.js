import axios from "axios";

const API_URL = "http://localhost:1001/api/invoices";

const InvoiceService = {
  getAllInvoices: () => axios.get(API_URL),

  getInvoiceById: (id) => axios.get(`${API_URL}/${id}`),

  createInvoice: (invoiceData) => axios.post(API_URL, invoiceData),

  deleteInvoice: (id) => axios.delete(`${API_URL}/${id}`),
};

export default InvoiceService;