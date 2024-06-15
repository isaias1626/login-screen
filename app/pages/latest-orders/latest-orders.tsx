import { Command, CommandInput, CommandList } from "@/app/_components/ui/command";
import Image from "next/image";
import Calender from "@/public/Calender.svg"
import Filter from "@/public/filter.svg"


const LatestOrders = () => {
    return ( 
        <div className="pt-6">
            <div>
                <div>
                    <h2 className="text-semibold text-[28px] mb-4 lg:hidden">Últimos pedidos</h2>
                </div>
                <div>
                    <div className="flex items-center justify-between pb-8">
                        <div className="w-full">
                            <Command className="rounded-full">
                                <CommandInput className="h-10" placeholder="Pesquise aqui..." />
                                <CommandList>
                                </CommandList>
                            </Command>
                        </div>
                        <div className="ml-4">
                            <button className="lg:hidden bg-orange-500 p-2 rounded-xl w-[35px] h-[35px]">
                                <Image src={Calender} alt="calendario"/>
                            </button>
                            <div className="hidden lg:flex">
                                    <button className="bg-orange-500 p-2 px-[68px] text-white rounded-xl flex"><Image className="text-white w-5 mt-1 mr-1" src={Filter} alt="filtros"/> Filtrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestOrders;