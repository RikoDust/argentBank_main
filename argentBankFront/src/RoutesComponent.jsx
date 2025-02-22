import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


// PAGES
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import NotFound from "./pages/notFound";
import User from "./pages/user";



function RoutesComponent() {
    return(
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    );
}






export default RoutesComponent;