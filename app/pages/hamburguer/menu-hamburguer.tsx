"use client";

import { ChevronLeft, MenuIcon,} from "lucide-react";
import { useState } from "react";
import LinksSidebar from "../sidebar/link-sidebar";

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
                    <div className="absolute top-0 z-10 w-[248px] lg:w-[300px] py-2 left-0 bg-white shadow-lg h-screen px-6">
                        <div>
                            <LinksSidebar />
                            <div onClick={toggleMenu} className="mb-2 text-md font-semibold hover:text-orange-500 flex px-2 py-2 text-gray-800 hover:bg-gray-200 rounded-full cursor-pointer"><ChevronLeft className="w-5 mr-4" /> Retornar</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuHamburguer;