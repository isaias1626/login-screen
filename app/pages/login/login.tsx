"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Image/trajetonBgTransparent.png";
import { Button } from "@/app/_components/ui/button";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";
import { useRouter } from "next/navigation";
import { fetchUser, validatePassword } from "@/app/services/data";
import PasswordResetModal from "@/app/pages/login/password-recovery/password-recovery";
import { signIn } from "next-auth/react"

const Login = () => {


    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [resetEmailError, setResetEmailError] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");
        setLoginError("");

        if (!email) {
            setEmailError("Insira seu endereço de e-mail.");
            return;
        }

        if (!email.includes("@") || !/.+\..+/.test(email.split("@")[1])) {
            setEmailError("E-mail inválido. Insira um endereço de e-mail no formato correto.");
            return;
        }

        if (!password || password.length < 8 || password.length > 32 || !validatePassword(password)) {
            setPasswordError("Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente.");
            return;
        }

        const user = fetchUser(email);
        if (!user) {
            setLoginError("Usuário ou senha inválida. Verifique suas credenciais e tente novamente.");
            return;
        }

        if (user.password !== password) {
            setLoginError("Senha incorreta. Verifique suas credenciais e tente novamente.");
            return;
        }

        router.push("/pages/dashboard");
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError("");
        setLoginError("");
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError("");
        setLoginError("");
    };

    const handleForgotPassword = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setResetEmailError("");
    };

    const handlePasswordReset = (email: string) => {
        const user = fetchUser(email);
        if (user) {
            console.log("E-mail de recuperação enviado para:", email);
            setResetEmailError("");
            setModalOpen(false);
            
        } else {
            setResetEmailError("O e-mail não é igual ao do cadastro.");
        }
    };

    return (
        <div>
            <div className="p-8 lg:p-0 lg:flex lg:flex-row-reverse">
                <div className="flex lg:w-1/2 justify-center items-center lg:bg-stone-100 lg:h-screen">
                    <Image className="w-[300px] bg-cover lg:w-[400px]" src={Logo} alt="logo" />
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <form onSubmit={handleLogin} className="w-full lg:w-96">
                        <div className="mb-4">
                            <Label className="mb-2 font-semibold block text-mg" htmlFor="email">
                                E-mail<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                className="border-2 border-neutral-950 rounded-md w-full p-2 outline-none"
                                type="text"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <p className="text-red-600 mt-1">{emailError}</p>}
                        </div>
                        <div className="mt-8">
                            <Label className="mb-2 font-semibold block text-mg" htmlFor="password">
                                Senha<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                className="border-2 border-neutral-950 rounded-md w-full p-2 outline-none"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <p className="text-red-600 mt-1">{passwordError}</p>}
                            {loginError && <p className="text-red-600 mt-1">{loginError}</p>}
                        </div>
                        <div className="mt-8 mb-10">
                            <div onClick={handleForgotPassword}>
                                <span className="text-sm font-semibold text-blue-400 cursor-pointer">
                                    Esqueci minha senha
                                </span>
                            </div>
                        </div>
                        <div>
                            <Button type="submit" className="w-full bg-orange-600 rounded-xl">
                                Entrar
                            </Button>
                        </div>
                    </form>
                </div>
                <PasswordResetModal isOpen={modalOpen} onClose={closeModal} onReset={handlePasswordReset} />
                {resetEmailError && <p className="text-red-600 mt-1">{resetEmailError}</p>}
            </div>
        </div>
        
    );
};

export default Login;
