import './App.scss';
// TODO We need to gradually fade out react bootstrap and use prime reacts
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
// TODO make this imported as a sass file (Refer node_modules for this package)
import "primeflex/primeflex.min.css";
import { Route, Routes } from "react-router-dom";

import ROUTES from "./config/routes/routes"
import Home from './pages/home/Home';
import MainLayout from './layout/MainLayout';
import CategoryPage from './pages/category-page/CategoryPage';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.CATEGORY_SLUG} element={<h1 >coming soon...</h1>} />
        <Route path={`${ROUTES.CATEGORY_SLUG}/${ROUTES.SUB_CATEGORY_SLUG}`} element={<CategoryPage />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
