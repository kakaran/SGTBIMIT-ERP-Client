import React, { useContext, useState } from 'react'
import SubListContext from '../Context/SubList/SubListContext'
import { RxCross2 } from 'react-icons/rx'

const SubjectList = (props) => {
  const Method = useContext(SubListContext)
  const { filterData, count, setSubjectID } = Method;

  const SubjectHandle = (event) => {
    setSubjectID({
      _id: event.target.value,
      index: props.index
    })
  }

  return (
    <>
      <div className='align-middle'>
        <h4 className='text-[14px]'>Subject</h4>
        <div className=' flex items-center gap-3'>
          <select
            className="bg-gray-100 rounded-md border-none text-[#667085] w-[700px]"
            id='course'
            name="id"
            onChange={(e) => { SubjectHandle(e) }}
          >
            <option className="bg-gray-100" value="">Subjects</option>
            {
              filterData.map((value, index) => {
                return (
                  <option value={value._id} key={index}>{value?.Subject_Name + " " + value?.Subject_Code}</option>
                )
              })
            }
          </select>
          <button onClick={() => {
            Method.CountDecrement(props.value)
          }} className=' bg-[#FCDAD7] border p-2 w-10 h-10 rounded-lg'><RxCross2 className='text-[#F04438] text-[20px]' /></button>
        </div>

      </div>
    </>
  )
}

export default SubjectList