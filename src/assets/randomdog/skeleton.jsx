export default function DogSkeleton() {
    return (
        <>
        <div className="flex flex-col lg:flex-row min-w-full min-h-full p-3">
            <div className="bg-slate-950 w-[645px] h-[380px] animate-pulse rounded-md mr-5 ">
            </div>
            <span className="flex flex-col gap-2 justify-center">
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Name:</span>

                    <span className="
                    h-4 w-24
                    rounded
                    bg-white/30
                    animate-pulse
                  "></span>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Breed:</span>

                    <span className="
                    h-4 w-24
                    rounded
                    bg-white/30
                    animate-pulse
                  "></span>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Life Span:</span>

                    <span className="
                    h-4 w-24
                    rounded
                    bg-white/30
                    animate-pulse
                  "></span>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Temperament:</span>

                    <span className="
                    h-4 w-24
                    rounded
                    bg-white/30
                    animate-pulse
                  "></span>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Weight:</span>

                    <span className="
                    h-4 w-24
                    rounded
                    bg-white/30
                    animate-pulse
                  "></span>
                </div>
                <div className="flex pb-2 flex-row mr-2 items-center gap-2">
                    <span className="text-white">Height:</span>

                    <span className="
                    h-4 w-24
                    rounded
                    bg-white/30
                    animate-pulse
                  "></span>
                </div>

            </span>
        </div>
        </>
    )
}