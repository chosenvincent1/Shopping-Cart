import { useSelector } from "react-redux";

const Navbar = ({ setShowCart })=> {
    const cartCount = useSelector(state => state.cartCounter.value);

    const handleShowCart = () => {
        setShowCart(true)
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#eee] flex justify-between items-center shadow-sm p-6 ">
            <h2 className="font-bold text-xl  ">Logo</h2>

            <div className="flex items-center gap-[50px] font-bold text-base ">
                <div className="hidden md:flex md:items-center md:gap-[50px]">
                    <a href="">Get in Touch</a>
                    <a href="">Buy Now</a>
                </div>

                <div className="flex items-center gap-6 md:gap-[20px] ">
                    <button onClick={handleShowCart} aria-label="shopping cart" className="w-8 h-8 cursor-pointer relative">
                        <img src="../images/cart.png" alt="cart-icon" />

                        <div className="w-4 h-4 bg-[#f20a0a] rounded-[50%] absolute right-[-5px] top-[2px] flex items-center justify-center text-[#f3f3f3] text-xs font-bold ">{cartCount}</div>
                    </button>

                    <button className="hidden md:block cursor-pointer ">
                        <img className="w-[50px] h-10" src="../images/menu.png" alt="cart-icon" />
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;