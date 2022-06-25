import React, { useEffect, useState } from 'react';
import { ItemList } from "../ItemList/ItemList";
import Loader from '../Loader/Loader';
// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { useParams } from 'react-router-dom';

export const CategoryFilter = () => {

const [items, setItems] = useState([]);

const [loading, setLoading] = useState(true);

const { category } = useParams ();

useEffect(() => {
  const getItems = async () => {
  const q = query(collection(db, "cursos"), where("category", "==", category))
  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    });
    setItems(docs)
  }
  getItems()
  setTimeout (() => {
    setLoading (false)
  }, 1000);
}, 
[category])

  return loading ? <Loader /> : <ItemList items={items} />;
};

export default CategoryFilter;