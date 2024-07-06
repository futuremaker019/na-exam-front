import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BaseLayout from "./pages/BaseLayout.tsx";
import React from "react";
import NotFound from "./pages/NotFound.tsx";
import Main from "./pages/Main.tsx";
import Exam from "./pages/Exam.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
    ],
  },
  {
    path: "/applies",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Exam /> },
      // { path: "/applies/:id", element: <Apply /> },
      // { path: "/applies/create", element: <ApplyCreate /> },
    ],
  },
]);

const App:React.FC = () => {

  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default App
