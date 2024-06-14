"use client";

import { ChevronLeft, MenuIcon, Home, Box, Grid, School, Clipboard, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoMenu from "@/public/logoMenu.png"

const MenuHamburguer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div>
            <button 
                onClick={toggleMenu} 
                className="p-2 focus:outline-none "
            >
                <MenuIcon className="h-6 w-6 text-white" />
            </button>
            {isOpen && (
                <div>
                    <div onClick={toggleMenu}  className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>
                    <div className="absolute top-0 z-10 w-[248px] py-2 left-0 bg-white shadow-lg h-screen px-6">
                        <div className="mb-6 mt-6">
                            <Image className="w-[70px]" src={LogoMenu} alt="logo do menu hamburguer" />
                        </div>
                            <Link href="/" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Home className="w-5 mr-4" /> Home</Link>
                            <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Box className="w-5 mr-4" /> Estoque</Link>
                            <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Grid className="w-5 mr-4" /> Categorias</Link>
                            <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><School className="w-5 mr-4" /> Escolas</Link>
                            <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><Clipboard className="w-5 mr-4" /> Gestão de pedidos</Link>
                            <Link href="#" className="mb-2 text-md font-semibold hover:text-orange-500 flex px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full"><User className="w-5 mr-4" /> Úsuarios</Link>
                            <div onClick={toggleMenu} className="mb-2 text-md font-semibold hover:text-orange-500 flex px-2 py-2 text-gray-800 hover:bg-gray-200 rounded-full cursor-pointer"><ChevronLeft className="w-5 mr-4" /> Retornar</div>
                        <div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuHamburguer;