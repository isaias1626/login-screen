import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/app/_components/ui/pagination";
import { Separator } from "@/app/_components/ui/separator";


const CardOrder = () => {
    return ( 
        <div>
            <div className="bg-white p-6 mb-4 shadow-sm rounded-[20px]">
                <div className="block">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <p className="text-sm font-semibold mb-4">Núm. Pedido</p>
                            <span className="text-md text-blue-400 font-semibold">12345</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Valor</p>
                            <span className="text-md font-semibold">R$:200,00</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Data</p>
                            <span className="text-md font-semibold">21/04/2024</span>
                        </div>
                    </div>
                </div>
                    <div className="pt-8">
                        <div className="w-full">
                            <div className="bg-green-300 text-green-600 w-full text-center items-center rounded-full p-1 text-sm font-bold">Entregue</div>
                        </div>
                    </div>
            </div>
            <div className="bg-white p-6 mb-4 shadow-sm rounded-[20px]">
                <div className="block">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <p className="text-sm font-semibold mb-4">Núm. Pedido</p>
                            <span className="text-md text-blue-400 font-semibold">12345</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Valor</p>
                            <span className="text-md font-semibold">R$:200,00</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Data</p>
                            <span className="text-md font-semibold">21/04/2024</span>
                        </div>
                    </div>
                </div>
                    <div className="pt-8">
                        <div className="w-full">
                            <div className="bg-green-300 text-green-600 w-full text-center items-center rounded-full p-1 text-sm font-bold">Entregue</div>
                        </div>
                    </div>
            </div>
            <div className="bg-white p-6 mb-4 shadow-sm rounded-[20px]">
                <div className="block">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <p className="text-sm font-semibold mb-4">Núm. Pedido</p>
                            <span className="text-md text-blue-400 font-semibold">12345</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Valor</p>
                            <span className="text-md font-semibold">R$:200,00</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Data</p>
                            <span className="text-md font-semibold">21/04/2024</span>
                        </div>
                    </div>
                </div>
                    <div className="pt-8">
                        <div className="w-full">
                            <div className="bg-green-300 text-green-600 w-full text-center items-center rounded-full p-1 text-sm font-bold">Entregue</div>
                        </div>
                    </div>
            </div>

            <Separator />
            <div className="pt-6">
                <Pagination className="text-orange-500">
                    <PaginationContent>
                        <PaginationItem>
                        <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

export default CardOrder;