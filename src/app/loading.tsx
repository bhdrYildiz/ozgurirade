import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">

            <div className="relative flex items-center justify-center mb-8">
                <span className="absolute w-20 h-20 rounded-full border-2 border-green-200 animate-ping opacity-60" />
                <span className="absolute w-14 h-14 rounded-full border border-green-300 animate-pulse" />
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-green-50 border border-green-100 z-10">
                    <Image
                        src="/Logo.png"
                        alt="Özgür İrade Derneği"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="w-40 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-loading-bar" />
            </div>

            <p className="mt-5 text-xs tracking-widest uppercase text-gray-400">
                Özgür İrade Derneği
            </p>
        </div>
    )
}