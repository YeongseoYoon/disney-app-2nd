import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "@/utils";

import App from "@/App";
import { Detail, Home, homeLoader, detailLoader } from "@/pages";
import { ROUTE_PATH } from "@/constants";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <App />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: <Home />,
        loader: homeLoader(queryClient),
      },
      {
        path: ROUTE_PATH.DETAIL,
        element: <Detail />,
        loader: detailLoader(queryClient),
      },
    ],
  },
]);

export default router;
