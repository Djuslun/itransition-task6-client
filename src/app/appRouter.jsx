import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/main/mainPage"));
const CanvasPage = lazy(() => import("../pages/canvas/canvasPage"));

export const AppRouter = ({ }) => {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <main>
          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route index path="/canvas/:id?" element={<CanvasPage />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </main>
      </Router>
    </Suspense>
  );
};
