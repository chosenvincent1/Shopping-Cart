import { useDispatch, useSelector } from "react-redux";
import { cartIncrement, btnDisabled } from "../store/cartCounterSlice";

const ShoppingItem = ({id, img, itemName, itemPrice}) => {
    const dispatch = useDispatch();
    const buttonStates = useSelector(state => state.cartCounter.buttonStates);
    const isButtonDisabled = buttonStates[id] || false;



    return (
        <>
            <div className="w-full shadow-sm rounded-sm " key={id}>
                <div className="w-full h-[250px] bg-[#b4b4b4] ">
                    <img className="w-full object-contain h-full" src={img} alt={itemName} />
                </div>
                <div className="p-2 bg-[#e5e5e5] ">
                    <p className="font-bold text-lg">{itemName}</p>
                    <p className="font-bold text-[#555] text-sm ">{itemPrice}</p>

                    <button 
                        onClick={() => {
                            dispatch(cartIncrement());
                            dispatch(btnDisabled(id));
                            alert("Item added to Cart");
                        }}
                        className={`w-full p-4 hover:bg-[#b4b4b4] mt-6 text-[#fff] font-bold rounded-sm ${
                            isButtonDisabled ? "cursor-not-allowed bg-[#b4b4b4] " : "cursor-pointer bg-[#555] "
                        } `}
                    >{isButtonDisabled ? "Item Added" : "Add to Cart"}</button>
                </div>
            </div>
        </>
    )
}

export default ShoppingItem;