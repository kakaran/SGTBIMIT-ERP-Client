import React from "react";
import { useState } from "react";

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

const Courses = [{ name: "BCA" }, { name: "BBA" }, { name: "B&I" }];
const Semesters = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];
const Sections = [{ name: "A" }, { name: "B" }, { name: "C" }];
function StudentsDetailTable() {
  const [selectedOption, setSelectedOption] = useState(Courses[0]);
  const [selectedClass, setSelectedClass] = useState(Semesters[0]);
  const [selectedSection, setSelectedSection] = useState(Sections[0]);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col  border-2 bg-white rounded-lg border-[#E0E2E7] justify-center items-center overflow-hidden">
        <div className="flex h-20 flex-col md:flex-row items-center gap-4  w-full">
          <h2 className="text-2xl ml-4 font-bold">Students</h2>

          <div>
            <select
              className="border-none bg-[#F0F1F3] outline-none focus-within:outline-none rounded-xl"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {Courses.map((course, index) => (
                <option key={index}>{course.name}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border-none bg-[#F0F1F3] outline-none focus-within:outline-none rounded-xl"
              value={selectedClass}
              onChange={handleClassChange}
            >
              {Semesters.map((sem, index) => (
                <option key={index}>{sem.name}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border-none bg-[#F0F1F3] outline-none focus-within:outline-none rounded-xl"
              value={selectedSection}
              onChange={handleSectionChange}
            >
              {Sections.map((sec, index) => (
                <option key={index}>{sec.name}</option>
              ))}
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
              {TeacherDetails.map((value, index) => {
                // {index && StudentStatusCheck(value?.subject_id?._id, value?.time)}
                return (
                  <tr className="h-20" key={value.id}>
                    <td className="py-6 flex   px-4 border-b font-semibold  text-black">
                      <div>
                        <img
                          className=""
                          src={value.studentImage}
                          alt={value.studentName}
                        />
                      </div>
                      <div className="flex ml-3 flex-col">
                        {value.studentName}

                        <span className="text-[#667085]">
                          {value.studentEmail}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <span className="text-black font-semibold">
                        {value.phoneNumber}
                      </span>{" "}
                    </td>

                    <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                      {value.RollNumber}
                    </td>
                    <td className="border-b px-4 py-2">
                      <div
                        className={`py-2 px-3 text-[14px] leading-5   rounded-full bg-[#E7F4EE] capitalize font-semibold  text-center ${
                          value.feeStatus
                            ? "  text-[#0D894F] "
                            : " text-[#F04438] "
                        } `}
                      >
                        {value.feeStatus ? "paid" : "Unpaid"}
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                      {value.Added}
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
