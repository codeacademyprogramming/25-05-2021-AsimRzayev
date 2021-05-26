import React,{useState} from 'react'
import CartItem from './CartItem';
import {useStore} from "react-redux";
function cartDisplay(evt)
{
    let cartDisplay=document.querySelector("#cartDisplay");
let cart=document.querySelector(".cart");
    if(cart.style.display==="block"){
        cartDisplay.style.opacity=0.7;
        cart.style.display="none";
    }
    else
    {
        cartDisplay.style.opacity=1;
        cart.style.display="block";
    }
}
function displayValue(){

    document.querySelector(".amount-cart").style.visibility= "visible";
}
function hiddenValue(){

    document.querySelector(".amount-cart").style.visibility= "hidden";
}
export default function Basket() {

const {getState,subscribe}=useStore();
const [state, setstate] = useState(getState())
  subscribe(()=>{
      setstate(getState())
  })
  let basketLength=state.basket.items.length;
  let selectedPro=state.basket.items.map(x=>state.products.find(y=>y.id==x.id))

  
 
 let sum=selectedPro.reduce((accumulator, element) => {

    return accumulator + element.price;
  }, 0);
  
    return (
        <div className="cart-basket-container" onMouseOver={displayValue} onMouseOut={hiddenValue}>
                <div className="d-flex justify-content-end" >
                    <div className="amount-cart">
                        <h3 > <span className="totalPayment">{sum}</span> $</h3>
                    </div>
                    <div id="cartDisplay" onClick={cartDisplay} className="cart-circle ">
                        <i  className="fas fa-cart-arrow-down"></i>
                         <div className="cart-count-num SubTotal">
                             {basketLength}
                         </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="cart-up"></div>
                    <div className="cart-h">
                    <h3>Your Cart</h3>
                    <div className="card-body" >
                    {state.basket.items.map(x=>(
                    <CartItem key={x.id} datas={x}/>

                    ))}
                       
                    </div>
                    <div className="cart-footer mt-5">
                        <div >
                            <h3>Subtotal <sub>( <span className="SubTotal">  {basketLength}</span> Items)</sub></h3>

                            <h2 ><span className="totalPayment"> {sum}</span> <sup>$</sup>   </h2>
                        </div>
                            <button className="btn w-100">Checkout</button>
                    </div>
                </div>
                    </div>
                </div>
    )
}
