import './Artigos.css';
import { Link } from 'react-router-dom'; // Certifique-se de que você tem o Link do React Router

function Artigos() {
    return (
        <>
            <div className='container-artigos'>
                <h2><span className='highlight'>Catálago</span> Sustentável</h2>
                <img src='/img/icon-artigos.svg' alt='globo-artigos' className='g-artigos' />
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-artigos' className='ret-artigos' />
                <p>Encontre toda informação necessária para ter uma<br />vida mais sustentável e um consumo consciente!</p>
            </div>

            <div className='pai-div-parte'>
                <div className='container-artigo-um'>
                    <img src='/img/imagem-noticia.svg' alt='img-noticia' className='img-not' />
                    <h4>Por que as árvores são tão<br />importantes para o<br />planeta?</h4>
                    <Link className="btn-leiamais" to="/catalogo">LEIA MAIS</Link>
                </div>

                <div className='pai-container-artigo-dois'>
                    <div className='container-artigo-dois'>
                        <img src='/img/img-noticia-dois.svg' alt='img-noticia' className='img-not-dois' />
                        <div className='container-artigo-dois-div'>
                            <h5>A importância da <br />reciclagem.</h5>
                            <button className='btn-leiamais-dois' type='button'>LEIA MAIS</button>
                        </div>
                    </div>

                    <div className='container-artigo-dois'>
                        <img src='/img/img-noticia-dois.svg' alt='img-noticia' className='img-not-dois' />
                        <div className='container-artigo-dois-div'>
                            <h5>A importância da <br />reciclagem.</h5>
                            <button className='btn-leiamais-dois' type='button'>LEIA MAIS</button>
                        </div>
                    </div>

                    <div className='container-artigo-dois'>
                        <img src='/img/img-noticia-dois.svg' alt='img-noticia' className='img-not-dois' />
                        <div className='container-artigo-dois-div'>
                            <h5>A importância da <br />reciclagem.</h5>
                            <button className='btn-leiamais-dois' type='button'>LEIA MAIS</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-FimCatalogo'>
                <img src="/img/folhas.svg" alt="img-folhas" className='FimFolhas' />
            </div>
        </>
    );
}

// Exportação correta
export default Artigos;
