import { memo } from "react"
import ItemCard from "../ItemCard/ItemCard"
import '../ItemList/ItemList.css'

const ItemList = ({products}) =>{

    return (
        <div className="box-item">
            {products.map(produc => <ItemCard key={produc.id} {...produc}/>)}
        </div>
    )
}

export default  memo(ItemList)