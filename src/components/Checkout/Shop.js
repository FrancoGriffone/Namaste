import React, { useState, useContext } from 'react';
import "./style.css"
import Cart2 from "../Checkout/Cart2"
import { Context } from '../../Context/Context';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

import TextField from '@mui/material/TextField';

import MessageSuccess from "../MessageSuccess/MessageSucess";

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const initialState = {
	nombre: "",
	apellido: "",
	email: "",
	telefono: "",
};

const Shop = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [compraID, setCompraID] = useState('');

	const {cart} = useContext(Context)

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name] : value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'compras'), {
			values,
			cart,
		});
		setCompraID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			<div className='cartInsideContainer'>
				<Cart2 />
			</div>
			<h1>Completa los datos para finalizar la compra</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Nombre'
					style={{ margin: 10, width: 400 }}
					name='nombre'
					value={values.nombre}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Apellido'
					style={{ margin: 10, width: 400 }}
					name='apellido'
					value={values.apellido}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Teléfono'
					style={{ margin: 10, width: 400 }}
					name='telefono'
					value={values.telefono}
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Finalizar compra</button>
			</form>
			{compraID && <MessageSuccess compraID={compraID} />}
		</div>
	);
};

export default Shop;
