import React from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import GeneralInformation from "../../../components/GeneralInformation";
import GuardianInformation from "../../../components/GuardianInformation";
import Media from "../../../components/Media";
import Others from "../../../components/Others";

const Buttons = [
  { id: 1, name: "Cancel", img: "/cross.svg" },
  { id: 2, name: "Import a Csv", img: "/download.svg" },
  { id: 3, name: "Add Student", img: "/plus.svg" },
];

function AddStudent() {
  return (
    <div>
      <div className="flex  text-3xl h-screen overflow-hidden">
        <Sidebar />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header />

          <div className="px-4  overflow-y-visible   bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto">
            <h2>Add Student</h2>
            <div className="md:inline-flex hidden justify-between text-[15px] font-semibold w-full">
              <div>
                <div className="flex my-3 text-lg space-x-3">
                  <p className="text-[#5C59E8]">Dashboard</p>
                  <p className="text-[#5C59E8]">Students</p>
                  <p>Add Student</p>
                </div>
              </div>

              <div className="flex text-lg my-2 items-center space-x-3">
                {Buttons.map(({ name, img, id }) => (
                  <div
                    className={` flex items-center text-[15px] font-semibold text-[#858D9D] border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2 ${
                      name === "Add Student" &&
                      "border-none bg-[#5C59E8] text-[15px] py-2 px-5 text-[#ffff]"
                    } `}
                    key={id}
                  >
                    <img src={img} alt={name} />
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid-cols-10 grid gap-[20px] my-8">
              <div className="col-span-8">
                <GeneralInformation />
              </div>

              <div className="col-span-8">
                <GuardianInformation />
              </div>

              <div className="col-span-8">
                <Media />
              </div>
              <div className="col-span-8">
                <Others />
              </div>

              <div className="col-span-2">
hi
              </div>
            </div>

            <div className="my-10">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
