import React, { useContext, useEffect, useState } from "react";
import HomeContent from './HomeContent';
import { UserContext } from "../App";




const Home = () => {
    const { state, dispatch } = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const HomePage = async () => {
        try {
            const res = await fetch("http://localhost:8000/about", {
                method: "GET",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
            const data = await res.json();
            if (res.status === 200) {
                dispatch({ type: 'USER', payload: true })
                setUserName(data.name);
                setShow(true);
            }
        }
        catch (err) {
            console.log("error is " + err)
        }
    }
    useEffect(() => {
        HomePage();
    }, [])
    return (
        <>


            {/* <p className="pt-5" >WELCOME</p>
            <h1 className="">{userName}</h1>
            <h2>{show ? "Happy, To See You Again" : "We Are The Mearn Developer"} </h2> */}




            <HomeContent />


        </>
    )
}

export default Home;