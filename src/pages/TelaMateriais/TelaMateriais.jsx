import { Link } from 'react-router-dom';
import "./TelaMateriais.css";
import api from '../../services/api'
import { useEffect, useState } from 'react';
function TelaMateriais(){

    const [xpUm, setXpUm] = useState('')
    const [xpDois, setXpDois] = useState('')
    const [xpTres, setXpTres] = useState('')
    const [xpQuatro, setXpQuatro] = useState('')
    const [xpCinco, setXpCinco] = useState('')

const updateXpMateriais = async () =>{
    try{
    const arrayXp = [xpUm,xpDois,xpTres,xpQuatro,xpCinco]
    for( let i = 0 ; i<= 4 ;i++){
        let id = i + 1
        let type = materiais[i].title_material
        let xp_material = arrayXp[i]
    let update = await api.put("/updateMaterial",{
        id,
        type,
        xp_material
    })
    console.log("Adicionado com sucesso")
        }
    alert("Modificações realizadas com sucesso!")
    }catch(error){
        console.error(error)
    }   

}

    const [materiais,setMateriais] = useState([]);
    const getMateriais = async () =>{
        try{
        if(materiais == ''){
        const response = await api.get('/materiais')
        setMateriais(response.data.materiais)
        setXpUm(response.data.materiais[0].XP_material)
        setXpDois(response.data.materiais[1].XP_material)
        setXpTres(response.data.materiais[2].XP_material)
        setXpQuatro(response.data.materiais[3].XP_material)
        setXpCinco(response.data.materiais[4].XP_material)
        }
      }catch(error){
        alert("erro ao buscar os dados", error.response.msg)
        console.error(error)
     }
    }

    useEffect(() =>{
        getMateriais()
    },[])
    return(
        <div className='container-telamaterial'>
        <div className='container-logo-telmaterial'>
            <Link to="/">
                <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
            </Link>
        </div>
        <div className='container-navbar'>
            <Link to="/">SOBRE</Link>
            <Link to="/">HORÁRIOS DAS COLETAS</Link>
            <Link to="/">ARTIGOS</Link>
            <Link to="/">ECOPONTOS</Link>
        </div>
        <div className='btn-login'>
            <Link className="button" to="/Login">ADMIN</Link>
        </div>
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Materiais</span>Recicláveis</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='ret-coleta-telmaterial'/>
                <p>Adicione e exclua máteriais recicláveis!</p>
                </div>
            {materiais[0] ?
            <div className='pai-container-telamateriais'>

                <button className='botao-add' onClick={() => updateXpMateriais()}>OK +</button>
                <div className='container-alterar-material-um'>
                <div className='container-material-um'>
                <h1>{xpUm}</h1>
                <h5>{materiais[0].title_material}</h5>
                <button className='btn-um'onClick={() => setXpUm(xpUm + 5)}>+</button>
                <button className='btn-dois'onClick={() => setXpUm(xpUm - 5)}>-</button>

                </div>
                <div className='container-material-dois'>
                    <h1>{xpDois}</h1>
                    <h5>{materiais[1].title_material}</h5>
                    <button className='btn-um' onClick={() => setXpDois(xpDois + 5)}>+</button>
                    <button className='btn-dois' onClick={() => setXpDois(xpDois - 5)}>-</button>
                </div>
                <div className='container-alterar-material-dois'>
                <div className='container-material-tres'>
                <h1>{xpTres}</h1>
                <h5>{materiais[2].title_material}</h5>
                <button className='btn-um' onClick={() => setXpTres(xpTres + 5)}>+</button>
                    <button className='btn-dois' onClick={() => setXpTres(xpTres - 5)}>-</button>
                </div>
                <div className='container-material-quatro'>
                <h1>{xpQuatro}</h1>
                <h5>{materiais[3].title_material}</h5>
                <button className='btn-um' onClick={() => setXpQuatro(xpQuatro + 5)}>+</button>
                    <button className='btn-dois' onClick={() => setXpQuatro(xpQuatro - 5)}>-</button>
                </div>
                <div className='container-material-cinco'>
                <h1>{xpCinco}</h1>
                <h5>{materiais[4].title_material}</h5>
                <button className='btn-um' onClick={() => setXpCinco(xpCinco + 5)}>+</button>
                    <button className='btn-dois'onClick={() => setXpCinco(xpCinco - 5)}>-</button>
                </div>
                </div>

            </div>
           
            </div>
            : <h1>carregando...</h1>}
    </div>

    );
}

export default TelaMateriais;