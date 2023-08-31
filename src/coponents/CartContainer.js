import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    
    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="cart">
            <div>
                <h2>Your Bag</h2>
            </div>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer className="footer">
                <div>
                    <hr />
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className="clear-button">Clear cart</button>
            </footer>
        </section>
    );
}

export default CartContainer