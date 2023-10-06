import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../Item";

function ItemCategory(category){
   
    category = category.category
    
    const [item, setItem] = useState([]);
    const [count, setCount] = useState(-2);

    useEffect(() => {
        fetchItem();
        setCount(1);
    })

    const fetchItem = () => {
        if (count < 0) {
            let configItem = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
                }
            };
            axios.get('http://localhost:8080/item/all/' + category, configItem)
                .then((res) => {
                    setItem(res.data)
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }


    return (
        <div class="d-flex flex-row mb-3">
            {item.map((item) => (
                <Item item={item}></Item>
            ))}

        </div>
    )

}
export default ItemCategory;