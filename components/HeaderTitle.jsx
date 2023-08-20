import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const HeaderTitle = () => {
  return (
    <div className="bg-[#dde2e6] dark:bg-[#111A2C] shadow-lg">
      <nav className="max-w-7xl mx-auto p-5 xl:px-0 flex items-center justify-start">
        <div className="flex items-center space-x-12">
          <Link href="" className="flex items-center space-x-2">
            <p className="text-left text-sm text-gray-700 dark:text-white">Le ministère</p>
            <div>
              <ChevronDownIcon className="text-gray-600 w-3 h-3 dark:text-white" />
            </div>
          </Link>
          <Link href="" className="flex items-center space-x-2">
            <p className="text-left text-sm text-gray-700 dark:text-white">
              {`Pôles d'activités`}
            </p>
            <div>
              <ChevronDownIcon className="text-gray-600 w-3 h-3 dark:text-white" />
            </div>
          </Link>
          <Link href="" className="flex items-center space-x-2">
            <p className="text-left text-sm text-gray-700 dark:text-white">
              Les démarches administratives
            </p>
            <div>
              <ChevronDownIcon className="text-gray-600 w-3 h-3 dark:text-white" />
            </div>
          </Link>
         
          <Link href="" className="flex items-center space-x-4">
            <p className="text-left text-sm text-gray-700 dark:text-white ">Actualités et médias</p>
            <div>
              <ChevronDownIcon className="text-gray-600 w-3 h-3 dark:text-white" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTitle;
