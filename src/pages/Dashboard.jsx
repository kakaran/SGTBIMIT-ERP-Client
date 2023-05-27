import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import ScheduleTable from "../components/ScheduleTable";

function Dashboard() {
  return (
    <div className="flex  text-3xl h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 h-screen bg-gray-100 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-6">
              <div className="col-span-2">
                <StudentCard />
              </div>

              <div className="col-span-4">
                <ScheduleTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
