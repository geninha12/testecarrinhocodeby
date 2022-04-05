import React, { useState, useEffect } from "react";
import { CartState } from "./context/Context";
import './style.css'

const CardCarrinho = () => {

    const {
        state: { cart },
        dispatch
    } = CartState()

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.sellingPrice), 0));
    }, [cart]);

    function freeShipping() {
        if(total > 10) {
            return <span className="free-shipping">Parabéns, sua compra tem frete grátis!</span>
        }
    }
    return (
        <div className="card-cart">
            <h2 className="card-title">Meu carrinho</h2>
            <span className="line-one"></span>
        { cart.length > 0 ? (
        <>
        <section className="product-main-cart-container">
            {cart.map((prod) => (
                <div className="cart-products-container" key={prod.id}>
                    <div className="img-square"><img src={prod.photo}  alt="imagem"/></div>
                        <div className="product-atributes">
                            <h3 className="product-title">{prod.name}</h3>
                            <span className="real-price">{prod.realPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                            <span className="selling-price">{prod.sellingPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                        </div>
                        {/* <button className="btn-remove-from-cart" onClick={() => 
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                        })
                        }
                        >excluir</button> */}
                    </div>
            
            
            ))}
        </section></>
            
            ):(
                <span className="empty-cart">Opa, o carrinho está vazio!</span>
                )}
                <span className="line-two"></span>
                <div className="final-price">
                    <div className="total-price">
                        <p>Total</p>
                        <p className="total-price-value">R$ {total}</p>
                    </div>
                    {freeShipping()}
                </div>
                    <span className="line-three"></span>
                    <div className="cart-footer"> 
                        <button className="btn-checkout">Finalizar compra</button>
                    </div>
        </div>
    )
}

export default CardCarrinho;