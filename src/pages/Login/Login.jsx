import React, { useState } from 'react';
import "./Login.css";

function Login() {
    const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        setIsLogin(true);
    };

    const handleRegisterClick = () => {
        setIsLogin(false);
    };

    const handleGoogleLogin = () => {
        // Aqui você pode implementar a lógica para login com Google
        console.log("Login com Google");
    };

    return (
        <div className="container-login">
            <div className="container-eco">
                <img src='/img/img-telalogin.svg' alt='img-um' className='imgum-telalogin' />

                <div className="container-cadastro">
                    <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
                    <h2>{isLogin ? 'Faça login!' : 'Cadastre-se!'}</h2>
                    
                    {isLogin ? (
                        <>
                            <input type="text" id="input-email" className="cad-input" placeholder="E-mail" />
                            <input type="password" id="input-senha" className="cad-input" placeholder="Senha" />
                            <button className="btn-confirmar">Entrar</button>

                            {/* Botão do Google posicionado abaixo do botão de login */}
                            <button className="btn-google-login" onClick={handleGoogleLogin}>
                                <img src="/img/google-logo.svg" alt="Google Icon" className="google-logo" />
                                Login com o Google
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="btn-google">
                                <img src="/img/google-logo.svg" alt="Google Icon" className="google-logo" />
                                Criar conta com o Google
                            </button>

                            <input type="text" id="input-nome" className="cad-input" placeholder="Nome" />
                            <input type="text" id="input-sob" className="cad-input" placeholder="Sobrenome" />
                            <input type="text" id="input-email-cadastro" className="cad-input" placeholder="E-mail" />
                            <input type="password" id="input-senha-cadastro" className="cad-input" placeholder="Senha" />
                            <input type="password" id="input-confirmar-senha" className="cad-input" placeholder="Confirmar Senha" />
                            <button className="btn-confirmar">Concluído</button>
                        </>
                    )}

                    <div className="container-login-link">
                        <span>{isLogin ? 'Não tem conta?' : 'Já tem conta?'}</span>
                        <button 
                            className="btn-faça-login" 
                            onClick={isLogin ? handleRegisterClick : handleLoginClick}
                        >
                            {isLogin ? 'Cadastre-se' : 'Faça login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
