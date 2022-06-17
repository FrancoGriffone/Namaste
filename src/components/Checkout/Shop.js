import React, { useState } from 'react';
import "./style.css"

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
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			<h1>Completa los datos para finalizar la compra</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Nombre'
					style={{ margin: 10, width: 400 }}
					name='Nombre'
					value={values.nombre}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Apellido'
					style={{ margin: 10, width: 400 }}
					name='Apellido'
					value={values.apellido}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					name='Email'
					value={values.email}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Teléfono'
					style={{ margin: 10, width: 400 }}
					name='Teléfono'
					value={values.telefono}
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Finalizar compra</button>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);
};

export default Shop;
