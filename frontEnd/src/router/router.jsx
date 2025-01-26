import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import CategoryPage from "../pages/CategoryPage";
import LoanInfo from "../pages/LoanInfo";
import UserDashboard from "../pages/userDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "category",
        element : <CategoryPage/>
      },
      {
        path : "loanInfo",
        element : <LoanInfo/>
      },
      {
        path : "userDashboard",
        element : <UserDashboard/>
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
