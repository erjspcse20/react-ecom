import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { CATEGORIES_URL,PRODUCTS_URL } from "../../utils/constant";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);
    useEffect(() =>{
        getProducts();
        getCategories();
    },[]);
    const getCategories = () => {
        fetchDataFromApi(CATEGORIES_URL).then(res => {
            setCategories(res);
        });
    };
    const getProducts = () => {
        fetchDataFromApi(PRODUCTS_URL).then(res => {
            setProducts(res);
        });
    };
    return (<div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} headingText="Popular Product" />
            </div>
        </div>
    </div>);
};
export default Home;
