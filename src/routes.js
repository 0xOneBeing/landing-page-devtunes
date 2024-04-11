import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";

export const routes = [
  { id: 1, path: "/", component: Home, exactness: true, requiresAuth: false },
  {
    id: 2,
    path: "*",
    component: NotFound,
    exactness: false,
    requiresAuth: false,
  },
];
