import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NUBStudentPortal = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuCards = [
    { title: "Semester Schedule", icon: "bi-calendar3" },
    { title: "Semester Registration", icon: "bi-book" },
    { title: "Financial Details", icon: "bi-currency-dollar" },
    { title: "Result Information", icon: "bi-pencil-fill" },
    { title: "Waiver Info", icon: "bi-hand-thumbs-down" },
    { title: "Cost Package", icon: "bi-circle-half" },
    { title: "Payable List", icon: "bi-hand-index-thumb" },
    { title: "All Payments", icon: "bi-hand-thumbs-up" },
  ];

  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      {/* SIDEBAR - Conditioned by isSidebarOpen */}
      <div
        className={`text-white transition-all ${
          isSidebarOpen ? "d-block" : "d-none"
        }`}
        style={{
          width: "260px",
          backgroundColor: "#004a99",
          transition: "0.3s",
        }}
      >
        <div className="p-3 border-bottom border-primary d-flex align-items-center mb-3">
          <img
            className="bg-white rounded-circle me-2"
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid #00d2ff",
            }}
            src="images/abc_icon.png"
            alt="ABC Portal logo"
          />
          <h5 className="mb-0 fw-light fs-4 fw-bold">ABC PORTAL</h5>
        </div>

        <div className="px-3">
          <ul className="nav flex-column gap-2 small opacity-75 list-unstyled fs-6">
            <li>Waiver Info</li>
            <li>Cost Package</li>
            <li>Course Structure</li>
            <hr className="bg-light opacity-25" />
            <li>Semester Schedule</li>
            <li>Semester Registration</li>
            <li>Class Routine</li>
            <li>TER Fill Up</li>
            <hr className="bg-light opacity-25" />
            <li>Clearance for Assessment</li>
            <li>Result</li>
            <li>Request Academic Credential</li>
            <hr className="bg-light opacity-25" />
            <li>Payable List</li>
            <li>Payment Information</li>
            <li>Financial Summary</li>
            <li>Financial Details</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* NAVBAR */}
        <nav
          className="navbar navbar-light bg-white px-4 shadow-sm"
          style={{ height: "80px" }}
        >
          <div className="d-flex align-items-center">
            {/* Click event to toggle sidebar */}
            <i
              className="bi bi-list fs-1 text-muted cursor-pointer me-3"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{ cursor: "pointer" }}
            ></i>
            {/* LARGE NAVBAR TEXT */}
            <span className="fs-3 fw-bold text-secondary ms-2">Home</span>
          </div>

          <div className="d-flex align-items-center gap-4">
            <i className="bi bi-bell fs-3 text-muted"></i>
            <img
              src="https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw="
              className="rounded-circle border border-2 shadow-sm"
              alt="profile"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </nav>

        {/* MAIN BODY */}
        <div className="p-4 overflow-auto">
          {/* Breadcrumb Area */}
          <div className="d-flex justify-content-between align-items-center mb-4 text-secondary">
            <h5 className="mb-0 fw-bold">Dashboard</h5>
            <i className="bi bi-house-door-fill text-primary fs-4"></i>
          </div>

          {/* Welcome Banner */}
          <div className="bg-white p-5 rounded shadow-sm mb-5 border-start border-5 border-primary fs-4">
            <h2 className="text-secondary fw-normal mb-0">
              Welcome to ABC Student Portal
            </h2>
          </div>

          {/* Dashboard Cards Grid */}
          <div className="row g-4">
            {menuCards.map((card, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center py-5 dashboard-card">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <i
                      className={`bi ${card.icon} display-1 text-primary mb-4`}
                    ></i>
                    <h5 className="text-primary fw-bold mt-2">{card.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer
          className="px-4 py-3 mt-auto bg-white border-top text-muted"
          style={{ fontSize: "14px" }}
        >
          Copyright © 2026 All rights reserved. Designed and developed by:
          <span className="text-primary fw-bold">Bose Technology</span>
        </footer>
      </div>

      <style>{`
        .dashboard-card { 
          transition: all 0.3s ease; 
          cursor: pointer; 
          min-height: 300px; 
        }
        .dashboard-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 1rem 3rem rgba(0,0,0,.15)!important;
        }
        .cursor-pointer { cursor: pointer; }
        ul li { 
          padding: 8px 0; 
          cursor: pointer; 
          transition: 0.2s;
        }
        ul li:hover { 
          color: white; 
          opacity: 1; 
          padding-left: 8px;
        }
      `}</style>
    </div>
  );
};

export default NUBStudentPortal;
