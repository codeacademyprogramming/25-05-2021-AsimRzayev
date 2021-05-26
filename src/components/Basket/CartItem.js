import React from 'react'
import {useStore} from "react-redux";
export default function CartItem({datas}) {

    const {getState}=useStore();
       let item=getState().products.find(x=>x.id==datas.id);


    return (
        <div className="cart-item mt-5 ">
        <img src={item.image} alt="" />
        <span>X 1</span>
        <div className="card-item-text">
        <div>
            <h5>{item.name}</h5>
            <h6>size: small</h6>
        </div>
        <h3>{item.price}<span>$</span></h3>
        </div>
    </div>  
    )
}
