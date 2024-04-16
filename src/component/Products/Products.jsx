import Product from "./Product/Product"
import "./Products.scss";
const Products = ({ innerPage, headingText, products }) => {
    return <div className="products-container">
        {innerPage && <div className="sec-heading">{headingText} </div>}
        <div className="products">
            {products && products.data?.map((prod) =>(
                    <Product key={prod.id} id={prod.id} data={prod.attributes} />
            ))}
        </div>
    </div>
}
export default Products;