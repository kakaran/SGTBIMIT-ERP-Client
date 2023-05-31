import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  CalendarIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const scheduleDetails = [
  {
    id: 1,
    time: "09:00",
    subjectImage: "/schedule_subject.png",
    subjectName: "Java Programing ",
    subjectTopic: "lab c",
    teacher: "Dr Raj kumar",
    status: "Attended",
  },
  {
    id: 2,
    time: "10:30",
    subjectImage: "/schedule_subject.png",
    subjectName: "Software Engineering ",
    subjectTopic: "Development Models",
    teacher: "Dr Raj kumar",
    status: "Missed",
  },
  {
    id: 3,
    time: "11:00",
    subjectImage: "/schedule_subject.png",
    subjectName: "Data science ",
    subjectTopic: "Regression Model",
    teacher: "Dr Raj kumar",
    status: "Attended",
  },
  {
    id: 4,
    time: "12:00",
    subjectImage: "/schedule_subject.png",
    subjectName: "Accounts ",
    subjectTopic: "cashbook",
    teacher: "Dr Raj kumar",
    status: "Missed",
  },
  {
    id: 5,
    time: "13:00",
    subjectImage: "/schedule_subject.png",
    subjectName: "IMED ",
    subjectTopic: "Entreprenuership",
    teacher: "Dr Raj kumar",
    status: "Attended",
  },
  // Add more schedule details as needed
];

function ScheduleTable(prope) {
  const [timetable, setTimeTable] = useState([]);

  const TodayDate = async (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${separator}${date}-${month < 10 ? `0${month}` : `${month}`
      }-${year}${separator}`;
  };

  const ProppeDataHold = async () => {
    let Date = await TodayDate();
    const Detail = {
      Date: Date,
      Course: `${prope?.Course}`,
      Semester: `${prope?.Semester}`,
      section: `${prope?.Section}`,
    };
    return Detail
  }

  useEffect(() => {
    const TimeTableGet = async () => {
      try {
        const Detail = await ProppeDataHold()
        const Data = await axios.post(
          `${process.env.REACT_APP_URL}/api/Student/Student_Time_Table`,
          { Detail }
        );

        // console.log(Data.data.data);
        if (Data.data.status) {
          setTimeTable(Data.data.data)
        }
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    };
    {
      prope.Course && TimeTableGet();
    }
  }, [prope.Course]);


  return (
    <div className="flex flex-col border-2 bg-white rounded-lg border-[#E0E2E7] justify-center items-center overflow-hidden">
      <div className="flex h-20 flex-col md:flex-row items-center gap-4 justify-between w-full">
        <h2 className="text-2xl ml-4 font-bold">Today's Schedule</h2>
        <div className="text-[#667085] font-semibold text-[16px] space-x-2 leading-5 flex justify-center md:justify-end mr-4">
          <div className="flex flex-row items-center rounded-xl border py-2 px-3 border-[#E0E2E7] space-x-1">
            <CalendarIcon className="h-5 w-5 object-cover" />
            <button className="text-sm px-4 py-2 rounded-md ">
              Apply Leave
            </button>
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
              <th className="py-2 px-4 border-b w-1/6">Time</th>
              <th className="py-2 px-4 border-b w-2/6">Subject</th>
              <th className="py-2 px-4 border-b w-2/6">Teacher</th>
              <th className="py-2 px-4 border-b w-1/6">Status</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {timetable.map((value, index) => {
              // {index && StudentStatusCheck(value?.subject_id?._id, value?.time)}
              return (
                <tr className="h-20" key={index}>
                  <td className="py-2 px-4 border-b font-semibold  text-[#5C59E8]">
                    {value.time}
                  </td>
                  <td className="flex flex-row py-6 space-x-3 px-4 border-b items-center  justify-start">
                    <img
                      className="h-10 w-10 rounded-lg object-cover"
                      src="/Book.png"
                      alt="subject Image"
                    />
                    <div className="flex flex-col ">
                      <span className="text-black font-semibold">
                        {value.SubjectName}
                      </span>{" "}
                      <span className="mt-1 font-semibold capitalize text-[#667085]">
                        {value.SubjectCode}
                      </span>
                    </div>
                  </td>

                  <td className="py-2 px-4 border-b font-semibold text-[#667085]">
                    {value.TeacherName}
                  </td>

                  <td className="border-b px-4 py-2">
                    <div
                      className={`py-2 px-3 text-[15px] leading-5   rounded-full bg-[#E7F4EE] capitalize font-semibold  text-center ${value.Status
                        ? "  text-[#0D894F] "
                        : " text-[#F04438] "
                        } `}
                    >
                      {value.Status ? "Attended" : "Missed"}
                    </div>
                  </td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleTable;
