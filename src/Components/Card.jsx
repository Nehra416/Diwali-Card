import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import A1 from "./assets/A1.json"
import A3 from "./assets/A3.json"
import A5 from "./assets/A5.json"
import A7 from "./assets/A7.json"
import "./Card.css"

export const Card = (props) => {
    const total = props.quates.length;

    const [value, setvalue] = useState("Nehra")
    const [input, setinput] = useState()
    const [quate, setquate] = useState()
    const [pop, setpop] = useState(false)

    useEffect(() => {
        const index = Math.floor(Math.random() * total);
        setquate(props.quates[index]);
    }, [props.quates, total]);


    const Get = (event) => {
        setinput(event.target.value)
    }
    const Generate = () => {
        setvalue(input || "Nehra");
        popup();
    }

    const change_quate = () => {
        const index = Math.floor(Math.random() * total);
        setquate(props.quates[index]);
    }

    const popup = () => {
        setpop(!pop)
        console.log(pop)
        console.log("working")
    }
    return (
        <div className={` bg-black h-full text-white `}>

            {/* Animations */}
            <Lottie animationData={A1} className='w-[500px] h-[480px] ' />
            <Lottie animationData={A3} className='w-[500px] h-[350px] absolute top-0 right-0 ' />
            <Lottie animationData={A5} className='w-[200px] h-[150px] absolute top-[450px] left-0 ' />
            <Lottie animationData={A7} className='w-[240px] h-[180px] absolute top-[300px] left-[570px] ' />

            {/* Main content */}
            <div className='absolute top-10 right-10'>
                <p className='text-4xl text-[#ffbf00] ' style={{ fontFamily: "'Playwrite GB S', cursive" }}>In Advance</p>
                <h1 className='text-7xl' style={{ fontFamily: "'Rubik', sans-serif" }} >Happy Diwali</h1>
                <p className='text-3xl pt-5 text-left indent-28 text-gray-300 animate-pulse' style={{ fontFamily: "'Playwrite GB S', cursive" }}>to you and your family!</p>
                <div className='text-4xl mt-10'>
                    <p className='text-right' style={{ fontFamily: "'Rubik', sans-serif" }}>REGARDS,</p>
                    <p className='text-right text-sky-800 font-bold hover:underline ' style={{ fontFamily: "'Abel', sans-serif" }}>{value}</p>
                </div>
            </div>

            {/* Quates */}
            <div className='text-[#ffbf00] text-4xl px-44 text-center m-auto cursor-pointer h-24 ' onClick={change_quate} style={{ fontFamily: "'Rubik', sans-serif" }}>
                {quate}
            </div>

            {/* For new Name Card */}
            <div className='text-center mt-10 bg-gray-900 p-5'>
                <p className='text-2xl pb-5' style={{ fontFamily: "'Abel', sans-serif" }}>Create your own Card with your Name</p>
                <input type="button" value="Click Here" onClick={popup} className='bg-gray-500 py-2 px-3 rounded text-xl ml-3 cursor-pointer' />
            </div>

            {/* For Popup */}
            <div className={`popup ${pop ? "openPopup" : ""} bg-gray-200`} style={{ boxShadow: '0px 0px 30px white' }}>
                <h1 className='text-black text-2xl pb-5 text-center font-semibold'>Enter Your Name :)</h1>
                <input type="text" placeholder='Nehra' onChange={Get} className='py-2 px-3 text-xl font-semibold border-2 rounded text-gray-600 mb-5 shadow' />
                <input type="button" value="Create Now" onClick={Generate} className='bg-sky-800 py-1 w-full rounded text-xl cursor-pointer text-center shadow-2xl' />
            </div>

            {/* Share partition */}
            <div className='text-center mt-10 bg-gray-900 p-5'>
                <p className='text-xl' style={{ fontFamily: "'Abel', sans-serif" }}>Let's Share on</p>
                <div className='flex justify-center gap-5 mt-5'>
                    {props.svg.map((item) => {
                        return (
                            <a href="#">{item}</a>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
