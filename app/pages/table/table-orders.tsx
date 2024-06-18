"use client";

import React, { useEffect, useState } from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/app/_components/ui/pagination';
import { Filter, Trash2 } from 'lucide-react';
import { Command, CommandInput, CommandList } from '@/app/_components/ui/command';
import { useModal } from '@/app/pages/context/modal-context';
import { Pedido, StatusPedido } from "@/app/services/data"
import ModalDelete from './modal-delete';
import { Calendar } from 'lucide-react';
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { ChevronUp, X } from "lucide-react";

const TableOrdersDesktop: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const {isClose, closeModal} = useModal();

    const options = [
        { value: "entregue", label: "Entregue", color: "bg-green-200" },
        { value: "em-preparacao", label: "Em preparação", color: "bg-orange-200" },
        { value: "em-entrega", label: "Em entrega", color: "bg-blue-200" }
    ];

    const handleSelectOption = (option: { value?: string; label: any; color?: string; }) => {
        setSelectedOption(option.label);
        setIsOpen(false);
        setFiltro(prevFiltro => ({ ...prevFiltro, status: option.label }));
    };

    const { openModalDelete, closeModalDelete } = useModal();
    const { openModal } = useModal();

    const [pedidos, setPedidos] = useState<Pedido[]>([
        { numPedido: '001', valor: 'R$ 150,00', data: '01/06/2024', formaPagamento: 'Cartão de Crédito', status: 'Entregue' },
        { numPedido: '002', valor: 'R$ 200,00', data: '06/06/2024', formaPagamento: 'Boleto Bancário', status: 'Em preparação' },
        { numPedido: '003', valor: 'R$ 100,00', data: '11/06/2024', formaPagamento: 'PIX', status: 'Entregue' },
        { numPedido: '004', valor: 'R$ 200,00', data: '01/05/2024', formaPagamento: 'Boleto Bancário', status: 'Em preparação' },
        { numPedido: '005', valor: 'R$ 100,00', data: '05/04/2024', formaPagamento: 'PIX', status: 'Em entrega' },
    ]);

    const [dados, setDados] = useState(pedidos);
    const [dadosFiltrados, setDadosFiltrados] = useState(pedidos);

    const [filtro, setFiltro] = useState({
        prazo: '',
        dataInicial: '',
        dataFinal: '',
        status: '',
    });

    const [pedidoToDelete, setPedidoToDelete] = useState<Pedido | null>(null);

    const aplicarFiltros = () => {
        let dadosFiltradosTemp = [...dados];

        if (filtro.prazo === 'ate7') {
            dadosFiltradosTemp = dadosFiltradosTemp.filter(pedido => {
                const dataAtual = new Date();
                const data = new Date(pedido.data.split('/').reverse().join('-'));
                const diffTime = Math.abs(data.getTime() - dataAtual.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= 7;
            });
        } else if (filtro.prazo === 'ate15') {
            dadosFiltradosTemp = dadosFiltradosTemp.filter(pedido => {
                const dataAtual = new Date();
                const data = new Date(pedido.data.split('/').reverse().join('-'));
                const diffTime = Math.abs(data.getTime() - dataAtual.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= 15;
            });
        } else if (filtro.prazo === 'ate30') {
            dadosFiltradosTemp = dadosFiltradosTemp.filter(pedido => {
                const dataAtual = new Date();
                const data = new Date(pedido.data.split('/').reverse().join('-'));
                const diffTime = Math.abs(data.getTime() - dataAtual.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= 30;
            });
        } else if (filtro.prazo === 'acima30') {
            dadosFiltradosTemp = dadosFiltradosTemp.filter(pedido => {
                const dataAtual = new Date();
                const data = new Date(pedido.data.split('/').reverse().join('-'));
                const diffTime = Math.abs(data.getTime() - dataAtual.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays > 30;
            });
        } else if (filtro.prazo === 'personalizado' && filtro.dataInicial && filtro.dataFinal) {
            const dataInicial = new Date(filtro.dataInicial.split('/').reverse().join('-'));
            const dataFinal = new Date(filtro.dataFinal.split('/').reverse().join('-'));
            dadosFiltradosTemp = dadosFiltradosTemp.filter(pedido => {
                const data = new Date(pedido.data.split('/').reverse().join('-'));
                return data >= dataInicial && data <= dataFinal;
            });
        }

        if (filtro.status !== '') {
            dadosFiltradosTemp = dadosFiltradosTemp.filter(pedido => pedido.status === filtro.status);
        }

        setDadosFiltrados(dadosFiltradosTemp);
    };

    const getStatusColor = (status: StatusPedido): string => {
        switch (status) {
            case "Entregue":
                return "bg-green-200 text-green-800";
            case "Em entrega":
                return "bg-blue-200 text-blue-800";
            case "Em preparação":
                return "bg-orange-200 text-orange-800";
            default:
                return '';
        }
    };

    const getIconDelete = (pedido: Pedido): React.ReactNode => {
        switch (pedido.status) {
            case "Entregue":
                return <button className='hover:rotate-6' onClick={() => {setPedidoToDelete(pedido); openModalDelete(); }}><Trash2 /></button>;
            case "Em entrega":
            case "Em preparação":
                return <p>-</p>;
            default:
                return null;
        }
    };

    const handleDelete = () => {
        if (pedidoToDelete) {
            const pedidosAtualizados = pedidos.filter(pedido => pedido.numPedido !== pedidoToDelete.numPedido);
            setPedidos(pedidosAtualizados);
            setDadosFiltrados(pedidosAtualizados);
            setPedidoToDelete(null);
            closeModalDelete();
        }
    };

    const limparFiltros = () => {
        setFiltro({
            prazo: '',
            dataInicial: '',
            dataFinal: '',
            status: '',
        });
        setSelectedOption('');
        setDadosFiltrados(pedidos);
    };


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
                            <Calendar className="items-center text-white" />
                        </button>
                    </div>
                </div>
                {/* table mobile */}
                {dadosFiltrados.map((pedido, index) => (
                    <div key={index} onClick={() => {if (pedido.status === "Entregue") {setPedidoToDelete(pedido); openModalDelete()}}} className="bg-white p-6 mb-4 shadow-sm rounded-[20px] cursor-pointer lg:hidden">
                        <div className="block">
                            <div className="flex gap-3 justify-between">
                                <div>
                                    <p className="text-sm font-semibold mb-4">Núm. Pedido</p>
                                    <span className="text-md text-blue-400 font-semibold">{pedido.numPedido}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mb-4">Valor</p>
                                    <span className="text-md font-semibold">{pedido.valor}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mb-4">Data</p>
                                    <span className="text-md font-semibold">{pedido.data}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <div className="w-full">
                                <div className={`w-full text-center items-center rounded-full p-1 text-sm font-bold ${getStatusColor(pedido.status)}`}>{pedido.status}</div>
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
                            {dadosFiltrados.map((pedido, index) => (
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
                <div>

                    {/* modal filter */}
                    {!isClose && (
                        <div>
                            <form className="fixed inset-0 flex items-center justify-center z-10">
                                <div className="bg-white rounded-xl shadow-lg lg:w-[390px] lg:h-auto p-4 w-[300px]">
                                    <div className="flex justify-between">
                                        <h2 className="text-md font-semibold">Filtro</h2>
                                        <button onClick={closeModal}><X /></button>
                                    </div>
                                    <Separator className="my-8" />
                                    <div>
                                        <div>
                                            <h3 className="text-md">Por data</h3>
                                        </div>
                                        <div className="my-4">
                                        <label className="text-md ml-2 flex">
                                                    <input
                                                        type='radio'
                                                        value="todos"
                                                        className="rounded-full w-4"
                                                        checked={filtro.prazo === 'todos'}
                                                        onChange={() => setFiltro({ ...filtro, prazo: 'todos' })}
                                                    />
                                                        <span className='text-md ml-2'>todos</span>
                                                </label>
                                        </div>
                                        <div className="my-4">
                                            <div className="flex items-center">
                                                <label className="text-md ml-2 flex">
                                                    <input
                                                        type='radio'
                                                        value="ate7"
                                                        className="rounded-full w-4"
                                                        checked={filtro.prazo === 'ate7'}
                                                        onChange={() => setFiltro({ ...filtro, prazo: 'ate7' })}
                                                    />
                                                        <span className='text-md ml-2'>até 7 dias</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="my-4">
                                            <div className="flex items-center">
                                            <label className="text-md ml-2 flex">
                                                    <input
                                                        type='radio'
                                                        value="ate15"
                                                        className="rounded-full w-4"
                                                        checked={filtro.prazo === 'ate15'}
                                                        onChange={() => setFiltro({ ...filtro, prazo: 'ate15' })}
                                                    />
                                                        <span className='text-md ml-2'>até 15 dias</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="my-4">
                                                <div className="flex items-center">
                                                <label className="text-md ml-2 flex">
                                                    <input
                                                        type='radio'
                                                        value="ate30"
                                                        className="rounded-full w-4"
                                                        checked={filtro.prazo === 'ate30'}
                                                        onChange={() => setFiltro({ ...filtro, prazo: 'ate30' })}
                                                    />
                                                        <span className='text-md ml-2'>até 30 dias</span>
                                                </label>
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <div className="flex items-center">
                                                <label className="text-md ml-2 flex">
                                                    <input
                                                        type='radio'
                                                        value="acima30"
                                                        className="rounded-full w-4"
                                                        checked={filtro.prazo === 'acima30'}
                                                        onChange={() => setFiltro({ ...filtro, prazo: 'acima30' })}
                                                    />
                                                        <span className='text-md ml-2'>Mais de 30 dias</span>
                                                </label>
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <label className="ftext-md ml-2 flex">
                                                    <input
                                                        type="radio"
                                                        className='rounded-full w-4'
                                                        value="personalizado"
                                                        checked={filtro.prazo === 'personalizado'}
                                                        onChange={() => setFiltro({ ...filtro, prazo: 'personalizado' })}
                                                    />
                                                    <span className="ml-2">Personalizado</span>
                                                </label>
                                                {filtro.prazo === "personalizado" && (
                                                    <div>
                                                    <div className="flex items-center">
                                                    <label className="text-md ml-2 flex">
                                                        <div className='block lg:flex lg:my-4'>
                                                            <div className='my-4 lg:my-0'>
                                                                <span className='mr-1'>De</span>
                                                                <input
                                                                    type='date'
                                                                    value={filtro.dataInicial}
                                                                    className="rounded-lg w-[140px] border-[1px] p-1 bg-slate-100 border-slate-400"
                                                                    onChange={e => setFiltro({ ...filtro, dataInicial: e.target.value})}
                                                                />
                                                            </div>
                                                            <div>
                                                                <span className='mr-4 lg:ml-4'>a</span>
                                                                <input
                                                                    type='date'
                                                                    value={filtro.dataFinal}
                                                                    className="rounded-lg w-[140px] border-[1px] p-1 bg-slate-100 border-slate-400"
                                                                    onChange={e => setFiltro({ ...filtro, dataFinal: e.target.value})}
                                                                />
                                                            </div>
                                                        </div>
                                                    </label>
                                                    </div>
                                                </div>
                                                )}
                                                <Separator className="my-8" />
                                                <div className="w-full">
                                                    <div className="w-full h-full">
                                                        <div
                                                            onClick={() => setIsOpen(!isOpen)} className="border-[1px] cursor-pointer hover:bg-slate-100 border-black h-10 items-center justify-center flex my-8 relative">
                                                            <div
                                                                className={`text-center ml-4 text-sm w-[280px] rounded-full p-1 ${options.find(option => option.label === selectedOption)?.color || "bg-gray-200"}`}
                                                            >
                                                                {selectedOption || "Selecione uma opção"}
                                                            </div>
                                                            <ChevronUp className={`ml-5 ${!isOpen ? 'rotate-180' : ''}`} />
                                                            {isOpen && (
                                                                <div className="text-center absolute top-12 w-[280px] bg-transparent rounded-lg z-10">
                                                                    {options.map((option) => (
                                                                        <div
                                                                            key={option.value}
                                                                            onClick={() => handleSelectOption(option)}
                                                                            className={`p-1 my-2 text-sm cursor-pointer rounded-full ${option.color}`}
                                                                        >
                                                                            {option.label}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <Separator className="my-8" />
                                                <div className="flex justify-between">
                                                    <Button
                                                        type='button'
                                                        onClick={() => limparFiltros()}
                                                        className="bg-transparent text-black hover:bg-orange-500 hover:text-white">Limpar seleção</Button>
                                                    <Button
                                                        type='button'
                                                        onClick={() => {
                                                            aplicarFiltros();
                                                            closeModal()
                                                        }}
                                                        className="bg-orange-500">Filtrar</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        );
    };

export default TableOrdersDesktop;