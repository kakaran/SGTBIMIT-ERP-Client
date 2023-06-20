import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { Link } from 'react-router-dom';
import handleExcelContext from '../../../Context/Excel/handleExcelContext';
import { FaRegEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import axios from 'axios';
import { Table, Pagination } from 'react-bootstrap';
const MultipleStudentAdd = () => {
    const Method = useContext(handleExcelContext)
    const [storeData, setStoreData] = useState([]);
    const [fillValueCheck, setFillValueCheck] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [popup, setPopup] = useState(false);

    const totalPages = Math.ceil(storeData.length / itemsPerPage);

    // Calculate start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the current page's data
    const currentData = storeData.slice(startIndex, endIndex);
    const currentValueCheck = fillValueCheck.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    //Form Fill Status Check
    useEffect(() => {
        const checkData = async () => {
            let Data = []
            Method.Value.map((value) => {
                // console.log(value);
                let totalIndex = 0;
                let fillIndex = 0;
                for (let key in value) {
                    totalIndex += 1;
                    if (value[key] !== "") {
                        fillIndex += 1;
                    }
                }
                Data.push({
                    name: value.firstname,
                    value: Math.round((fillIndex / totalIndex) * 100)
                })
            })
            setFillValueCheck(Data)
            setStoreData(Method.Value)
        }
        checkData()
    }, [Method.Value])

    //Completed Data Send to the sever
    const StudenrDataSave = async () => {
        try {
            let Data = structuredClone(storeData)
            let selectiveData = []
            fillValueCheck.map((value) => {
                if (value.value === 100) {
                    return Data.map((value1, index) => {
                        if (value1.firstname === value.name) {
                            let getData = Data.splice(index, 1);
                            selectiveData.push(getData[0]);
                        }
                    })
                }
            })

            if (selectiveData.length) {
                const Result = (await axios.post(`${process.env.REACT_APP_URL}/api/admin/Multiple_Student_Add`, { P_Json: selectiveData })).data
                localStorage.setItem('StudentList', JSON.stringify(Data))
                Method.setRefresh(1)
            }
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }
    console.log(storeData);
    return (
        <>
            <div className="flex  text-3xl overflow-y-auto overflow-hidden ">
                <Sidebar />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className="px-4 overflow-y-visible bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto min-h-screen">
                        <h2>Add Student</h2>
                        <div className="md:inline-flex hidden justify-between text-[15px] font-semibold w-full ">
                            <div>
                                <div className="flex my-3 text-lg space-x-3">
                                    <p className="text-[#5C59E8]">Dashboard</p>
                                    <p className="text-[#5C59E8]">Students</p>
                                    <p>Add Student</p>
                                </div>
                            </div>

                            <div className="flex text-lg my-2 items-center space-x-3">
                                <Link to="/Dashboard/Sup_Admin/AddStudent">
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
                                    <p onClick={StudenrDataSave}>Add Student</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] w-4/5 border mr-5 bg-white rounded-md'>
                                <div className='text-xl p-4 font-bold border-b-1'>
                                    Students
                                </div>
                                <div className='grid'>
                                    <Table className='w-full'>
                                        <thead>
                                            <tr className='flex gap-4 text-left text-base w-full p-5 bg-[#f9f9fc]'>
                                                <th className='w-2/12'>Name</th>
                                                <th className='w-1/12'>Phone</th>
                                                <th className='w-1/12'>Father's Name</th>
                                                <th className='w-1/12'>Mother's Name</th>
                                                <th className='w-1/12'>Student ID</th>
                                                <th className='w-1/12'>Fee</th>
                                                <th className='w-1/12'>Course</th>
                                                <th className='w-3/12'>Address</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {currentData.map((value, index) => {
                                                return (
                                                    <tr className='flex gap-4 text-left text-base w-full p-5 justify-center items-center border-b' key={`item-${index}`}>
                                                        <td className='w-2/12'><p className={`flex flex-col ${!value.firstname ? " text-[#F04438]" : ""}`}>{value.firstname ? value?.firstname : "Missing"} {value?.lastname}<span className={`${!value.email ? " text-[#F04438]" : ""}`}>{value.email ? value?.email : "Missing"}</span></p></td>
                                                        <td className={`w-1/12 ${!value.phone ? " text-[#F04438] " : ""}`}>{value.phone ? value?.phone : "Missing"}</td>
                                                        <td className={`w-1/12 ${!value.fathername ? " text-[#F04438] " : ""}`}>{value.fathername ? value?.fathername : "Missing"}</td>
                                                        <td className={`w-1/12 ${!value.mothername ? " text-[#F04438]" : ""}`}>{value.mothername ? value?.mothername : "Missing"}</td>
                                                        <td className={`w-1/12 ${!value.rollnumber ? " text-[#F04438]" : ""}`}>{value.rollnumber ? value?.rollnumber : "Missing"}</td>
                                                        <td className={`w-1/12 ${!value.Fee ? " text-[#F04438]" : ""}`}>{value.Fee ? value?.Fee : "Missing"}</td>
                                                        <td className={`w-1/12 ${!value.course ? " text-[#F04438]" : ""}`}>{value.course ? value?.course : "Missing"}</td>
                                                        <td className={`w-3/12 ${!value.address ? " text-[#F04438]" : ""}`}>{value.address ? value?.address : "Missing"}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>

                                    </Table>
                                    <div className='ml-auto my-10 mr-5'>
                                        <Pagination>
                                            <div className='flex gap-5 ml-auto'>
                                                {Array.from(Array(totalPages), (e, i) => {
                                                    return (
                                                        <Pagination.Item key={i} onClick={() => handlePageChange(i + 1)}>
                                                            <div className={`w-12 h-12 text-2xl shadow-md rounded-lg p-5 flex justify-center items-center ${i === currentPage - 1 ? "bg-[#5c59e8] text-white" : "bg-white"}`}>
                                                                {i + 1}
                                                            </div>
                                                        </Pagination.Item>
                                                    );
                                                })}
                                            </div>
                                        </Pagination>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/5 border bg-white rounded-md'>
                                <div className='text-xl p-4 font-bold border-b-1'>
                                    Status
                                </div>
                                <div>
                                    <Table className='w-full'>
                                        <thead>
                                            <tr className='flex gap-4 text-left text-base w-full p-5 bg-[#f9f9fc]'>
                                                <th className='w-2/4'>Profile Status</th>
                                                <th className='w-2/4'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentValueCheck.map((value, index) => {
                                                return (
                                                    <tr className='flex gap-4 text-left text-base w-full p-5 justify-center items-center h-[90px] border-b'>
                                                        <td className={`w-2/4  text-left `}><span className={`p-1 rounded-xl ${value.value === 100 ? " text-[#0D894F] bg-[#E7F4EE]" : " text-[#F04438] bg-[#FCDAD7]"}`}>{value.value !== 100 ? value?.value + "%" : "Complete"}</span> </td>
                                                        <td className={`w-2/4`}>
                                                            <div className={"flex items-center space-x-3 "}>
                                                                <FaRegEye className="text-lg text-zinc-600" />
                                                                <BsPencil className="text-sm text-zinc-600" onClick={() => { setPopup(index) }} />
                                                                <RiDeleteBin6Line className="text-lg text-zinc-600" onClick={() => { }} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                    {storeData.map((value, index) => {
                                        if (popup === index) {
                                            return (
                                                <div className=' flex justify-center items-center fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-20 z-[1000000000000]'>
                                                    <div className='w-1/2 h-1/2 rounded-md bg-white overflow-y-scroll'>
                                                        <h1 className='m-5'><span className='font-bold'>Edit Details - </span>{value.firstname} {value.lastname}</h1>
                                                        <form className='grid grid-cols-2 p-5 gap-5'>
                                                            <div className='grid gap-5'>
                                                                <label htmlFor="name_update">First Name:</label>
                                                                <input type="text" value={`${value.firstname}`} className='rounded-md' id='name_update' onChange={(e) => {
                                                                    let temp = structuredClone(storeData)
                                                                    temp[index].firstname = e.target.value
                                                                    setStoreData(temp)
                                                                }} />
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MultipleStudentAdd