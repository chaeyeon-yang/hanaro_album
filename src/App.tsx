import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </>
    );
}

export default App;
