export default function Dice({onClick}) {
    return (
        <div onClick={onClick}>
        <svg

            className="w-10 h-10 hover:scale-105 duration-200 transition-all ease-in active:rotate-[360deg]"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Dice body */}
            <rect
                x="5"
                y="5"
                width="110"
                height="110"
                rx="16"
                ry="16"
                fill="white"
                stroke="black"
                strokeWidth="6"
            />

            {/* Center dot */}
            <circle
                cx="60"
                cy="60"
                r="10"
                fill="black"
            />
        </svg>
        </div>
    );
}
