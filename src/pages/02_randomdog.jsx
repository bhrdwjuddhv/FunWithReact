import { useState, useEffect } from "react";
import DogSkeleton from "../assets/randomdog/skeleton.jsx";
import DogInfo from "../assets/randomdog/doginfo.jsx";

function RandomDog() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dogData, setDogData] = useState(null);
    const [image, setImage] = useState(null);

    async function fetchDog() {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(
                "https://api.freeapi.app/api/v1/public/dogs/dog/random"
            );
            const data = await res.json();

            setDogData(data);
        } catch (err) {
            setError("Failed to fetch dog data");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDog();
    }, []);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            {loading ? (
                <DogSkeleton />
            ) : (
                <>
                    <DogInfo data={dogData} loading={false} />

                    <div className="flex justify-center pb-6">
                        <button
                            onClick={fetchDog}
                            className="
                mt-6 px-5 py-2
                rounded-lg
                bg-white text-black font-medium
                transition-all duration-200
                hover:bg-gray-200
                active:scale-95
              "
                        >
                            Generate Random Dog
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default RandomDog;
