import React from 'react'

const UpdateDetails = ({ tempObject, setTempObject, setStoreData, storeData, index, setPopup }) => {
    const labelStyles = 'text-[#4D5464] font-bold text-lg'
    const inputStyles = 'text-[#667085] bg-[#F9F9FC] rounded-md px-4 py-2'
    const inputContainerStyles = 'grid gap-2 '
    const handleSubmit = (e) => {
        e.preventDefault();
        let Data = structuredClone(storeData)
        Data[index] = tempObject
        localStorage.setItem('StudentList', JSON.stringify(Data))
        setStoreData(Data)
    }
    return (
        <div className=' flex justify-center items-center fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-20 z-[1000000000000]'>
            <div className='w-1/2 h-1/2 rounded-md bg-white overflow-y-scroll flex flex-col'>
                <div className='flex justify-between'>
                    <h1 className='mx-5 my-10'><span className='font-bold'>Add Missing Details - </span>{storeData[index].firstname} {storeData[index].lastname}</h1>
                    <button className='m-5' onClick={() => setPopup(false)}>X</button>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col grow'>
                    <div className='grid grid-cols-2 p-5 gap-5'>
                        {!tempObject.firstname && <div className={inputContainerStyles}>
                            <label htmlFor="name_update" className={labelStyles}>First Name:</label>
                            <input type="text" value={`${tempObject.firstname}`} className={inputStyles} id='name_update' name='name_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    firstname: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.lastname && <div className={inputContainerStyles}>
                            <label htmlFor="lname_update" className={labelStyles}>Last Name:</label>
                            <input type="text" value={`${tempObject.lastname}`} className={inputStyles} id='lname_update' name='lname_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    lastname: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.email && <div className={inputContainerStyles}>
                            <label htmlFor="email_update" className={labelStyles}>Email:</label>
                            <input type="text" value={`${tempObject.email}`} className={inputStyles} id='email_update' name='email_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    email: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.fathername && <div className={inputContainerStyles}>
                            <label htmlFor="fname_update" className={labelStyles}>Father's Name:</label>
                            <input type="text" value={`${tempObject.fathername}`} className={inputStyles} id='fname_update' name='fname_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    fathername: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.mothername && <div className={inputContainerStyles}>
                            <label htmlFor="mnameupdate" className={labelStyles}>Mother's Name:</label>
                            <input type="text" value={`${tempObject.mothername}`} className={inputStyles} id='mnameupdate' name='mnameupdate' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    mothername: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.rollnumber && <div className={inputContainerStyles}>
                            <label htmlFor="sid_update" className={labelStyles}>Student ID:</label>
                            <input type="text" value={`${tempObject.rollnumber}`} className={inputStyles} id='sid_update' name='sid_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    rollnumber: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.Fee && <div className={inputContainerStyles}>
                            <label htmlFor="fee_update" className={labelStyles}>Fee:</label>
                            <input type="text" value={`${tempObject.Fee}`} className={inputStyles} id='fee_update' name='fee_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    Fee: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.course && <div className={inputContainerStyles}>
                            <label htmlFor="course_update" className={labelStyles}>Course:</label>
                            <input type="text" value={`${tempObject.course}`} className={inputStyles} id='course_update' name='course_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    course: e.target.value
                                }
                            })} />
                        </div>}
                        {!tempObject.address && <div className={inputContainerStyles}>
                            <label htmlFor="address_update" className={labelStyles}>Address:</label>
                            <input type="text" value={`${tempObject.address}`} className={inputStyles} id='address_update' name='address_update' onChange={(e) => setTempObject(prev => {
                                return {
                                    ...prev,
                                    address: e.target.value
                                }
                            })} />
                        </div>}
                    </div>
                    <button className='mx-auto mb-5 mt-auto w-max px-6 py-2 rounded-md bg-blue-500 text-white font-bold'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateDetails