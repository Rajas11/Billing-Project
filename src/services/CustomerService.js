import axios from "axios";

const API_URL = "http://localhost:1001/api/customers";

const CustomerService = {
  getAllCustomers: () => axios.get(API_URL),
  getCustomerById: (id) => axios.get(`${API_URL}/${id}`),
  createCustomer: (customer) => axios.post(API_URL, customer),
  updateCustomer: (id, customer) => axios.put(`${API_URL}/${id}`, customer),
  deleteCustomer: (id) => axios.delete(`${API_URL}/${id}`),
};

export default CustomerService;
