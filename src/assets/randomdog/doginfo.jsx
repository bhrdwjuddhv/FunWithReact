export default function DogInfo({data}) {
    const dog = data?.data;
    return (
        <>
            <div className="flex bg-black flex-col lg:flex-row min-w-full min-h-full p-3">
                <img className="w-[645px] h-[380px] pb-2 rounded-md mr-5" src={dog.image.url} />
                <span className="flex flex-col gap-2 justify-center">
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Name:</span>

                    <p className="
                    text-white
                  ">{dog.name}</p>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Breed:</span>

                    <p className="
                    text-white
                  ">{dog.breed_group}</p>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Life Span:</span>

                    <p className="
                    text-white
                  ">{dog.life_span}</p>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Temperament:</span>

                    <p className="
                    text-white
                  ">{dog.temperament}</p>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Weight:</span>

                    <p className="
                    text-white
                  ">{dog.weight.metric} Kg</p>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Height:</span>

                    <p className="
                    text-white
                  ">{dog.height.metric} Cm</p>
                </div>

            </span>
            </div>
        </>
    )
}