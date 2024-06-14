import { Command, CommandInput, CommandList } from "@/app/_components/ui/command";
import Image from "next/image";
import Calender from "@/public/Calender.svg"


const LatestOrders = () => {
    return ( 
        <div className="pt-6">
            <div>
                <div>
                    <h2 className="text-semibold text-[28px] mb-4">Últimos pedidos</h2>
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
                            <button className="bg-orange-500 p-2 rounded-xl w-[35px] h-[35px]">
                                <Image src={Calender} alt="calendario"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestOrders;