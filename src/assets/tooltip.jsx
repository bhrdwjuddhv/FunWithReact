export default function Tooltip({ children, text }) {
    return (
        <div className="relative inline-block group">
            {children}

            <span
                className="
          absolute -top-10 left-1/2 -translate-x-1/2
          bg-white text-black text-sm
          px-3 py-1 rounded-lg shadow-md
          opacity-0 group-hover:opacity-100
          transition-all duration-200
          pointer-events-none whitespace-nowrap
        "
            >
        {text}

                {/* Arrow */}
                <span
                    className="
            absolute top-full left-1/2 -translate-x-1/2
            border-8 border-transparent border-t-white
          "
                />
      </span>
        </div>
    );
}
