import { useDispatch, useSelector } from "react-redux";
import { cartIncrement, btnDisabled } from "../store/cartCounterSlice";


const ShoppingItem = ({data}) => {
    const dispatch = useDispatch();
    const buttonStates = useSelector(state => state.cartCounter.buttonStates);
    const isButtonDisabled = buttonStates[data.id] || false;


    return (
        <>
            <div className="w-full shadow-sm rounded-sm " key={data.id}>
                <div 
                    style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-full h-[300px] ">
                </div>
                <div className="p-2 bg-[#e5e5e5] ">
                    <p className="text-sm font-bold mb-[2px] line-clamp-1 overflow-hidden text-ellipsis ">{data.title}</p>
                    <p className="text-xs mb-2 font-bold text-[#555]   ">{data.category}</p>
                    <p className="font-bold text-[#555] text-lg ">${data.price}</p>

                    <button 
                        onClick={() => {
                            dispatch(cartIncrement());
                            dispatch(btnDisabled(data.id));
                            alert("Item added to Cart");
                        }}
                        className={`w-full p-4 hover:bg-[#b4b4b4] mt-2 text-[#fff] font-bold rounded-sm ${
                            isButtonDisabled ? "cursor-not-allowed bg-[#b4b4b4] " : "cursor-pointer bg-[#555] "
                        } `}
                    >{isButtonDisabled ? "Item Added" : "Add to Cart"}</button>
                </div>
            </div>
        </>
    )
}

export default ShoppingItem;