import { useState } from 'react';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newUser: User) => void;
}

interface User {
  userType: string;
  name: string;
  email: string;
  phone: string;
  area: string;
  status: string;
}

const getTitle = () => {
  switch (location.pathname) {
      case '/usuarios':
          return 'Usuários';
      case '/clientes':
          return 'Clientes';
      case '/funcionarios':
          return 'Funcionários';
      case '/todas':
          return 'Tarefas';
      case '/finalizadas':
          return 'Tarefas - Finalizadas';
      case '/em-andamento':
          return 'Tarefas - Em Andamento';
      case '/cargos':
          return 'Cargos';
      default:
          return 'Usuários'; // Título padrão
  }
};

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [userType, setUserType] = useState<string>(''); // Funcionário ou Usuário
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSave = () => {
    const newUser: User = {
      userType,
      name,
      email,
      phone,
      area,
      status
    };
    onSave(newUser);
    onClose(); // Fecha o modal após salvar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold pb-4">Cadastro de {getTitle()}</h2>
        
        {/* Tipo de Usuário */}
        <div className="mb-4">
          <select
            className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Funcionário">Funcionário</option>
            <option value="Usuário">Usuário</option>
          </select>
        </div>

        {/* Formulário em duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              placeholder='Nome'
              type="text"
              className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              placeholder='Email'
              type="email"
              className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              placeholder='Telefone'
              type="tel"
              className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* CPF */}
          <div className="mb-4">
            <input
              placeholder='CPF'
              type="text"
              className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Área de Atuação */}
          <div className="mb-4">
            <input
              placeholder='Área de atuação'
              type="text"
              className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          {/* Status */}
          <div className="mb-4 col-span-1">
            <select
              className="mt-1 block w-full border border-customBlue rounded-3xl shadow-sm py-2 px-3 text-customBlue focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
        </div>

        {/* Linha separadora */}
       

        {/* Botões de ação */}
        <div className="flex justify-start space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-customBlue text-white px-4 py-2 rounded-lg hover:bg-custombluedark focus:outline-none focus:ring-2 focus:ring-customBlue"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export const Usuarios: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddUserClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveUser = (newUser: User) => {
    console.log(newUser);
    // Aqui você pode adicionar a lógica para salvar o novo usuário
  };

  return (
    <>
      <button
        onClick={handleAddUserClick}
        className="bg-customBlue text-white px-4 py-2 rounded-lg hover:bg-custombluedark focus:outline-none focus:ring-2 focus:ring-customBlue"
      >
        Adicionar Usuário
      </button>

      <AddUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveUser}
      />
    </>
  );
};

export default AddUserModal;
