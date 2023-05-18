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
         Data = (await axios.post("http://localhost:5000/api/Student/Signin", { email, password })).data;
         navigate("/Dashboard/Student")
      } else {
         Data = (await axios.post("http://localhost:5000/api/Faculty/Signin", { email, password })).data
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
<<<<<<< HEAD
    <div className=" flex gap-16 flex-row h-[530px] my-4  mx-auto ">
      <div className="  flex-1 hidden md:inline-flex flex-col   ">
        {/* <img
          className="h-20 w-20 absolute  bottom-0 left-[272px] right-0 top-24"
          src="/rectangle.png"
          alt=""
        />
        <img
          src="/logo.png"
          className="h-16 w-16 absolute   bottom-0 left-[280px] right-0 top-[105px]"
          alt=""
        /> */}
        <img
          className="hidden mb-8 ml-10  md:inline h-auto object-cover rounded-[32px]"
          src="/sgtb.jpg"
          alt="banner_image"
        />
      </div>

      <div className="bg-white flex-1 text-left flex  flex-col my-8">
        <h2 className="text-3xl  font-semibold">Login</h2>
        <p className="text-[#7F8087] text-[24px] mt-2">
          Welcome to official ERP system of SGTBIMIT
        </p>

        <div className="bg-[#EEEEEE]  text-[20px] mt-16 rounded-[32px] max-w-xs ">
          <button
            className={`rounded-full  w-40 h-12  ${
              isClicked
                ? "bg-[#1B449C]  text-white"
                : "bg-[#EEEEEE] text-[#1B449C]"
            }`}
            onClick={handleClick}
          >
            Student
          </button>

          <button
            className={`rounded-full  w-40 h-12 ${
              !isClicked
                ? "bg-[#1B449C] text-white"
                : "bg-[#EEEEEE] text-[#1B449C] "
            }`}
            onClick={handleClick}
          >
            Faculty
          </button>
        </div>

        <div>
          <div className="mt-10 text-[20px] capitalize  sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-left  font-normal leading-6 text-[#2D2D2D]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-[440px] rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1B449C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block  font-normal leading-6 text-[#2D2D2D]"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-[440px] rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1B449C] sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm text-right w-[440px] mt-2">
                  <a
                    href="#"
                    className=" font-medium text-black/60 hover:text-black/60"
                  >
                    Forgot password ?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center w-40 justify-center rounded-xl bg-[#1B449C] px-3 py-4 text-[16px]  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                  <img className="  ml-2" src="/right.png" alt="" />
                </button>
              </div>
            </form>
=======
    <>
      <div className="login_Page_Controller">
        <div className="ImageContainer">
          <div className="imageBackground">
            <img src="/logo.png" alt="" />
>>>>>>> 870cc179d4f7627b25aa7a0a9c906a45bce63ab4
          </div>
        </div>
        <div className="Login-form_Container">
          <h2>Login</h2>
          <p>Welcome to official ERP system of SGTBIMIT</p>
          <div className="LoginsDiversionbutton">
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
          }}>Login <MdKeyboardArrowRight /></button>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
