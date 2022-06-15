import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect } from 'react'
// import { getProducts } from '../../asyncmock'
// import { getProductsByCategory } from '../../asyncmock'
import {  useParams } from 'react-router-dom'
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin} from  'react-loader-spinner'

import { getDocs, collection, query, where  } from 'firebase/firestore'
import { db } from '../../services/firebase'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()





    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db,'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    //     if(!categoryId){
    //     getProducts().then(response =>{
    //         setProducts(response)
    //     }).catch(error => {
    //         console.log(error)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    // } else{
    //     getProductsByCategory(categoryId).then(response => {
    //         setProducts(response)
    //     }).catch(error =>{
    //         console.log(error)
    //     }).finally(() =>{
    //         setLoading(false)
    //     })
    // }

    },[categoryId])

    if(loading){
        return (
            <TailSpin color="#00BFFF" height={80} width={80} />
        )
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