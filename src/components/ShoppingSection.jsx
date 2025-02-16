import { shoppingItems } from "../../data";
import ShoppingItem from "./ShoppingItem";

const ShoppingSection = ({setShowCart}) => {
    return (
        <section className="grid px-[30px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:auto-cols-fr mt-[120px] md:mt-[140px]  ">
            {shoppingItems.map(item => (
                <ShoppingItem 
                    id={item.id}
                    itemName={item.itemName}
                    img={item.img}
                    itemPrice={item.itemPrice}
                    setShowCart={setShowCart}
                />
            ))}
        </section>
    )
}

export default ShoppingSection;