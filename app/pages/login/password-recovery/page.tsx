"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";
import { fetchUser } from "@/app/services/data";

interface PasswordResetModalProps {
    isOpen: boolean;
    onClose: () => void;
    onReset: (email: string) => void;
}

const PasswordResetModal: React.FC<PasswordResetModalProps> = ({ isOpen, onClose }) => {
    const [resetEmail, setResetEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleResetEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResetEmail(e.target.value);
        setEmailError("");
    };

    const handlePasswordReset = () => {
        if (!resetEmail) {
            setEmailError("Insira um endereço de e-mail.");
            return;
        }

        const user = fetchUser(resetEmail);
        if (user) {
            setIsSuccessModalOpen(true);
        } else {
            setEmailError("O e-mail não está cadastrado.");
        }
    };

    const handleSuccessModalClose = () => {
        setIsSuccessModalOpen(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="bg-white fixed inset-0 flex items-center justify-center lg:bg-black lg:bg-opacity-50">
                <div className="bg-white p-6 rounded-md z-10">
                    <div className="flex lg:justify-between">
                    <span className="lg:hidden md:max-sm:hidden text-lg font-bold cursor-pointer mr-4" onClick={onClose}>&lt;</span>
                        <h2 className="text-mg font-bold mb-4">Recuperar senha</h2>
                        <span className="hidden lg:block lg:text-mg lg:cursor-pointer lg:hover:text-red-600" onClick={onClose}>X</span>
                    </div>
                    <p className="mb-4 font-semibold text-sm w-80 text-slate-700">Para recuperar sua senha, digite o e-mail cadastrado</p>
                    <Label className="mb-2 font-semibold block text-mg" htmlFor="resetEmail">
                        E-mail<span className="text-red-600">*</span>
                    </Label>
                    <Input
                        className="border-2 border-neutral-950 rounded-md w-full p-2 outline-none"
                        type="text"
                        id="resetEmail"
                        value={resetEmail}
                        onChange={handleResetEmailChange}
                    />
                    {emailError && <p className="text-red-600 mt-1">{emailError}</p>}
                    <div className="mt-6 flex justify-end">
                        <Button className="w-full bg-orange-600 rounded-xl" onClick={handlePasswordReset}>
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
            {isSuccessModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md z-10">
                        <div className="flex justify-between">
                            <h2 className="text-mg font-bold mb-4">Sucesso</h2>
                            <span className="text-mg cursor-pointer hover:text-red-600" onClick={handleSuccessModalClose}>X</span>
                        </div>
                        <p className="mb-4 font-semibold text-sm w-80 text-slate-700"> Enviamos um link de recuperação para o seu <br />
                            e-mail cadastrado. Por favor, verifique a sua caixa de entrada e a pasta de spam, se necessário.</p>
                        <div className="mt-6 flex justify-end">
                            <Button className="w-full bg-orange-600 rounded-xl" onClick={handleSuccessModalClose}>
                                Entendido
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PasswordResetModal;
