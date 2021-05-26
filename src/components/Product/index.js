import React from 'react'
import { useGlobalContext} from '../../contexts/globContext'
import ProductItem from './ProductItem';
export default function Product() {
    const {state:{products}}=useGlobalContext();
 
    return (
      <>
      {products.map(product=>(<ProductItem key={product.id} datas={product} />))}
    
      </>
    )
}
