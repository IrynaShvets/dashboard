import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getSelectorIsLoggedIn } from "../redux/auth/auth-selectors";

function PrivateRoute({ children, navigateTo = "/" }) {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to={navigateTo} />}</>;
}
export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
  navigateTo: PropTypes.string,
};
