import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Testimonial from "./Components/ImageSlider/Testimonial";
import SectionBlack from "./Components/SectionBlack/SectionBlack";
import PinkIndex from "./Components/SectionPink/PinkIndex";

function App() {
  return (
    <div className="App">
      <Header />
      <PinkIndex />
      <Testimonial />
      <SectionBlack />
      <Footer />
    </div>
  );
}

export default App;
