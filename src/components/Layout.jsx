import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {

  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content p-5">
          {/* <Switch>content</Switch> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;