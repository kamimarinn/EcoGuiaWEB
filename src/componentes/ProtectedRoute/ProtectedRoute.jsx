// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ element }) => {
    const { isAdmin, loading } = useAuth();

    console.log('Loading:', loading);
    console.log('Is Admin:', isAdmin);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!isAdmin) {
        console.log('Redirecionando para Login');
        return <Navigate to="/Login" replace />;
    }

    return element;
};

export default ProtectedRoute;