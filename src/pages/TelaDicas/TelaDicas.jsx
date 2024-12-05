import { Link } from 'react-router-dom';
import "./TelaDicas.css";
import NavBar from '../../componentes/NavBar/Navbar'
import api from '../../services/api';
import { useEffect, useState } from 'react';
function TelaDicas(){
 
    const [tips,setTips] = useState([]);
 
    const getAllTips = async () => {
        try{
        const response = await api.get('/tips');
        setTips(response.data.tips);
    }catch(error){
        alert("Erros ao pegar os dados")
        console.error(error);
    }
    }
    useEffect(() => {
        getAllTips();
    },[])
 
   
     const deleteTip =  async (id) => {
        const idTip = id
        console.log(id)
        try{
            const response = await api.delete("/deleteTip",{
            data:{
                    id:idTip
                }
            })
            alert("Dica deletada com sucesso!")
            console.log(response.data)
        }
        catch(error){
            alert("Erro ao apagar a dica")
            console.error(error)
        }
     }
    return (
        <div className='container-telasdicas'>
            <NavBar />
            <div className='container-titulo-alt'>
                <h2><span className='highlight'>Dicas</span>Diárias</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-teladicas'/>
                <p>Edite e atualize aqui as dicas diárias!</p>
            </div>
            <div className='pai-container-teladicas'>
                <Link className='btn-adicionar' to="/TelaDicasAdd">Adicionar + </Link>
                <div className='container-adddicas'>
               
                    {tips.map((_,index) => (
                <div className='container-dicaum' key={tips[index].pk_IDtip}>
                    <p>{tips[0] ? tips[index].description_tip : "carregando.." }</p>

                    {/* <button>Visualizar</button> */}

                    <button onClick={() => deleteTip(tips[index].pk_IDtip)}>Apagar</button>
                 </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default TelaDicas;
 