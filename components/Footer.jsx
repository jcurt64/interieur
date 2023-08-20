import Image from "next/image";
import Link from "next/link";
import { LinkIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
const today = new Date();

const Footer = () => {
  return (
    <div className="flex flex-col  h-[400px] lg:h-[300px] items-center p-5 justify-evenly bg-green-900">
      <div classname="flex flex-col lg:flex-row items-center space-y-6">
        {/* logo */}
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center justify-center space-x-3">
            <Image
              className=""
              src="/LOGO.svg"
              alt="logo"
              width={50}
              height={30}
            />
            <div className="text-xs text-white mt-5">
              <p className="text-xs uppercase">{`ministère de l'intérieur`}</p>
              <p className="uppercase">{`de la décentralisation`} </p>
              <p className="uppercase">et du développement local</p>
              <p className="text-green-900 dark:text-gray-400 font-semibold">{`Ministère de l'économie et des finances`}</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col lg:flex-row space-x-24  items-center mt-6">
          <Link href="" className="hidden ">
            Cookies
          </Link>
          <Link href="" className="text-gray-300 hover:text-white">
            Cookies
          </Link>
          <Link href="/" className="text-gray-300 hover:text-white">
            Mentions légales
          </Link>
          <Link
            href="https://www.finances.gouv.cg/fr"
            className="flex space-x-1 text-gray-300 hover:text-white"
          >
            <p>{`Liens utiles`}</p>
            <LinkIcon className="w-5" />
          </Link>
          <div className="flex flex-col space-x-9  text-gray-300">
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-white"
            >
              <EnvelopeIcon className="w-6" />
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>

      <p className="font-thin text-sm text-gray-200">
        {" "}
        © Copyright {today.getFullYear()} - Tous droits réservés
      </p>
    </div>
  );
};

export default Footer;
