// import Home from '../../screens/Home.jsx';
import Product from '../../screens/Product.jsx';
import About from '../../screens/About.jsx';
import Think from '../../screens/Think.jsx';
import Counter from '../Counter/Counter.jsx';
import Login from '../../screens/Login.jsx';
import LadingPage from '../../screens/LandingPage.jsx';


import { Routes , Route} from 'react-router';

const Router = () =>{
    return(
        <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route index element={<LadingPage />} />
            
            <Route path="login" element={<Login/>}></Route>
            <Route path="product" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />
        </Routes>
    );
};

export default Router;