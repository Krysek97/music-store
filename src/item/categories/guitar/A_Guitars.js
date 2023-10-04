import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../Item";

function A_Guitars() {

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
            axios.get('http://localhost:8080/item/all/A_GUITAR', configItem)
                .then((res) => {
                    setItem(res.data)
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }


    return (
        <div class="card" style={{ width: "18rem" }}>
            {item.map((item) => (
                <Item item={item}></Item>
            ))}

        </div>
    )

}
export default A_Guitars;