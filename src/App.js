import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Category from "./component/Category/Category";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import Newsletter from "./component/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext> 
        </BrowserRouter>
    )
}
export default App;