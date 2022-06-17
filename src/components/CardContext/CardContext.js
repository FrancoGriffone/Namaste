import React,  { useContext } from "react"; 
import { Context } from "../../Context/Context";


const CardContext = () => {


    
    const { itemsTotal } = useContext(Context)
            
        return(
                <>
                    <div className="totalArticles"><p>Cantidad total de productos={itemsTotal}</p></div>
                </>
            )
            
        }

export default CardContext