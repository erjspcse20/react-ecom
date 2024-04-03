import Prod from "../../../assets/products/earbuds-prod-1.webp" 
import "./Product.scss";
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={Prod} alt="" />
        </div>
        <div className="prod-detail">
            <span className="name">Product Name</span> <span className="price">&#8377;499</span> </div>
    </div>
}
export default Product;
