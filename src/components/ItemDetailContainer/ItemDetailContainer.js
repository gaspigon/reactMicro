import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../asyncmock";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect( () => {
        getProductsById('1')
            .then(response =>{
                setProduct(response)
            })
    },[])

    return(
        <div>
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer