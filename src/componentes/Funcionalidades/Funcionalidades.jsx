import './Funcionalidades.css';

// import HorarioColeta from '../HorarioColeta/HorarioColeta';
// import Footer from '../Footer/Footer';

function Funcionalidades(){
 return (
    <div>
        <div className='funcionalidades-container'>
            <h3 className='titulo-func'>Funcionalidades do Aplicativo</h3>
            
        <div className='aplicativo-container'>
        <div className='aplicativo-info'>
        <img src='/img/iconecoponto.svg' alt="icone-ecoponto" className='icone' />
        <p className='titulo-aplicativo'>ecopontos</p>
        <p className='texto-aplicativo'>Localizador de pontos de descarte para objetos recicláveis, facilitando a reciclagem responsável.</p>
        </div>
        <div className='aplicativo-seta'>
          <img src='/img/arrow.svg' className='arrow'/>
        </div>
        <div className='aplicativo-info'>
        <img src='/img/iconwiki.svg' alt="icone-wiki" className='icone' />
        <p className='titulo-aplicativo'>wiki</p>
        <p className='texto-aplicativo'>Fonte de informações e dicas sobre meio ambiente e sustentabilidade.</p>
        </div>
        <div className='aplicativo-seta'>
        <img src='/img/arrow.svg' className='arrow'/>
        </div>
        <div className='aplicativo-info'>
        <img src='/img/gamificacao.svg' alt="icone-gameficacao" className='icone' />
        <p className='titulo-aplicativo'>gameficação</p>
        <p className='texto-aplicativo'>Jogos para tornar a participação<br></br> em atividades ambientais mais divertida<br></br> e motivadora.</p>
        </div>
        
        </div>
               
        </div>
          <div className='btn-baixeagora'> 
          <button className='btn-baixar' type="button">
            BAIXE AGORA!
        </button>
          </div>
       
    
   
    </div>

 )
}

export default Funcionalidades;