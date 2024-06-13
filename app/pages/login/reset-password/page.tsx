"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { resetPassword, getUserByResetToken } from '@/app/services/data';
import { Label } from '@/app/_components/ui/label';
import { Input } from '@/app/_components/ui/input';
import { Button } from '@/app/_components/ui/button';
import Image from "next/image";
import Logo from "@/public/Image/trajetonBgTransparent.png";
import Link from 'next/link';

const PasswordResetPage = () => {
    const navigation = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [resetTokenValid, setResetTokenValid] = useState(true);//mudar para false estado inicial, e para dar link expirado caso o link tenha expirado
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            const user = getUserByResetToken(token);
            if (user) {
                setResetTokenValid(true);
            } else {
                setResetTokenValid(false);
                navigation.push('/');
            }
        }
    }, [navigation]);

    const handlePasswordReset = () => {
        if (!newPassword || newPassword.length < 8 || newPassword.length > 32) {
            setPasswordError('A senha deve conter entre 8 e 32 caracteres.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError('As senhas não coincidem. Por favor, digite novamente.');
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            const success = resetPassword(token, newPassword);
            if (success) {
                setSuccessMessage('Senha redefinida com sucesso. Redirecionando para a página de login...');
                setTimeout(() => {
                    navigation.push('/pages/login');
                }, 2000);
            } else {
                // Tratar erro de redefinição de senha,ex:conexão
            }
        }
    };

    return (
        <div>
            <div className="p-[24px]">
            {resetTokenValid ? (
                    <>
                        <div>
                        <div className="flex justify-center items-center">
                            <Image className="w-[100px] bg-cover mt-10" src={Logo} alt="logo" />
                        </div>
                        </div>
                    {successMessage ? (
                        <p>{successMessage}</p>
                    ) : (
                        <div className='flex flex-col justify-center items-center'>
                            <div className='p-6 bg-slate-300 rounded-2xl mb-8 lg:w-96 lg:block'>
                                <div>
                                    <h2 className='font-bold text-center text-lg text-slate-900 mb-4'>Redefinir Senha</h2>
                                    <p className='font-semibold text-sm text-center text-slate-700 mb-6'>Redefina sua senha com no mínimo 8 caracteres</p>
                                </div>
                                <div className="mb-4">
                                    <Label className='text-sm font-semibold'>Senha<span>*</span></Label>
                                    <Input className="border-1 shadow-sm border-neutral-950 rounded-md w-full p-2 outline-none" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <Label className='text-sm font-semibold'>Confirmar sua senha<span>*</span></Label>
                                    <Input className="border-1 shadow-sm border-neutral-950 rounded-md w-full p-2 outline-none" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        </div>
                                        <div>
                                            <h3 className='mb-4 font-bold text-sm'>Crie uma senha segura</h3>
                                            <ul className='ml-6'>
                                                <li className='list-disc text-[12px] font-semibold mb-1'>
                                                    <p> use letras maiúsculas e minúsculas, símbolos e números;</p>
                                                </li>
                                                <li className='list-disc text-[12px] font-semibold mb-1'>
                                                    <p> Não use informações pessoais como datas de aniversário;</p>
                                                </li>
                                                <li className='list-disc text-[12px] font-semibold mb-1'>
                                                    <p>  não use uma senha igual a anterior;</p>
                                                </li>
                                            </ul>
                                        </div>
                                {passwordError && <p className="text-red-600">{passwordError}</p>}
                                
                                    </div>
                                        <div className='w-[438px] px-4 lg:w-[418px]'>
                                        <Button onClick={handlePasswordReset} className="font-semibold w-full bg-orange-600 rounded-xl">
                                            Redefinir Senha
                                        </Button>
                                        </div>
                        </div>
                    )}
                </>
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <div className="flex justify-center items-center">
                        <Image className="w-[100px] bg-cover mt-10 mb-10" src={Logo} alt="logo" />
                    </div>
                    <div className='p-6 bg-slate-300 rounded-2xl' >
                                <p className='font-semibold text-mg text-center mb-4'>Link inválido ou expirado.</p>
                                <p className='text-sm text-center'>Solicite um novo link na pagina de login <Link href={"/pages/login"} className='text-cyan-700 cursor-pointer font-semibold'>clicando aqui</Link></p>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default PasswordResetPage;
