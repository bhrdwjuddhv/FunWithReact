import { useState } from "react";
import ProfileCard from "../../components/profileCard/profileCard.jsx";
import ProfileInputBox from "../../components/profileCard/input.jsx";

export default function ProfileCardPage() {

    const [data, setData] = useState({
        name: "",
        role: "",
        image: "",
        tech: [],
        socials: {}
    });

    return (
        <div className="min-h-screen flex items-center justify-center
                    bg-slate-900 p-10 gap-12 flex-col lg:flex-row">

            <ProfileInputBox
                data={data}
                setData={setData}
            />

            <ProfileCard
                data={data}
            />

        </div>
    );
}
