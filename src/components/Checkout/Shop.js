import React, { useState, useContext } from 'react';
import "./style.css"
import CartInsideCheckout from "../Cart/CartInsideCheckout"
import { Context } from '../../Context/Context';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

import TextField from '@mui/material/TextField';

import MessageSuccess from "../MessageSuccess/MessageSucess";
import { useForm } from './useForm';

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

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name] : value });
	};

	const {cart} = useContext(Context)

	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'compras'), {
			values,
			cart,
		});
		setCompraID(docRef.id);
		setValues(initialState);
	};

	const validationsForm = (form) => {
		let errors = {};
		let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
		let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
		let regexTelefono = /^\d+$/
	
		if(!form.nombre.trim()) {
			errors.nombre = "El campo nombre es requerido"
		} else if (!regexName.test(form.nombre.trim())) {
			errors.nombre = "El campo nombre sólo acepta letras y espacios en blanco"
		}
	
		if(!form.apellido.trim()) {
			errors.apellido = "El campo apellido es requerido"
		} else if (!regexName.test(form.apellido.trim())) {
			errors.apellido = "El campo apellido sólo acepta letras y espacios en blanco"
		}
	
		if(!form.email.trim()) {
			errors.email = "El campo email es requerido"
		} else if (!regexEmail.test(form.email.trim())) {
			errors.email = "El campo email no es válido"
		}
	
		if(!form.telefono.trim()) {
			errors.telefono = "El campo telefono es requerido"
		} else if (!regexTelefono.test(form.telefono.trim())) {
			errors.telefono = "El campo teléfono solo admite números"
		}

		return errors
	}

	const {
		errors,
		handle,
		handleBlur,
		handleSubmit
	} = useForm (initialState, validationsForm)

	return (
		<div style={styles.containerShop}>
			<div className='cartInsideCheckout'>
				<CartInsideCheckout />
			</div>
			<h1>Completa los datos para finalizar la compra</h1>
			<form className='FormContainer' onSubmit={onSubmit} handleSubmit={handleSubmit}>
				<TextField
					className='nombre'
					placeholder='Nombre'
					style={{ margin: 10, width: "50%" }}
					name='nombre'
					value={values.nombre}
					onChange={handleOnChange}
					handle={handle}
					onBlur={handleBlur}
					required
				/>
				{errors.nombre && <p style={{ color: "red"}}>{errors.nombre}</p>}
				<TextField
					className='apellido'
					placeholder='Apellido'
					style={{ margin: 10, width: "50%" }}
					name='apellido'
					value={values.apellido}
					onChange={handleOnChange}
					handle={handle}
					onBlur={handleBlur}
					required
				/>
				{errors.apellido && <p style={{ color: "red"}}>{errors.apellido}</p>}
				<TextField
					className='email'
					placeholder='Email'
					style={{ margin: 10, width: "50%" }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
					handle={handle}
					onBlur={handleBlur}
					required
				/>
				{errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
				<TextField
					className='telefono'
					placeholder='Teléfono'
					style={{ margin: 10, width: "50%" }}
					name='telefono'
					value={values.telefono}
					onChange={handleOnChange}
					handle={handle}
					onBlur={handleBlur}
					required
				/>
				{errors.telefono && <p style={{ color: "red"}}>{errors.telefono}</p>}
				<button className='btnASendAction'style={{ width: "35%" }}>Finalizar compra</button>
			</form>
			{compraID && <MessageSuccess compraID={compraID} />}
		</div>
	);
};

export default Shop;
