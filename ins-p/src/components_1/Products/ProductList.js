import { useEffect, useState } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { getProducts } from "../../services/productsService";
function ProductList(props){

    const {reload} = props;
    const [data , setData] = useState([]);
    const [editReload , setEditReload] = useState(false);

    const handleReload = () => {
        setEditReload(!editReload);
    }


    // console.log(data);
    useEffect(() => {
        const fectApi = async () => {
            const result = await getProducts();
            setData(result.reverse());
        }
        fectApi();
    } , [reload,editReload])

    // console.log(data);

    
    return (
        <>
            <div className="product__list">
                {data.map((item) => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title}></img>
                        </div>
                        <h3 className="product__title">{item.title}</h3>
                        <div className="product__price">{item.price}$</div>
                        <div className="product__percentage">{item.discountPercentage}%</div>
                        <EditProduct item={item} onReload={handleReload}/>
                        <DeleteProduct item={item} onReload={handleReload}/>
                    </div>
                ))}

            </div>
        </>
    )
}

export default ProductList;