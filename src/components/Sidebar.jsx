import React from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import {
  AcademicCapIcon,
  CodeBracketSquareIcon,
  Cog8ToothIcon,
  HomeIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <div className="md:inline-flex hidden  flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto bg-black/90 lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-96 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 p-4 transition-all duration-200 ease-in-out">
        {/* Sidebar header */}
        <a href="#" className="text-2xl text-left mt-4 ml-3 text-white">
          SGTBIMIT
        </a>
        {/* Links */}
        <div className="mt-8 flex flex-col  flex-grow">
          <div className="flex flex-col space-y-4 flex-grow">
            <div>
              <SidebarLinkGroup Icon={HomeIcon} title={"Home"} />
              <SidebarLinkGroup Icon={AcademicCapIcon} title={"Subjects"} />
              <SidebarLinkGroup Icon={SquaresPlusIcon} title={"Attendance"} />
              <SidebarLinkGroup
                Icon={CodeBracketSquareIcon}
                title={"Test Results"}
              />
              <SidebarLinkGroup Icon={UserCircleIcon} title={"Profile"} />
            </div>

            <div>
              <h2 className="text-white/60 ml-3 capitalize text-[20px]">
                Attedence
              </h2>

              <div className="mt-4">
                <SidebarLinkGroup Icon={HomeIcon} title={"Weekly"} />
                <SidebarLinkGroup Icon={AcademicCapIcon} title={"Monthly"} />
                <SidebarLinkGroup Icon={SquaresPlusIcon} title={"Yearly"} />
              </div>
            </div>
          </div>

          <div>
            <SidebarLinkGroup Icon={Cog8ToothIcon} title={"Settings"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
