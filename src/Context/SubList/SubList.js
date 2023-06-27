import React, { useState } from 'react'
import SubListContext from './SubListContext'

const SubList = (props) => {
    const [count, setCount] = useState([])

    const CountIncrement = async () => {
        try {
            let value = count.length
            console.log(value);
            console.log(count[value-1]);
            if (!value) {
                setCount(current => [...current, value + 1])
            } else {
                setCount(current => [...current, current[value-1] +1])
            }
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
                    console.log(counting, index);
                    console.log(counting !== index);
                    return counting !== index
                }))
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }

    return (
        <>
            <SubListContext.Provider value={{ count, CountIncrement, CountDecrement }}>
                {props.children}
            </SubListContext.Provider>
        </>
    )
}

export default SubList