import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/earbuds-prod-1.webp"
import "./Search.scss";
const Search = ({ setShowSearch }) => {
    return <div className="search-model"> <div className="form-field">
        <input
            type="text"
            autoFocus
            placeholder="Search for Product" />
        <MdClose onClick={() => setShowSearch(false)} />
    </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item"> <div className="ing-container">
                    <img src={Prod} alt="" />
                </div>
                    <div className="prod-details">
                        <span className="name">product name</span> <span className="name">product desc</span> </div>
                </div>
            </div>
        </div>
    </div>
}
export default Search;