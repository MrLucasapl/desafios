import { Outlet } from "react-router-dom";
import { LayoutStyled } from "./styled";

const Layout = () => {
  return (
    <LayoutStyled>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
