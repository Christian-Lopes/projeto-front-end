
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Cars } from "./pages/Cars";
import { Catalog } from "./pages/Catalog";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cars" element={<Cars />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}
