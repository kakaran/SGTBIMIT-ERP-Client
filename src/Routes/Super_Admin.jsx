import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

const Super_Admin = () => {
    const [ok, setOk] = useState()
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("http://localhost:5000/api/superAdmin/Super_Admin-auth");
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

export default Super_Admin