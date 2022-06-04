import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import { getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()



    useEffect(() =>{
        if(!categoryId){
        getProducts().then(response =>{
            setProducts(response)
        })
    } else{
        getProductsByCategory(categoryId).then(response => {
            setProducts(response)
        })
    }

    },[])
    
    return(
        <div>
            <p>Productos</p>
            {/* { products.map(product => <p>{product.name}</p>) } */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer