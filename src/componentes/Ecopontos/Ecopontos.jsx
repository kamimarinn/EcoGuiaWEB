import "./Ecopontos.css";

function Ecopontos(){
    return(
        <div href="#ecopontos" className='container-EcoPonto'>
        <h2><span className='highlight'> ECO</span>PONTO</h2>
        <img src='/img/retangulo-hcoleta.svg' alt='retangulo-ecoponto' className='ret-ecoponto'/>
        <p>Recicle nos ecopontos perto de você! Confira no<br></br> mapa interativo o mais próximo!</p>
        <div className='container-mapa'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1Kok7L5JyjXN758y3vy3kMsKYdJylrQE&hl=pt-BR&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
        <div  className='container-ajudasp'>
        <img src='/img/ajuda-sp.svg' alt='ajuda sao paulo' className='ajuda-sp'/>
        </div>
        </div>
    )
}

export default Ecopontos;