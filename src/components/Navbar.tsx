import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    // Define o item ativo com base na rota atual
    if (location.pathname === '/home') {
      setActive('monitoramentos');
    } else if (location.pathname === '/usuarios') {
      setActive('usuarios');
    } else if (location.pathname === '/clientes') {
      setActive('clientes');
    } else if (location.pathname === '/funcionarios') {
      setActive('funcionarios');
    } else if (location.pathname === '/tarefas') {
      setActive('todas');
    } else if (location.pathname === '/tarefas-finalizadas') {
      setActive('finalizadas');
    } else if (location.pathname === '/tarefas-em-andamento') {
      setActive('em-andamento');
    } else if (location.pathname === '/cargos') {
      setActive('cargos');
    }

    
  }, [location.pathname]); // Atualiza sempre que a rota mudar

  const handleLogout = () => {
    console.log('Usuário fez logout');
  };

  const handleClick = (section: string, path: string) => {
    setActive(section); // Atualiza o estado para a seção clicada
    navigate(path); // Redireciona para a rota correspondente
  };

  return (
    <div className="fixed left-4 top-4 bottom-4 w-56 bg-customBlue text-white p-4 rounded-3xl shadow-lg flex flex-col">
      {/* Painel Administrativo */}
      <div className="mb-4 flex items-center justify-center">
        <img src="/logo.svg" alt="Ícone Painel Administrativo" className="h-8 w-8 mr-2" />
        <h2 className="text-sm font-nunito text-left break-words w-28 font-semibold">
          Painel Administrativo
        </h2>
      </div>

      {/* Monitoramentos */}
      <div className="mb-4">
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li
            onClick={() => handleClick('monitoramentos', '/home')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'monitoramentos' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/Vector (2).svg" alt="Monitoramentos" className="h-4 w-auto" />
            </span>
            <h2>Monitoramentos</h2>
          </li>
        </ul>
      </div>

      {/* Pessoas */}
      <div className="mb-4">
        <h3 className="text-sm font-nunito text-left mb-2">PESSOAS</h3>
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li
            onClick={() => handleClick('usuarios', '/usuarios')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'usuarios' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/Union.svg" alt="Usuários" className="h-4 w-auto" />
            </span>
            <h2 className="font-nunito text-left mb-2">Usuários</h2>
          </li>
          <li
            onClick={() => handleClick('clientes', '/clientes')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'clientes' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/Vector (3).svg" alt="Clientes" className="h-4 w-auto" />
            </span>
            <h2>Clientes</h2>
          </li>
          <li
            onClick={() => handleClick('funcionarios', '/funcionarios')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'funcionarios' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/Union (2).svg" alt="Funcionários" className="h-4 w-auto" />
            </span>
            <h2>Funcionários</h2>
          </li>
        </ul>
      </div>

      {/* Tarefas */}
      <div className="mb-4">
        <h3 className="text-sm font-nunito text-left mb-2">TAREFAS</h3>
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li
            onClick={() => handleClick('todas', '/tarefas')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'todas' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/Union (1).svg" alt="Todas" className="h-4 w-auto" />
            </span>
            <h2>Todas</h2>
          </li>
          <li
            onClick={() => handleClick('finalizadas', '/tarefas-finalizadas')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'finalizadas' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/caixa.svg" alt="Finalizadas" className="h-4 w-auto" />
            </span>
            <h2>Finalizadas</h2>
          </li>
          <li
            onClick={() => handleClick('em-andamento', '/tarefas-em-andamento')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'em-andamento' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/caixa.svg" alt="Em Andamento" className="h-4 w-auto" />
            </span>
            <h2>Em Andamento</h2>
          </li>
        </ul>
      </div>

      {/* Cargos */}
      <div className="mb-4">
        <h3 className="text-sm font-nunito text-left mb-2">CARGOS</h3>
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li
            onClick={() => handleClick('cargos', '/cargos')}
            className={`p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg ${active === 'cargos' ? 'bg-blue-800 text-white' : ''}`}
          >
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
              <img src="/Vector (3).svg" alt="Cargos" className="h-4 w-auto" />
            </span>
            <h2>Cargos</h2>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center text-base font-bold truncate font-nunito bg-transparent hover:bg-blue-800 text-white hover:text-white py-2 border border-transparent rounded-3xl transition duration-300 ease-in-out"
        >
          <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
            <img src="/sair.svg" alt="Logout" className="h-4 w-auto" />
          </span>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
