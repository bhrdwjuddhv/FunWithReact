import { useState } from "react";
import Card from "../../components/card/card.jsx";
import BottomBar from "../../assets/findColours/bottomBar.jsx";
import InputBox from "../../components/card/input.jsx";

export default function CardPage() {

    const [colors, setColors] = useState({
        background: "#a5a5a5",
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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex lg:flex-row flex-col space-around items-center justify-center gap-8">
                <InputBox data={data} setData={setData} colors={colors}/>
            <Card colors={colors} data={data} />

            </div>
            <BottomBar colors={colors} setColors={setColors}  />


        </div>
    );
}
