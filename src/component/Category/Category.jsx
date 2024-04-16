import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import { PRODUCTS_URL } from "../../utils/constant";
import useFetch from "../../hooks/useFetch";
const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(`${PRODUCTS_URL}&[filters][categories][id]=${id}`);
    return (
        <div className="category-main-content"> 
            <div className="layout">
                    <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
                    <Products innerPage={true} products={data} />
            </div>
        </div>);
};
export default Category;