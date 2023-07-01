import React from "react";
import ReactDOM from "react-dom/client";
import data from "./Components/back/Data/Data";
import Header from "./Components/front/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./Components/front/Routes/Routes";

const App = () => {
  const { productItems } = data;

  return (
    <>
      <Header />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<RouterProvider router={AppRouter} element={<App />} />);
