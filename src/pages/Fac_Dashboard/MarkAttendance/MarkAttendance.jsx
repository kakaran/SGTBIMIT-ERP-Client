import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { Pagination, Table } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert';

const MarkAttendance = () => {
    const [storeData, setStoreData] = useState([]);
    const [fillValueCheck, setFillValueCheck] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [result, setResult] = useState([])
    const [present, setPresent] = useState([])

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

    const { course, sem, section, subjectName, time, subject_id } = useParams()

    const TodayDate = async (separator = "") => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${separator}${date}-${month < 10 ? `0${month}` : `${month}`
            }-${year}${separator}`;
    };

    useEffect(() => {
        const StudentDataGet = async () => {
            try {
                let date = await TodayDate()
                const Detail = await axios.post(`${process.env.REACT_APP_URL}/api/Faculty/StudentData_Get`, { course, sem, section, subject_id, time, date })
                setResult(Detail?.data?.Data)
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }
        StudentDataGet()
    }, [])


    const HandleChange = async (detail) => {
        let store = present;
        const Data = result.map((value) => {
            if (value.Student._id == detail[0]) {

                return { ...value, check: !detail[1] };
            }
            return value
        })

        if (!detail[1]) {
            store.push(detail[0])
        } else {
            store.splice(detail[0], 1)
        }
        setPresent(store)
        setResult(Data)
    }

    const AttendanceDone = async () => {
        try {
            let date = await TodayDate()

            const data = localStorage.getItem("authtok");

            let Teacher_id = JSON.parse(data).userID

            const Detail = await axios.post(`${process.env.REACT_APP_URL}/api/Faculty/Student_Attendance`, { Course: course, sem, section, subject_id, time, Date: date, student_ids: present, Teacher_id });


            if (Detail.data.status) {
                swal(`${Detail.data.message}`, ".", "success");
            } else {
                swal(`${Detail.data.message}`, ".", "error");
            }

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }

    return (
        <>
            <div className="flex  text-3xl overflow-y-auto overflow-hidden h-screen">
                <Sidebar />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className="px-4 overflow-y-visible bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto min-h-screen">
                        <h2>{subjectName}</h2>
                        <div className="md:inline-flex hidden justify-between text-[15px] font-semibold w-full ">
                            <div>
                                <div className="flex my-3 text-lg space-x-3">
                                    <p className="text-[#5C59E8]">Dashboard</p>
                                    <img src="/chevron-right.svg" alt="" />
                                    <p className="text-[#5C59E8]">Schedule</p>
                                    <img src="/chevron-right.svg" alt="" />
                                    <p className="text-[#5C59E8]">Attendance</p>
                                    <img src="/chevron-right.svg" alt="" />
                                    <p>{subjectName}</p>
                                </div>
                            </div>
                            <div className="flex text-lg my-2 items-center space-x-3">
                                <Link to="/Dashboard/Faculty">
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
                                    <p className='cursor-pointer' onClick={AttendanceDone}>Submit</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] w-full border mr-5 bg-white rounded-md'>
                                <div className='text-xl p-4 font-bold border-b-1'>
                                    Students
                                </div>
                                <div>
                                    <Table className='w-full'>
                                        <thead>
                                            <tr className='flex text-left text-base w-full bg-[#f9f9fc] border-b '>
                                                <th className='w-2/5 p-5'>Name</th>
                                                <th className='w-2/5 border-r p-5'>Roll Number</th>
                                                <th className='w-1/5 text-center p-5'>Attendance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map((value, index) => {
                                                return (
                                                    <tr className='flex  text-left text-base w-full justify-center items-center border-b' key={index} >
                                                        <td className='w-2/5 p-5 flex gap-2'>
                                                            <img src={`${process.env.REACT_APP_URL}/api/Student/Student_Image/${value?.Student?._id}`} alt="" className='w-[44px] h-[44px] rounded-full' />
                                                            <p className={`flex flex-col  text-[14px] font-bold`}>{value?.Student?.firstname} {value?.Student?.lastname}<span className=" text-[12px] font-thin">{value?.Student?.email}</span></p></td>
                                                        <td className='w-2/5 border-r p-5 text-[14px]'>{value?.Student?.rollnumber}</td>
                                                        <td className='w-1/5 text-center p-5 '><button className={`${value?.check ? "text-[#0D894F] bg-[#E7F4EE] rounded-full border border-[#0D894F] px-6 py-2 " : "text-[#8C95A8] bg-[#F3F3F3] rounded-full px-6 py-2"} `} onClick={() => { HandleChange(!value?.status ? [value?.Student?._id, value?.check] : "") }}>Present</button></td>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarkAttendance