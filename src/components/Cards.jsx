import React, { useState, useEffect } from "react";
import axios from 'axios';


function Cards() {
  const [attendance, setAttendance] = useState();


  useEffect(() => {
    const TotalAttendance = async () => {
      try {
        const Data = (await axios.get(`${process.env.REACT_APP_URL}/api/Student/TotalAttendanceCount`)).data
        // console.log(Data);
        setAttendance(Data)
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
    TotalAttendance()
  }, [])
  const cardsdetails = [
    {
      id: 1,
      img: "/class_attended.png",
      headline1: " Total Classes Attended",
      heading2: `${attendance?.Attend}/${attendance?.Total}`,
      subHeading: `${Math.round((attendance?.Attend/attendance?.Total)*100)}%`,
      subHeadingColor: "text-[#0D894F]",
    },
    {
      id: 2,
      img: "/icon.svg",
      headline1: "Pending Assignments",
      heading2: "02",
      subHeading: "Deadline Next Week ",
      subHeadingColor: "text-[#F04438]",
    },
    {
      id: 3,
      img: "/credits.png",
      headline1: "Credits Scored",
      heading2: "24/48",
      subHeading: "Sem 3",
      subHeadingColor: "text-[#13B2E4]",
    },
  ];
  return (
    <div className="flex gap-8 mb-8 ">
      {cardsdetails.map(
        ({ id, img, headline1, heading2, subHeading, subHeadingColor }) => (
          <div
            key={id}
            className=" bg-white  w-[256px] h-[160px] border-2 border-[#E0E2E7] rounded-lg p-4 md:w-full"
          >
            <div className="bg-[#CFE7DC] relative gap-[8px] border-4 border-[#FEEDEC] rounded-full p-[8px] w-10 h-10">
              <img className="h-full w-full" src={img} alt={headline1} />
            </div>

            <h3 className="text-[16px] mt-6 tracking-[0.005em] leading-5 text-[#667085] font-semibold ">
              {headline1}
            </h3>

            <div className="flex items-center mt-2 space-x-2">
              <p className="text-3xl text-black font-semibold mt-1">
                {heading2}
              </p>

              <span
                className={`py-1 px-3 text-[14px] leading-5   rounded-full bg-[#E7F4EE] capitalize font-semibold  text-cente ${subHeadingColor}  `}
              >
                {subHeading}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Cards;
