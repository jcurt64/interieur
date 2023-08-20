"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mr-16 hidden lg:inline-flex">
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className=" bg-white p-1 rounded-full mr-5 "
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="h-6 w-6 text-yellow-500 -mt- " />
        ) : (
          <MoonIcon className="h-6 w-6 text-slate-800 -mt- " />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
