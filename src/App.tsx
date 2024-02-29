import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import LoginPage from "./page/loginPage";
import AlbumPage from "./page/albumPage";
import { AppProvider } from "./context/mycontext";

function App() {
    return (
        <AppProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LoginPage />}></Route>
                    <Route path="/albums" element={<AlbumPage />}></Route>
                </Route>
            </Routes>
        </AppProvider>
    );
}

export default App;
