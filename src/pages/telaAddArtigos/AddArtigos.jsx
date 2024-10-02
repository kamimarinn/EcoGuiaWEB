import "./AddArtigos.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddArtigos() {
    const [noticias, setNoticias] = useState([]);
    const [currentNoticia, setCurrentNoticia] = useState({ title: "", text: "", image: "" });
    const [editingIndex, setEditingIndex] = useState(null);

    const addNoticia = () => {
        if (editingIndex !== null) {
            const updatedNoticias = noticias.map((noticia, index) =>
                index === editingIndex ? currentNoticia : noticia
            );
            setNoticias(updatedNoticias);
            setEditingIndex(null);
        } else {
            setNoticias([...noticias, currentNoticia]);
        }
        setCurrentNoticia({ title: "", text: "", image: "" });
    };

    const editNoticia = (index) => {
        setCurrentNoticia(noticias[index]);
        setEditingIndex(index);
    };

    const deleteNoticia = (index) => {
        const updatedNoticias = noticias.filter((_, i) => i !== index);
        setNoticias(updatedNoticias);
    };

    return (
        <div className="container-addartigos">
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <a href="/">SOBRE</a>
                <a href="/">HORÁRIOS DAS COLETAS</a>
                <a href="/">ARTIGOS</a>
                <a href="/">ECOPONTOS</a>
            </div>
            <div className='btn-login'>
                <Link className="button" to="/Login">LOGIN</Link>
                            

            </div>

            <div className="container-tit">
            <h3><span className='highlight'>Adicionar</span> Artigo </h3>

                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Contribua para a conscientização ambiental! Utilize esta página para publicar artigos<br></br> e notícias que promovam práticas sustentáveis.</p>
                </div>

            <div className="pai-container-addnoticia">
            

                <div className="container-info-crud">
               <input 
                    type="text" 
                    placeholder="URL da Imagem" 
                    value={currentNoticia.image} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, image: e.target.value })} 
                />

                <button onClick={addNoticia}>{editingIndex !== null ? "Atualizar" : "Adicionar"}</button>

               
               </div>

            <div className="container-addnoticia">
            <input 
                    type="text" 
                    placeholder="Título" 
                    value={currentNoticia.title} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, title: e.target.value })} 
                />
                <textarea 
                    placeholder="Texto da Notícia" 
                    value={currentNoticia.text} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, text: e.target.value })} 
                />
           
           
            </div>
                                          
            </div>

            {/* Lista de Notícias */}
            <div className="noticias-list">
                {/* <h3>Lista de Notícias</h3>
                {noticias.map((noticia, index) => (
                    <div key={index} className="noticia-item">
                        <h4>{noticia.title}</h4>
                        <img src={noticia.image} alt={noticia.title} style={{ width: "100px", height: "auto" }} />
                        <p>{noticia.text}</p>
                        <button onClick={() => editNoticia(index)}>Editar</button>
                        <button onClick={() => deleteNoticia(index)}>Excluir</button>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default AddArtigos;
