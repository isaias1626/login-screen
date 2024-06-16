"use client";

import React from "react";
import HeaderPage from "../header/header";
import Card from "../cards/cards"
import Sidebar from "../sidebar/sidebar-desktop";
import TableDesktop from "../table/table-desktop";
import { ModalProvider } from "../context/modal-context";

const MyAccountPage = () => {


    return (
        <ModalProvider>
            <section className="bg-slate-200">
                <div className="flex">
                    <div className="hidden lg:flex">
                        <Sidebar />
                    </div>
                    <div className="block w-full">
                        <HeaderPage />
                        <div className="px-4 pt-8">
                            <div>
                                <Card />
                            </div>
                        </div>
                        <div className="px-4 pt-4">
                            <TableDesktop />
                        </div>
                    </div>
                </div>
            </section>
        </ModalProvider>
    );
};

export default MyAccountPage