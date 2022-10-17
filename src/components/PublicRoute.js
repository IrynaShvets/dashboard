import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getSelectorIsLoggedIn } from "../redux/auth/auth-selectors";

function PublicRoute({ children, restricted = false, navigateTo = "/" }) {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return <>{shouldNavigate ? <Navigate to={navigateTo} /> : children}</>;
}

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
  restricted: PropTypes.bool,
  navigateTo: PropTypes.string,
};
