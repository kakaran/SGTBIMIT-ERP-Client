import React, { useState } from "react";
import { MdKeyboardArrowRight } from 'react-icons/md';
import "../STUDENT/StudentLogin.css"
import axios from "axios";
import { useAuth } from "../../Context/auth";
import { useNavigate } from "react-router-dom";


const AdSupAdm = () => {
  const [email, setEamil] = useState();
  const [password, setPassword] = useState()
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()


  const StudentFacultylogin = async () => {
    try {
console.log(process.env.REACT_APP_URL);
      const Data = (await axios.post(`${process.env.REACT_APP_URL}/api/admin/Signin`, { email, password })).data;
      console.log(Data);
      if (Data.role == 0) {
        navigate("/Dashboard/Sup_Admin")
      } else if (Data.role == 1) {
        navigate("/Dashboard/Admin")
      }
      //  navigate("/Dashboard/Student")
      if (Data.token) {
        setAuth({
          ...auth,
          _id: Data.userID,
          token: Data.token
        })
        localStorage.setItem("authtok", JSON.stringify(Data))
      }
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <>
      <div className="login_Page_Controller">
        <div className="ImageContainer">
          <div className="imageBackground">
            <img src="/logo.png" alt="" />
          </div>
        </div>
        <div className="Login-form_Container">
          <h2>Login</h2>
          <p>Welcome to official ERP system of SGTBIMIT</p>
          <div className="LoginForm mt-12">
            <div className="labelContainer">
              <label htmlFor="Email">Email Address</label>
              <input type="email" name="Email" id="Email" onChange={(e) => {
                setEamil(e.target.value);
              }} />
            </div>
            <div className="labelContainer">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" onChange={(e) => {
                setPassword(e.target.value);
              }} />
            </div>
            <p>Forget Password ?</p>
          </div>
          <button onClick={() => {
            StudentFacultylogin()
          }}>Login <MdKeyboardArrowRight /></button>
        </div>
      </div>
    </>
  );
};

export default AdSupAdm;
