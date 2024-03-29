import React, { useEffect, useState } from 'react'
import HandleExcelContext from "./handleExcelContext";
import * as XLSX from "xlsx";

const HandleExcel = (props) => {

    const [Value, setValue] = useState([])
    const [refresh,setRefresh] = useState(0)

    const handleExcel = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(e.target.files[0]);
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "buffer" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
                // State.value = json
                localStorage.setItem('StudentList', JSON.stringify(json))
                const Data =  localStorage.getItem('StudentList');
                setValue(JSON.parse(Data))

            };
        }
    }

    useEffect(() => {
        const DataSet = async () => {
            try {
                const Data =  localStorage.getItem('StudentList');
                console.log(JSON.parse(Data));
                setValue(await JSON.parse(Data))
                // console.log(Value);
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }
        DataSet()
        setRefresh(0)
        console.log("Handle");
    }, [refresh])

    return (
        <>
            <HandleExcelContext.Provider value={{ handleExcel, Value,setRefresh }}>
                {props.children}
            </HandleExcelContext.Provider>
        </>
    )
}

export default HandleExcel