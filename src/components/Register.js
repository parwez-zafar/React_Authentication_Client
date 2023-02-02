import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: '',
        phone: '',
        work: '',
        password: '',
        confirm_password: ''
    });
    let name, val;
    const handlesInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        val = e.target.value;

        setUser({ ...user, [name]: val })
    }

    const postDate = async () => {

        try {
            const { name, email, phone, work, password, confirm_password } = user;

            const res = await fetch('http://localhost:8000/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, password, confirm_password
                })
            })
            const data = await res.json();
            console.log(res)
            console.log(data)
            if (data.status === 422 || !data) {
                window.alert("Invalid data");
                console.log("Invalid data");
            } else {
                window.alert("Registered");
                console.log("Registered");
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
        // event.preventDefault();

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

                <section className="signup">
                    <div className="container mt-5">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">sign up</h2>

                                <div className="register-form" id='register-form'>
                                    <div className="form-group">
                                        <label htmlFor="name">

                                        </label>
                                        <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name'
                                            value={user.name} onChange={handlesInputs} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">

                                        </label>
                                        <input type="text" name='email' id='email' autoComplete='off' placeholder='Your Email'
                                            value={user.email} onChange={handlesInputs} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">

                                        </label>
                                        <input type="text" name='phone' id='phone' autoComplete='off' placeholder='Your Phone'
                                            value={user.phone} onChange={handlesInputs}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">

                                        </label>
                                        <input type="text" name='work' id='work' autoComplete='off' placeholder='Your Profession'
                                            value={user.work} onChange={handlesInputs} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">

                                        </label>
                                        <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password'
                                            value={user.password} onChange={handlesInputs} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">

                                        </label>
                                        <input type="password" name='confirm_password' id='confirm_password' autoComplete='off' placeholder='Confirm Password'
                                            value={user.confirm_password} onChange={handlesInputs} />
                                    </div>

                                    <div className="form-group form-button">
                                        <button type="button" name='signup' id='signup' className='form-submit' onClick={postDate} >Register</button>
                                    </div>

                                </div>

                            </div>
                            <div className="signup-image">
                                <figure>

                                </figure>

                                <NavLink className="signup-image-link" to="/login">I Am Already Register</NavLink>
                            </div>


                        </div>

                    </div>
                </section>
            </center>
        </>
    )
}

export default Register;