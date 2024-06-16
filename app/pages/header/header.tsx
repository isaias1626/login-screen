"use client";

import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Command, CommandInput, CommandList } from "@/app/_components/ui/command";
import React, { useState } from "react";
import Link from "next/link";
import MenuHamburguer from "../hamburguer/menu-hamburguer";



const HeaderPage =  ( ) => {

    return (
        <div>
            <nav className="h-[136px] bg-blue-900 p-4 pt-3 lg:flex lg:h-[68px] lg:py-4">
                <div className="flex items-center justify-between">
                    <div>
                            <div className="flex">
                                
                                <div className="block items-center lg:hidden">
                                    <MenuHamburguer />
                                </div>
                            <div className="mt-1">
                                <Link href={"/"} className="lg:hidden text-[21px] font-400 text-white ml-4">Home</Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Avatar>
                            <AvatarImage src="https://github.com/isaias1626.png" />
                        </Avatar>
                    </div>
                </div>
                <div className="pt-4 lg:pt-0 w-full lg:pl-[40px]">
                <Command className="rounded-full">
                    <CommandInput className="h-10" placeholder="Pesquise aqui..." />
                    <CommandList>
                    </CommandList>
                </Command>
                    </div>
                    <div className="hidden lg:flex items-center ml-8">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/isaias1626.png" />
                        </Avatar>
                    </div>
                    <div className="hidden lg:flex">
                        <h3 className="text-md mt-2 ml-4 font-semibold text-white items-center justify-center">
                        </h3>
                    </div>
            </nav>
        </div>
    );
}

export default HeaderPage;