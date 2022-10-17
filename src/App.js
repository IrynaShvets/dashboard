import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getIsFetchingCurrent } from "./redux/auth/auth-selectors";
import operations from "./redux/auth/auth-operations";
import Container from "./components/Container";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const IncomePage = lazy(() => import("./pages/IncomePage"));
const PromotePage = lazy(() => import("./pages/PromotePage"));
const HelpPage = lazy(() => import("./pages/HelpPage"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingCurrentUser && (
        <>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted navigateTo="/">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="product"
                element={
                  <PrivateRoute navigateTo="login">
                    <ProductPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="customers"
                element={
                  <PrivateRoute>
                    <CustomersPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="income"
                element={
                  <PrivateRoute>
                    <IncomePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="promote"
                element={
                  <PrivateRoute>
                    <PromotePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="help"
                element={
                  <PrivateRoute>
                    <HelpPage />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route
              path="*"
              element={
                <PublicRoute>
                  <Navigate to="/" />
                </PublicRoute>
              }
            />
          </Routes>
        </>
      )}
      <ToastContainer autoClose={3000} position="top-center" />
    </Container>
  );
}

export default App;
