import React from 'react';
import '../index.css';

const Container: React.FC = () => {
    return (
        <div className="absolute right-10 top-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[1600px] h-[500px]">
                {/* Blocos de cima */}
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">31</h2>
                    <p className="font-bold">Usuários</p>
                    <p className="">Total de usuários cadastrados</p>
                    <img 
                        src="/dashboardimg1.svg" 
                        alt="Dashboard Image 1" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">22</h2>
                    <p className="font-bold">Clientes</p>
                    <p className="">Total de clientes cadastrados</p>
                    <img 
                        src="/dashboardimg2.svg" 
                        alt="Dashboard Image 2" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">7</h2>
                    <p className="font-bold">Cargos</p>
                    <p className="">Total de cargos cadastrados</p>
                    <img 
                        src="/dashboardimg2.svg" 
                        alt="Dashboard Image 3" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">9</h2>
                    <p className="font-bold">Funcionários</p>
                    <p className="">Total de funcionários cadastrados</p>
                    <img 
                        src="/dashboardimg3.svg" 
                        alt="Dashboard Image 4" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>

                {/* Blocos de baixo */}
                <div className="col-span-4 flex gap-8">
                    <div className="bg-white shadow-lg rounded-[40px] p-4 flex-1 h-[280px] relative">
                        <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">18</h2>
                        <p className="font-bold">Tarefas</p>
                        <p className="">Total de tarefas cadastradas</p>
                        <img 
                            src="/dashboardimg6.svg" 
                            alt="Dashboard Image 6" 
                            className="absolute bottom-4 right-4 w-1/2" 
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-[40px] p-4 flex-1 h-[280px] relative">
                        <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">11</h2>
                        <p className="font-bold">Tarefas finalizadas</p>
                        <p className="">Lista de tarefas finalizadas</p>
                        <img 
                            src="/dashboardimg5.svg" 
                            alt="Dashboard Image 6" 
                            className="absolute bottom-4 right-4 w-1/2" 
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-[40px] p-4 flex-1 h-[280px] relative">
                        <h2 className="text-4xl font-bold mb-2 text-customBlue font-nunito">7</h2>
                        <p className="font-bold">Tarefas em andamento</p>
                        <p className="">Lista de tarefas em andamento</p>
                        <img 
                            src="/dashboardimg4.svg" 
                            alt="Dashboard Image 4" 
                            className="absolute bottom-4 h-[80%] right-4 w-1/2" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;
