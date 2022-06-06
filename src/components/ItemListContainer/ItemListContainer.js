import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import { getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()





    useEffect(() =>{
        if(!categoryId){
        getProducts().then(response =>{
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    } else{
        getProductsByCategory(categoryId).then(response => {
            setProducts(response)
        })
    }

    },[categoryId])

    if(loading){
        return <h1>Cargando...</h1>
    }
    
    return(
        <div>
            {/* { products.map(product => <p>{product.name}</p>) } */}
            <h1 >{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer