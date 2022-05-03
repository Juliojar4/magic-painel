 
import React from 'react';
import { useEffect, useState } from 'react';
import searchCards from '../../services/searchCards';
import './stlly.css'
import ImageCard from '../../components/cardImage';

const Home = () => {
    const [nameCard, setNameCard] = useState('')
    const [img, setImg] = useState('')

    function urlImage(id) {
        let url = localStorage.getItem(`Imagem_${id}`)
        if (url) {
            const teste = url.replace('"', '')
            return teste;
        }
        return
    }
    
    useEffect(() => {
        searchCards(nameCard)
            .then((res) => {
                console.log(res.data.image_uris)
                setImg(res.data.image_uris.border_crop)
            })
            .catch((err) => console.log(err));
    }, [nameCard]);
    let rows = []
    
    for (let index = 0; index < localStorage.length; index++) {
        rows.push(index + 1);
    }
  
    return (
        <>   
            <h1 className="h1-search">Todas as cartas</h1>  
            <div className="content-cards-search">                
                <input className="input-content" onChange={e => setNameCard(e.target.value)} />
            </div>  
            <div className="image-card">
                
            {rows.map((index) => 
            <ImageCard
              img={urlImage(index)}
            />
          )}
                
            </div>
            
            <input type='submit' onClick={() => {
                localStorage.setItem(`Imagem_${localStorage.length + 1}`, JSON.stringify(img))
            }}></input>
        </>
    );
};

export default Home;