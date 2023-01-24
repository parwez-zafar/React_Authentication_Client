import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const About = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const aboutPage = async () => {
        try {
            const res = await fetch("http://localhost:8000/about", {
                method: "GET",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })

            if (res.status === 401)
                navigate('/login')
            // console.log(res);
            const data = await res.json();
            // console.log(data);
            if (res.status === 200) {
                setUser(data);
            }
            else {
                navigate('/login')
            }



        }
        catch (err) {
            // navigate("/login")
            console.log("error is " + err)
        }
    }
    useEffect(() => {
        aboutPage();
    }, [])

    // console.log(user);
    return (
        <>
            {
                user && <div>
                    <h2>Name : {user.name}</h2>
                    <h2>Email : {user.email}</h2>
                    <h2>Proffesion : {user.work}</h2>
                    <h2>Phone : {user.phone}</h2>
                    {/* <h2>{user.password}</h2> */}


                </div>
            }

        </>
    )
}

export default About;