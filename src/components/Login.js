import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../App";


const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');



    const loginUser = async (event) => {
        // event.preventDefault();

        try {
            const res = await fetch('http://localhost:8000/login', {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })

            })
            const data = await res.json();
            if (!data) {

            }
            if (res.status === 400 || !data) {
                window.alert('invalid credential');
            }
            else {
                dispatch({ type: 'USER', payload: true })
                window.alert('login success');
                navigate('/');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const checkLogin = async () => {
        try {
            const res = await fetch('http://localhost:8000/checkLog', {
                method: "GET",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }



            })

            if (res.status === 200) {
                navigate('/about');
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        checkLogin();
    }, [])
    return (
        <>
            <center>

                <section className="sign-in">
                    <div className="container mt-5">
                        <div className="singin-content">
                            <div className="singin-image">
                                <figure>

                                </figure>
                                <NavLink className="singin-image-link" to="/register">Create An Account</NavLink>
                            </div>
                            <div className="singin-form">
                                <h2 className="form-title">Login</h2>

                                <div className="register-form" id='register-form'>

                                    <div className="form-group">
                                        <label htmlFor="email">

                                        </label>
                                        <input type="text" name='email' id='email' autoComplete='off' placeholder='Your Email' value={email} onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">

                                        </label>
                                        <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' value={password} onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                    </div>


                                    <div className="form-group form-button">
                                        <button type="button" name='singin' id='singin' className='form-submit' onClick={loginUser} >Log In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </center>
        </>
    )
}

export default Login;