import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateOutlet: FC = () => {
    const location = useLocation();
    const auth = useAuth();

    return auth.user ? <Outlet /> : <Navigate to="login" state={{ from: location }} />;
};

export default PrivateOutlet;
