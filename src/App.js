import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLogin from "./LOGIN/STUDENT/StudentLogin";
import Student from "./Routes/Student";
import Faculty from "./Routes/Faculty";
import AdSupAdm from "./LOGIN/Admin_SuperAdmin/AdSupAdm";
import Super_Admin from "./Routes/Super_Admin";
import Admin from "./Routes/Admin";
import FacDashboard from "./pages/Fac_Dashboard/FacDashboard";
import StuDashboard from "./pages/Stu_Dashboard/StuDashboard";
import SupAdmDashboard from "./pages/Sup_Adm_Dashboard/SupAdmDashboard";
import AdmDashboard from "./pages/Adm_Dashboard/AdmDashboard";
import AddStudent from "./pages/Sup_Adm_Dashboard/Add Student/AddStudent";
import MultipleStudentAdd from "./pages/Sup_Adm_Dashboard/Add Student/MultipleStudentAdd";
import HandleExcel from "./Context/Excel/handleExcel";

function App() {
  const StudentListData = localStorage.getItem('StudentList');
  return (
    <>
      <HandleExcel>
        <Router>
          <Routes>
            <Route exact path="/" element={<StudentLogin />} />
            <Route exact path="/admin" element={<AdSupAdm />} />

            {/* Student Routes */}
            <Route exact path="/Dashboard" element={<Student />}>
              {/* <Dashboard> */}
              <Route exact path="Student" element={<StuDashboard />} />
            </Route>

            {/* Faculty Routes */}
            <Route exact path="/Dashboard" element={<Faculty />}>
              <Route exact path="Faculty" element={<FacDashboard />} />
            </Route>

            {/* Admin Routes */}
            <Route exact path="/Dashboard" element={<Admin />}>
              <Route exact path="Admin" element={<AdmDashboard />} />
            </Route>

            {/* Super Admin Routes */}
            <Route exact path="/Dashboard" element={<Super_Admin />}>
              <Route exact path="Sup_Admin" element={<SupAdmDashboard />} />
              <Route exact path="Sup_Admin/AddStudent" element={<AddStudent />} />
              <Route exact path="Sup_Admin/AddStudent/MultipleStudentAdd" element={<MultipleStudentAdd />} />
            </Route>
          </Routes>
        </Router>
      </HandleExcel>
    </>
  );
}

export default App;
