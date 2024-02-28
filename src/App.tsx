import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import LoginPage from "./page/loginPage";

function App() {
    // const [count, setCount] = useState(0);

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
