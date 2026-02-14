import {motion} from "motion/react";
import {Link} from "react-router-dom";

export default function Card({ data, colors }){
    return (
        <>
        <motion.div
            style={{ backgroundColor: colors.background }}
            className="group p-2 flex flex-col items-center justify-center rounded-lg gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover="hover"
            variants={{
                hover: {
                    y: -2,
                    scale: 1.01,
                    boxShadow: "0px 25px 50px rgba(0,0,0,0.45)"
                }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center w-75 justify-center gap-2">
            <div className="relative overflow-hidden rounded-lg
                     p-4 h-48 w-75
                      mt-1 mr-1 ml-1

                        flex items-center justify-center
                      transition-all duration-500 ease-in"
                 style={{
                     background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`
                 }}


            >
                <motion.img src={data.image} className="absolute scale-80 rounded-lg inset-0 w-full h-full object-cover" alt="Card Image"
                     initial={{
                            rotate: 15,
                            x: 90,
                            y: 50,
                     }}
                     variants={{
                            hover: {
                                rotate: 0,
                                x: 0,
                                y: 0,
                                scale: 1.02,
                                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.35)"
                            }


                     }}




                />
            </div>
                <div className="flex flex-col gap-3 px-2 pb-3">
                <span className="text-5xl font-bold transition-colors duration-300 text-left "
                      style={{ color: colors.text }}
                >{data.title}</span>
                <p className={"text-sm text-center transition-colors duration-300"}
                   style={{ color: colors.text }}>
                    {data.description}
                </p>
                </div>
                <div className="pb-2">
                    <motion.div
                        initial={{ y: 2 }}
                        animate={{ y: 0 }}
                        whileHover={{ y: -3,
                            boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.35)",
                            scale: 1.03


                                    }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to={data.link}
                            className="p-3 rounded-xl transition-all text-white duration-300"
                            style={{
                                backgroundColor: colors.accent,
                            }}
                            onMouseEnter={(e) =>
                                e.currentTarget.style.backgroundColor = colors.primary
                            }
                            onMouseLeave={(e) =>
                                e.currentTarget.style.backgroundColor = colors.accent
                            }
                        >
                            Go there!
                        </Link>
                    </motion.div>

                </div>
            </div>

        </motion.div>


        </>
    )
}