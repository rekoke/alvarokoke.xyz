import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        index
        path="/"
        element={<HomePage />}
        errorElement={<NotFoundPage />}
      />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
