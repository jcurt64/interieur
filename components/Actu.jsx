import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Actu = ({ date, title, subtitle }) => {
  return (
    <div className="relative hover:scale-105 hover:bg-gray-100 transition-all duration-300 mt-6 ml-6 border border-green-900 shadow-md bg-white px-6 py-4 rounded-xl w-[300px]">
      <p className="text-gray-400 text-sm">{date}</p>
      <div className="flex items-end justify-end">
        <div>
          <p className="font-semibold text-gray-600 mt-1">{title} </p>
          <p className="mt-1 text-sm tracking-wide text-gray-800 line-clamp-3">
            {subtitle}
          </p>
        </div>
        <Link href="" className="absolute bottom-2 -right-2">
          <ArrowLongRightIcon className="w-20 h-6 text-green-900 dark:text-green-600" />
        </Link>
      </div>
    </div>
  );
};

export default Actu;
