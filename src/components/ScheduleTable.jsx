import axios from "axios";
import React, { useState, useEffect } from "react";

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
    time: "09:00",
    subjectImage: "/schedule_subject.png",
    subjectName: "Java Programing ",
    subjectTopic: "lab c",
    teacher: "Dr Raj kumar",
    status: "Attended",
  },
  // Add more schedule details as needed
];

function ScheduleTable(prope) {
  const [timetable, setTimeTable] = useState()

  const TodayDate = (separator = '') => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${separator}${date}-${month < 10 ? `0${month}` : `${month}`}-${year}${separator}`
  }

  console.log(prope);

  useEffect(() => {
    const TimeTableGet = async () => {
      try {
        let Date = await TodayDate()
        const Detail = {
          Date: Date,
          Course: await `${prope?.Course}`,
          Semester: await `${prope?.Semester}`,
          section: await `${prope?.Section}`
        }
        const Data = await axios.post("http://localhost:5000/api/Student/Student_Time_Table", { Detail })
        console.log(Data);
      } catch (error) {
        console.log('================================');
        console.log(error);
        console.log('================================');
      }
    }
    {prope.Course && TimeTableGet()}
    
  }, [prope])


  return (
    <div className="flex flex-col border-2 bg-white rounded-lg border-gray-300 justify-center items-center overflow-hidden">
      <div className="flex h-20 flex-col md:flex-row items-center gap-4 justify-between w-full">
        <h2 className="text-2xl ml-4 font-bold">Today's Schedule</h2>
        <div className="text-black text-sm leading-5 flex justify-center md:justify-end">
          <button className="text-sm px-4 py-2 rounded-md mr-2">
            Apply Leave
          </button>
          <button className="text-sm px-4 py-2 rounded-md">Filters</button>
        </div>
      </div>

      <div className="w-full text-sm leading-5 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100 h-16 text-left ml-1">
            <tr>
              <th className="py-2 px-4 border-b w-1/6">Time</th>
              <th className="py-2 px-4 border-b w-2/6">Subject</th>
              <th className="py-2 px-4 border-b w-2/6">Teacher</th>
              <th className="py-2 px-4 border-b w-1/6">Status</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {scheduleDetails.map(
              ({ id, time, subjectName, subjectTopic, teacher, status }) => (
                <tr className="h-20" key={id}>
                  <td className="py-2 px-4 border-b">{time}</td>
                  <td className="py-2 px-4 border-b">{subjectName}</td>
                  <td className="py-2 px-4 border-b">{teacher}</td>
                  <td className="py-2 px-4 border-b">{status}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleTable;
