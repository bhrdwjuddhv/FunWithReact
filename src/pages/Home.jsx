import { Link } from "react-router-dom";
import { motion } from "motion/react"
import {useState} from "react";
import CardPage from "./componentPage/CardPage.jsx";
import ComponentList from "../components/componentlist.jsx";

function Home() {
    const [frame, setFrame] = useState('null');
    const info = [
        {
            index:1 ,
            name:"Background Colour Changer",
            description:"A simple React tool that lets users preview colors instantly by entering a hex code or generating a random one, with the background updating in real time. It uses React’s useState for state management, controlled inputs for handling user input, dynamic inline styles for live color changes, and Tailwind CSS for clean layout, spacing, and hover interactions.",
            link:"/bgchanger",
            id:"project1",
            img:"/project1.png"
        },
        {
            index: 2,
            name: "Random Dog Generator",
            description:
                "An interactive React project that fetches and displays random dog information using an external API. It demonstrates API fetching, conditional rendering, loading skeletons, reusable components, and state management with useState and useEffect, styled using Tailwind CSS.",
            link: "/randomdog",
            id: "project2",
            img:"/project2.png"
        },
        {
            index: 3,
            name: "Perfect Colour Finder",
            description:
                "A React-based color system generator that builds a complete UI palette from a single primary color. It derives secondary, accent, background, and text colors using color math, applies contrast logic for readability, and updates the UI dynamically using React state and Tailwind CSS.",
            link: "/perfectcolourfinder",
            id: "project3",
            img:"/project3.png"
        },
        {
            index: 4,
            name: "Simple Pomodoro",
            description:
                "A React-based focus timer that tracks real-time productivity and visualizes sessions using Chart.js. It supports start/pause controls, custom time additions, dynamic theming, and stores focus data in localStorage to display progress trends over time.",
            link: "/pomodoro",
            id: "project4",
            img:"/project4.png"
        }

    ]
    return (
        <>
        <section className="min-h-screen bg-[url('/herosection.png')] bg-cover bg-center scroll-smooth flex flex-col justify-center items-center text-center px-6 bg-gray-50">
        <div className="flex flex-col justify-center items-center text-center bg-[#ffffff]/60 py-3 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fun React Projects
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10">
                A collection of small, interactive React experiments — built to learn,
                break, fix, and have fun along the way.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
                <a href='#1'><button className="
          px-6 py-3 rounded-lg
          bg-black text-white
          hover:bg-gray-800
          transition
        ">
                    View Projects
                </button></a>

                <button className="
          px-6 py-3 rounded-lg
          border border-black
          hover:bg-black hover:text-white
          transition
        ">
                    About Me
                </button>
            </div>
        </div>

        </section>
        <div
            className="min-h-screen bg-slate-950 flex flex-col lg:flex-row items-center justify-center gap-4"
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.75px, transparent 0)`,
                backgroundSize: "8px 8px",
                backgroundRepeat: "repeat",
            }}
            >

            {info.map(({index,name,description,link,id,img}) => {
               return (<div className="bg-gray-800 rounded-xl p-6
                flex flex-col items-center
                gap-4 w-80 hover:scale-105 duration-200 transition-all">

                    <div className="relative overflow-hidden rounded-xl
                     p-4 h-48 w-full
                     bg-gradient-to-r
                     from-[#000000] via-[#0f0c29] to-[#302b63]
                flex items-center justify-center
                hover:from-indigo-900 hover:to-purple-600
                transition-all duration-500 ease-in">

                        <motion.img
                            src={img}
                            className="absolute h-40 w-auto rounded-xl"
                            style={{
                                top: "50%",
                                left: "50%",
                            }}
                            initial={{
                                rotate: 22.5,
                                x: -50,
                                y: -50,
                                scale: 1
                            }}
                            whileHover={{
                                rotate: 0,
                                x: "-50%",
                                y: "-50%",
                                scale: 1.1
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                        />

                    </div>

                    <span className="text-white text-2xl font-bold">{name}</span>
                    <p className="text-gray-300 text-sm text-center font-mono leading-relaxed">{description}</p>
                    <div className="flex flex-col lg-flex-row">
                        <Link to={link}><button className="p-2 bg-[#ffffff] cursor-pointer hover:text-white py-5 px-6 hover:bg-black rounded-lg duration-300 transition-all text-black">Go there!</button></Link>
                    </div>

                </div>
            )})}


        </div>
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-8"
             style={{
                 backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.75px, transparent 0)`,
                 backgroundSize: "8px 8px",
                 backgroundRepeat: "repeat",
             }}

        >
            <span className="relative text-center min-h-screen font-bold text-7xl font-mono text-white self-start justify-self-start pl-10 pt-6">Components</span>
            <ComponentList />

        </div>
        </>
    );
}

export default Home;
