import React from 'react'
import { Link } from 'react-router'

const Products = () => {

    const products = [
        {id:1, name:'pizza'},
        {id:2, name:'fries'},
        {id:3, name:'Burger'},
        {id:4, name:'Coke'},
        {id:5, name:'Momos'},
    ]

  return (
    <div style={{textAlign:'center'}}>
        <h1>Products List Page</h1>
        {
            products.map((product)=><div key={product.id}>
                <h3><Link to={"/products/"+product.id+"/"+product.name} style={{textDecoration:'none'}}>{product.name}</Link></h3>
            </div>)
        }
    </div>
  )
}

export default Products