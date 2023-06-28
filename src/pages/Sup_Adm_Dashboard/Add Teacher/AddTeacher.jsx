import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const AddTeacher = () => {
    const [formfill, setFormFill] = useState({
        total: "",
        status: "",
    })
    const [teacherDetails, setTeacherDetails] = useState({
        firstName: '',
        lastname: '',
        Gender: '',
        Joinyear: '',
        dob: '',
        designation: '',
        email: '',
        phone: '',
        address: '',
        Category: '',
    })
    const options = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}`, teacherDetails)
            console.log(response)
            if (response.data.success) {
                toast.success('Teacher Added Successfully', options)
            }
            else {
                toast.error(`Error`, options)
            }
        }
        catch (err) {
            toast.error(`catch Error`, options)
            console.log(err)
        }

    }
    const labelStyles = 'mb-1 capitalize block text-[15px] font-semibold text-black'
    const inputStyles = 'block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500'
    const inputContainerStyles = 'grid gap-2 '


    useEffect(() => {
        try {
            let totalIndex = 0
            let fillIndex = 0
            for (let key in teacherDetails) {
                totalIndex += 1
                if (teacherDetails[key] !== "") {
                    fillIndex += 1
                }
                setFormFill({ total: totalIndex, status: fillIndex })
            }
        } catch (err) {
            console.log(err);
        }
    }, [teacherDetails])
    return (
        <div>
            <div className="flex  text-3xl h-screen overflow-hidden">
                <Sidebar />

                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className='px-4  overflow-y-visible bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto'>
                        <h2> Add Teacher </h2>
                        <div className="md:inline-flex hidden justify-between text-[15px] font-semibold w-full">
                            <div>
                                <div className="flex my-3 text-lg space-x-3">
                                    <p className="text-[#5C59E8]">Dashboard</p>
                                    <p className="text-[#5C59E8]">Teachers</p>
                                    <p>Add Teacher</p>
                                </div>
                            </div>

                            <div className="flex text-lg my-2 items-center space-x-3">

                                <Link to="/Dashboard/Sup_Admin">
                                    <div
                                        className={` flex items-center text-[15px] font-semibold text-[#858D9D] border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2  `}
                                    >
                                        <img src="/cross.svg" alt="Cancel" />
                                        <p>Cancel</p>
                                    </div>
                                </Link>

                                <div
                                    className={` flex items-center text-[15px] font-semibold  border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2 border-none bg-[#5C59E8] text-[#ffff]`}
                                    onClick={handleSubmit}
                                >
                                    <img src="/plus.svg" alt="Add Teacher" />
                                    <p>Add Teacher</p>
                                </div>

                            </div>
                        </div>
                        <div className="grid my-10 gap-4 ">
                            <div className="">
                                <div className='w-full p-4 md:w-full max-h-fit bg-white rounded-lg  border-2'>
                                    <ToastContainer />
                                    <h2> General Information </h2>
                                    <form onSubmit={handleSubmit} >
                                        <div className='grid grid-cols-2 my-4 gap-4'>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor="name" className={labelStyles}>First Name</label>
                                                <input placeholder='First Name' type="text" value={`${teacherDetails.firstName}`} className={inputStyles} id='name' name='name' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        firstName: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div placeholder='Last Name' className={inputContainerStyles}>
                                                <label htmlFor="lname" className={labelStyles}>Last Name</label>
                                                <input placeholder='Last Name' type="text" value={`${teacherDetails.lastname}`} className={inputStyles} id='lname' name='lname' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        lastname: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='Gender' className={labelStyles}>Gender </label>
                                                <select placeholder='Gender' type="text" value={`${teacherDetails.Gender}`} className={inputStyles} id='Gender' name='Gender' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        Gender: e.target.value
                                                    }
                                                })}>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='Joinyear' className={labelStyles}>Joining Year </label>
                                                <input placeholder='Joining Year' type="number" value={`${teacherDetails.Joinyear}`} className={`${inputStyles} appearance-[textfield]`} id='Joinyear' name='Joinyear' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        Joinyear: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='dob' className={labelStyles}>Date of Birth </label>
                                                <input type="date" value={`${teacherDetails.dob}`} className={inputStyles} id='dob' name='dob' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        dob: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='designation' className={labelStyles}>Designation </label>
                                                <input placeholder='Designation' type="text" value={`${teacherDetails.designation}`} className={inputStyles} id='designation' name='designation' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        designation: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='email' className={labelStyles}>Email ID</label>
                                                <input placeholder='Email ID' type="email" value={`${teacherDetails.email}`} className={inputStyles} id='email' name='email' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        email: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='phone' className={labelStyles}>Phone Number</label>
                                                <input placeholder='Phone Number' type="text" value={`${teacherDetails.phone}`} className={inputStyles} id='phone' name='phone' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        phone: e.target.value
                                                    }
                                                })} />
                                            </div>
                                            <div className={inputContainerStyles}>
                                                <label htmlFor='Category' className={labelStyles}>Category </label>
                                                <input placeholder='Category' type="text" value={`${teacherDetails.Category}`} className={inputStyles} id='Category' name='Category' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        Category: e.target.value
                                                    }
                                                })} />
                                            </div>
                                        </div>
                                        <div className={inputContainerStyles}>
                                            <label htmlFor='address' className={labelStyles}>Address </label>
                                            <div className='flex min-h-[150px]'>
                                                <textarea placeholder='Enter your address here...' value={`${teacherDetails.address}`} className={inputStyles} id='address' name='address' onChange={(e) => setTeacherDetails(prev => {
                                                    return {
                                                        ...prev,
                                                        address: e.target.value
                                                    }
                                                })} />
                                            </div>
                                        </div>
                                        {/* <button className='bg-[#5c59e8] text-sm px-4 py-2 rounded-md text-white'>Add Teacher</button> */}
                                    </form>
                                </div>
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

                            <Link to="/Dashboard/Sup_Admin">
                                <div
                                    className={` flex items-center text-[15px] font-semibold text-[#858D9D] border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2  `}
                                >
                                    <img src="/cross.svg" alt="Cancel" />
                                    <p>Cancel</p>
                                </div>
                            </Link>

                            <div
                                className={` flex items-center text-[15px] font-semibold  border-[#858D9D] py-2 px-5 rounded-lg border-2 space-x-2 border-none bg-[#5C59E8] text-[#ffff]`}
                                onClick={handleSubmit}
                            >
                                <img src="/plus.svg" alt="Add Teacher" />
                                <p>Add Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddTeacher