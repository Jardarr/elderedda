import Image from "next/image";
export default function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center h-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900">
                <Image className="rotate-360" src="/spinner.png" alt="Loading..." width={100} height={100} />
            </div>
        </div>
    );
}