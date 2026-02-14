
import Motion from "../../assets/logos/motion.jsx";
import Tailwind from "../../assets/logos/tailwind.jsx";

export default function CardDependencies() {
    return (
        <>
            <div className="flex flex-col gap-4 p-4 bg-gray-900">
                <span className="text-2xl text-white font-mono font-bold">Dependencies</span>

                <span className="text-sm text-gray-300 flex flex-row gap-4 items-center ">
                    <Motion height={48} width={48}/>
                    <Tailwind height={48} width={48} />
                </span>

            </div>
        </>
    )
}