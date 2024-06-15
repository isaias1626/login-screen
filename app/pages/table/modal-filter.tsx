import { Separator } from "@/app/_components/ui/separator";
import { X } from "lucide-react";

const ModalFilter = () => {
    return ( 
        <div className="">
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-slate-100 w-[336px] h-auto z-10 p-4">
                    <div className="flex justify-between">
                        <h2 className="text-md font-semibold">Filtro</h2>
                        <X />
                    </div>
                    <Separator className="my-8" />
                    <div>
                        <div>
                            <h3 className="">Por data</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFilter;