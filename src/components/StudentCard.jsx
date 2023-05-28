import React, { useState } from "react";

function StudentCard(prope) {
  // console.log(prope);
  const StudentDetails = [
    {
      id: 1,
      detailName: "Student ID",
      detailImage: "/studentID.png",
      studentDetail: `${prope?.Student_ID}`,
    },
    {
      id: 2,
      detailName: "Email ID",
      detailImage: "/top_mail_box.png",
      studentDetail: `${prope?.Email}`,
    },
    {
      id: 3,
      detailName: "Phone Number",
      detailImage: "/phone.png",
      studentDetail: `${prope?.PhoneNumber}`,
    },
    {
      id: 4,
      detailName: "Address",
      detailImage: "/address.png",
      studentDetail: `${prope?.Address}`,
    },
    {
      id: 5,
      detailName: "Batch",
      detailImage: "/scheduleicon.png",
      studentDetail: `${prope?.Batch}`,
    },
  ];
  return (
    <div className="rounded-[8px] bg-[#ffff] flex flex-col w-[362px]  h-[658px] gap-[18px] border-2 border-[#E0E2E7] relative shadow-sm py-8 px-4">
      <div>
        <img
          className="absolute h-[148px]  w-[344px] top-[8px] left-[8px]  rounded-[4px]"
          src="/Background.png"
          alt=""
        />
      </div>

      <div className=" flex-col items-center flex ">
        {prope._id ?
          <img
            className="object-cover absolute w-[164px] h-[164px] rounded-full"
            src={`http://localhost:5000/api/Student/Student_Image/${prope?._id}`}
            alt=""
          /> : ""}
      </div>

      <div className="mt-40 flex-col flex items-center justify-center">
        <span className=" font-semibold text-[#333843] text-lg capitalize">
          {prope?.Name}
        </span>
        <span className="text-sm text-center font-semibold text-[#667085] mt-[1px]">
          {prope?.Course}
        </span>
      </div>

      <hr className="w-[312px]  border border-[#E0E2E7]" />
      {StudentDetails.map(({ detailImage, id, detailName, studentDetail }) => (
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

export default StudentCard;
