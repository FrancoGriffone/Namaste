import React, { useEffect, useState } from 'react';
import { ItemList } from "../ItemList/ItemList";
// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

export const ItemListContainer = () => {

const [items, setItems] = useState([]);

useEffect(() => {
  const getItems = async () => {
  const q = query(collection(db, "cursos"))
  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    });
    setItems(docs)
  }
  getItems()
}, 
[])

  return <ItemList items={items} />;
};

export default ItemListContainer;