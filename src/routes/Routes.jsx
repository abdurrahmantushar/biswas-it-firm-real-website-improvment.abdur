import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { SearchHome } from "../pages/searchHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/search",
    element: <SearchHome />,
  },
]);