import React, { useState } from "react";
import { MdKeyboardArrowRight } from 'react-icons/md';
import "./StudentLogin.css"
import axios from "axios";
import { useAuth } from "../../Context/auth"
import { useNavigate } from "react-router-dom";


const StudentLogin = () => {
  const [email, setEamil] = useState();
  const [password, setPassword] = useState()
  const [auth, setAuth] = useAuth();
  const [loginOption, setloginOption] = useState(true)
  const navigate = useNavigate()


  const StudentFacultylogin = async () => {
    try {
      let Data
      if (loginOption) {
         Data = (await axios.post(`${process.env.REACT_APP_URL}/api/Student/Signin,`, { email, password })).data;
         navigate("/Dashboard/Student")
      } else {
         Data = (await axios.post(`${process.env.REACT_APP_URL}/api/Faculty/Signin`, { email, password })).data
         navigate("/Dashboard/Faculty")

      }
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
          <div className="LoginsDiversionbutton cursor-pointer">
            <p className={loginOption ? "LoginDiversButtoninActive" : "LoginDriveButtoninNotActive"} onClick={() => {
              setloginOption(!loginOption)
            }}>Student</p>
            <p className={!loginOption ? "LoginDiversButtoninActive" : "LoginDriveButtoninNotActive"} onClick={() => {
              setloginOption(!loginOption)
            }}>Faculty</p>
          </div>
          <div className="LoginForm">
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
          }} className="cursor-pointer">Login <MdKeyboardArrowRight /></button>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
