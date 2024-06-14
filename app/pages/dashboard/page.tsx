import React from "react";
import HeaderPage from "../header/header";
import Card from "../cards/cards-info";
import CardOrder from "../cards/cards-oreders";
import Sidebar from "../sidebar/sidebar-destop";

const MyAccountPage = () => {


    return ( 
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccountPage;