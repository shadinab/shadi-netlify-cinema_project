import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";

const NavbarForAll = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isSignUpPage = location.pathname === "/signup";

  if (isSignUpPage || isLoginPage) {
    return <>{children}</>;
  } else {
    console.log("you");
  }

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default NavbarForAll;
