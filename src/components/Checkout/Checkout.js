import React,  { useContext } from "react"; 
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Context } from '../../Context/Context';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import Loader from '../Loader/Loader';

const Checkout = () => {

    const {cart, totalDeCompra, vaciarCart } = useContext(Context)

    const [send, setSend]= useState(false)
    const [noGuia , setNoGuia] = useState(false)
    const [clickFin, setClickFin] = useState(false)

    const pintarCart = cart
   

    const handleSubmit = (e) => {
        e.preventDefault();
      }

    const [dataClient, setDataClient] = useState({
        name: '',
        surname: '',
        phone: 0,
        email: '',
    })

    const setData = (e) => {
      
      setDataClient({
        ...dataClient,
        [e.target.name]: e.target.value
      }
      )
    }

    const input = [
        {type:"text", name:"name", placeholder:"Nombre"} ,
        {type:"text", name:"surname", placeholder:"Apellido"},
        {type:"number", name:"phone", placeholder:"Numero de telefono"},
        {type:"email" ,name:"email", placeholder:"Email"}
    ]

    const orderClient = {
        cliente: dataClient,
        compra :cart,
        total:totalDeCompra
    }
  
    
    
    const generatedOrder = () => {
        setClickFin(true)
        const db = getFirestore()
        const ordersCollections = collection(db,"orders")
        addDoc(ordersCollections, orderClient).then(({id})=>{ setNoGuia(id) ;})
        vaciarCart()
        setSend(true)
        document.getElementById("form").reset();
    }


    return (
        <div className="checkout d-flex justify-content-center">
            
                <form id="form" action="" method="post" onSubmit={handleSubmit} className="wrapper">
                    <h1 className="d-flex justify-content-center p-1 ">
                        DATOS DE CONTACTO
                    </h1>

                    <div className="name">
                        {input.map(key =><input type={key.type} placeholder={key.placeholder} name={key.name} key={key.name} onChange={setData} required/>)}
                    </div>
                   
                    <div className="btns">
                            {send? <div/> : <div className="btn" onClick={generatedOrder}>Finalizar Pedido</div>}
                            <Link to="/products"><div className="btn">Agregar mas productos</div></Link>
                    </div>
                </form>
                <div>
                    
                    {pintarCart.map((items) => {

                        return <div key={items.id} className="productInCart ">                                      
                                        <div className="cardCart">  
                                            <img src={items.picture_url} alt={items.id} />
                                            <div className="cardProductBody">
                                                <div className="productTitle">{items.title}</div>
                                                <div>cantidad: {items.quantity}</div>
                                                <div>Precio Unitario ${items.unit_price}</div>
                                                <div>Total = ${items.unit_price*items.quantity}</div>
                                            </div>
                                        </div>                             
                            </div>
                        }
                        )
                        }
                        
                        <div className="totalDeCompra d-flex justify-content-center pt-5 m-3">
                            TOTAL DE SU COMPRA $ {totalDeCompra}.
                        </div>

                        <div className={clickFin? "modalNoGuia modalVisibles d-flex justify-content-center align-items-center" : "modalNoGuia d-flex justify-content-center align-items-center" }>
                            
                            <div className="containerMjeGGuia d-flex justify-content-center align-items-center"> 
                                {noGuia ? 
                                    <div className="containerNoGuia d-flex flex-column justify-content-center align-items-center"> Su numero de guia es: <strong>{noGuia}</strong> GRACIAS POR COMPRAR EN PIEDRA PAPEL Y TIJERA
                                        <Link to="/"><div className="btn btnModal">Cerrar</div></Link>
                                    </div> 
                                    :
                                    <>
                                    <Loader/>
                                    <div className="ps-5">Generando Su Pedido...</div>
                                    </>
                                }
                            </div>
                            
                        </div>
                        
                </div>
                
                
           
        </div>

    )

}


export default Checkout