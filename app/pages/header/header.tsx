import Image from "next/image";
import Hamburguer from "@/public/hamburguer.svg";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Command, CommandInput, CommandList } from "@/app/_components/ui/command";
import React from "react";
import Link from "next/link";
import MenuHamburguer from "../hamburguer/menu-hamburguer";

const HeaderPage = () => {


    return ( 
        <>
        <nav className="h-[136px] bg-blue-900 p-4 pt-3">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex">
                            <div className="block items-center">
                                <MenuHamburguer />
                        </div>
                        <div className="mt-1">
                            <Link href={"/"} className="text-[21px] font-400 text-white ml-4">Home</Link>
                        </div>
                    </div>
                </div>
                <div>
                <Avatar>
                    <AvatarImage src="https://github.com/isaias1626.png" />
                </Avatar>
                </div>
            </div>
            <div className="pt-4">
            <Command className="rounded-full">
                <CommandInput className="h-10" placeholder="Pesquise aqui..." />
                <CommandList>
                </CommandList>
            </Command>
            </div>
        </nav>
        </>
    );
}

export default HeaderPage;