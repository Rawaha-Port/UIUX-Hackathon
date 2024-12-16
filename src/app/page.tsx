// pages/index.tsx
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import FeatureBlock from "./Component/FeatureBlock";
import FeaturedProducts from "./Component/FeaturedProducts";
import BrandStorySection from "./Component/BrandStorySection";
import Join from "./Component/Join";
import Footer from "./Component/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureBlock/>
      <FeaturedProducts/>
      <BrandStorySection/>
      <Join/>
      <Footer/>
    </div>
  );
};

export default HomePage;
