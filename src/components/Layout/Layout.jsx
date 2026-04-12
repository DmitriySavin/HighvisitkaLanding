import { Suspense , lazy} from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../Header/Header"))
const Footer = lazy(() => import("../Footer/Footer"))

const Layout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Suspense>
  );
};

export default Layout;
