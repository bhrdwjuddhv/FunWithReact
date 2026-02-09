import {useState} from "react";
import RandomColor from "../assets/randomColourGenerator.jsx";

function BgChanger() {
    const [color,setColor] = useState("#ffffff")
    const bgColor = color.startsWith("#") ? color : `#${color}`;

    return (
        <div className="flex justify-center items-center min-h-screen w-full"
             style={{ backgroundColor: bgColor }}>
            <div className="flex px-3 py-4 bg-amber-100 rounded-md flex-col w-auto">
                <span className="self-start pb-2">Enter the hexcode</span>
                <input className="border-2 mb-2" type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                ></input>
                <button className="border-2 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-200 ease-in-out" type="button" onClick={() => {
                    let colour = RandomColor()
                    setColor(colour)
                }
                }>
                Generate Random
                </button>

            </div>
        </div>
    );
}

export default BgChanger;