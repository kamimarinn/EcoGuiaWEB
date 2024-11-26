import './HorarioColeta.css';
import {Link} from "react-router-dom";
import api from '../../services/api';
import { useState } from 'react';



function HorarioColeta() {

    const [dados,setDados] = useState('')
    const [cep,setCep]     = useState('')
    const[hidden , setHiden] = useState(true)
    const[loading,setLoading] = useState(false)
    const getTime = async () => {
        setLoading(true)
        try{
          const response = await api.post('/pickupTime',{cep})
          setDados(response.data)
          setHiden(false)
        }catch(erro){
          console.log(erro)
        }
  setLoading(false)
      }
    return (
        <div className='coleta-container'>
         <div className='horario-container'>
                <img src="/img/horariocoleta.svg" alt="foto-horariocoleta" className='icon-hc' />
        </div>
            <div className='hc-container'>
                <h2> <span className='highlight'> Horários </span> da Coleta </h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='ret-coleta'/>
                <p>Confira através do seu CEP, quais são os horários e datas que os caminhões<br /> de coleta padrão e coleta sustentável passam em sua rua!</p>
                <div className='hc-botao'>
                    <input type="number" id="input-id" className="form-input" placeholder="INSIRA O CEP" onChange={(e) => setCep(e.target.value)} />
                    {loading?
                    <div></div> 
                    :
                    <button className='btn-cep' type="button" onClick={() => getTime()}>BUSCAR</button>
                    }
             </div>      
      </div>
<div className='horario'>
{loading? 
    <div class="loader"></div>
    :
    <div className="tabela-container" hidden={hidden}>
    {/* Cabeçalho da tabela */}
    <table className="table">
      <thead>
        <tr className="table-header">
          <th className="table-header-text">Dia</th>
          <th className="table-header-text">Comum</th>
          <th className="table-header-text">Seletiva</th>
        </tr>
      </thead>
      <tbody>
        {/* Linhas da tabela */}
        {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((dia, index) => (
          <tr key={index} className="table-row">
            <td className="table-cell">{dia}</td>
            <td className="table-cell">
            {dados && dados[dia] ? dados[dia].domiciliar : '-'}
            </td>
            <td className="table-cell">
            {dados && dados[dia] ? dados[dia].seletiva : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>} 
</div>
            <div className='containerCatalogo'> 
            <img src="/img/folhas.svg" alt="img-folhas" className='folhas' />   
                     
        </div>
        </div>
    );
}

export default HorarioColeta;
