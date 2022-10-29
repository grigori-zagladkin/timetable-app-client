import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    );
};

export default MainLayout;
