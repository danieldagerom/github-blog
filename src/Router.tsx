import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog/index";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Blog />} />
        </Routes>
    )

}