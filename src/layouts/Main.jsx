import React, { useEffect, useContext } from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationService } from "../services";
import { MainRouter } from "../routers";
import { UserContext } from "../context";

const Wrapper = ({ Component }) => <Component />;

const MainLayout = () => {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    if (!isLoggedIn) {
      navigate(
        `/login?returnUrl=${encodeURIComponent(
          window.location.href.replace(window.location.origin, "")
        )}`
      );
    } else setCurrentUser(AuthenticationService.getCurrentUser());
  }, [navigate, setCurrentUser]);

  return (
    <Routes>
      {MainRouter?.map((router, index) => (
        <Route
          path={router.path}
          exact={router.isExact}
          key={`${index}-${router.name}`}
          element={<Wrapper Component={router.component} />}
        />
      ))}
      <Route path="/" element={<Navigate replace to="/posts/" />} />
    </Routes>
  );
};

export default MainLayout;
