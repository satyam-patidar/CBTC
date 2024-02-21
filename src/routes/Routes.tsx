import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "@/layout/Dashboard";
import RecentEvents from "@/pages/RecentEvents";
import EventItems from "@/pages/EventItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "recent-events",
            element: <RecentEvents />,
          },
          {
            path: "event-items",
            element: <EventItems />,
          },
        ],
      },
    ],
  },
]);

export default router;
