import ProductList from "./ProductList";
import "./Product.css"
import CreateProduct from "./CreateProduct";
import { useState } from 'react';

function Products() {
    const [reload , setReload] = useState(false);
    const handleReload = () => {
        setReload(!reload)
    }
    
    return (
        <>
            <h2>Danh Sach San Pham</h2>
            <CreateProduct onReload = {handleReload}/>
            <ProductList reload = {reload}/>
            
        </>
    )
}

export default Products;