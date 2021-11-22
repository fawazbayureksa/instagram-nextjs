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
    <div className="shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-4xl mx-5 lg:mx-auto">
            {/* Kiri */}

            <div className="relative hidden lg:inline-grid w-24 h-14 cursor-pointer">
            <Image
                src="https://links.papareact.com/ocw"
                layout="fill"
                objectFit="contain"
            />
            </div>
            <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer mt-2">
            <Image
                src="https://links.papareact.com/jjm"
                layout="fill"
                objectFit="contain"
            />
            </div>

            {/* Tengah masukan cari */}
            <div className="max-w-xs">
                <div className="relative px-3 py-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                    placeholder="Search"
                    type="text"
                    className=" bg-gray-100 shadow-sm block w-full h-7 pl-10 sm:text-sm rounded-lg"
                    />
                </div>
            </div>

            {/* Kanan Icon */}
            <div className="flex items-center justify-end space-x-4">

                <HomeIcon className="navBtn"/>

                <div className="relative navBtn">
                  <PaperAirplaneIcon className="navBtn rotate-45"/>
                      <div className="absolute -top-1 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex justify-center animate-pulse">
                        4
                      </div>
                </div>
                <PlusCircleIcon className=" navBtn"/>
                <UserGroupIcon className=" navBtn"/>
                <HeartIcon className=" navBtn"/>
                <MenuIcon className="md:hidden h-8 w-8"/>

                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEfaiwz-tKQeA/profile-displayphoto-shrink_200_200/0/1636651890965?e=1643241600&v=beta&t=29ucUrLaoAtlzkCA4AS8hmiZFzPm0aOC7iwG9haAL_k" className="h-8 rounded-full cursor-pointer" /> 
              
            </div>

      </div>
    </div>
  );
}

export default Header;
