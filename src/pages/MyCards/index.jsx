 
import React from 'react';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app' 
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyAY0eo1vGxMf42ovgfCFXCsp3_NuL8yCZk",
  authDomain: "magicdata-88cb9.firebaseapp.com",
  projectId: "magicdata-88cb9",
});

 
const MyCards = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, "carts");

  async function criarDado() {
    try {
      const user = await addDoc(collection(db, "carts"), {
        name,
      });
      console.log("dados salvos com sucessos", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={criarDado}>Criar dado</button>

      <ul>
        {users.map((user) => {
          return (
              <div key={user.id}>
                  <div >
                      <li>{user.name}</li>
                  </div>  
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MyCards