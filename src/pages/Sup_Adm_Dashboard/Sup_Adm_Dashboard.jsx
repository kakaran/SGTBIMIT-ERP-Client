import React from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AdminTopcard from "../../components/AdminTopcard";
import TeacherTable from '../../components/TeacherTable';
const Sup_Adm_Dashboard = () => {
  return (
    <div>
         <div className="flex  text-3xl h-screen overflow-hidden">
            <Sidebar />

           <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
               <Header/>

               <div className="px-4 h-screen bg-gray-100 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <div className="col-span-4">
                    <AdminTopcard />

                        <div className="teachertable">
                        <TeacherTable />
                        </div>
                        
                    </div>
               </div>

           </div>

         

        </div>     
      

    </div>
    
  )
}

export default Sup_Adm_Dashboard