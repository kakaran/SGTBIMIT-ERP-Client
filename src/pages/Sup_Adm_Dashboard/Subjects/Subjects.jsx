import React from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'

const Subjects = () => {
    return (
        <>
            <div className="flex  text-3xl overflow-y-auto overflow-hidden h-screen">
                <Sidebar />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <div className="px-4 overflow-y-visible bg-gray-100 sm:px-6 lg:px-8 py-8 w-full  mx-auto min-h-screen">
                        <h2>All Subjects</h2>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Subjects