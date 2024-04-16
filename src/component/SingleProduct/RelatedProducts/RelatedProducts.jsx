import { PRODUCTS_URL } from "../../../utils/constant";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products"
import "./RelatedProducts.scss";
const RelatedProducts = ({productId,categotryId}) => {
    const { data } = useFetch(`${PRODUCTS_URL}&filter[id][$ne]=${productId}&filter[categories][id]=${categotryId}&pagination[start]=0&pagination[limit]=4`);
    return <div className="related-products">
        <Products headingText="Related Products" innerPage={true} products={data}/>
    </div>
}
export default RelatedProducts;