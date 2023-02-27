import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/home/:state" element={<Home />} />
    </Route>
  )
);

export default router;
