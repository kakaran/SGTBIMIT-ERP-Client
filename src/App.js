import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import "./App.css";
import Login from "./LOGIN/Login";
import StudentLogin from "./LOGIN/STUDENT/StudentLogin";
import FacultyLogin from "./LOGIN/FACULTY/FacultyLogin";
import StuBody from "./STUDENT_PAGE/StuBody";
import StudentHome from "./STUDENT_PAGE/StudentHome";
import StuSidebar from "./STUDENT_PAGE/StuSidebar";
import StuHeader from "./STUDENT_PAGE/StuHeader";
import FacBody from "./FACULTY_PAGE/FacBody";
import FacHeader from "./FACULTY_PAGE/FacHeader";
import FacSidebar from "./FACULTY_PAGE/FacSidebar";
import FacultyHome from "./FACULTY_PAGE/FacultyHome";
import Dashboard from "./pages/dashboard";
=======
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
>>>>>>> 870cc179d4f7627b25aa7a0a9c906a45bce63ab4
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="StudentLogin" element={<StudentLogin />}></Route>
          <Route exact path="FacultyLogin" element={<FacultyLogin />}></Route>
          <Route exact path="StuBody" element={<StuBody />}></Route>
          <Route exact path="StuSidebar" element={<StuSidebar />}></Route>
          <Route exact path="StuHeader" element={<StuHeader />}></Route>
          <Route exact path="StudentHome" element={<StudentHome />}></Route>
          <Route exact path="FacBody" element={<FacBody />}></Route>
          <Route exact path="FacHeader" element={<FacHeader />}></Route>
          <Route exact path="FacSidebar" element={<FacSidebar />}></Route>
          <Route exact path="FacultyHome" element={<FacultyHome />}></Route>
          <Route exact path="dashboard" element={<Dashboard />}></Route>
=======
          <Route exact path="/" element={<StudentLogin />} />
          {/* Student Routes */}
          <Route exact path="/Dashboard" element={<Student/>}>
            <Route exact path="Student" element={<Stu_Dashboard />} />
          </Route>
          {/* Faculty Routes */}
          <Route exact path="/Dashboard" element={<Faculty/>}>
            <Route exact path="Faculty" element={<Fac_Dashboard />} />
          </Route>
>>>>>>> 870cc179d4f7627b25aa7a0a9c906a45bce63ab4
        </Routes>
      </Router>
    </div>
  );
}

export default App;
