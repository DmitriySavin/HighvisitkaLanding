
import { Suspense , lazy} from "react"
const Hero = lazy(() => import("../components/Hero/Hero"))
const Features = lazy(() => import("../components/Features/Features"))
const About = lazy(() => import("../components/About/About"))
const Gallery = lazy(() => import("../components/Gallery/Gallery"))
const TopDishes = lazy(() => import("../components/TopDishes/TopDishes"))
const Contact = lazy(() => import("../components/Contact/Contact"))
// const Basket = lazy(() => import("../components/Basket/Basket"))

const Home = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Hero />
      <div className="container">
        <Features />
        <TopDishes />
        <Gallery />
        <About />
        <Contact />
        
      </div>
    </Suspense>
  );
};

export default Home;