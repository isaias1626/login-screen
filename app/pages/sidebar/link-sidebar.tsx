"use cliet";

import Image from "next/image";
import Link from "next/link";
import {  Home, Box, Grid, School, Clipboard, User } from "lucide-react";
import LogoMenu from "@/public/logoMenu.png"
import { useState } from "react";

const LinksSidebar = () => {
    const [width, setWidth] = useState("70px");

    const toggleWidth = () => {

        if (width === "70px") {
            setWidth("248px"); 
        } else {
            setWidth("70px");
        }
    };

    return ( 
        <div>
            <div className="mb-6 mt-6">
                    <Image className="w-[70px] lg:w-[50px] lg:ml-2" src={LogoMenu} alt="logo do menu hamburguer" />
            </div>
            <ul className="lg:space-y-0 py-4 lg:p-0">
                <li className="flex lg:justify-start lg:text-start">
                    <Link href="/" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Home className="w-5 mr-4 lg:w-[40px]" /> Home</Link>
                </li>
                <li className="flex">
                    <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Box className="w-5 mr-4 lg:w-[40px]" /> Estoque</Link>
                </li>
                <li className="flex">
                    <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Grid className="w-5 mr-4 lg:w-[40px]" /> Categorias</Link>
                </li>
                <li className="flex">
                    <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><School className="w-5 mr-4 lg:w-[40px]" /> Escolas</Link>
                </li>
                <li className="flex">
                    <Link href="#" className="lg:text-nowrap mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Clipboard className="w-5 mr-4 lg:w-[40px]" /> Gestão de pedidos</Link>
                </li>
                <li className="flex">
                    <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><User className="w-5 mr-4 lg:w-[40px]" /> Úsuarios</Link>
                </li>
            </ul>
        </div>
    );
}

export default LinksSidebar;