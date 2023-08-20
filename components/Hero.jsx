import Image from "next/image";
import React from "react";
import { ArrowLongRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center mx-auto mt-16">
      <div className=" flex items-start justify-between space-x-20">
        <div className="relative border border-green-900">
          <Image
            className="filter saturate-150"
            src="/rm2.webp"
            alt="ministre"
            width={250}
            height={200}
          />
              <div className="absolute bg-green-600 top-7 left-7 h-[320px] w-[260px] -z-10"/>
        </div>
        <div className="pl-12">
          <p className=" text-xl font-semibold tracking-wide text-green-900 dark:text-green-600">
            Raymond Zéphirin MBOULOU
          </p>
          <p className="mr-20 text-gray-500  dark:text-gray-100 text-sm tracking-wide mb-6">
            {`Ministre de l'intérieur et de la décentralisation`}{" "}
          </p>
          <div className="mr-20 max-w-[600px] mt-3 border border-gray-500 text-justify text-gray-700 dark:text-gray-200 tracking-wide  text-sm px-4 py-3">
            <p className="text-justify text-gray-700 dark:text-gray-200 font-semibold text-sm py-2  ">
            {`Il est ministre de l'Intérieur et de la Décentralisation depuis le 30 décembre 2007, et député de Mpouya depuis 1992.`}
            </p>
            <p className="mt-2">
              {`À partir de 1982, il est inspecteur d'État et administrateur en chef des SAF (Services Administratif et Financier). De 1998 à 2002, il occupe le poste de Directeur Général du Contrôle des marchés et contrats d'État`}
            </p>
            <p className="mt-3">{`Chef de service des investissements et agréments, chargé de la Commission nationale des investissements, il sera nommé sept ans plus tard, en 1991 précisément, directeur de la Réglementation économique.`}</p>
            <p className="mt-3">{`Il occupe ce poste jusqu'au 30 décembre de la même année, date où il est nommé ministre de l’Administration du territoire et de la Décentralisation...`}</p>
          </div>

        
        </div>
      </div>

      {/* Hero2 */}
      <div className="mt-28 flex items-center space-x-8">
        <div className="bg-white shadow-xl rounded">
          <div className="flex items-center space-x-9 max-w-[340px] h-[180px] px-4 ">
          <Image
                src="/img1.webp"
                alt="projet"
                width={120}
                height={100}
                className="rounded"
              />
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Accord de sécurité internationale</p>
              <p className="text-gray-600 text-sm">
               {`Accord signé entre les pays membres de l'union africaine...`}
              </p>

            </div>
          </div>
          <Link href="" className="flex justify-center pb-2 cursor-pointer">
            <ArrowLongRightIcon className="w-10 h-8 text-green-900 dark:text-green-600" />
          </Link>
          <div className="bg-green-900 h-1 rounded-b" />
        </div>
        <div className="bg-white shadow-xl rounded">
          <div className="flex items-center space-x-9 max-w-[340px] h-[180px] px-4 ">
          <Image
                src="/img3.webp"
                alt="projet"
                width={120}
                height={100}
                className="rounded"
              />
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Rapport annuel de la sécurité intéri...</p>
              <p className="text-gray-600 text-sm">
               {`Approbation par le ministre de l'intérieur et de la décentra...`}
              </p>

            </div>
          </div>
          <Link href="" className="flex justify-center pb-2 cursor-pointer">
            <ArrowLongRightIcon className="w-10 h-8 text-green-900 dark:text-green-600" />
          </Link>
          <div className="bg-yellow-500 h-1 rounded-b" />
        </div>
        <div className="bg-white shadow-xl rounded">
          <div className="flex items-center space-x-9 max-w-[340px] h-[180px] px-4 ">
          <Image
                src="/img2.webp"
                alt="projet"
                width={120}
                height={100}
                className="rounded"
              />
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Amélioration du dispositif sanitaire</p>
              <p className="text-gray-600 text-sm">
               {`Développement des techniques de renforcement de lutte...`}
              </p>

            </div>
          </div>
          <Link href="" className="flex justify-center pb-2 cursor-pointer">
            <ArrowLongRightIcon className="w-10 h-8 text-green-900 dark:text-green-600" />
          </Link>
          <div className="bg-red-800 h-1 rounded-b" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
