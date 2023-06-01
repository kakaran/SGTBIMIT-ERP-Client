import React from "react";

const cardsdetails = [
  {
    id: 1,
    img: "/class_attended.png",
    headline1: " Total Students",
    heading2: "1200",
    subHeading: "+10%",
    subHeadingColor: "text-[#0D894F]",
  },
  {
    id: 2,
    img: "/total_teachers.png",
    headline1: "Total Teachers",
    heading2: "54",
    subHeading: "+5%",
    subHeadingColor: "text-[#0D894F]",
  },
  {
    id: 3,
    img: "/total_course.png",
    headline1: "Total Course",
    heading2: "4",
    subHeading: "info",
    subHeadingColor: "text-[#13B2E4]",
  },
  {
    id: 4,
    img: "/fee.png",
    headline1: "Fee Collection",
    heading2: "Rs.55,25,400",
    subHeading: "-25%",
    subHeadingColor: "text-[#F04438]",
  },
];
function AdminTopcard() {
  return (
    <div className="flex gap-8 mb-8 ">
      {cardsdetails.map(
        ({ id, img, headline1, heading2, subHeading, subHeadingColor }) => (
          <div
            key={id}
            className=" bg-white md:w-full  w-[300px] h-[160px] border-2 border-[#E0E2E7] rounded-lg p-4"
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

export default AdminTopcard;
