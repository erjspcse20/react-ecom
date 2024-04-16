import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { MdClose } from "react-icons/md"
import "./Search.scss";
import { INTERNAL_PRODUCT_URL, PRODUCTS_URL } from "../../../utils/constant";
const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    }
    let {data} = useFetch(`${PRODUCTS_URL}&filters[title][$contains]=${query}`);
    if(!query.length){
        data = null;
    }

    return <div className="search-model"> <div className="form-field">
        <input
            type="text"
            autoFocus
            value={query}
            onChange={onChange}
            placeholder="Search for Product" />
        <MdClose onClick={() => setShowSearch(false)} />
    </div>
        <div className="search-result-content">
            {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
            )}
            <div className="search-result">
                {data?.data?.map(item =>(
                    <div key={item.id} className="search-result-item" onClick={() => {
                        navigate(INTERNAL_PRODUCT_URL+item.id);
                        setShowSearch(false);
                    }}> 
                        <div className="ing-container">
                            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span> 
                            <span className="name">{item.attributes.desc}</span> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}
export default Search;