import { useNavigate } from "react-router-dom"
import { INTERNAL_PRODUCT_URL } from "../../../utils/constant";
import "./Product.scss";
const Product = ({ id, data }) => {
    const navigate = useNavigate();
    return <div className="product-card" onClick={() => navigate(`${INTERNAL_PRODUCT_URL+id}`)}>
        <div className="thumbnail">
            <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
        </div>
        <div className="prod-detail">
            <span className="name">{data.title}</span> <span className="price">&#8377;{data.price}</span> </div>
    </div>
}
export default Product;
