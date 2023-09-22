import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { Detail, Home } from "@pages/index";
import { ROUTE_PATH } from "@constants/index";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <App />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: <Home />,
      },
      {
        path: ROUTE_PATH.DETAIL,
        element: <Detail />,
      },
    ],
  },
]);

export default router;
