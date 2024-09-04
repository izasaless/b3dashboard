import React from 'react';
import '../index.css';

const Container: React.FC = () => {
    return (
        <div className="absolute right-10 top-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[1600px] h-[500px]">
                {/* Blocos de cima */}
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-xl font-semibold mb-2">31</h2>
                    <p>Usuários</p>
                    <p>Total de usuários cadastrados</p>
                    <img 
                        src="/dashboardimg1.svg" 
                        alt="Dashboard Image 1" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-xl font-semibold mb-2">22</h2>
                    <p>Clientes</p>
                    <p>Total de clientes cadastrados</p>
                    <img 
                        src="/dashboardimg2.svg" 
                        alt="Dashboard Image 2" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-xl font-semibold mb-2">7</h2>
                    <p>Cargos</p>
                    <p>Total de cargos cadastrados</p>
                    <img 
                        src="/dashboardimg2.svg" 
                        alt="Dashboard Image 3" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>
                <div className="bg-white shadow-lg rounded-[40px] p-4 h-[220px] relative">
                    <h2 className="text-xl font-semibold mb-2">9</h2>
                    <p>Funcionários</p>
                    <p>Total de funcionários cadastrados</p>
                    <img 
                        src="/dashboardimg3.svg" 
                        alt="Dashboard Image 4" 
                        className="absolute bottom-4 right-4 w-1/2" 
                    />
                </div>

                {/* Blocos de baixo */}
                <div className="col-span-4 flex gap-8">
                    <div className="bg-white shadow-lg rounded-[40px] p-4 flex-1 h-[280px] relative">
                        <h2 className="text-xl font-semibold mb-2">18</h2>
                        <p>Tarefas</p>
                        <p>Total de tarefas cadastradas</p>
                        <img 
                            src="/dashboardimg6.svg" 
                            alt="Dashboard Image 6" 
                            className="absolute bottom-4 right-4 w-1/2" 
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-[40px] p-4 flex-1 h-[280px] relative">
                        <h2 className="text-xl font-semibold mb-2">11</h2>
                        <p>Tarefas finalizadas</p>
                        <p>Lista de tarefas finalizadas</p>
                        <img 
                            src="/dashboardimg5.svg" 
                            alt="Dashboard Image 6" 
                            className="absolute bottom-4 right-4 w-1/2" 
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-[40px] p-4 flex-1 h-[280px] relative">
                        <h2 className="text-xl font-semibold mb-2">7</h2>
                        <p>Tarefas em andamento</p>
                        <p>Lista de tarefas em andamento</p>
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
