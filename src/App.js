import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Login from './LOGIN/Login';
import StudentLogin from './LOGIN/STUDENT/StudentLogin';
import Stu_Dashboard from './Pages/Stu_Dashboard/Stu_Dashboard';
import Student from './Routes/Student';
import Faculty from './Routes/Faculty';
import Fac_Dashboard from './Pages/Fac_Dashboard/Fac_Dashboard';
import AdSupAdm from './LOGIN/Admin_SuperAdmin/AdSupAdm';
import Admin from './Routes/Admin';
import Adm_Dashboard from './Pages/Adm_Dashboard/Adm_Dashboard';
import Super_Admin from './Routes/Super_Admin';
import Sup_Adm_Dashboard from './Pages/Sup_Adm_Dashboard/Sup_Adm_Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentLogin />} />
          <Route exact path="/admin" element={<AdSupAdm />} />
          
          {/* Student Routes */}
          <Route exact path="/Dashboard" element={<Student />}>
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
            <Route exact path="Admin" element={<Sup_Adm_Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
