import React from "react";
import { CartState } from "./context/Context"
import SingleProduct from "./SingleProduct";
import "./style.css"

const Home = () => {
    const { state: { products },
 } = CartState();

    // console.log(products);

    return (
        <div className="products-container">
            {
                products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id}/>
                })
            }
        </div>
    )
}

export default Home;