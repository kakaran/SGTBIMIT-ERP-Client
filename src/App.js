import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLogin from "./LOGIN/STUDENT/StudentLogin";
import Student from "./Routes/Student";
import Faculty from "./Routes/Faculty";
import AdSupAdm from "./LOGIN/Admin_SuperAdmin/AdSupAdm";
import SuperAdmin from "./Routes/Super_Admin";
import Admin from "./Routes/Admin";
import FacDashboard from "./pages/Fac_Dashboard/FacDashboard";
import StuDashboard from "./pages/Stu_Dashboard/StuDashboard";
import SupAdmDashboard from "./pages/Sup_Adm_Dashboard/SupAdmDashboard";
import AdmDashboard from "./pages/Adm_Dashboard/AdmDashboard";
import AddStudent from "./pages/Sup_Adm_Dashboard/Add Student/AddStudent";
import MultipleStudentAdd from "./pages/Sup_Adm_Dashboard/Add Student/MultipleStudentAdd";
import HandleExcel from "./Context/Excel/handleExcel";
import AddTeacher from "./pages/Sup_Adm_Dashboard/Add Teacher/AddTeacher";
import MarkAttendance from "./pages/Fac_Dashboard/MarkAttendance/MarkAttendance";
import Subjects from "./pages/Sup_Adm_Dashboard/Subjects/Subjects";
import SubjectAdd from "./pages/Sup_Adm_Dashboard/Subjects/SubjectAdd";
import SubjectAlloTeacher from "./pages/Sup_Adm_Dashboard/Subjects/SubjectAlloTeacher";
import SubList from "./Context/SubList/SubList";
import AllData from "./Context/ALLData/AllData";

function App() {
  const StudentListData = localStorage.getItem('StudentList');
  return (
    <>
      <HandleExcel>
        <AllData>
          <SubList>
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
                  <Route exact path="Faculty/Mark_Attendance/:course/:sem/:section/:subjectName/:time/:subject_id" element={<MarkAttendance />} />

                </Route>

                {/* Admin Routes */}
                <Route exact path="/Dashboard" element={<Admin />}>
                  <Route exact path="Admin" element={<AdmDashboard />} />
                </Route>

                {/* Super Admin Routes */}
                <Route exact path="/Dashboard" element={<SuperAdmin />}>
                  <Route exact path="Sup_Admin" element={<SupAdmDashboard />} />
                  <Route exact path="Sup_Admin/AddStudent" element={<AddStudent />} />
                  <Route exact path="Sup_Admin/AddStudent/MultipleStudentAdd" element={<MultipleStudentAdd />} />
                  <Route exact path="Sup_Admin/AddTeacher" element={<AddTeacher />} />
                  <Route exact path="Sup_Admin/Subjects" element={<Subjects />} />
                  <Route exact path="Sup_Admin/Subjects/Add_Subject" element={<SubjectAdd />} />
                  <Route exact path="Sup_Admin/Subjects/Subject_Allocate" element={<SubjectAlloTeacher />} />
                </Route>
              </Routes>
            </Router>
          </SubList>
        </AllData>
      </HandleExcel>
    </>
  );
}

export default App;
