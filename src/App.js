import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLogin from "./LOGIN/STUDENT/StudentLogin";
import Student from "./Routes/Student";
import Faculty from "./Routes/Faculty";
import AdSupAdm from "./LOGIN/Admin_SuperAdmin/AdSupAdm";
import Super_Admin from "./Routes/Super_Admin";
import Admin from "./Routes/Admin";
import Fac_Dashboard from "./pages/Fac_Dashboard/Fac_Dashboard"
import Stu_Dashboard from "./Pages/Stu_Dashboard/Stu_Dashboard";
import Adm_Dashboard from "./pages/Adm_Dashboard/Adm_Dashboard"
import Sup_Adm_Dashboard from "./pages/Sup_Adm_Dashboard/Sup_Adm_Dashboard"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentLogin />} />
          <Route exact path="/admin" element={<AdSupAdm />} />

          {/* Student Routes */}
          <Route exact path="/Dashboard" element={<Student />}>
            {/* <Dashboard> */}
            <Route exact path="Student" element={<Stu_Dashboard />} />
          </Route>

          {/* Faculty Routes */}
          <Route exact path="/Dashboard" element={<Faculty />}>
            <Route exact path="Faculty" element={<Fac_Dashboard />} />
          </Route>

          {/* Admin Routes */}
          <Route exact path="/Dashboard" element={<Admin />}>
            <Route exact path="Admin" element={<Adm_Dashboard />} />
          </Route>

          {/* Super Admin Routes */}
          <Route exact path="/Dashboard" element={<Super_Admin />}>
            <Route exact path="Sup_Admin" element={<Sup_Adm_Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
