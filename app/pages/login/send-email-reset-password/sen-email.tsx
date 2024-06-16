import Image from "next/image";
import Logo from "@/public/Image/trajetonBgTransparent.png";

const SendEmailResetPassword = () => {
    return ( 
    <div>
        <header>
            <div>
                <div className="flex items-center text-center justify-center pt-2 pb-2 bg-slate-400 mb-8">
                    <Image className="w-[84px] bg-cover" src={Logo} alt="logo" />
                </div>
                <div className="p-10">
                    <div className="border border-3 p-6 rounded-lg border-gray-950">
                        <h2 className="text-md font-semibold">
                            Olá.
                        </h2>
                        <p className="text-sm font-400 mb-4 mt-4">Redefina sua senha de acesso clicando no link abaixo.</p>
                        <a href={"/pages/login/reset-password"} className="text-cyan-400 underline text-sm">https://whadcahcbjahbcjahbjha.senha</a>
                        <p className="text-sm text-red-600 mt-4">O link expira em 24 horas.</p>
                    </div>
                </div>
            </div>
        </header>
    </div>
    );
}

export default SendEmailResetPassword;