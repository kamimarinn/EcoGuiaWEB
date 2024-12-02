import './telaTrilha.css';
import NavBar from '../../componentes/NavBar/Navbar';
import { Link } from "react-router-dom";
import { useState } from 'react';
import api from '../../services/api';
import { useRef } from 'react';

function TelaTrilha() {

    const[questUm,setQuestUm] = useState('')
    const[questDois,setQuestDois] = useState('')
    const[questTres,setQuestTres] = useState('')
    const[xpUm,setXpUm] = useState('')
    const[xpDois,setXpDois] = useState('')
    const[xpTres,setXpTres] = useState('')
    const[blobTitle,setBlobTitle] = useState('')
    const[blobDescription,setBlobDescription] = useState('')
    const[image,setImage] = useState(null)


    const handlerImage = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])

        }
        else{
            imagRef.current.src = ''
        }
        
    }

    const addQuests = async () => {
        const formData = new FormData();
        formData.append('file', image); // Adiciona a imagem
        formData.append('description_3', questTres);
        formData.append('XP_3', xpTres);
        formData.append('description_2', questDois);
        formData.append('XP_2', xpDois);
        formData.append('description_1', questUm);
        formData.append('XP_1', xpUm);
        formData.append('blob_title', blobTitle);
        formData.append('blob_description', blobDescription);
    
        try {
            const response = await api.post('/createQuest', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',  
                },
            });
            console.log(response.data);
            alert("Quests e Badge criadas com sucesso");
        } catch (error) {
            alert("Algo deu errado: " + error.response.data.msg);
            console.error(error);
        }
    };
    
    return (
        <div className='container-telatrilha'>
            <NavBar />
            <div className='container-titulo-alt-trilha'>
                <h2><span className='highlight'>Trilha</span> de Objetivos</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-telatrilha'/>
                <p>Manipule quests e badges!</p>
            </div>
            <div className='container-principal'>
                <div className='container-um-quests'>
                <div className='quest-tit'>
                   <h3>Quests</h3>
                   </div>
                    <div className='inputs-quests-um'>
                        <textarea className='text-input-um' placeholder="Quest" onChange={(e) => setQuestUm(e.target.value)}/>
                        <input type="number" id="input-id" className="input-quest" placeholder="XP" onChange={(e) => setXpUm(e.target.value)} />
                        </div>

                        <div className='inputs-quests-dois'>
                        <textarea className='text-input-dois' placeholder="Quest" onChange={(e) => setQuestDois(e.target.value)}/>
                        <input type="number" id="input-id" className="input-quest" placeholder="XP" onChange={(e) => setXpDois(e.target.value)}/>
                        </div>
                        
                        <div className='inputs-quests-tres'>
                        <textarea className='text-input-tres' placeholder="Quest" onChange={(e) => setQuestTres(e.target.value)}/>
                        <input type="number" id="input-id" className="input-quest" placeholder="XP" onChange={(e) => setXpTres(e.target.value)}/>
                        </div>

                      
                        
                    </div>
                    <div className='container-dois-badge'>
                   <div className='badge-tit'>
                   <h3>Badge</h3>
                   </div>
                  <div className='container-inputs-badge'>
                  <input type="file" id="file-input"  accept="image/*" className="file-input"onChange={handlerImage} />
                    
                    
                    <div className="right-column">
                        <input type="text" placeholder="Digite o título" className="input-texto" onChange={(e) => setBlobTitle(e.target.value)} />
                        <textarea placeholder="Digite a descrição" className="input-descricao" onChange={(e) => setBlobDescription(e.target.value)}></textarea>
                  </div>
                    </div>
                </div>

                </div>

                <div className='btn-adicionar-trilha'>
                        <button onClick={() => addQuests()}>Adicionar</button>

                    </div>
               
            </div>

          
       
    );
}

export default TelaTrilha;
