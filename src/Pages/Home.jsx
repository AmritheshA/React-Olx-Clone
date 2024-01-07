import Fresh_Recommendation from "../Components/Body/Fresh Recommand/Fresh Recommendation";
import RecentlyAdded from "../Components/Body/RecentAdded/Recently";
import Footer from "../Components/Footer/Footer";
import FooterAbove from "../Components/Footer/FooterAbove";
import NavCategory from "../Components/Headers/NavCategory";
import Navbar from "../Components/Headers/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <NavCategory />
      <Fresh_Recommendation />
      <RecentlyAdded />
      <FooterAbove />
      <Footer />
    </div>
  );
}

export default Home;
