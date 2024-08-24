import { useNavigate } from "react-router-dom";
import { deleteAllCookie } from "../../components_1/helpers/cookie";
import { useEffect } from "react";
function LogOut() {
    const navigate = useNavigate();
    
    deleteAllCookie();
    
    useEffect(() => {
        navigate("/");
    }, []);

    return (
       <>
       </>
    );
}

export default LogOut;
