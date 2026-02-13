import Dice from "./dice.jsx";
import RandomColor from "../randomColourGenerator.jsx";
import {adjustColor} from "./adjustColor.js";
import {useState} from "react";

export default function BottomBar({ colors, setColors }) {
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function copyToClipboard() {
        window.navigator.clipboard.writeText(
            "hi"
        )
        setCopy('✅Copied');
        setTimeout(() => {
            setCopy('Copy the colours')
        },1000);

    }
    const [copy,setCopy] = useState("Copy the Colours");

    const controls = [
        { label: "Background", key: "background" },
        { label: "Primary", key: "primary" },
        { label: "Secondary", key: "secondary" },
        { label: "Accent", key: "accent" },
        { label: "Text", key: "text" },
    ];

    return (
        <>
        <div className='fixed gap-5 flex border-2 items-center justify-center w-auto bottom-3 justify-self-center bg-white rounded-2xl p-2 flex-row '>
            {controls.map(({ label, key }) => (
                <div key={label} className="flex flex-col gap-1">
                    <label htmlFor={label} className="text-sm font-medium">
                        {label}:
                    </label>

                    <input
                        id={label}
                        type="color"
                        value={colors[key]}
                        className="
                                        rounded-md
                                        h-8 w-auto
                                        appearance-none
                                        border-none
                                        outline-none
                                        cursor-pointer
                                      "
                        onChange={(e) =>
                            setColors(prev => ({
                                ...prev,
                                [key]: e.target.value
                            }))

                        }
                    />
                </div>
            ))}
            <div className="flex rounded-xl justify-center items-center p-1 bg-[#d9d9d9]">
                <Dice onClick={() => {
                    let prim = RandomColor()

                    setColors(prev => ({
                        ...prev,
                        primary: prim,
                        secondary: adjustColor(prim, -randomNumber(10,20)),
                        accent: adjustColor(prim, randomNumber(15,25)),
                        background: adjustColor(prim, randomNumber(80,90)),
                    }))
                }} />

            </div>
            <button
                onClick={copyToClipboard}
                className="cursor-pointer bg-neutral-800 text-white p-2 rounded-md hover:scale-105 duration-300"
            >{copy}</button>





        </div>
        </>
    );
}