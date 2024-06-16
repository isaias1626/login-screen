"use client";

import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Separator } from "@/app/_components/ui/separator";
import { ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { useModal } from "../context/modal-context";

const ModalFilter = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { isClose, closeModal } = useModal();

    const options = [
        { value: "entregue", label: "Entregue", color: "bg-green-200" },
        { value: "em-processamento", label: "Em Processamento", color: "bg-orange-200" },
        { value: "em-transporte", label: "Em transporte", color: "bg-blue-200" }
    ];

    const handleSelectOption = (option: { value?: string; label: any; color?: string; }) => {
        setSelectedOption(option.label);
        setIsOpen(false);
    };

    return (
        <div>
            {!isClose && (
                <div>
                    <div className="fixed inset-0 flex items-center justify-center z-10">
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
                                    <div className="flex items-center">
                                        <Checkbox className="rounded-full" id="todos" />
                                        <label htmlFor="todos" className="text-sm ml-2">
                                            Todos
                                        </label>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className="flex items-center">
                                        <Checkbox className="rounded-full" id="7dias" />
                                        <label htmlFor="7dias" className="text-sm ml-2">
                                            até 7 dias
                                        </label>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className="flex items-center">
                                        <Checkbox className="rounded-full" id="15dias" />
                                        <label htmlFor="15dias" className="text-sm ml-2">
                                            até 15 dias
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="my-4">
                                        <div className="flex items-center">
                                            <Checkbox className="rounded-full" id="30dias" />
                                            <label htmlFor="30dias" className="text-sm ml-2">
                                                até 30 dias
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <div className="flex items-center">
                                            <Checkbox className="rounded-full" id="maisde30dias" />
                                            <label htmlFor="maisde30dias" className="text-sm ml-2">
                                                Mais de 30 dias
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <div className="flex items-center">
                                            <Checkbox className="rounded-full" id="personalizado" />
                                            <label htmlFor="personalizado" className="text-sm ml-2">
                                                Personalizado
                                            </label>
                                        </div>
                                        <div className="lg:flex lg:my-4 py-4 lg:py-0">
                                            <div className="lg:flex lg:items-center">
                                                <label htmlFor="apartir">de</label>
                                                <input className="bg-slate-100 border-[1px] border-slate-300 rounded-lg p-1 ml-2" type="date" name="data" id="apartir" />
                                            </div>
                                            <div className="py-4 lg:py-0 lg:flex lg:items-center lg:ml-2">
                                                <label htmlFor="ate">a</label>
                                                <input className="bg-slate-100 border-[1px] border-slate-300 rounded-lg p-1 ml-[18px]  lg:ml-2" type="date" name="data" id="ate" />
                                            </div>
                                        </div>
                                        <Separator className="my-8" />
                                        <div className="w-full">
                                            <div className="w-full h-full">
                                                <div onClick={() => setIsOpen(!isOpen)} className="border-[1px] cursor-pointer hover:bg-slate-100 border-black h-10 items-center justify-center flex my-8 relative">
                                                    <button
                                                        className={`text-sm w-[280px] rounded-full p-1 ${options.find(option => option.label === selectedOption)?.color || "bg-gray-200"}`}
                                                    >
                                                        {selectedOption || "Selecione uma opção"}
                                                    </button>
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
                                            <Button className="bg-transparent text-black hover:bg-orange-500 hover:text-white">Limpar seleção</Button>
                                            <Button className="bg-orange-500">Filtrar</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalFilter;
