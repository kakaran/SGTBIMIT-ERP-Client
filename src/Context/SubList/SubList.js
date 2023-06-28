import React, { useEffect, useRef, useState } from 'react'
import SubListContext from './SubListContext'

const SubList = (props) => {
    const [count, setCount] = useState([])
    const [filterData, setFilterData] = useState([])
    const [Subjectid, setSubjectID] = useState({
        _id: "",
        index: ""
    });
    const [selectIds, setSelectIds] = useState([])


    const CountIncrement = async () => {
        try {
            let value = count.length
            // console.log(value);
            // console.log(count[value - 1]);
            if (!value) {
                setCount(current => [...current, value + 1])
            } else {
                setCount(current => [...current, current[value - 1] + 1])
            }
            // setCount(current => [...current, value])

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }

    const CountDecrement = async (index) => {
        try {
            console.log(index);
            setCount(current =>
                current.filter(counting => {
                    // console.log(counting, index);
                    // console.log(counting !== index);
                    return counting !== index
                }))
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }

    useEffect(() => {
        const SelectIDsaCheck = async () => {

            const CheckData = selectIds.filter((item) => item.index == Subjectid.index);

            if (CheckData.length) {
                selectIds.map((value, i) => {
                    if (value.index == Subjectid.index) {
                        setSelectIds((preeArray) => {
                            const newArray = [...preeArray];
                            newArray[i]._id = Subjectid._id
                            return newArray
                        })
                    }
                })
            } else {
                setSelectIds(cureent => [...cureent, Subjectid])
            }
        }
        if (Subjectid._id != "") {
            SelectIDsaCheck()
        }
    }, [Subjectid._id])

    return (
        <>
            <SubListContext.Provider value={{ count, filterData, selectIds, CountIncrement, CountDecrement, setFilterData, setSubjectID }}>
                {props.children}
            </SubListContext.Provider>
        </>
    )
}

export default SubList