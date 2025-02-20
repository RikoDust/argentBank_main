import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Footer from "./components/Footer/Footer";


// PAGES
import Home from "./pages/home";





function RoutesComponent() {
    return(
        <Router>
                
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}






export default RoutesComponent;