import { CartState } from "./context/Context";
import './style.css'
import './singleProduct.css'


const SingleProduct = ({prod}) => {
    
    const {
        state: { cart }, 
        dispatch,
    } = CartState();

    console.log(cart);

    return (
        <div className="card-container">
                    <div className="product-card" key={prod.id}>
                        <h3>Nome do produto</h3>
                        <img src={prod.photo} alt="" />
                        <span className="price">Preço: {prod.sellingPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                        {/* {
                            cart.some(p=>p.id===prod.id) ? (
                            <button className="remove-from-cart" onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: prod,
                                });
                                }}>Adicionar ao carrinho</button>
                            ) : ( */}
                            <button className="add-to-cart" onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: prod,
                                });
                            }}>Adicionar ao carrinho</button>
                            {/* )
                        } */}
                        
                    </div>
        </div>
    )
}

export default SingleProduct;