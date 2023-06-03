import React, { useState } from "react";

const supportDetails = [
  {
    id: 1,
    name: "Sehaj Bindra",
    role: "the staff at the finacial aid...",
    img: "/User1.svg",
    status: "resolved",
  },
  {
    id: 2,
    name: "Sehaj Bindra",
    role: "the staff at the finacial aid...",
    img: "/User1.svg",
    status: "resolved",
  },
  {
    id: 3,
    name: "Sehaj Bindra",
    role: "the staff at the finacial aid...",
    img: "/User1.svg",
    status: "resolved",
  },
  {
    id: 4,
    name: "Sehaj Bindra",
    role: "the staff at the finacial aid...",
    img: "/User1.svg",
    status: "resolved",
  },
  {
    id: 5,
    name: "Sehaj Bindra",
    role: "the staff at the finacial aid...",
    img: "/User1.svg",
    status: "resolved",
  },
  {
    id: 6,
    name: "Sehaj Bindra",
    role: "the staff at the finacial aid...",
    img: "/User1.svg",
    status: "resolved",
  },
];

function Support() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };
  return (
    <div>
      <div className="w-[360px] md:w-full bg-white h-[596px] p-[24px] border-2 border-[] rounded-lg">
        <div className="flex  gap-4">
          <h2 className="text-[24px] text-black font-semibold">Support</h2>
          <p className="py-2 px-3 flex justify-center items-center  text-[16px] leading-5 text-[#13B2E4]   rounded-full bg-[#E8F8FD] capitalize font-semibold  text-center">
            31 open issues
          </p>
          <div className=" ml-auto ">
            <img className="h-full w-full " src="/HorizontalIcon.svg" alt="" />
          </div>
        </div>

        <p className="mt-2 font-medium text-[16px]">Grivances</p>

        <div className="w-full border text-center border-[] rounded-lg  my-2 cursor-pointer p-2">
          <div className="flex items-center text-lg space-x-4">
            <h1
              className={`w-1/3 px-3 py-2 ${
                selectedButton === "button1"
                  ? "bg-[#DEDEFA]  rounded-lg text-[#4543AE]"
                  : " text-[#667085]"
              }`}
              onClick={() => handleButtonClick("button1")}
            >
              All
            </h1>
            <h2
              className={`w-1/3 px-3 py-2 ${
                selectedButton === "button2"
                  ? "bg-[#DEDEFA]  rounded-lg text-[#4543AE]"
                  : " text-[#667085]"
              }`}
              onClick={() => handleButtonClick("button2")}
            >
              Open
            </h2>
            <h3
              className={`w-1/3 px-3 py-2 ${
                selectedButton === "button3"
                  ? "bg-[#DEDEFA]  rounded-lg text-[#4543AE]"
                  : " text-[#667085]"
              }`}
              onClick={() => handleButtonClick("button3")}
            >
              Resolved
            </h3>
          </div>
        </div>

        {supportDetails.map(({ id, name, role, img, status }) => (
          <div key={id} className="flex space-y-3 space-x-3 ">
            <img src={img} alt="" />

            <div className="flex justify-start text-lg items-start flex-col">
              <h2 className="text-black  font-semibold text-[20px] ">{name}</h2>
              <h3 className="text-[#667085]mb-4 text-[16px]">{role}</h3>
            </div>

            <div className="flex-grow" />

            <div className="ml-auto flex justify-center items-center">
              <p
                className={`py-2 px-3 text-[15px] leading-5 rounded-full bg-[#E7F4EE] capitalize font-semibold text-center ${
                  status ? "text-[#0D894F]" : "text-[#F04438]"
                }`}
              >
                {status ? "Resolved" : "Unresolved"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
