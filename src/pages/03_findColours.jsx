import {useState} from "react";
import Dice from "../assets/findColours/dice.jsx";
import RandomColor from "../assets/randomColourGenerator.jsx";
function Heropage() {
    const [primary, setPrimary] = useState('#ff0000');
    const [background, setBackground] = useState('#ffffff');
    const [text, setText] = useState('#000000');
    const [secondary, setSecondary] = useState('#000000');
    const [accent, setAccent] = useState('#e47272');
    const [copy,setCopy] = useState("Copy the Colours");
    const controls = [
        { label: "Background", value: background, setter: setBackground },
        { label: "Primary", value: primary, setter: setPrimary },
        { label: "Secondary", value: secondary, setter: setSecondary },
        { label: "Accent", value: accent, setter: setAccent },
        { label: "Text", value: text, setter: setText },
    ];
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function adjustColor(primaryHex, percent) {
        const hex = primaryHex.replace("#", "");

        let r = parseInt(hex.slice(0, 2), 16);
        let g = parseInt(hex.slice(2, 4), 16);
        let b = parseInt(hex.slice(4, 6), 16);

        const factor = percent / 100;

        r = Math.min(255, Math.max(0, Math.round(r + (255 - r) * factor)));
        g = Math.min(255, Math.max(0, Math.round(g + (255 - g) * factor)));
        b = Math.min(255, Math.max(0, Math.round(b + (255 - b) * factor)));

        return (
            "#" +
            r.toString(16).padStart(2, "0") +
            g.toString(16).padStart(2, "0") +
            b.toString(16).padStart(2, "0")
        );
    }

    function copyToClipboard() {
        window.navigator.clipboard.writeText(
            `Primary: ${primary},
                  Secondary: ${secondary},
                  Background: ${background},
                  Accent: ${accent},
                  Text: ${text}
            `
        )
        setCopy('✅Copied to clipboard');
        setTimeout(() => {
            setCopy('Copy the colours')
        },1000);

    }





    return (
        <>
            <div
                className="min-h-screen w-full flex flex-col"
                style={{ backgroundColor: background }}
            >
                {/* HERO */}
                <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: text }}
                    >
                        Test the colours in your mind
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mb-10 opacity-80"
                        style={{ color: text }}
                    >
                        Experiment with color combinations, generate palettes, and instantly
                        see how they feel together — before you ever open a design tool.
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <button
                            className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                            style={{ backgroundColor: primary, color: background }}
                        >
                            Start Experimenting
                        </button>

                        <button
                            className="px-6 py-3 rounded-lg font-medium border transition-all hover:scale-105"
                            style={{ borderColor: secondary, color: secondary }}
                        >
                            Learn More
                        </button>
                    </div>
                </section>

                {/* WHY SECTION */}
                <section className="py-20 px-6">
                    <h2
                        className="text-3xl font-bold text-center mb-12"
                        style={{ color: text }}
                    >
                        Why Realtime Colors?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Instant Feedback",
                                desc: "See color changes immediately, without exporting or refreshing.",
                            },
                            {
                                title: "Realistic Previews",
                                desc: "Test how colors feel together in a real layout, not just swatches.",
                            },
                            {
                                title: "Simple & Focused",
                                desc: "No clutter, no noise — just colors and clarity.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-6 rounded-xl"
                                style={{ backgroundColor: accent + "22", color: text }}
                            >
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="opacity-80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="py-20 px-6">
                    <h2
                        className="text-3xl font-bold text-center mb-12"
                        style={{ color: text }}
                    >
                        How It Works
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            "Pick or generate colors",
                            "See them applied instantly",
                            "Adjust until it feels right",
                            "Export or remember your palette",
                        ].map((step, index) => (
                            <div
                                key={step}
                                className="flex items-center gap-4 p-4 rounded-lg"
                                style={{ backgroundColor: secondary + "22", color: text }}
                            >
              <span
                  className="w-8 h-8 flex items-center justify-center rounded-full font-bold"
                  style={{ backgroundColor: primary, color: background }}
              >
                {index + 1}
              </span>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-24 px-6 text-center">
                    <h2
                        className="text-4xl font-bold mb-6"
                        style={{ color: text }}
                    >
                        Design with confidence
                    </h2>

                    <p
                        className="max-w-xl mx-auto mb-10 opacity-80"
                        style={{ color: text }}
                    >
                        Stop guessing how colors will feel. Test them live, adjust instantly,
                        and trust your visual intuition.
                    </p>

                    <button
                        className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
                        style={{ backgroundColor: primary, color: background }}
                    >
                        Try It Now
                    </button>
                </section>

                {/* FOOTER */}
                <footer
                    className="py-6 text-center text-sm opacity-60"
                    style={{ color: text }}
                >
                    Built for designers, developers, and curious minds
                </footer>
            </div>
            {/*<BottomBar />*/}
            <div className='fixed gap-5 flex border-2 items-center justify-center w-auto bottom-3 justify-self-center bg-white rounded-2xl p-2 flex-row '>
                {controls.map(({ label, value, setter }) => (
                    <div key={label} className="flex flex-col gap-1">
                        <label htmlFor={label} className="text-sm font-medium">
                            {label}:
                        </label>

                        <input
                            id={label}
                            type="color"
                            value={value}
                            className="
                                        rounded-md
                                        h-8 w-auto
                                        appearance-none
                                        border-none
                                        outline-none
                                        cursor-pointer
                                      "
                            onChange={(e) => setter(e.target.value)}
                        />
                    </div>
                ))}
                <div className="flex rounded-xl justify-center items-center p-1 bg-[#d9d9d9]">
                    <Dice onClick={e => {
                        let prim = RandomColor()
                        setSecondary(adjustColor(prim,-randomNumber(10,20)))
                        setPrimary(prim)
                        setAccent(adjustColor(prim,randomNumber(15,25)))
                        setBackground(adjustColor(prim,randomNumber(80,90)))
                    }} />
                </div>
                <button
                    onClick={copyToClipboard}
                className="cursor-pointer bg-neutral-800 text-white p-2 rounded-md hover:scale-105 duration-300"
                >{copy}</button>





            </div>
        </>

    )
}

export default Heropage;