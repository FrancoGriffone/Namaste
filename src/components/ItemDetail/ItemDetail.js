import React, { useContext, useState, useEffect } from 'react';
import "./style.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Context } from '../../Context/Context';
import { Link, useParams } from 'react-router-dom';
// FIRBASE - FIRESTORE
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import Success from './Success';

export const ItemDetail = ({
  title,
  image,
  description,
  fullDescription,
  stock,
  price
}) => {
  const [comprado, setComprado] = useState(false);
  const [product, setProduct] = useState({});

  const {addItemToCart} = useContext(Context);

  const { itemId } = useParams();
  
  useEffect(() => {
    
    const getItem = async () => {
      const q = doc(collection(db, "cursos"), itemId);
      const querySnapshot = await getDoc(q);
      setProduct({ ...querySnapshot.data(), id: querySnapshot.id });
    };
    getItem();
  }, [product]);

  const items = product

  const onAdd = (value) => {
      addItemToCart(items, value)
      setComprado (true);
  };
    return (
        <div className='cardDetail'>
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={image}
              alt={description}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {fullDescription}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <p>${price}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {comprado ? (
          <>
          <div>
            <Success />
          </div>
          <div className='buttonsItemDetail'>
            <div><Link className="verCarrito" to="/cart">Ver mi carrito</Link></div>
            <div><Link className="verProductos" to="/">Ver otros productos</Link></div>
          </div>
          </>) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
        </div>
      );
    }
