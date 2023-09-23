import { createBrowserRouter } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import App from "@/App";
import { Detail, Home, homeLoader } from "@/pages";
import { ROUTE_PATH } from "@/constants";

const queryClient = useQueryClient();

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
      },
    ],
  },
]);

export default router;
