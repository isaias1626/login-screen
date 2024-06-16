"use client";

import { Button } from "@/app/_components/ui/button";
import { X } from "lucide-react";
import { useModal } from "../context/modal-context";

type ModalDeleteProps = {
    onDelete: () => void;
};

const ModalDelete: React.FC<ModalDeleteProps> = ({ onDelete }) => {
    const { isCloseDelete, closeModalDelete } = useModal();

    return (
        <div>
            {!isCloseDelete && (
                <div>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white shadow-lg w-[340px] lg:w-[390px] h-auto p-4 z-10 rounded-xl">
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm">Excluir pedido</h3>
                                <button onClick={closeModalDelete}><X /></button>
                            </div>
                            <div className="py-6">
                                <p className="text-md text-slate-700">Você realmente deseja excluir o pedido? Essa ação não pode ser desfeita.</p>
                            </div>
                            <div>
                                <Button onClick={onDelete} className="text-sm font-semibold text-center bg-orange-500 w-full rounded-xl">Sim, excluir</Button>
                            </div>
                            <div className="py-2">
                                <Button onClick={closeModalDelete} className="text-sm font-semibold text-black hover:bg-transparent text-center bg-transparent w-full rounded-xl">Não excluir</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
                
        </div>
    );
}

export default ModalDelete;