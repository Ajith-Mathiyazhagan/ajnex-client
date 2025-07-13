import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExcel,
  faFilePdf,
  faUserShield,
  faCheckCircle,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase'; // 🔁 path to your firebase.js

const Adminajnex = () => {
  const todayDate = new Date().toISOString().split('T')[0];

  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(todayDate);
  const [toDate, setToDate] = useState(todayDate);
  const [checkedRows, setCheckedRows] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      to.setHours(23, 59, 59, 999);

      const enquiriesRef = collection(db, 'enquiries');
      const q = query(
        enquiriesRef,
        where('createdAt', '>=', from),
        where('createdAt', '<=', to)
      );

      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
      alert("Failed to load data");
    }
  };

  useEffect(() => {
    fetchData();
  }); // only when date changes

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    XLSX.writeFile(workbook, "Enquiries.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Enquiries Report", 14, 10);

    const tableColumn = ["Name", "Mobile", "Email", "Service", "Business Type", "Preferred Time", "Date", "Spoke"];
    const tableRows = filteredData.map((item) => [
      item.name,
      item.mobile,
      item.email,
      item.service,
      item.businessType,
      item.preferredTime,
      item.createdAt?.toDate ? item.createdAt.toDate().toLocaleString() : '',
      checkedRows[item.id] ? "Yes" : "No"
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("Enquiries.pdf");
  };

  const toggleSpoke = (id) => {
    setCheckedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.mobile?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.service?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold font text-center">
        <FontAwesomeIcon icon={faUserShield} className="me-2 highlight" />
        Admin - Enquiry List
      </h2>

      <div className="mb-4 d-flex justify-content-center flex-wrap gap-3">
        <div className="d-flex flex-column align-items-start">
          <label className="fw-bold mb-1">From:</label>
          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column align-items-start">
          <label className="fw-bold mb-1">To:</label>
          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-end">
        <div className="position-relative w-100 w-md-50">
          <FontAwesomeIcon icon={faSearch} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control ps-5 zoho-input"
            placeholder="Search by Name, Mobile or Service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-end gap-2 flex-wrap">
        <button className="btn btn-outline-primary" onClick={exportToExcel}>
          <FontAwesomeIcon icon={faFileExcel} className="me-2" />
          Export to Excel
        </button>
        <button className="btn btn-outline-danger" onClick={exportToPDF}>
          <FontAwesomeIcon icon={faFilePdf} className="me-2" />
          Export to PDF
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center table-striped">
          <thead className='table-success'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Service</th>
              <th>Business Type</th>
              <th>Preferred Time</th>
              <th>Date</th>
              <th>Spoke</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="9">No matching records found.</td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.service}</td>
                  <td>{item.businessType}</td>
                  <td>{item.preferredTime}</td>
                  <td>
                    {item.createdAt?.toDate
                      ? item.createdAt.toDate().toLocaleString()
                      : ""}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedRows[item.id] || false}
                      onChange={() => toggleSpoke(item.id)}
                    />
                    {checkedRows[item.id] && (
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success ms-2" />
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .zoho-input {
          border-radius: 1px;
          border: 1px solid #ced4da;
          padding: 10px 15px;
          padding-left: 2.5rem;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }

        .zoho-input:focus {
          border-color: #FF5C38;
          outline: none;
          box-shadow: 0 0 0 2px rgba(64, 153, 255, 0.2);
        }

        @media (max-width: 768px) {
          .w-md-50 {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Adminajnex;
