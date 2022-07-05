import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect } from 'react'
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


    },[categoryId])

    if(loading){
        return (
            <div className='loader'>
                 <TailSpin width={1200}   color="#00BFFF" />
            </div>
           
        )
    }
    
    return(
        <div>
           
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