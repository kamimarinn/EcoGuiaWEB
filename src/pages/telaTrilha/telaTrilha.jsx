import { Link } from 'react-router-dom';
import "./telaTrilha.css";
import NavBar from '../../componentes/NavBar/Navbar'
import api from '../../services/api';
import { useEffect, useState } from 'react';

function TelaTrilha(){
 
    const [quests,setQuests] = useState([]);
 
    useEffect(() => {

        const getAllQuests = async () => {

            try {
        
                const response = await api.get('/quests');

                const questsInOrder = response.data.quests.reverse()

                setQuests(questsInOrder);
            } catch (error) {
        
                alert("Erros ao pegar os dados")
                console.error(error);
            }
        }

        getAllQuests();
    },[quests]);
 
   
    const deleteLatestQuest =  async () => {
    
        try {

            const response = await api.delete("/deleteQuest");

            alert("Missão mais recente deletada com sucesso!")
            console.log(response.data)
        } catch (error) {

            alert("Erro ao apagar a missão mais recente")
            console.error(error)
        }
    }
    
    return (
        <div className='container-telastrilhas'>
            <div className='container-titulo-alt'>
                <h2><span className='highlight'>Trilha</span> de Objetivos</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-telastrilhas'/>
                <p>Adicione e remova aqui as missões!</p>
            </div>

            <div className='pai-container-telastrilhas'>
                <div className='container-btn-quests'>
                    <button className='btn-remove-quests' onClick={() => deleteLatestQuest()}>Apagar a Missão Mais Recente</button>
                    <Link to="/telaAddTrilha">
                        <button className='btn-adicionar-quests'>
                            Adicionar + 
                        </button>
                    </Link>
                </div>
                <div className='container-quests'>
                    {quests.map((_,index) => (
                        <div className='container-quest' key={quests[index].pk_IDquest}>
                            <p>{quests[0] ? quests[index].description_quest : "carregando.." }</p>
                            <p>XP: {quests[index].XP_quest}</p>
                            <p>Badge {quests[index].fk_badge_quest}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default TelaTrilha;
 