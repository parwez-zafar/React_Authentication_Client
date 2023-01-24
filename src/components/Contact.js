import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'




const Contact = () => {
    const [data, setData] = useState({});
    const contactData = async () => {
        try {
            const res = await fetch("http://localhost:8000/contactData", {
                method: "GET",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })

            // console.log(res);
            const data = await res.json();
            // console.log(data.name);
            setData(data)




        }
        catch (err) {
            // navigate("/login")
            console.log("error is " + err)
        }

    }

    useEffect(() => {
        contactData();
    }, [])
    return (
        <>
            <div className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-around ">
                            {/* for phone number */}
                            <div className="d-flex justify-content-start align-item-center  border">
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 7903242752
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-item-center border ">
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        parwezzafar3@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-item-center border ">
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Asansol
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact us form */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">

                                <div className="contact_form_title">
                                    Contact Me
                                </div>

                                <form id='contact_form'>

                                    <div className="contact_form_name d-flex justify-content-between align-item-between">
                                        <input type="text" id="contack_form_name" className="contact_form_name" value={data.name} placeholder="Your Name" required />

                                        <input type="email" id="contack_form_email" className="contact_form_email" value={data.email} placeholder="Your Email" required />


                                        <input type='number' id="contack_form_phone" className="contact_form_phone" value={data.phone} placeholder="Your Phone" required />
                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea name="" id="" cols="100" rows="10" placeholder="Message" ></textarea>
                                    </div>

                                    <div className="">
                                        <button className="">Send message</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;