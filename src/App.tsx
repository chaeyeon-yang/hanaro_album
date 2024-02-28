import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import LoginPage from "./page/LoginPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LoginPage />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
