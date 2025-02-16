import Cart from './cart';

const CartContainer = ({ showCart, setShowCart }) => {
    return (
        <section className={`fixed inset-0 z-10 bg-[rgba(0,0,0,.7)] transition-colors duration-300 w-full h-full ${showCart ? 'bg-[rgba(0,0,0,0.7)]' : 'bg-[rgba(0,0,0,0)] pointer-events-none'} `}>
            <Cart showCart={showCart} setShowCart={setShowCart} />
        </section>
    )
}

export default CartContainer;