import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Table } from "react-bootstrap";
import axios from "axios";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const Subjects = () => {
  const [allSubject, setAllSubject] = useState();

  useEffect(() => {
    const AllSubjectGet = async () => {
      try {
        const Data = (
          await axios.get(
            `${process.env.REACT_APP_URL}/api/Subject/All_Subjects`
          )
        ).data;
        setAllSubject(Data.Data);
      } catch (error) {
        console.log(error);
      }
    };
    AllSubjectGet();
  }, []);

  console.log(allSubject);

  return (
    <>
      <div className="flex  text-3xl overflow-y-auto overflow-hidden h-screen">
        <Sidebar />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <div className="px-4 overflow-y-visible bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto min-h-screen">
            <h2>All Subjects</h2>
            <div className="w-full border mt-8 shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px]  mr-5 bg-white rounded-md">
              <div className="text-xl p-4 font-bold">Subject</div>
              <div className="grid">
                <Table className="w-full">
                  <thead>
                    <tr className="flex gap-4 text-left text-base w-full bg-[#f9f9fc] border-b">
                      <th className="w-1/5 p-5">Name </th>
                      <th className="w-1/5 p-5">Subject Code</th>
                      <th className="w-1/5 p-5">Class</th>
                      <th className="w-1/5 p-5">Categories</th>
                      <th className="w-1/5 p-5">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {allSubject?.map((value, index) => {
                      return (
                        <tr
                          className="flex gap-4 text-left text-base w-full p-5 justify-center items-center border-b"
                          key={`item-${index}`}
                        >
                          <td className="w-1/5 flex gap-3 justify-left items-center">
                            <img
                              src="/Book.png"
                              alt=""
                              className="w-[44px] h-[44px] rounded-full"
                            />
                            <p className="text-[14] font-bold">
                              {value?.Subject_Name}
                            </p>
                          </td>
                          <td className="w-1/5 p-5 text-[14]">
                            {value.Subject_Code}
                          </td>
                          <td className="w-1/5 p-5 text-[14]">
                            {value.Course + " " + value.Sem}
                          </td>
                          <td className="w-1/5 p-5 text-[14]">
                            {value.Categories}
                          </td>
                          <td className="w-1/5 p-5 text-[14]">
                            <div className={"flex items-center space-x-3 "}>
                              <BsPencil className="text-sm text-zinc-600" />
                              <RiDeleteBin6Line className="text-lg text-zinc-600" />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subjects;
