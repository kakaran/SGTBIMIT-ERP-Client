import React, { useContext } from 'react'
import SubListContext from '../Context/SubList/SubListContext'
import { RxCross2 } from 'react-icons/rx'

const SubjectList = (props) => {
  const Method = useContext(SubListContext)
  return (
    <>
      <div className='align-middle'>
        <h4 className='text-[14px]'>Subject</h4>
        <div className=' flex items-center gap-3'>

          <select
            className="bg-gray-100 rounded-md border-none text-[#667085] w-[700px]"
            name='Course'
            id='course'
          >
            <option className="bg-gray-100" value="">Course</option>
            <img src="/ArrowDown.svg" alt="" />
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="BCOM">BCOM</option>
          </select>

          <button onClick={() => {
            Method.CountDecrement(props.index)
          }} className=' bg-[#FCDAD7] border p-2 w-10 h-10 rounded-lg'><RxCross2 className='text-[#F04438] text-[20px]'/></button>
        </div>

      </div>
    </>
  )
}

export default SubjectList