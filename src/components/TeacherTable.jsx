import React, { useState, useEffect } from "react";
import {
  AdjustmentsHorizontalIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeacherDetails = [
  {
    id: 1,
    teacherName: "Dr Raj kumar",
    teacherDetail: "secondary Text",
    eid: "401",
    departmentName: "BCA",
    contactNumber: "8444888800",
    scheduleDetails: "",
  },
  {
    id: 2,
    teacherName: "Dr Raj kumar",
    teacherDetail: "secondary Text",
    eid: "402",
    departmentName: "BBA",
    contactNumber: "8444888801",
    scheduleDetails: "",
  },
  {
    id: 3,
    teacherName: "Dr Raj kumar",
    teacherDetail: "secondary Text",
    eid: "403",
    departmentName: "BBA(B&I)",
    contactNumber: "8444888802",
    scheduleDetails: "",
  },
  {
    id: 4,
    teacherName: "Dr Raj kumar",
    teacherDetail: "secondary Text",
    eid: "404",
    departmentName: "BBA(G)",
    contactNumber: "8444888803",
    scheduleDetails: "",
  },
  {
    id: 5,
    teacherName: "Dr Raj kumar",
    teacherDetail: "secondary Text",
    eid: "405",
    departmentName: "B.Com(hons.)",
    contactNumber: "8444888804",
    scheduleDetails: "",
  },
  // Add more schedule details as needed
];

function TeacherTable() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState();

  useEffect(() => {
    const AllTeacherGet = async () => {
      try {
        const Data = (await axios.get(`${process.env.REACT_APP_URL}/api/admin/Teacher_Display`)).data
        console.log(Data);
        if (Data.Status) {
          setTeachers(Data.Result)
        }
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
    AllTeacherGet()
  }, [])

  return (
    <div className="flex flex-col  border-2 bg-white rounded-lg border-[#E0E2E7] justify-center items-center overflow-hidden">
      <div className="flex h-20 flex-col md:flex-row items-center gap-4 justify-between w-full">
        <h2 className="text-2xl ml-4 font-bold">Teachers</h2>
        <div className="text-[#667085] font-semibold text-[16px] space-x-2 leading-5 flex justify-center md:justify-end mr-4">
          <div className="flex flex-row items-center rounded-xl border py-2 px-3 border-[#E0E2E7] space-x-1 cursor-pointer bg-[#5c59e8] text-white" onClick={() => navigate("/Dashboard/Sup_Admin/AddTeacher")}>
            <span className="h-5 w-5 object-cover" >+</span>
            <button className="text-sm px-4 py-2 rounded-md ">Add Teacher</button>
          </div>
          <div className="flex flex-row items-center rounded-xl border py-2 px-3 border-[#E0E2E7] space-x-1">
            <AdjustmentsHorizontalIcon className="h-5 w-5 object-cover" />
            <button className="text-sm px-4 py-2 rounded-md ">Filters</button>
          </div>
        </div>
      </div>

      <div className="w-full text-sm leading-5 overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead className="bg-[#F9F9FC] h-16 text-left ml-1">
            <tr>
              <th className="py-2 px-4 border-b w-1/6">Name</th>
              <th className="py-2 px-4 border-b w-1/6">EID</th>
              <th className="py-2 px-4 border-b w-1/6">Department</th>
              <th className="py-2 px-4 border-b w-1/6">Contact</th>
              <th className="py-2 px-4 border-b w-1/6">Daily Schedule</th>
            </tr>
          </thead>

          <tbody className="text-left">
            {teachers?.map((value, index) => {
              // {index && StudentStatusCheck(value?.subject_id?._id, value?.time)}
              return (
                <tr className="h-20" key={index}>
                  <td className="py-6 flex flex-col  px-4 border-b font-semibold  text-black">
                    {value?.firstName + (value?.lastName ? value?.lastName : "")}

                    <span className="text-[#667085]">
                      secondary text
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span className="text-black font-semibold">
                      {value?.email}
                    </span>{" "}
                  </td>

                  <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                    {value?.departmentName}
                  </td>
                  <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                    {value?.phone}
                  </td>

                  <td className="border-b px-4 py-2">
                    <div
                      className={`py-2 px-3 flex justify-center items-center  text-[14px] leading-5 text-[#13B2E4]   rounded-full bg-[#E8F8FD] capitalize font-semibold  text-center  `}
                    >
                      view
                      <EyeIcon className="h-4 w-4 object-cover ml-2" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherTable;
