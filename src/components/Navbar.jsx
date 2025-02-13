
const Navbar = ()=> {
    return (
        <nav className="flex justify-between mb-6 items-center shadow-sm p-6 ">
            <h2 className="font-bold text-xl  ">Logo</h2>

            <div className="flex items-center gap-[50px] font-bold text-base ">
                <div className="hidden md:flex md:items-center md:gap-[50px]">
                    <a href="">Get in Touch</a>
                    <a href="">Buy Now</a>
                </div>

                <div className="flex items-center gap-6 md:gap-[20px] ">
                    <button aria-label="shopping cart" className="w-8 h-8 cursor-pointer relative">
                        <img src="../images/cart.png" alt="cart-icon" />

                        <div className="w-4 h-4 bg-[#f20a0a] rounded-[50%] absolute right-[-5px] top-[2px] flex items-center justify-center text-[#f3f3f3] text-xs font-bold ">2</div>
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