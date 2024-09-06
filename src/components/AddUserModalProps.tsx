import React, { useState } from 'react';

interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (user: User) => void; // Propriedade obrigatória
}

interface User {
    userType: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    status: string;
}

const AddUserModalProps: React.FC<AddUserModalProps> = ({ isOpen, onClose, onSave }) => {
    const [user, setUser] = useState<User>({
        userType: '',
        name: '',
        email: '',
        phone: '',
        cpf: '',
        status: 'Ativo'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(user); // Chama a função onSave passando o novo usuário
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
                <h2 className="text-xl font-bold mb-4">Adicionar Usuário</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Nome</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={user.name}
                        onChange={handleInputChange}
                        placeholder="Nome"
                        className="w-full p-2 border border-customBlue rounded-3xl"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="userType" className="block text-gray-700">Tipo de Usuário</label>
                        <select
                            id="userType"
                            name="userType"
                            value={user.userType}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-customBlue rounded-3xl"
                        >
                            <option value="">Selecione</option>
                            <option value="Admin">Admin</option>
                            <option value="Usuário">Usuário</option>
                            <option value="Convidado">Convidado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full p-2 border border-customBlue rounded-3xl"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700">Telefone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={user.phone}
                            onChange={handleInputChange}
                            placeholder="Telefone"
                            className="w-full p-2 border border-customBlue rounded-3xl"
                        />
                    </div>

                    <div>
                        <label htmlFor="cpf" className="block text-gray-700">CPF</label>
                        <input
                            id="cpf"
                            name="cpf"
                            type="text"
                            value={user.cpf}
                            onChange={handleInputChange}
                            placeholder="CPF"
                            className="w-full p-2 border border-customBlue rounded-3xl"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={user.status}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-customBlue rounded-3xl"
                    >
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={handleSave}
                        className="bg-customBlue text-white px-4 py-2 rounded-lg hover:bg-custombluedark focus:outline-none"
                    >
                        Salvar
                    </button>
                    <button
                        onClick={onClose}
                        className="ml-4 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUserModalProps;
