import "./alterarArtigos.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.jsx";

function TelaAlterarArtigos() {
    const [noticias, setNoticias] = useState([]);
    const [currentNoticia, setCurrentNoticia] = useState({ id: "", title: "", category: "", description: "", reference: "", image: "" });
    const [image, setImage] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const imagRef = useRef();

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await api.get('/articles');
                setNoticias(response.data.results || []);
            } catch (error) {
                console.error("Erro ao carregar notícias:", error);
            }
        };
        fetchNoticias();
    }, []);

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            imagRef.current.src = URL.createObjectURL(e.target.files[0]);
            imagRef.current.style.display = "block";
            setImage(e.target.files[0]);
        } else {
            imagRef.current.src = '';
            setImage(null);
        }
    };

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        if (selectedId) {
            const selectedNoticia = noticias.find(noticia => noticia.pk_IDarticle.toString() === selectedId);
            if (selectedNoticia) {
                setCurrentNoticia({
                    id: selectedNoticia.pk_IDarticle.toString(),
                    image: selectedNoticia.image_article,
                    title: selectedNoticia.title_article,
                    category: selectedNoticia.category_article,
                    description: selectedNoticia.description_article,
                    reference: selectedNoticia.reference_article || ""
                });
                imagRef.current.src = selectedNoticia.image_article;
                imagRef.current.style.display = "block";
                setEditingIndex(noticias.indexOf(selectedNoticia));
            }
        } else {
            setCurrentNoticia({ id: "", title: "", category: "", description: "", reference: "", image: "" });
            imagRef.current.src = '';
            imagRef.current.style.display = "none";
            setEditingIndex(null);
        }
    };

    const validateFields = () => {
        if (!image) {
            alert("Por favor, selecione uma imagem.");
            return false;
        }
        if (!currentNoticia.title) {
            alert("Por favor, preencha o título.");
            return false;
        }
        if (!currentNoticia.category) {
            alert("Por favor, selecione uma categoria.");
            return false;
        }
        if (!currentNoticia.description) {
            alert("Por favor, preencha a descrição.");
            return false;
        }
        return true;
    };

    const addNewNoticia = async () => {
        if (!validateFields()) {
            return;
        }

        const formData = new FormData();
        formData.append('id', currentNoticia.id);
        formData.append('file', image);
        formData.append('title', currentNoticia.title);
        formData.append('category', currentNoticia.category);
        formData.append('description', currentNoticia.description);
        formData.append('reference', currentNoticia.reference);

        try {
            const response = await api.put('/updateArticle', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.status);
            if (editingIndex !== null) {
                const updatedNoticias = noticias.map((noticia, index) =>
                    index === editingIndex ? currentNoticia : noticia
                );
                setNoticias(updatedNoticias);
            } else {
                setNoticias([...noticias, currentNoticia]);
            }
            setCurrentNoticia({ id: "", title: "", category: "", description: "", reference: "", image: "" });
            setImage(null);
            imagRef.current.style.display = "none";
        } catch (error) {
            alert("Algo deu errado: " + (error.response.data.msg));
        }
    };

    return (
        <div className="container-addartigos">
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            
            <div className='btn-login-addartigos'>
                <Link className="button" to="/Login">ADMIN</Link>
            </div>

            <div className="container-tit">
                <h3><span className='highlight'>Alterar </span> Artigo </h3>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-addartigos'/>
                <p>Alterar informações dos arquivos</p>
            </div>

            <div className="pai-container-addnoticia">
                <div className="container-info-crud">
                    <input type="file" id="file-input" className="file-input" onChange={handlerImage} />
                    <div className="img-preview">
                        <img className="imagem" alt="preview" ref={imagRef} />
                    </div>

                    <button onClick={addNewNoticia}>Atualizar Artigo</button>
                </div>

                <div className="container-addnoticia">
                    <select onChange={handleSelectChange} value={currentNoticia.id || ""}>
                        <option value="">Selecione uma notícia existente...</option>
                        {noticias.map((noticia) => {
                            console.log("Renderizando notícia:", noticia);
                            if (noticia && noticia.pk_IDarticle) {
                                return (
                                    <option key={noticia.pk_IDarticle.toString()} value={noticia.pk_IDarticle.toString()}>
                                        {noticia.title_article}
                                    </option>
                                );
                            }
                            return null;
                        })}
                    </select>
                    <input
                        className="title-input"
                        type="text"
                        placeholder="Título"
                        value={currentNoticia.title}
                        onChange={(e) => setCurrentNoticia({ ...currentNoticia, title: e.target.value })}
                    />
                    <select id="options" value={currentNoticia.category} onChange={(e) => setCurrentNoticia({ ...currentNoticia, category: e.target.value })}>
                        <option value="">Selecione a categoria...</option>
                        <option value="Faça você mesmo">Faça você mesmo</option>
                        <option value="Notícia">Notícia</option>
                        <option value="Artigo">Artigo</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Referência"
                        value={currentNoticia.reference}
                        onChange={(e) => setCurrentNoticia({ ...currentNoticia, reference: e.target.value })}
                    />
                    <textarea
                        placeholder="Texto da Notícia"
                        value={currentNoticia.description}
                        onChange={(e) => setCurrentNoticia({ ...currentNoticia, description: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
}

export default TelaAlterarArtigos;