import {useState, useEffect, useRef} from "react";
import { Chart } from "chart.js/auto";

export default function Pomodoro() {
    let [time,setTime] = useState(0);
    const [timecolor,setTimeColor] = useState("#fc0d0d");
    const [play, setPlay] = useState(false);
    function addTimeHandler(minutesToAdd){
        setTime(prev => prev + minutesToAdd * 60);
    }
    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const pad = (num) => String(num).padStart(2, "0");

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const startRef = useRef(0);

    function renderChart() {
        const storedData = JSON.parse(localStorage.getItem("timeData")) || [];

        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(chartRef.current, {
            type: "line",
            data: {
                labels: storedData.map(d => d.x),
                datasets: [
                    {
                        label: "Focus Time",
                        data: storedData.map(d => d.y),
                        borderColor: "#fc0d0d",
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    useEffect(() => {
        if (!play) return;

        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setPlay(false);
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [play]);

    function saveSession(durationInSeconds) {
        const today = new Date().toLocaleDateString('en-GB');

        const storedData = JSON.parse(localStorage.getItem("timeData")) || [];

        storedData.push({
            x: today,
            y: durationInSeconds
        });

        localStorage.setItem("timeData", JSON.stringify(storedData));

        renderChart(); // <-- THIS updates chart instantly
    }

    useEffect(() => {
        renderChart();
    }, []);




    return(
        <>
        <div className="bg-slate-950 min-h-screen flex flex-col gap-3 justify-center items-center">
           <div className="min-h-screen flex flex-col justify-center items-center"> <span
                className="lg:text-9xl text-5xl pb-3 md:text-7xl"
                style={{
                    color: timecolor,
                    textShadow: `0 0 3px ${timecolor}`
                }}
            >{formatTime(time)}</span>
        <div className="flex flex-row pb-3 gap-5">
            <button className="rounded-full h-16 w-16 transition-all duration-300 hover:bg-slate-900/50 cursor-pointer bg-slate-900"
                    onClick={() => {
                        setPlay(false);
                        setTime(0);
                    }}


            >
                <i className={`bi text-2xl rounded-full bi-arrow-counterclockwise`}
                   style={{color: timecolor}}
                >
                </i>
            </button>
            <button className="rounded-full h-16 w-16 transition-all duration-300 hover:bg-slate-900/50 cursor-pointer bg-slate-900"
                    onClick={() => {
                        if (!play) {
                            startRef.current = time;
                        } else {
                            const focusedTime = startRef.current - time;

                            if (focusedTime > 0) {
                                saveSession(focusedTime);
                            }
                        }

                        setPlay(prev => !prev);
                    }}


            >
                <i className={`bi rounded-full text-2xl ${play?'bi-pause-fill':'bi-play-fill'}`}
                   style={{color: timecolor}}
                >
                </i>
            </button>
            <label className="relative w-16 h-16 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-900/50 transition cursor-pointer shadow-lg">

                <i
                    className="bi bi-palette-fill text-2xl"
                    style={{ color: timecolor }}
                ></i>

                <input
                    type="color"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setTimeColor(e.target.value)}
                />
            </label>



        </div>
        <div className="flex gap-5 flex-row">
            {['+5','+15','+30','+60'].map((value) => (
                <button
                    key={value}
                    className="rounded-full hover:bg-slate-900/50 transition-all duration-300 p-3 cursor-pointer bg-slate-900"
                    onClick={() => addTimeHandler(Number(value.replace('+', '')))}
                >
                    <span style={{ color: timecolor }}>
                      {value}
                    </span>
                </button>
            ))}

        </div>
           </div>
            <canvas ref={chartRef}></canvas>

        </div>
        </>
    )

}