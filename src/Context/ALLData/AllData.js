import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AllDataContext from './AllDataContext'

const AllData = (props) => {
    const [student, setStudent] = useState()
    const [teacher, setTeacher] = useState()



    return (
        <>
            <AllDataContext.Provider value={{student,teacher}}>
                {props.children}
            </AllDataContext.Provider>
        </>
    )
}

export default AllData