import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AdminTopcard from "../../components/AdminTopcard";
import TeacherTable from "../../components/TeacherTable";
import Support from "../../components/Support";
import StudentsDetailTable from "../../components/StudentsDetailTable";
const Sup_Adm_Dashboard = () => {
  return (
    <div>
      <div className="flex  text-3xl h-screen overflow-hidden">
        <Sidebar />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header />

          <div className="px-4  bg-gray-100 sm:px-6 lg:px-8 py-8 w-full max-w-full mx-auto">
            <div>
              <div>
                <AdminTopcard />
              </div>

              <div className="grid grid-cols-5 gap-[20px]">
                <div className="col-span-3">
                  <TeacherTable />
                </div>

                <div className="col-span-2">
                  <Support />
                </div>
              </div>

              <div className="my-10">
                <StudentsDetailTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sup_Adm_Dashboard;
