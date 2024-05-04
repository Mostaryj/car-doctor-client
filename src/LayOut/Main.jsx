import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Nav from "../pages/shared/nav/Nav";

const Main = () => {
    return (
        <div>
            <div>
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Main;