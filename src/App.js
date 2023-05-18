import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Login from './LOGIN/Login';
import StudentLogin from './LOGIN/STUDENT/StudentLogin';
import Stu_Dashboard from './Pages/Stu_Dashboard/Stu_Dashboard';
import Student from './Routes/Student';
import Faculty from './Routes/Faculty';
import Fac_Dashboard from './Pages/Fac_Dashboard/Fac_Dashboard';
// import FacultyLogin from './LOGIN/FACULTY/FacultyLogin';
// import StuBody from './STUDENT_PAGE/StuBody';
// import StudentHome from './STUDENT_PAGE/StudentHome';
// import StuSidebar from './STUDENT_PAGE/StuSidebar';
// import StuHeader from './STUDENT_PAGE/StuHeader';
// import FacBody from './FACULTY_PAGE/FacBody';
// import FacHeader from './FACULTY_PAGE/FacHeader';
// import FacSidebar from './FACULTY_PAGE/FacSidebar';
// import FacultyHome from './FACULTY_PAGE/FacultyHome';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentLogin />} />
          {/* Student Routes */}
          <Route exact path="/Dashboard" element={<Student/>}>
            <Route exact path="Student" element={<Stu_Dashboard />} />
          </Route>
          {/* Faculty Routes */}
          <Route exact path="/Dashboard" element={<Faculty/>}>
            <Route exact path="Faculty" element={<Fac_Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
