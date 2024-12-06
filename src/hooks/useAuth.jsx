import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split('.')[1]));
                if (decoded && decoded.isAdmin) {
                    setIsAdmin(true);
                }
            } catch (error) {
                console.error('Token inválido', error);
            }
        }
        
        // Sempre definir o loading como false após a verificação
        setLoading(false);
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsAdmin(false);
        navigate('/Login');
    };

    return { isAdmin, loading, logout };
};

export default useAuth;