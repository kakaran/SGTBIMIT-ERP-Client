import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';


const SubjectAdd = () => {
    const [subjectAdd, setSubjectAdd] = useState({
        Course: "",
        Sem: "",
        Subject_Code: "",
        Subject_Name: "",
        Categories: "",
    })
    const [formfill, setFormFill] = useState({
        total: "",
        status: "",
    });
    const OnchageDeatail = (e) => {
        setSubjectAdd({ ...subjectAdd, [e.target.name]: e.target.value })
    }

    //form fill Validation 
    useEffect(() => {
        try {
            let totalIndex = 0;
            let fillIndex = 0;
            for (let key in subjectAdd) {
                totalIndex += 1;
                if (subjectAdd[key] !== "") {
                    fillIndex += 1;
                }
            }
            setFormFill({ total: totalIndex, status: fillIndex });
        } catch (error) {
            console.log(error);
        }
    }, [subjectAdd]);

    const SubjectAddMethod = async () => {
        try {
            const { Course, Sem, Subject_Code, Subject_Name, Categories } = subjectAdd
            const Data = (await axios.post(`${process.env.REACT_APP_URL}/api/admin/All_Subject_Add`, { Course, Sem, Subject_Code, Subject_Name, Categories })).data
            console.log(Data);
            if (Data.status) swal("Success!", `${Data.message}`, "success");
            else swal("Warning!", `${Data.message}`, "warning");


        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            swal("Error", `${error.response.data.message}`, "error");

        }
    }


    return (
        <>
            <div className="flex  text-3xl  overflow-hidden ">
                <Sidebar />

                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className="px-4  overflow-y-visible   bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto h-full">
                        <h2>Add Subject</h2>
                        <div className="md:inline-flex hidden justify-between text-[15px] font-semibold w-full">
                            <div>
                                <div className="flex my-3 text-lg space-x-3">
                                    <p className="text-[#5C59E8]">Dashboard</p>
                                    <img src="/chevron-right.svg" alt="" />
                                    <p className="text-[#5C59E8]">Subjects</p>
                                    <img src="/chevron-right.svg" alt="" />
                                    <p>Add Subject</p>
                                </div>

                            </div>
                            <div className="flex text-lg my-2 items-center space-x-3">
                                <Link to="/Dashboard/Sup_Admin/Subjects">
                                    <div
                                        className={` flex items-center text-[15px] font-semibold text-[#858D9D] border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2  `}
                                    >
                                        <img src="/cross.svg" alt="Cancel" />
                                        <p>Cancel</p>
                                    </div>
                                </Link>
                                <div
                                    className={` flex items-center text-[15px] font-semibold  border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2 border-none bg-[#5C59E8] text-[#ffff]`}
                                >
                                    <img src="/plus.svg" alt="Add Student" />
                                    <p className='cursor-pointer' onClick={SubjectAddMethod} >Add Subject</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-full rounded-lg border-2 mt-5 p-3'>
                            <h2 className='text-[18px]'>General Information</h2>

                            <div className="grid grid-cols-2 my-4 gap-4 ">
                                <div className="w-full  ">
                                    <div>
                                        <label
                                            for="name"
                                            className="mb-1 capitalize block text-[15px] font-semibold text-black"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                            placeholder="Subject Name"
                                            name="Subject_Name"
                                            id="name"
                                            onChange={OnchageDeatail}
                                        />
                                    </div>
                                </div>
                                <div className="w-full  ">
                                    <div>
                                        <label
                                            for="code"
                                            className="mb-1 capitalize block text-[15px] font-semibold text-black"
                                        >
                                            Code
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                            placeholder="Subject Code"
                                            name='Subject_Code'
                                            id="code"
                                            onChange={OnchageDeatail}
                                            maxLength="3"
                                        />
                                    </div>
                                </div>
                                <div className="w-full  ">
                                    <div>
                                        <label
                                            for="course"
                                            className="mb-1 capitalize block text-[15px] font-semibold text-black"
                                        >
                                            Course
                                        </label>

                                        <select
                                            className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7] w-full"
                                            name='Course'
                                            id='course'
                                            onChange={OnchageDeatail}
                                        >
                                            <option className="bg-gray-100" value="">Select Semester</option>
                                            <img src="/ArrowDown.svg" alt="" />
                                            <option value="BCA">BCA</option>
                                            <option value="BBA">BBA</option>
                                            <option value="BCOM">BCOM</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full  ">
                                    <div>
                                        <label
                                            for="Sem"
                                            className="mb-1 capitalize block text-[15px] font-semibold text-black"
                                        >
                                            Semester
                                        </label>
                                        <select
                                            className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7] w-full"
                                            name="Sem"
                                            id="Sem"
                                            onChange={OnchageDeatail}
                                        >
                                            <option className="bg-gray-100" value="">Select Semester</option>
                                            <img src="/ArrowDown.svg" alt="" />
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full  ">
                                    <div>
                                        <label
                                            for="Cate"
                                            className="mb-1 capitalize block text-[15px] font-semibold text-black"
                                        >
                                            Categorie
                                        </label>
                                        <select
                                            className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7] w-full"
                                            name="Categories"
                                            id="Cate"
                                            onChange={OnchageDeatail}
                                        >
                                            <option className="bg-gray-100" value="">Select Categorie</option>
                                            <img src="/ArrowDown.svg" alt="" />
                                            <option value="Default">Default</option>
                                            <option value="Optional">Optional</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  items-center px-4 left-64 fixed bottom-0 right-0 justify-between h-20 bg-white border border-gray-200">
                                <p className="text-xl  ">
                                    Form Completion{" "}
                                    <span
                                        className={` p-1.5 rounded-xl	 ${formfill.status
                                            ? "  text-[#0D894F] bg-[#E7F4EE]"
                                            : " text-[#F04438]  bg-[#FCDAD7]"
                                            } `}
                                    >
                                        {formfill.status
                                            ? Math.round((formfill.status / formfill.total) * 100) + "%"
                                            : "0%"}
                                    </span>
                                </p>
                                <div className="flex text-lg my-2 items-center space-x-3">

                                    <Link to="/Dashboard/Sup_Admin/Subjects">
                                        <div
                                            className={` flex items-center text-[15px] font-semibold text-[#858D9D] border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2  `}
                                        >
                                            <img src="/cross.svg" alt="Cancel" />
                                            <p>Cancel</p>
                                        </div>
                                    </Link>
                                    <div
                                        className={` flex items-center text-[15px] font-semibold  border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2 border-none bg-[#5C59E8] text-[#ffff]`}
                                        onClick={SubjectAddMethod}
                                    >
                                        <img src="/plus.svg" alt="Add Student" />
                                        <p>Add Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubjectAdd