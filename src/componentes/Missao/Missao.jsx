import "./Missao.css";

function Missao() {
    return (
        <div className='containerPrincipal'>
            <div className='container-MissaoValores'>
                <div className='caixa-simples'>
                    <img src="/img/icone-nossamissao.svg" alt="icone-missao" className='icone' />
                    <p className='titulo'>
                        Nossa Missão
                    </p>
                    <p className='texto'>
                        Fomentar a adoção de hábitos sustentáveis de maneira acessível e inspiradora, transformando a prática em algo divertido e educativo.
                    </p>
                </div>
                <div className='caixa-simples'>
                    <img src="/img/icone-nossavisao.svg" alt="icone-visao" className='icone' />
                    <p className='titulo'>
                        Nossa Visão
                    </p>
                    <p className='texto'>
                        Queremos engajar as pessoas com a sustentabilidade e a reciclagem, tornando essas práticas mais envolventes e educativas.
                    </p>
                </div>
                
                <div className='caixa-simples'>
                    <img src="/img/icone-nossosvalores.svg" alt="icone-valores" className='icone' />
                    <p className='titulo'>
                        Nossos Valores
                    </p>
                    <p className='texto'>
                        Promover a sustentabilidade com inovação e inclusão, tornando as práticas acessíveis e inspiradoras. Valorizar a educação e o engajamento em cada ação.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Missao;
