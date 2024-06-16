"use client";

import React, { useState } from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/app/_components/ui/pagination';
import { Filter, Trash2 } from 'lucide-react';
import { Command, CommandInput, CommandList } from '@/app/_components/ui/command';
import { useModal } from '@/app/pages/context/modal-context';
import { Pedido, StatusPedido } from "@/app/services/data"
import ModalDelete from './modal-delete';
import { Calendar } from 'lucide-react';

const TableOrdersDesktop: React.FC = () => {
    const { openModalDelete, closeModalDelete } = useModal();
    const { openModal } = useModal();

    const [pedidos, setPedidos] = useState<Pedido[]>([
        { numPedido: '001', valor: 'R$ 150,00', data: '2024/06/14', formaPagamento: 'Cartão de Crédito', status: 'Entregue' },
        { numPedido: '002', valor: 'R$ 200,00', data: '2024/06/15', formaPagamento: 'Boleto Bancário', status: 'Em preparação' },
        { numPedido: '003', valor: 'R$ 100,00', data: '2024/06/16', formaPagamento: 'PIX', status: 'Entregue' },
        { numPedido: '004', valor: 'R$ 200,00', data: '2024/06/15', formaPagamento: 'Boleto Bancário', status: 'Em preparação' },
        { numPedido: '005', valor: 'R$ 100,00', data: '2024/06/16', formaPagamento: 'PIX', status: 'Em entrega' },
    ]);

    const [pedidoToDelete, setPedidoToDelete] = useState<Pedido | null>(null);

    const getStatusColor = (status: StatusPedido): string => {
        switch (status) {
            case "Entregue":
                return "bg-green-200 text-green-800"
            case "Em entrega":
                return "bg-blue-200 text-blue-800"
            case "Em preparação":
                return "bg-orange-200 text-orange-800"
            default:
                return '';
        }
    }

    const getIconDelete = (pedido: Pedido): React.ReactNode => {
        switch (pedido.status) {
            case "Entregue":
                return <button className='hover:rotate-6' onClick={() => { setPedidoToDelete(pedido); openModalDelete(); }}><Trash2 /></button>;
            case "Em entrega":
            case "Em preparação":
                return <p>-</p>;
            default:
                return null;
        }
    }

    const handleDelete = () => {
        if (pedidoToDelete) {
            setPedidos(pedidos.filter(pedido => pedido.numPedido !== pedidoToDelete.numPedido));
            setPedidoToDelete(null);
            closeModalDelete();
        }
    }

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
                <div className="hidden lg:flex">
                    <button onClick={openModal} className='bg-orange-500 flex text-white px-8 py-[12px] rounded-xl ml-6'><Filter className='w-4 mr-2 text-white' /> Filtrar</button>
                </div>
                <div className='ml-4'>
                    <button onClick={openModal} className="lg:hidden bg-orange-500 p-2 rounded-xl">
                        <Calendar className="items-center text-white"/>
                    </button>
                </div>
            </div>
            {/* table mobile */}
            {pedidos.map((pedido, index) => (
            <div key={index} onClick={() => { setPedidoToDelete(pedido); openModalDelete(); }}  className="bg-white p-6 mb-4 shadow-sm rounded-[20px] cursor-pointer lg:hidden">
                <div className="block">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <p className="text-sm font-semibold mb-4">Núm. Pedido</p>
                                <span className="text-md text-blue-400 font-semibold">{ pedido.numPedido }</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Valor</p>
                            <span className="text-md font-semibold">{ pedido.valor }</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-4">Data</p>
                            <span className="text-md font-semibold">{ pedido.data }</span>
                        </div>
                    </div>
                </div>
                    <div className="pt-8">
                        <div className="w-full">
                            <div className={`w-full text-center items-center rounded-full p-1 text-sm font-bold ${getStatusColor(pedido.status)}`}>{ pedido.status }</div>
                        </div>
                    </div>
            </div>
            ))}

            {/* table desktop */}
            <div className="hidden lg:flex bg-white shadow-sm rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                        <tr className='border-b'>
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
                            <th scope="col" className=" -6 py-3 text-left text-sm font-semibold text-black tracking-wider">
                                Ação
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-gray-200">
                        {pedidos.map((pedido, index) => (
                            <tr key={index} className="bg-white border-y-4">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">{pedido.numPedido}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pedido.valor}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pedido.data}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pedido.formaPagamento}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <span className={`font-semibold text-[10px] px-8 py-1 rounded-full justify-center text-center items-center flex w-[150px] ${getStatusColor(pedido.status)}`}>{pedido.status}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="bg-transparent text-black py-2 px-4 rounded-md">{getIconDelete(pedido)}</div>
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
            {pedidoToDelete && (
                <ModalDelete onDelete={handleDelete} />
            )}
        </div>
    );
};

export default TableOrdersDesktop;