import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
    const isloggedIn = true;

    return (
        <div>
            {isloggedIn ? <Outlet /> : <Navigate to="/"/>}
        </div>
    )
}

export default PrivateRoutes;