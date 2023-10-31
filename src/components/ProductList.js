import React from 'react'
import product from './product'

export default function ProductList(props) {
     
  return(
    props.ProductList.map((product,i)=>{
      return<product product={product}key={i}/>
    })
  

  
 )
       
}
