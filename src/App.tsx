import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { ErrorPage } from "./pages/error";
import { Agendamento } from "./pages/agendamento";
import { Login } from "./pages/login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/agendamento",
    element: <Agendamento />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export { router };
