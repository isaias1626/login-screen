import Image from "next/image";
import IconPed from "@/public/IconPad.svg";
import IconEst from "@/public/IconEst.svg";
import IconList from "@/public/IconList.svg";
import Person from "@/public/avatar.png";
import Link from "next/link";
import LatestOrders from "../latest-orders/latest-orders";

const Cards = () => {
    return ( 
        <div>
            <div className="mb-4">
                <Link href={"/"}>
                    <div className="bg-white h-[136px] rounded-[20px] py-[36px] px-[28px] hover:shadow-md">
                        <div>
                            <Image src={IconPed} alt="Pedidos" />
                        </div>
                        <div className="mt-[35px]">
                            <h4 className="font-semibold text-sm">Pedidos</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mb-4">
                <Link href={"/"}>
                    <div className="bg-white h-[136px] rounded-[20px] py-[36px] px-[28px] hover:shadow-md">
                        <div>
                            <Image src={IconEst} alt="Estoque" />
                        </div>
                        <div className="mt-[35px]">
                            <h4 className="font-semibold text-sm">Estoque</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mb-4">
                <Link href={"/"}>
                    <div className="bg-white h-[136px] rounded-[20px] py-[36px] px-[28px] hover:shadow-md">
                        <div>
                            <Image src={IconList} alt="Listas escolares" />
                        </div>
                        <div className="mt-[35px]">
                            <h4 className="font-semibold text-sm">Listas escolares</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mt-8 mb-4">
                <Link href={"/"}>
                    <div className="bg-white rounded-[20px] py-[36px] px-[28px] hover:shadow-md flex">
                        <div>
                            <Image className="h-[154px] w-full bg-cover" src={Person} alt="Pedidos de Hoje para entrega" />
                        </div>
                        <div className="items-center">
                            <h3 className="text-xl ">Hoje</h3>
                            <h2 className="font-semibold text-[54px] my-6">100</h2>
                            <p className="text-md">Pedidos para entrega</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mt-8 mb-4">
                <Link href={"/"}>
                    <div className="bg-white rounded-[20px] py-[36px] px-[28px] hover:shadow-md flex justify-between">
                        <div className="items-center">
                            <h3 className="text-xl ">Total</h3>
                            <h2 className="font-semibold text-[54px] my-6">100</h2>
                            <p className="text-md">Produtos</p>
                        </div>
                        <div className="items-center">
                            <h3 className="text-xl ">Total</h3>
                            <h2 className="font-semibold text-[54px] my-6">2</h2>
                            <p className="text-md mr-4">Estoque minimo</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mt-8 mb-4">
                <Link href={"/"}>
                    <div className="bg-white rounded-[20px] py-[36px] px-[28px] hover:shadow-md flex justify-between">
                        <div className="items-center">
                            <h3 className="text-xl ">Total</h3>
                            <h2 className="font-semibold text-[54px] my-6">100</h2>
                            <p className="text-md">Novos clientes</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <LatestOrders/>
            </div>
        </div>
    );
};

export default Cards;