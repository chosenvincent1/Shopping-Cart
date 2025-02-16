import { FaTimes, FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/itemCounterSlice';

const Cart = ({ showCart, setShowCart }) => {
    const itemCount = useSelector((state) => state.itemCounter.value)
    const dispatch = useDispatch()

    const handleCloseBtnClick = () => {
        setShowCart(false);
    }

    return (
        <section
            className={`
                w-full md:w-[550px]
                fixed right-0 top-0
                bg-[#e5e5e5]
                p-4
                transform
                transition-transform
                duration-300
                ${showCart ? 'translate-x-0' : 'translate-x-full'}
            `}
        >
            <div className='flex shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] justify-between items-center p-2 mb-6 '>
                <h2 className='text-[#555] text-center font-bold text-sm md:text-lg '>Your Cart</h2>

                <button onClick={handleCloseBtnClick}  className='text-lg md:text-xlg cursor-pointer '>
                    <FaTimes />
                </button>
            </div>

            <div className='flex text-[#555] justify-between md:justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] items-start gap-6 md:gap-10 p-2 pb-8 mb-[80px] '>
                <div className='w-[50px] h-[50px] '>
                    <img className='w-full contain rounded-sm ' src="../images/watch-1.jpeg" alt="" />
                </div>

                <div>
                    <p className='mb-2 text-sm md:text-lg '>The open colored T-shirt colored T-shirt </p>
                    <p className='mb-4 text-[#555] text-sm '>Size: S</p>
                    
                    <div className='flex gap-4 md:gap-6 '>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <button 
                                    disabled={itemCount === 1}
                                    onClick={() => dispatch(decrement())} 
                                    className={`px-2 md:px-4 rounded-sm border-1 w-[30px] h-[30px] hover:bg-[#c5c5c5] flex justify-center items-center font-bold ${
                                        itemCount === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                                    } `}
                                >-</button>
                            </div>

                            <div>
                                <button className='px-2 md:px-4 rounded-sm border-1 cursor-pointer w-[40px] h-[40px] '>{itemCount}</button>
                            </div>

                            <div>  
                                <button 
                                    onClick={() => dispatch(increment())} 
                                    className='px-2 md:px-4 rounded-sm border-1 cursor-pointer w-[30px] h-[30px] hover:bg-[#c5c5c5] flex justify-center items-center font-bold '
                                >+</button>
                            </div>
                        </div>

                        <button className='border-0  uppercase underline underline-offset-2 cursor-pointer text-[#f55863] font-bold '>Remove</button>
                    </div>
                </div>

                <p className='font-bold '>$200.00</p>
            </div>

            <div className='text-[#555] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] mb-4 pb-8 ' >
                <h3 className='text-center mb-4 text-lg md:text-xlg uppercase font-bold '>Frequently Bought Together</h3>

                <div className='flex gap-4 mb-4 items-center '>
                    <div className='w-[30px] h-[30px] '>
                        <img className='w-full contain rounded-sm ' src="../images/watch-1.jpeg" alt="" />
                    </div>
                    <div className='w-[30px] h-[30px] '>
                        <img className='w-full contain rounded-sm ' src="../images/watch-2.jpeg" alt="" />
                    </div>
                    <div className='w-[30px] h-[30px] '>
                        <img className='w-full contain rounded-sm ' src="../images/shoe-1.jpeg" alt="" />
                    </div>

                    <div className='w-[30px] h-[30px] '>
                        <img className='w-full contain rounded-sm ' src="../images/cloth-1.jpeg" alt="" />
                    </div>
                    <div className='w-[30px] h-[30px] '>
                        <img className='w-full contain rounded-sm ' src="../images/cloth-2.jpeg" alt="" />
                    </div>
                    <div className='w-[30px] h-[30px] '>
                        <img className='w-full contain rounded-sm ' src="../images/shoe-1.jpeg" alt="" />
                    </div>
                </div>

                <button className='flex gap-2 items-center font-bold text-sm md:text-lg font-bold '>
                    <FaPlus />
                    Add discount code
                </button>
            </div>

            <div className='flex justify-between text-[#555] text-sm md:text-lg font-bold mb-6 '>
                <p className='uppercase'>Sub Total</p>
                <p>$300.00</p>
            </div>

            <button className='w-full p-4 rounded-sm text-[#eee] text-sm md:text-lg font-bold bg-[#5339fa] border-0 '>Checkout</button>
        </section>
    )
}

export default Cart;