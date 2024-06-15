// components/TabelaPedidos.tsx

import React from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/app/_components/ui/pagination';
import { Filter, Trash2 } from 'lucide-react';
import { Command, CommandInput, CommandList } from '@/app/_components/ui/command';

interface Pedido {
    numPedido: string;
    valor: string;
    data: string;
    formaPagamento: string;
    status: string;
    }

    interface Props {
    pedidos: Pedido[];
    }

    const TabelaPedidos: React.FC<Props> = ({ pedidos }) => {
        return (
            <div>
                <div className='flex items-center'>
                    <div className='border-2 rounded-full shadow-sm my-4 w-full'>
                        <Command className="rounded-full">
                            <CommandInput className="h-15" placeholder="Pesquise aqui..." />
                            <CommandList>
                            </CommandList>
                        </Command>
                    </div>
                    <div className=''>
                        <button className='bg-orange-500 flex text-white px-8 py-[12px] rounded-xl ml-6'><Filter className='w-4 mr-2 text-white' /> Filtrar</button>
                    </div>
                </div>
            <div className="bg-white shadow-sm rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                        Num. Pedidos
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                        Valor
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                        Data
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                        Forma de Pagamento
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                        Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                        Ação
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {pedidos.map((pedido, index) => (
                        <tr key={index} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">{pedido.numPedido}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pedido.valor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pedido.data}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pedido.formaPagamento}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <span className='bg-green-300 text-green-800 font-semibold text-[10px] px-8 py-1 rounded-full justify-center text-center items-center flex w-[150px]'>{pedido.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="bg-transparent text-black py-2 px-4 rounded-md"><Trash2 /></button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        <div className="flex p-4">
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" className='text-orange-500' />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" className='text-orange-500' />
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        </div>
        </div>
    );
};

export default TabelaPedidos;
