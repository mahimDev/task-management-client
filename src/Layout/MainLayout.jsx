import { Outlet } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <ToastContainer />
            <NavBer />
            <Outlet />
        </div>
    );
};

export default MainLayout;