import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

const Topbar: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    // Definir o título com base na rota atual
    const getTitle = () => {
        switch (location.pathname) {
            case '/usuarios':
                return 'Usuários';
            case '/clientes':
                return 'Clientes';
            case '/funcionarios':
                return 'Funcionários';
            case '/todas':
                return 'Tarefas - Todas';
            case '/finalizadas':
                return 'Tarefas - Finalizadas';
            case '/em-andamento':
                return 'Tarefas - Em Andamento';
            case '/cargos':
                return 'Cargos';
            default:
                return 'Monitoramento'; // Título padrão
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav style={{ backgroundColor: '#fff', padding: '10px 30px', borderBottom: '1px solid #ddd', marginLeft: '0px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ marginLeft: '240px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>
                    {getTitle()}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <span style={{ marginRight: '15px' }}>Bem-vindo</span>
                    <div style={{ width: '35px', height: '35px', backgroundColor: '#ddd', borderRadius: '50%', cursor: 'pointer' }} onClick={toggleDropdown} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        style={{ width: '20px', height: '20px', marginLeft: '8px', cursor: 'pointer' }}
                        onClick={toggleDropdown}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {isDropdownOpen && (
                        <div style={{ position: 'absolute', top: '100%', right: '0', backgroundColor: '#fff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginTop: '10px', zIndex: 1 }}>
                            <ul style={{ listStyle: 'none', padding: '10px 20px', margin: 0 }}>
                                <li style={{ padding: '8px 0', cursor: 'pointer' }}>Perfil</li>
                                <li style={{ padding: '8px 0', cursor: 'pointer' }}>Configurações</li>
                                <li style={{ padding: '8px 0', cursor: 'pointer' }}>Sair</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
