import React, { useEffect, useState } from 'react'
import "./itemListContainer.css"

import { Link } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products') //Api de simulación hasta que trabajemos con Firebase
        .then(resp => resp.json())
        .then(dataItem => setItems(dataItem))
        
    }, [])
    


  return (
    <div>
        <p style={{fontSize:"20px", padding:"10px"}}>Acá se mostrarán todos los productos de la tienda</p>
        <ul>
            {
                items?.map(item => {
                    <li>
                        <Link to={`/item/${item.id}`}>{item.title}</Link>
                        
                    </li>
                })
            }
        </ul>
        

    </div>
  )
}

export default ItemListContainer