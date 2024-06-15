import React from "react";
import HeaderPage from "../header/header";
import Card from "../cards/cards-info";
import CardOrder from "../cards/cards-oreders";
import Sidebar from "../sidebar/sidebar-destop";
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
                            <div className="lg:hidden">
                                <CardOrder />
                        </div>
                        <div>
                            <TableDesktop />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </ModalProvider>
    );
}

export default MyAccountPage;