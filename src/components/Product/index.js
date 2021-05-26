import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../contexts/globContext";
import { useSelector } from 'react-redux'
import ProductItem from "./ProductItem";
export default function Product() {
const products = useSelector(state =>state.products)

   
           
    return (
        <>
            {products.map((product) => (
                <ProductItem key={product.id} datas={product} />
            ))}
        </>
    );
}
