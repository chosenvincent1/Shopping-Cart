import { shoppingItems } from "../../data";

const ShoppingSection = () => {
    return (
        <section className="grid px-[30px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:auto-cols-fr">
            {shoppingItems.map(item => (
                <div className="w-full shadow-sm " key={item.id}>
                    <div className="w-full h-[250px] bg-[#555] ">
                        <img className="w-full object-contain h-full" src={item.img} alt={item.itemName} />
                    </div>
                    <div className="p-2 bg-[#e5e5e5] ">
                        <p className="font-bold text-lg">{item.itemName}</p>
                        <p className="font-bold text-[#555] text-sm ">{item.itemPrice}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ShoppingSection;