import Image from "next/image";
import {
  SearchIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div >
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            {/* Kiri */}

            <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
            <Image
                src="https://links.papareact.com/ocw"
                layout="fill"
                objectFit="contain"
            />
            </div>
            <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer mt-8">
            <Image
                src="https://links.papareact.com/jjm"
                layout="fill"
                objectFit="contain"
            />
            </div>

            {/* Tengah masukan cari */}
            <div className="max-w-xs">
                <div className="relative mt-5 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                    placeholder="Search"
                    type="text"
                    className=" bg-gray-50 block w-full pl-10 sm:text-sm rounded-md"
                    />
                </div>
            </div>

            {/* Kanan Icon */}
            <div className="flex items-center justify-end space-x-4">

                <HomeIcon className="h-8 w-8 "/>
                <PaperAirplaneIcon className="h-8 w-8 "/>
                <PlusCircleIcon className="h-8 w-8 "/>
                <UserGroupIcon className="h-8 w-8 "/>
                <HeartIcon className="h-8 w-8 "/>
                <MenuIcon className="md:hidden h-8 w-8"/>

              
            </div>

      </div>
    </div>
  );
}

export default Header;
