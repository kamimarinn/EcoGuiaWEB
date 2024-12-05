import { useState } from "react";
import "./TelasDicasAdd.css";
import NavBar from '../../componentes/NavBar/Navbar'
import api from "../../services/api";
function TelasDicasAdd() {
 
    const [tip,setTip] = useState('');
 
   const addTip = async () =>{
    try{
    const response = await api.post('/createTip',{
        description_tip:tip
    })
    alert("Dica adicionada com sucesso!")
    setTip("")
    window.location = '/TelaDicas'
} catch(error){
    alert("Erro ao adicionar a dica", error.response.data.msg)
    console.error(error);
}
   }
    return (
        <div className='container-teladicasadd'>
        <NavBar />
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Dicas</span>Diárias</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-teladicasadd'/>
                <p>Adicione a dica aqui!</p>
            </div>
            <div className="pai-container-adddicas">
            <div className='container-adddicas'>
                    <textarea
                        className='textarea-dicas'
                        placeholder='Adicione sua dica aqui...'
                        rows='4'
                        cols='50'
                        onChange={(e) => setTip(e.target.value)}
                    ></textarea>
                    <button className='btn-add'onClick={addTip}>Adicionar Dica</button>
                </div>
 
 
            </div>
        </div>
 
    );
 
}
 
export default TelasDicasAdd;