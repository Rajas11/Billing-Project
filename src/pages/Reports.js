import { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {
  const [report, setReport] = useState({ totalSales: 0, totalInvoices: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/api/reports");
      setReport(response.data);
    } catch (error) {
      setError("Error fetching report. Please try again.");
      console.error("Error fetching report:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
      
      {loading ? (
        <p>Loading report...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="border p-4 rounded shadow-md bg-gray-100">
          <p className="text-lg">Total Invoices: <strong>{report.totalInvoices}</strong></p>
          <p className="text-lg">Total Sales: <strong>${report.totalSales}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Reports;