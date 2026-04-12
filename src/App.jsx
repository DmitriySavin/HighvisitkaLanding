import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu/Menu";
import Error from "./pages/Error/Error";
import { Suspense , lazy} from "react";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Suspense>

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="/menu" element={<Menu />} />
    //     <Route path="*" element={<Error />} />
    //   </Route>
    // </Routes>
  );
};

export default App;
