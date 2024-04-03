import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/earbuds-prod-1.webp"
//import Prod from "../../../assets/product/earbuds-prod-1.webp"
import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container"> <img src={Prod} alt="" /> </div>
            <div className="prod-details">
                <span className="name">product name</span> <MdClose className="close-btn" /> <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>X</span>
                    <span>&#8377;63647</span>
                </div>
            </div>
        </div>
    </div>
}
export default CartItem;
