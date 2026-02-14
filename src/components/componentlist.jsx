import {motion} from "motion/react";
import {Link} from "react-router-dom";
export default function ComponentList() {
    const info = [
        {
            title: "Cards",
            links: [
                {link:"/generalcard", name:"General Card"},
                {link:"/profilecard", name:"Profile Card"},
                {link:"/input", name:"Inputs"},
            ]
        }
    ]
    return(
                info.map((item) => {
                    return(
                        <div className="flex absolute w-full flex-row px-6 justify-around">
                            <div className="divide-y flex justify-self-start self-start flex-col gap-2 divide-gray-700 pl-5 pt-6">
                                <span className="text-white text-4xl pb-1 text-center">{item.title}</span>

                                {item.links.map(({link,name}) => {
                                    return(
                                        <Link to={link}>
                                            <motion.span
                                                animate={{
                                                    color: "#d1d5db",
                                                    scale: 1,
                                                    y: 0,
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -6,
                                                    color: "#ffffff",
                                                    textShadow: "0px 0px 5px rgba(255, 255, 255, 0.7)"
                                                }}
                                                transition={{ duration: 0.025, ease: "easeInOut" }}
                                                className="text-gray-300 text-center text-2xl inline-block font-mono cursor-pointer hover:text-white rounded-lg duration-300 transition-all">
                                                {name}
                                            </motion.span>
                                        </Link>
                                    )
                                })}

                            </div>


                        </div>
                    )
                })
)
}