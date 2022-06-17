import React, { useState, useEffect } from 'react';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
// FIRBASE - FIRESTORE
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import Loader from '../Loader/Loader';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    
    const getItem = async () => {
      const q = doc(collection(db, "cursos"), itemId);
      const querySnapshot = await getDoc(q);
      setProduct({ ...querySnapshot.data(), id: querySnapshot.id });
    };
    getItem();
    setTimeout (() => {
      setLoading (false)
    }, 1000);
  }, []);

  return loading ? <Loader /> : <ItemDetail {...product} />;
}