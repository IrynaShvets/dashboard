import { useSelector } from "react-redux";
import { getSelectorIsLoggedIn } from "../redux/auth/auth-selectors";
import "../styles/_homePage.scss";

function HomePage() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <p className="HomePage__welcome">Welcome to the dashboard</p>
      )}
      {!isLoggedIn && (
        <>
          <div className="HomePage__wrapper">
            <img
              src={require("../images/logo.svg").default}
              alt="logo"
              width={55}
              height={55}
            />
            <h1 className="HomePage__wrapper-title">Dashboard</h1>
          </div>
          <div className="HomePage__container">
            <strong className="HomePage__container-text">
              To get started with the program, register by clicking the
              "Dashboard" button on the left.
            </strong>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
