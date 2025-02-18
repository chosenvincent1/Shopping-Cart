import { shoppingItems } from "../../data";
import ShoppingItem from "./ShoppingItem";
import axios from "axios";
import { useState, useEffect } from "react";

const ShoppingSection = () => {
    const [ shoppingItemData, setShoppingItemData ] = useState([]);
    const [ itemCategory, setItemCategory ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    const [filteredItems, setFilteredItems] = useState([])
    
        const getShoppingItems = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                    if(response.status === 200) {
                        setShoppingItemData(response.data);
                        setIsLoading(false);
                    }
            } catch (error) {
                console.error(error)
            }
        }

        const getItemCategory = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                if(response.status === 200) {
                    setItemCategory(response.data)
                }                
            } catch (error) {
                console.error(error)
            }
        }
    
        useEffect(()=> {
            getShoppingItems();
            getItemCategory();
        }, [])



    return (
        <>
            {isLoading ?
                <p className="mt-[25%] text-center text-lg font-bold ">Loading Items...</p>
                :
                <section className="px-[30px] mt-[120px] md:mt-[140px] ">
                    <select className="w-[100px] md:w-[200px] mb-6 p-2 bg-[#fff] border-1 rounded-sm ">
                        <option className=" " value="all">All</option>
                        {itemCategory.map((category, index) => (
                            <option key={index} className=" " value={category}>{category}</option>
                        ))}
                    </select>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:auto-cols-fr  ">
                        {shoppingItemData.map(item => (
                            <ShoppingItem 
                                data={item}
                            />
                        ))}
                    </div>
                </section>
            }
        </>
    )
}

export default ShoppingSection;