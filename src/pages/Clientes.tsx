import '../index.css';
import Sidebar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { useState } from 'react';
import AddUserModalProps from '../components/AddUserModalProps';


export const Clientes = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);  // Estado para controlar o modal
    
    const handleMenuToggle = (id: string) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    const handleAddUser = () => {
        setIsModalOpen(true);  // Abrir o modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Fechar o modal
    };

    const handleDeleteSelected = () => {
        alert("Excluir Usuários Selecionados");
    };

    const handleCheckboxChange = (userId: number) => {
        setSelectedUsers(prev => {
            const newSelectedUsers = new Set(prev);
            if (newSelectedUsers.has(userId)) {
                newSelectedUsers.delete(userId);
            } else {
                newSelectedUsers.add(userId);
            }
            return newSelectedUsers;
        });
    };

    return (
        <>
            <Topbar />
            <Sidebar />

            <div className="p-8">
                <div className="bg-white shadow-md rounded-3xl overflow-hidden" style={{ marginLeft: '240px' }}>
                    {/* Barra de ferramentas */}
                    <div className="p-4 border-b border-gray-200 flex items-center space-x-4">
                        <button
                            onClick={handleDeleteSelected}
                            className=" px-4 py-2 rounded-lg  hover:bg-gray-100 focus:outline-none "
                        >
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 7h12M10 11v6M14 11v6M5 7h14l1 14H4L5 7z"></path>
                            </svg>
                            Excluir
                        </button>

                        <button className="text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3V6zm0 4v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10H3z"></path>
                            </svg>
                            Filtro
                        </button>

                        <button
                            onClick={handleAddUser}
                            className="bg-customBlue text-white px-4 py-2 rounded-lg hover:bg-custombluedark focus:outline-none focus:ring-2 focus:ring-custom-blue"
                        >
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Adicionar Clientes
                        </button>
                    </div>

                    {/* Tabela */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                onChange={() => {
                                                    const isChecked = (document.getElementById('checkbox-all') as HTMLInputElement).checked;
                                                    if (isChecked) {
                                                        setSelectedUsers(new Set([1, 2])); // Marcar todos os usuários, substitua com IDs reais
                                                    } else {
                                                        setSelectedUsers(new Set());
                                                    }
                                                }}
                                            />
                                            <label htmlFor="checkbox-all" className="sr-only">Checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3  text-blue-600" >Nome</th>
                                    <th scope="col" className="px-6 py-3  text-blue-600">Categoria</th>
                                    <th scope="col" className="px-6 py-3  text-blue-600">Email</th>
                                    <th scope="col" className="px-6 py-3  text-blue-600">Telefone</th>
                                    <th scope="col" className="px-6 py-3  text-blue-600">Status</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-1"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                checked={selectedUsers.has(1)}
                                                onChange={() => handleCheckboxChange(1)}
                                            />
                                            <label htmlFor="checkbox-table-1" className="sr-only">Checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> Izabela Sales </td>
                                    <td className="px-6 py-4">Clientes</td>
                                    <td className="px-6 py-4">izabela.sales@example.com</td>
                                    <td className="px-6 py-4">(11) 99999-9999</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center text-green-600 bg-green-100 rounded-full px-2 py-1 text-xs font-medium">
                                            <svg className="w-2 h-2 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Ativo
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="relative">
                                            <button
                                                onClick={() => handleMenuToggle('menu-1')}
                                                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </button>
                                            {openMenu === 'menu-1' && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                                                    <ul className="py-1 text-sm text-gray-700">
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Editar</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Excluir</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                {/* Outros usuários */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal para adicionar usuário */}
            {isModalOpen && <AddUserModalProps isOpen={isModalOpen} onClose={handleCloseModal} />}
        </>
    );
};
