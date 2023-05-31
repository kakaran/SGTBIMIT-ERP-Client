import React, { useEffect, useState } from 'react'
import { useAuth } from "../Context/auth";
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from './Spinner';

const Student = () => {
    const [ok, setOk] = useState()
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/Student/stu-auth`);
            // console.log(res);
            if (res.data.ok) {
                setOk(true)

            } else {
                setOk(false)
            }
        };
        if (auth?.token) authCheck();
    },[auth?.token]);
    return ok ? <Outlet />  : <Spinner/>;
}

export default Student