import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import LoginPage from "./page/loginPage";
import AlbumPage from "./page/albumPage";
import { AppProvider } from "./context/mycontext";
import AlbumDetailPage from "./page/albumDetailPage";
import AuthWrapper from "./lib/authRoute";

function App() {
    return (
        <AppProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LoginPage />} />
                    <Route
                        path="albums"
                        element={
                            <AuthWrapper>
                                <AlbumPage />
                            </AuthWrapper>
                        }
                    />
                    <Route
                        path="albums/:id"
                        element={
                            <AuthWrapper>
                                <AlbumDetailPage />
                            </AuthWrapper>
                        }
                    />
                </Route>
            </Routes>
        </AppProvider>
    );
}

export default App;
