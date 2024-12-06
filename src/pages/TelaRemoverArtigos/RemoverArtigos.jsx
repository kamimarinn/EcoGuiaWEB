import "./RemoverArtigos.css";
import NavBar from '../../../src/componentes/NavBar/Navbar.jsx'
import api from '../../services/api.jsx';
import { useEffect, useState } from 'react';
function TelaRemoverArtigos(){
 
    const [articles,setArticles] = useState([]);
 
    const getAllArticles = async () => {
        try{
        const response = await api.get('/articles');
        setArticles(response.data.results);
    }catch(error){
        alert("Erros ao pegar os dados")
        console.error(error);
    }
    }
    useEffect(() => {
        getAllArticles();
    },[articles])
 
   
     const deleteArticle =  async (id) => {
        const idArticle = id
        try{
            const response = await api.delete("/deleteArticle",{
            data:{
                    id:idArticle
                }
            })
            alert("Artigo deletado com sucesso!")
            console.log(response.data.results)
        }
        catch(error){
            alert("Erro ao apagar o artigo")
            console.error(error)
        }
     }
    return (
        <div className='container-telanoticias'>
            <NavBar />
            <div className='container-titulo-alt'>
                <h2><span className='highlight'>Deletar</span>Artigos</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-telanoticias'/>
                <p>Remova artigos do sistema!</p>
            </div>
            <div className='pai-container-telanoticias'>
                    {articles.map((_,index) => (
                <div className='container-noticiaum' key={articles[index].pk_IDarticle}>
                    <span><h4>Titulo do artigo:</h4></span><p>{articles[0] ? articles[index].title_article : "carregando.." }</p>

                    {/* <button>Visualizar</button> */}

                    <button className="btn-apagar" onClick={() => deleteArticle(articles[index].pk_IDarticle)}>Apagar</button>
                 </div>
                    ))}
            </div>
        </div>
    );
}
 
export default TelaRemoverArtigos;
 