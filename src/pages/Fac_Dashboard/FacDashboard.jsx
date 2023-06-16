import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import FacultyCard from "../../components/FacultyCard";
import FacultyStatisticsCard from "../../components/FacultyStatisticsCard";
import FacultyScheduleTable from "../../components/FacultyScheduleTable";

function FacDashboard() {
  return (
    <div className="flex  text-3xl h-screen  overflow-hidden ">
      <Sidebar />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

        <main>
          <div className="px-4   overflow-y-auto bg-gray-100 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-6">
              <div className="col-span-1 md:col-span-2">
                {/* Teacher Card */}
                <FacultyCard />
              </div>

              <div className="hidden md:inline md:col-span-4">
                {/* faculty Cards */}
                <FacultyStatisticsCard />
                <FacultyScheduleTable />
                {/* Faculty Schedule Table */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FacDashboard;
