
import Image from "next/image";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
            {/* Kiri */}

                <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>
        
            {/* Tengah masukan cari */}
            
                <div>
                    <input placeholder="Search" type="text" className="h-6 bg-gray-200 border-solid border-1 border-gray-200 text-sm"></input>
                </div>


            {/* Kanan */}
            </div>


        </div>
    )
}

export default Header
