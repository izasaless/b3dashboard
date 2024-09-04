import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import  { Usuarios } from './pages/Usuarios'
import { Clientes } from './pages/Clientes';
import { Funcionarios } from './pages/Funcionarios';



export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                {/* Redireciona para /login se a rota não corresponder */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
