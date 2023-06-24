import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const AddTeacher = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}`, teacherDetails)
            console.log(response)
            if (response.data.success) {
                toast.success('Teacher Added Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else {
                toast.error(`Error`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        }
        catch (err) {
            toast.error(`Error`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.log(err)
        }

    }
    const labelStyles = 'text-[#4D5464] font-bold text-lg'
    const inputStyles = 'text-[#667085] bg-[#F9F9FC] rounded-md px-4 py-2'
    const inputContainerStyles = 'grid gap-2 '
    return (
        <div>
            <div className="flex  text-3xl h-screen overflow-hidden">
                <Sidebar />

                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className='m-10'>
                        <ToastContainer />
                        <h1 className='font-extrabold my-5'> Add Teacher </h1>
                        <form onSubmit={handleSubmit} >
                            <div className='grid grid-cols-2 gap-10'>
                                <div className={inputContainerStyles}>
                                    <label htmlFor="name" className={labelStyles}>First Name:</label>
                                    <input type="text" value={`${teacherDetails.firstName}`} className={inputStyles} id='name' name='name' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            firstName: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor="lname" className={labelStyles}>Last Name:</label>
                                    <input type="text" value={`${teacherDetails.lastname}`} className={inputStyles} id='lname' name='lname' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            lastname: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='Gender' className={labelStyles}>Gender: </label>
                                    <select type="text" value={`${teacherDetails.Gender}`} className={inputStyles} id='Gender' name='Gender' onChange={(e) => setTeacherDetails(prev => {
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
                                    <label htmlFor='Joinyear' className={labelStyles}>Join Year: </label>
                                    <input type="number" value={`${teacherDetails.Joinyear}`} className={`${inputStyles} appearance-[textfield]`} id='Joinyear' name='Joinyear' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            Joinyear: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='dob' className={labelStyles}>Date of Birth: </label>
                                    <input type="date" value={`${teacherDetails.dob}`} className={inputStyles} id='dob' name='dob' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            dob: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='designation' className={labelStyles}>Designation: </label>
                                    <input type="text" value={`${teacherDetails.designation}`} className={inputStyles} id='designation' name='designation' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            designation: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='email' className={labelStyles}>Email: </label>
                                    <input type="email" value={`${teacherDetails.email}`} className={inputStyles} id='email' name='email' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            email: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='phone' className={labelStyles}>Phone: </label>
                                    <input type="text" value={`${teacherDetails.phone}`} className={inputStyles} id='phone' name='phone' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            phone: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='address' className={labelStyles}>Address: </label>
                                    <input type="text" value={`${teacherDetails.address}`} className={inputStyles} id='address' name='address' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            address: e.target.value
                                        }
                                    })} />
                                </div>
                                <div className={inputContainerStyles}>
                                    <label htmlFor='Category' className={labelStyles}>Category: </label>
                                    <input type="text" value={`${teacherDetails.Category}`} className={inputStyles} id='Category' name='Category' onChange={(e) => setTeacherDetails(prev => {
                                        return {
                                            ...prev,
                                            Category: e.target.value
                                        }
                                    })} />
                                </div>
                            </div>
                            <button className='bg-[#5c59e8] text-white rounded-md px-8 py-2 mt-5'>Add Teacher</button>



                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddTeacher