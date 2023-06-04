import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

import {
  AdjustmentsHorizontalIcon,
  EyeIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const TeacherDetails = [
  {
    id: 1,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },


  {
    id: 2,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  {
    id: 3,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  {
    id: 4,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  {
    id: 5,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  {
    id: 6,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  {
    id: 7,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  {
    id: 8,
    studentName: "Sehaj Bindra",
    studentImage: "/User2.svg",
    studentEmail: "sehajbindra1234@gmail.com",
    phoneNumber: "078 5054 8877",
    RollNumber: "078 6013 3854",
    feeStatus: "paid",
    Added: "26 DEC 2022",
  },

  // Add more schedule details as needed
];

function StudentsDetailTable() {
  const [Course, setCourse] = useState();
  const [Semester, setSemester] = useState();
  const [Section, setSection] = useState();
  const [filterData,setFilterData] = useState();
  const [allData,setAllData] = useState();

  const handleOptionChange = (e) => {
    setSection(e.target.value);
  };

  useEffect(() => {
    const AllStudentGet = async () =>{
      try {
        const Data = (await axios.get(`${process.env.REACT_APP_URL}/api/admin/All_Student_Display`)).data
        console.log(Data);
        setAllData(Data)
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    } 
    AllStudentGet()
  }, [])

  // const DataFilter = async () =>{
  //   console.log("hi");
  //   if(Course && Section && Semester ){
  //     let Data = [];
  //     allData.map((value)=>{
  //       if(value.course == Course,value.section == Section,value.semester == Semester){
  //         Data.push(value)
  //       }
  //     })
  //     setFilterData(Data);
  //   }else{
  //     setFilterData(allData)
  //   }
  // }
 
  

  return (
    <div>
      <div className="flex flex-col  border-2 bg-white rounded-lg border-[#E0E2E7] justify-center items-center overflow-hidden">
        <div className="flex h-20 flex-col md:flex-row items-center gap-4  w-full">
          <h2 className="text-2xl ml-4 font-bold">Students</h2>

          <div>
            <select
              className="border-none bg-[#F0F1F3] outline-none focus-within:outline-none rounded-xl"
              onChange={(e)=>{setCourse(e.target.value)}}
              value={Course}
            >
              <option value="">---</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B&I">B&I</option>
              <option value="BCOM">BCOM</option>
            </select>
          </div>
          <div>
            <select
              className="border-none bg-[#F0F1F3] outline-none focus-within:outline-none rounded-xl"
              onChange={(e)=>{setSemester(e.target.value)}}
              value={Semester}
            >
              <option value="">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            <select
              className="border-none bg-[#F0F1F3] outline-none focus-within:outline-none rounded-xl"
              onChange={(e)=>{setSection(e.target.value)}}
              value={Section}
            >
             <option value="">-</option>
             <option value="A">A</option>
             <option value="B">B</option>
             <option value="C">C</option>
             <option value="D">D</option>
            </select>
          </div>
          <div className="ml-auto flex space-x-2 px-2">
            <div className="text-[#667085] font-semibold text-[16px] space-x-2 leading-5 flex justify-center md:justify-end mr-4">
              <div className="flex flex-row items-center rounded-xl border py-2 px-3 border-[#E0E2E7] space-x-1">
                <AdjustmentsHorizontalIcon className="h-5 w-5 object-cover" />
                <button className="text-sm px-4 py-2 rounded-md ">
                  Filters
                </button>
              </div>
            </div>
            <div className="text-[#fff]  font-semibold text-[16px]  leading-5 flex justify-center md:justify-end mr-4">
              <div className="flex flex-row bg-[#5C59E8] items-center rounded-xl border-none py-2 px-3  space-x-1">
                <PlusIcon className="h-5 w-5 object-cover" />
                <button className="text-sm px-4 py-2 rounded-md ">
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-sm leading-5 overflow-x-auto">
          <table className="min-w-full bg-white ">
            <thead className="bg-[#F9F9FC] h-16 text-left ml-1">
              <tr>
                <th className="py-2 px-4 border-b w-2/7">Name</th>
                <th className="py-2 px-4 border-b w-1/7">Phone</th>
                <th className="py-2 px-4 border-b w-1/7">Roll Number</th>
                <th className="py-2 px-4 border-b w-1/7">Fee status</th>
                <th className="py-2 px-4 border-b w-1/7">Added</th>
                <th className="py-2 px-4 border-b w-1/7">Action</th>
              </tr>
            </thead>

            <tbody className="text-left">
              {filterData?.map((value, index) => {
                // {index && StudentStatusCheck(value?.subject_id?._id, value?.time)}
                return (
                  <tr className="h-20" key={value.id}>
                    <td className="py-6 flex   px-4 border-b font-semibold  text-black">
                      <div>
                        <img
                          className=""
                          // src={value.studentImage}
                          // alt={value.studentName}
                        />
                      </div>
                      <div className="flex ml-3 flex-col">
                        {`${value?.firstname} ${value?.lastname}`}

                        <span className="text-[#667085]">
                          {value?.email}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <span className="text-black font-semibold">
                        {value?.phone}
                      </span>{" "}
                    </td>

                    <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                      {value?.rollnumber}
                    </td>
                    <td className="border-b px-4 py-2">
                      <div
                        className={`py-2 px-3 text-[14px] leading-5   rounded-full bg-[#E7F4EE] capitalize font-semibold  text-center ${value.feeStatus
                            ? "  text-[#0D894F] "
                            : " text-[#F04438] "
                          } `}
                      >
                        {value?.feeStatus ? "paid" : "Unpaid"}
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                      {/* {Date(value?.createdAt).toLocaleDateString()} */}
                    </td>

                    <td className="border-b px-4 py-2">
                      <div className={"flex items-center space-x-3 "}>
                        <img src="/blackEye.svg" alt="" />
                        <img src="/dustbin.svg" alt="" />
                        <img src="/pencil.svg" alt="" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentsDetailTable;
