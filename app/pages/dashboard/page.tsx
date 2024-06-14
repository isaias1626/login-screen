import React from "react";
import HeaderPage from "../header/header";
import Card from "../cards/cards-info";
import CardOrder from "../cards/cards-oreders";

const MyAccountPage = () => {


    return ( 
        <section className="bg-slate-200 pb-8">
            <HeaderPage />
            <div className="px-4 pt-8">
                <div>
                    <Card />
                </div>
                <div>
                    <CardOrder />
                </div>
            </div>
        </section>
    );
}

export default MyAccountPage;