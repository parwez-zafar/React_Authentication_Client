import React, { useEffect, useState } from "react";





const Home = () => {

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


            <p className="pt-5" >WELCOME</p>
            <h1 className="">{userName}</h1>
            <h2>{show ? "Happy, To See You Again" : "We Are The Mearn Developer"} </h2>




            <section id="welcome">
                <div id="name">
                    <h1 className="h1-primary">Welcome to Prwz Web Solutions</h1>
                    <p> Lorem ipsum dolor sit amet consectetur elit. Atque eveniet tempore blanditiis corporis ipsam illum et?
                    </p>
                    <p>laboriosam eos saepe asperiores dolorum.</p>
                    <a href="#section3" className="btn">Read More</a>
                </div>
            </section>

            <section id="section2">
                <div id="about">
                    <h1>Web & Application Development
                    </h1>
                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus repudiandae distinctio
                            quos optio eos, possimus debitis. Corporis, quis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus repudiandae distinctio
                            quos optio eos, possimus debitis. Corporis, quis?</p>
                    </div>
                </div>
            </section>

            <div id="work">
                <div className="box" id="box-1"><img src="service1.jpg" alt="Our Services"></img>
                    <h1>Web Development</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, culpa deleniti exercitationem ipsa
                        veritatis minus similique? Unde atque voluptatibus consectetur voluptatum!</p>
                </div>
                <div className="box" id="box-2"><img src="service2.jpg" alt="Our Services"></img>
                    <h1>Mobile Applications</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, culpa deleniti exercitationem ipsa
                        veritatis minus similique?</p>
                </div>
                <div className="box" id="box-3"><img src="service3.jpg" alt="Our Services"></img>
                    <h1>Tech Marketing</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, culpa deleniti exercitationem ipsa
                        veritatis minus similique? Unde atque voluptatibus consectetur voluptatum!</p>
                </div>
            </div>

            <section id="section4">
                <div id="heading">
                    <h1>We handle all of your digital needs</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptas quaerat deserunt iure doloribus,
                        natus eligendi fugiat et tempora fuga.</p>
                </div>
            </section>

            <section id="section5">
                <div className="card" id="card-1">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro nisi ipsum deleniti voluptas,
                        aspernatur alias expedita aliquam cupiditate beatae.</p>
                    <p>contact@prwzwebsolutions.test</p>
                </div>
                <div className="card" id="card-2">
                    <h1>About Our Company</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum porro deserunt, deleniti, quae
                        facere repudiandae, officiis est exercitationem nobis iusto doloremque! Soluta excepturi in aut suscipit
                        amet temporibus quo?</p>
                </div>
            </section>

            <section id="section6">
                <div className="info">
                    <h3>Prwz Web Solutions</h3>
                </div>
                <div className="info">
                    <h3>Project By Parwez</h3>
                </div>
            </section>


        </>
    )
}

export default Home;