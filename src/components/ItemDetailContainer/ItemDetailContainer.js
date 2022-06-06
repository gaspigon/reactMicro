import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../asyncmock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const {productId} = useParams()
    

    useEffect( () => {
        getProductsById(productId)
            .then(response =>{
                setProduct(response)
            })
    },[productId])

    return(
        <div>
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer