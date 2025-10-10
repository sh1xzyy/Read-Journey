import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../shared/ui/loader/Loader";
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RecommendedPage = lazy(() =>
  import("../pages/RecommendedPage/RecommendedPage")
);
const LibraryPage = lazy(() => import("../pages/LibraryPage/LibraryPage"));
const ReadingPage = lazy(() => import("../pages/ReadingPage/ReadingPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
