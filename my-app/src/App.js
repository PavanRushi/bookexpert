import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomePage from "./components/Home"
import Articles from "./components/Article";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Booking from "./components/Bookings";
import './App.css';

const App = () => (
    <BrowserRouter> 
    <Header/>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/articles" element={<Articles/>}/>
        <Route exact path="/faqs" element={<Faqs/>}/>
        <Route exact path="/bookings" element={<Booking/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

)


export default App;
