import React from "react";
import store from "../../redux/store";
export default function ProductItem({ datas }) {
    const buttonHandle = (evt) => {
      
        let prodId = evt.target.getAttribute("data-id");
        store.dispatch({
            type: "PRODUCTS_ADD_CART",
            payload: prodId,
        });
    };

    return (
        <div className="col-xl-3 col-12 ">
            <div className="pizza-item">
                <div className="pizza-hover">
                    <h6>Sizes:</h6>
                    <ul>
                        <li>
                            <input
                                type="radio"
                                className="radios"
                                name="size"
                                value="small"
                            />{" "}
                            <label htmlFor="" className="ml-3">
                                small - 20sm
                            </label>{" "}
                        </li>
                        <li>
                            <input
                                type="radio"
                                className="radios"
                                name="size"
                                value="medium"
                            />{" "}
                            <label htmlFor="" className="ml-3">
                                medium - 25sm
                            </label>{" "}
                        </li>
                        <li>
                            <input
                                type="radio"
                                className="radios"
                                name="size"
                                value="large"
                            />{" "}
                            <label htmlFor="" className="ml-3">
                                big - 32sm
                            </label>{" "}
                        </li>
                    </ul>

                    <button
                        className="btn py-1 px-5 buttonPizza"
                        data-id={datas.id}
                        onClick={buttonHandle}
                    >
                        Add to basket{" "}
                    </button>
                </div>
                <div className="img-container">
                    <img src={datas.image} alt="" />
                </div>
                <div className="d-flex justify-content-between">
                    <h4>{datas.name}</h4>
                    <span>32cm</span>
                </div>
                <p>{datas.topping.join(",")}</p>
                <h5>{datas.price} UAH</h5>
                <div className="pizza-footer">
                    <div className="circle">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
