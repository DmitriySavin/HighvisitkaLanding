import { Suspense, lazy } from "react";
import { CartProvider } from "./components/CardContext/CardContext";

import Home from "./pages/Home";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <CartProvider>
      <Suspense fallback={"Loading..."}>
        <Header />

        <main>
          <Home />
        </main>

        <Footer />
      </Suspense>
    </CartProvider>
  );
};

export default App;