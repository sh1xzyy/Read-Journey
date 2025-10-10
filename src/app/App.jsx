import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RecommendedPage = lazy(() =>
  import("../pages/RecommendedPage/RecommendedPage")
);
const LibraryPage = lazy(() => import("../pages/LibraryPage/LibraryPage"));
const ReadingPage = lazy(() => import("../pages/ReadingPage/ReadingPage"));
import Loader from "../shared/ui/loader/Loader";
import RestrictedRoutes from "../shared/routes/RestrictedRoutes";
import PrivateRoutes from "../shared/routes/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { refreshUserThunk } from "../entities/user/model/operations";
import { selectIsLoggedIn } from "../entities/user/model/selectors";
import Header from "../modules/header/Header";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && <Header />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/register"
            element={
              <RestrictedRoutes redirectTo="/">
                <RegisterPage />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoutes redirectTo="/">
                <LoginPage />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoutes redirectTo="/login">
                <HomePage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/recommended"
            element={
              <PrivateRoutes redirectTo="/login">
                <RecommendedPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoutes redirectTo="/login">
                <LibraryPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoutes redirectTo="/login">
                <ReadingPage />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
