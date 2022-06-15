import '../ItemDetailContainer/ItemDetailContainer.css'
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../asyncmock";
import { useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner'
import { db } from '../../services/firebase';
import {getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading,setLoading] = useState(true)

    const {productId} = useParams()
    

    useEffect( () => {

        getDoc(doc(db, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductsById(productId)
        //     .then(response =>{
        //         setProduct(response)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
    },[productId])

    if(loading) {
        return (
            <Audio />
        )
    }

    return(
        <div className="box-products">
            <ItemDetail  {...product}  />
        </div>
    )
}

export default ItemDetailContainer