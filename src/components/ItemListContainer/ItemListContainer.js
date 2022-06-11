import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import { getProductsByCategory } from '../../asyncmock'
import {  useParams } from 'react-router-dom'
import Header from '../Header/Header'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()





    useEffect(() =>{
        setLoading(true)

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
        }).catch(error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }

    },[categoryId])

    if(loading){
        return <h1>Cargando...</h1>
    }
    
    return(
        <div>
            {/* { products.map(product => <p>{product.name}</p>) } */}
            <Header greeting="Micro 3D" parraf="Productos & Diseños"/>
            <h1 >{props.greeting}</h1>
            {
                products.length > 0
                ?<ItemList products={products}/>
                :<h2>No hay productos</h2>
            }
        </div>
    )
}

export default ItemListContainer