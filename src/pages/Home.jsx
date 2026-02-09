import { Link } from "react-router-dom";

function Home() {
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
        }

    ]
    return (
        <>
        <section className="min-h-screen scroll-smooth flex flex-col justify-center items-center text-center px-6 bg-gray-50">

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fun React Projects
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
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

        </section>
    <div className="scroll-smooth relative">
        <div className="sticky top-0 h-auto flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
            {info.map(({name,description,link,index,img})=>{
                return (
                    <div className="flex sticky flex-col gap-4 lg:flex-row h-full w-full p-10 items-start" id={index}>

                        <div className="flex flex-col gap-2">
                            <p className="text-9xl self-start bg-gradient-to-r from-[#38bdf8] to-[#a5b4fc] text-transparent h-auto pb-2 bg-clip-text font-extrabold tracking-tight">
                                Project {index}
                            </p>

                            <p className="text-8xl text-[#e0f2fe] pb-4">{name}</p>

                            {/* centered paragraph */}
                            <p className="self-start pb-3 text-left text-center max-w-2xl text-[#c7d2fe] leading-relaxed">
                                {description}
                            </p>

                            <Link to={link}>
                                <button className="cursor-pointer px-6 py-3 rounded-lg
                                                      border border-black
                                                      hover:bg-black hover:text-white
                                                      transition">
                                    Go there!
                                </button>
                            </Link>
                        </div>

                        {/* centered image */}

                        <div className="flex flex-row items-center justify-center gap-2">

                            <img
                                src={img}
                                className="w-auto h-96 rounded"
                            />
                        </div>


            </div>
            )
            })}
        </div>
    </div>
        </>
    );
}

export default Home;
