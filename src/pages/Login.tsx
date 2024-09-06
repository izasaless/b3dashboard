// src/pages/Login.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const success = login(username, password);
        if (success) {
            navigate('/home');
        } else {
            alert('Usuário ou senha incorretos!');
        }
    };

    return (
        <>
            <div className="absolute left-0 h-full w-full lg:w-1/2 bg-gray-200 rounded-r-full border-r border-customBlue"></div>
            <div className="absolute ml-12 lg:ml-24 top-0 h-full flex items-center justify-center z-20">
                <div className="relative">
                    <img
                        src="/Group 5.png"
                        alt="Sobrepondo Semicirculo"
                        className="h-auto max-h-full w-auto max-w-full lg:max-w-none lg:max-h-none"
                        style={{
                            width: '479px',
                            height: '480.84px',
                            top: '250px',
                            opacity: '1',
                        }}
                    />
                    <img
                        src="public/Vector.png"
                        alt="Vector"
                        className="absolute"
                        style={{
                            width: '55px',
                            height: '50px',
                            top: '36%',
                            left: '45%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </div>
            </div>

            <div className="flex min-h-screen justify-center items-center px-6 py-12 lg:px-8">
                <div className="flex flex-1 flex-col lg:flex-row justify-center items-center w-full max-w-screen-xl">
                    <div className="hidden lg:flex flex-1 items-center justify-center"></div>
                    <div className="flex flex-1 flex-col justify-center lg:max-w-md z-10 relative rounded-lg">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4">
                                <img src="public/Vector.png" alt="Vector" className="h-12 w-12" />
                                <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 font-montserrat">
                                    Tela de Login
                                </h2>
                            </div>
                            <p className="text-lg text-black font-nunito leading-[47.74px] font-bold text-[32px]">
                                Bem vindo!
                            </p>
                            <p className="text-lg text-gray-600 font-nunito">
                                Faça login para entrar no dashboard
                            </p>
                        </div>

                        <form className="mt-8 space-y-6 text-customBlue font-nunito relative" onSubmit={handleLogin}>
                            <div className="w-custom mx-auto">
                                <div className="mt-2 relative">
                                    <img
                                        src="/user.png"
                                        alt="Ícone de usuário"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                                    />
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                                        placeholder="Usuário"
                                    />
                                </div>
                            </div>
                            <div className="w-custom mx-auto">
                                <div className="mt-2 relative">
                                    <img
                                        src="/lock.png"
                                        alt="Ícone de cadeado"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                                    />
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                                        placeholder="Senha"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-custom mx-auto">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"
                                        className="h-4 w-4 ring-customBlue text-customBlue focus:ring-customBlue border-customBlue rounded-full"
                                    />
                                    <label
                                        htmlFor="remember_me"
                                        className="ml-2 block text-sm text-customBlue font-nunito"
                                    >
                                        Lembrar-me
                                    </label>
                                </div>
                                <p className="text-sm text-customBlue flex items-center">
                                    <img
                                        src="/lock.png"
                                        alt="Ícone de cadeado"
                                        className="h-4 w-4 mr-2"
                                    />
                                    <a href="#" className="text-customBlue hover:text-customBlue font-nunito">
                                        Esqueceu a senha?
                                    </a>
                                </p>
                            </div>
                            <div className="mt-4 w-custom mx-auto">
                                <input
                                    type="submit"
                                    className="font-poppins flex justify-center w-full rounded-full bg-customBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
                                    value="Entrar"
                                />
                                <p className="mt-2 text-sm text-center text-customBlue flex items-center justify-center">
                                    <a href="/home" className="text-customBlue hover:text-customBlue font-nunito">
                                        Cadastrar-se
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
