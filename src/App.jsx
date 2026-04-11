import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import TopDishes from "./components/TopDishes/TopDishes";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container">
          <Features />
          <TopDishes />
          <Gallery />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
