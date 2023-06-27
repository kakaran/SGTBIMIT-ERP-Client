import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import { Link } from 'react-router-dom'
import SubjectList from '../../../components/SubjectList'
import SubListContext from '../../../Context/SubList/SubListContext'
import { MdAdd } from 'react-icons/md'
import axios from 'axios'



const SubjectAlloTeacher = () => {
    const Method = useContext(SubListContext)
    const { count, CountIncrement } = Method
    const [subject, setSubject] = useState()
    const [teacher, setTeacher] = useState()
    const [select, setSelect] = useState({
        Course: "",
        Semester: "",
        Section: ""
    })
    const [filterData, setFilterData] = useState([])

    const FilterData = async () => {

        const { Course, Semester, Section } = select;

        subject.map((value) => {
            if (value.Course == Course || value.Semester == Semester || value.Section == Section) {
                console.log(value);
                setFilterData(current => [...current, value])
            }
        })
    }

    const HandleChange = async (e) => {
        setSelect({ ...select, [e.target.name]: e.target.value })
        FilterData()
    }


    useEffect(() => {
        const TeacherStudentDataGet = async () => {
            try {
                const Data = (await axios.get(`${process.env.REACT_APP_URL}/api/Subject/All_Subject_Teacher_Display`)).data
                setSubject(Data.Subjects)
                setTeacher(Data.Teachers)
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }
        TeacherStudentDataGet()
    }, [])

    console.log(filterData);

    return (
        <>
            <div className="flex  text-3xl  overflow-hidden ">
                <Sidebar />

                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className="px-4  overflow-y-visible bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto h-full">
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
                                    <p className='cursor-pointer'  >Add Subject</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full border-2 bg-white rounded-lg p-4 mt-5 flex gap-3 items-center'>
                            <h2 className='text-[18px] font-bold'>Class</h2>
                            <select
                                className="bg-gray-100 rounded-3xl border-none text-[#667085]"
                                name='Course'
                                id='course'
                                onChange={HandleChange}
                            >
                                <option className="bg-gray-100" value="">Course</option>
                                <img src="/ArrowDown.svg" alt="" />
                                <option value="BCA">BCA</option>
                                <option value="BBA">BBA</option>
                                <option value="BCOM">BCOM</option>
                            </select>
                            <select
                                className="bg-gray-100 rounded-3xl border-none text-[#667085]"
                                name='Semester'
                                id='course'
                                onChange={HandleChange}
                            >
                                <option className="bg-gray-100" value="">Semester</option>
                                <img src="/ArrowDown.svg" alt="" />
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <select
                                className="bg-gray-100 rounded-3xl border-none text-[#667085]"
                                name='Section'
                                id='course'
                                onChange={HandleChange}
                            >
                                <option className="bg-gray-100" value="">Section</option>
                                <img src="/ArrowDown.svg" alt="" />
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className='w-full border-2 bg-white rounded-lg p-4 mt-5 flex gap-3 flex-col items-start'>
                            <h2 className='text-[18px] font-bold'>Subjects</h2>
                            {count.map((value, index) => {
                                return (
                                    <SubjectList index={value} />
                                )
                            })}

                            <button className='py-[4px] px-[14px] bg-[#DEDEFA] font-bold text-[#5C59E8] text-[14px] flex items-center gap-2 rounded-md' onClick={() => { CountIncrement() }}><MdAdd className='text-xl' />Add Subject</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubjectAlloTeacher