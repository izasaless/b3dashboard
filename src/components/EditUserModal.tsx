import { useState, useEffect } from 'react';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
  user: User | null; // Recebe o usuário que será editado
}

interface User {
  userType: string;
  name: string;
  email: string;
  phone: string;
  area: string;
  status: string;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ isOpen, onClose, onSave, user }) => {
  const [userType, setUserType] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    if (user) {
      setUserType(user.userType);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setArea(user.area);
      setStatus(user.status);
    }
  }, [user]);

  const handleSave = () => {
    const updatedUser: User = {
      userType,
      name,
      email,
      phone,
      area,
      status
    };
    onSave(updatedUser);
    onClose();
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Editar Usuário</h2>

        {/* Tipo de Usuário */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tipo de Usuário</label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="Funcionário">Funcionário</option>
            <option value="Usuário">Usuário</option>
          </select>
        </div>

        {/* Nome */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Área de Atuação */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Área de Atuação</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>

        {/* Botões de ação */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-custombluedark focus:outline-none focus:ring-2 focus:ring-customBlue"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
