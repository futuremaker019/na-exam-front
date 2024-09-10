import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BaseLayout from "./components/BaseLayout.tsx";
import React from "react";
import NotFound from "./pages/error/NotFound.tsx";
import Main from "./pages/Main.tsx";
import Exams from "./pages/exam/Exams.tsx";
import ExamLayout from "./components/ExamLayout.tsx";
import EditorLayout from "@/components/EditorLayout.tsx";
import QuestionEditor from "@/pages/question/QuestionEditor.tsx";

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
    path: "/exams",
    element: <ExamLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Exams /> },
      // { path: "/applies/:id", element: <Apply /> },
      // { path: "/applies/create", element: <ApplyCreate /> },
    ],
  },
  {
    path: "/edit",
    element: <EditorLayout />,
    errorElement: <NotFound />,
    children: [
      {index : true, element: <QuestionEditor />}
    ]
  }
]);

const App:React.FC = () => {

  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default App
