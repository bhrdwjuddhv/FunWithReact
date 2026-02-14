import { useState } from "react";
import Card from "../../components/card/card.jsx";
import BottomBar from "../../assets/findColours/bottomBar.jsx";
import InputBox from "../../components/card/input.jsx";
import CardDependencies from "../../components/card/dependencies.jsx";

export default function CardPage() {

    const [colors, setColors] = useState({
        background: "#e7d8f1",
        primary: "#302b63",
        text: "#000000",
        accent: "#f59e0b"
    });
    const [data,setData] = useState({
      title:"Title",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur dicta eius eveniet excepturi impedit laboriosam libero modi officia possimus quam repudiandae, tenetur? Adipisci, aliquam aliquid aperiam atque consectetur corporis dolore dolores ducimus eveniet, expedita ipsa ipsum molestiae neque nobis nostrum numquam quisquam quod, repudiandae sunt temporibus ut voluptatem voluptates?",
      image:"/project1.png" ,
      link:"/pomodoro"
    })

    return (
        <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center"
        style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
            backgroundSize: "8px 8px",
            backgroundRepeat: "repeat",
        }}
        >
            <div className="flex lg:flex-row flex-col space-around items-center justify-center gap-8">
                <div className="flex flex-col gap-4">
                    <CardDependencies />
                <InputBox data={data} setData={setData} colors={colors}/>
                </div>
            <Card colors={colors} data={data} />

            </div>
            <BottomBar colors={colors} setColors={setColors}  />


        </div>
    );
}
