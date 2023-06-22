import React from "react";

export default function FacultyCard(props) {
  //   console.log(process.env.REACT_APP_URL);
  // console.log(prope);
  const TeacherDetails = [
    {
      id: 1,
      detailName: "Designation",
      detailImage: "/studentID.png",
      studentDetail: `${props?.designation}`,
    },
    {
      id: 2,
      detailName: "Email ID",
      detailImage: "/top_mail_box.png",
      studentDetail: `${props?.email}`,
    },
    {
      id: 3,
      detailName: "Phone Number",
      detailImage: "/phone.png",
      studentDetail: `${props?.phone}`,
    },
    {
      id: 4,
      detailName: "Address",
      detailImage: "/address.png",
      studentDetail: `${props?.address}`,
    },
    {
      id: 5,
      detailName: "Joined In (Year)",
      detailImage: "/scheduleicon.png",
      studentDetail: `${props?.joinYear}`,
    },
  ];
  return (
    <div className="rounded-[8px] bg-[#ffff] flex flex-col w-[362px]  h-[658px] gap-[18px] border-2 border-[#E0E2E7] relative shadow-sm py-8 px-4 ">
      <div>
        <img
          className="absolute h-[148px]  w-[344px] top-[8px] left-[8px]  rounded-[4px]"
          src="/FacultyCardBackground.svg"
          alt=""
        />
      </div>

      <div className=" flex-col items-center flex ">
        <img
          className="object-cover absolute w-[164px] h-[164px] rounded-full"
          src={`${process.env.REACT_APP_URL}/api/Faculty/Faculty_Image_Display/${props?._id}`}
          alt=""
        />
      </div>

      <div className="mt-40 flex-col flex items-center justify-center">
        <span className=" font-semibold text-[#333843] text-lg capitalize">
          {props?.firstname + " " + (props?.lastname ? props?.lastname : "")}
        </span>
        <span className="text-sm text-center font-semibold text-[#667085] mt-[1px]"></span>
      </div>

      <hr className="w-[312px]  border border-[#E0E2E7]" />
      {TeacherDetails.map(({ detailImage, id, detailName, studentDetail }) => (
        <div key={id} className="flex  flex-row  gap-x-1 space-x-2">
          <div className="bg-gray-300 relative gap-[8px] border-4 border-[#E0E2E7] rounded-full p-[8px] w-10 h-10">
            <img className=" w-full h-full    " src={detailImage} alt="" />
          </div>
          <div className="flex-col w-[256px] space-y-2 font-semibold text-[15px] leading-[20px]">
            <p className="text-gray-600">{detailName}</p>
            <p>{studentDetail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
