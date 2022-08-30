import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout.js";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add Job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
