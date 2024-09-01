import FeaturedContainer from "./components/FeaturedContainer";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Partners from "./components/Partners";
import Comments from "./components/Comments";
import Footer from "./components/Footer"
import { topRatedDestinations } from "./data";


const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Partners />
      <FeaturedContainer
        title="Top Rated Destinations"
        data={topRatedDestinations}
      />
      <Offer />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;
