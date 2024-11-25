import './HorarioColeta.css';
// import {Link} from "react-router-dom";



function HorarioColeta() {
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
                    <input type="number" id="input-id" className="form-input" placeholder="INSIRA O CEP" />
                    <button className='btn-cep' type="button">BUSCAR</button>
             </div >
                           
            </div>
            <div className='containerCatalogo'> 
            <img src="/img/folhas.svg" alt="img-folhas" className='folhas' />   
                     
        </div>
        </div>
    );
}

export default HorarioColeta;
