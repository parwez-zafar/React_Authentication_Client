import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    const { state, dispatch } = useContext(UserContext);

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


            navigate('/login');
            dispatch({ type: 'USER', payload: false })


            if (res.status !== 200) {
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