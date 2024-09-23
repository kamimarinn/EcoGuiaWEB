import "./Login.css";

function Login(){
    return(
       <div className="container-login">
        <div className="container-eco">
        <img src='/img/img-telalogin.svg' alt='img-um' className='imgum-telalogin'/>

        <div className="container-cadastro">
        <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin'/>
        <h2>Cadastre-se!</h2>
        <button className="btn-google">
        <img src="/img/google-logo.svg" alt="Google Icon" className="google-logo" />
        Criar conta com o Google </button>

        <input type="text" id="input-nome" className="cad-input" placeholder="Nome" />
        <input type="text" id="input-sob" className="cad-input" placeholder="Sobrenome" />
        <input type="text" id="input-id" className="cad-input" placeholder="E-mail" />
        <input type="number" id="input-id" className="cad-input" placeholder="Senha" />
        <input type="number" id="input-id" className="cad-input" placeholder="Confirmar Senha" />
       

        </div>

        </div>
        </div> 
    )
}

export default Login;