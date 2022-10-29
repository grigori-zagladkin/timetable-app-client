import { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AllTimetable from "./pages/AllTimetable";
import ChangeTimetable from "./pages/ChangeTimetable";
import CurrentDay from "./pages/CurrentDay";
import CurrentWeek from "./pages/CurrentWeek";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PrivateOutlet from "./utils/PrivateOutlet";

const App: FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/protect" element={<PrivateOutlet />}>
                    <Route index element={<ChangeTimetable />} />
                </Route>
                <Route path="/all" element={<AllTimetable />} />
                <Route path="/currentday" element={<CurrentDay />} />
                <Route path="/currentweek" element={<CurrentWeek />} />
            </Routes>
        </Fragment>
    );
};

export default App;
