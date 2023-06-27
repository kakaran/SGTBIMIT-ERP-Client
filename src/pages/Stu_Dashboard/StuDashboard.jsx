import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StudentCard from "../../components/StudentCard";
import ScheduleTable from "../../components/ScheduleTable";
import axios from "axios";
import Cards from "../../components/Cards";

export default function StuDashboard() {
  const [studentDetail, setStudentDetail] = useState();

  useEffect(() => {
    const StudentDataGet = async () => {
      try {
        const Data = (
          await axios.get(
            `${process.env.REACT_APP_URL}/api/Student/Student_Get`
          )
        ).data;
        // console.log(Data);
        if (Data) {
          setStudentDetail(Data);
        }
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    };
    StudentDataGet();
  }, []);

  return (
    <div className="flex  text-3xl h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header
          Name={studentDetail?.firstname + " " + studentDetail?.lastname}
          Course={
            studentDetail?.course +
            " " +
            studentDetail?.semester +
            studentDetail?.section
          }
          _id={studentDetail?._id}
        />
        <main>
          <div className="px-4 h-screen bg-gray-100 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-6">
              <div className="col-span-1 md:col-span-2">
                <StudentCard
                  Student_ID={studentDetail?.rollnumber}
                  Email={studentDetail?.email}
                  PhoneNumber={studentDetail?.phone}
                  Address={studentDetail?.address}
                  Batch={studentDetail?.batch}
                  Name={
                    studentDetail?.firstname + " " + studentDetail?.lastname
                  }
                  Course={
                    studentDetail?.course +
                    " " +
                    studentDetail?.semester +
                    studentDetail?.section
                  }
                  _id={studentDetail?._id}
                />
              </div>
              <div className="hidden md:inline md:col-span-4">
                <Cards />
                <ScheduleTable
                  Course={studentDetail?.course}
                  Section={studentDetail?.section}
                  Semester={studentDetail?.semester}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
