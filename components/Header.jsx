import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 pt-7 px-5 border-b border-gray-400 pb-5 bg-[#dde2e6] dark:bg-[#111A2C] ">
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-3">
          <Image
            className=""
            src="/LOGO.svg"
            alt="logo"
            width={70}
            height={70}
          />

          <div className="text-xs text-gray-900 dark:text-white">
            <p className="text-xs uppercase">{`Ministère de l'intérieur`}</p>
            <p className="uppercase">de la décentrailisation </p>
            <p className="uppercase">et du développement local</p>
          </div>
        </div>
        {/* devise */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 text-sm dark:text-white ">République du Congo</p>
          <div className="flex items-center">
            <div className="bg-green-900 w-4 h-4" />
            <div className="bg-yellow-600 w-4 h-4" />
            <div className="bg-red-900 w-4 h-4" />
          </div>
          <div className="flex  items-center space-x-1 mt-1">
            <p className="text-xs text-gray-700 dark:text-white">Unité &#x2022;</p>
            <p className="text-xs text-gray-700 dark:text-white">Travail &#x2022;</p>
            <p className="text-xs text-gray-700 dark:text-white">Progrès</p>
          </div>
        </div>
        {/* search */}
        <div className="flex bg-gray-200 px-2 py border border-green-900 rounded">
          <input
            className="bg-transparent w-[300px] outline-none text-gray-600 "
            placeholder="Rechercher..."
          />
          <MagnifyingGlassIcon className="cursor-pointer text-gray-400 bg-green-900 py-2 my-2 rounded w-9 h-9 " />
        </div>
        {/* darkmode */}
        <DarkMode />
      </div>
    </div>
  );
};

export default Header;
