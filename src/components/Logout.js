import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/logout', {
            method: "GET",
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => {

            if (res.status === 200) {
                navigate('/login');
            }
            else {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log("error is " + err);
        })
    }, [])
    return (
        <>
            <h1>Logut Page</h1>
        </>
    )
}

export default Logout;