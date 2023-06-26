import React from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'

const SubjectAdd = () => {
    return (
        <>
            <div className="flex  text-3xl  overflow-hidden">
                <Sidebar />

                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className="px-4  overflow-y-visible   bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto">
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
                                    <p className='cursor-pointer' >Submit</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubjectAdd