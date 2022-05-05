 
import React from 'react';
import { useEffect, useState } from 'react';
import searchCards from '../../services/searchCards';
import './style.css'
import Image from '../../components/cardImage/index'

import {
  collection,
  getFirestore,
  getDocs,
  addDoc
} from "firebase/firestore";

import { firebaseApp } from '../../fire-base'

const AllCards = () => {
  const [nameCard, setNameCard] = useState('')
  const [card, setCard] = useState([])
  const [users, setUsers] = useState([]);
  const [busca, setBusca] = useState('')
  const [err, setErr] = useState('',false)

  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, "carts");
  
  const cardsFiltradas =  users.filter((card) => card.card.name.includes(busca))
 
  useEffect(() => {
    searchCards(nameCard)
      .then((res) => {
        setCard(res.data)
      })
      .catch((err) => console.log(err));
  }, [nameCard]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [usersCollectionRef]);
 
  async function criarDado() {
    if (card) {
      setErr('Carta não encontrada')
      return
    }
    try {
      const user = await addDoc(collection(db, "carts"), {
        card,
      });
      console.log("dados salvos com sucessos", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
    
  return (
    <>
      <input type="text" onChange={(e) => setBusca(e.target.value)} className="card-search" placeholder='Search Card' />
        <h1 className="h1-search">Todas as cartas</h1>       
      <div className="aline-err">
        {err &&
          <p className="card-not-found">{err}</p>
        }
        </div>
        <div className="content-cards-search">        
          <input className="input-content" onChange={e => setNameCard(e.target.value)} placeholder={'Card Name'} />
          <button onClick={criarDado}>Criar dado</button>
        </div>
        <div className="image-card">
          {
            cardsFiltradas.map((user) => {
              return(
                <div key={user.id}>
                  <div>
                    <p className="card-name">{user.card.name}</p>
                    <Image img={user.card.image_uris.normal}></Image>
                  </div>
                </div>
              )
            })
          }
        </div>
    </>
  );

}
export default AllCards;