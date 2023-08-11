import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./index.css";
import Details1 from "./components/Details1";
import Details2 from "./components/Details2";
import Details3 from "./components/Details3";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-screen w-full ">
        <section className="intro-cta w-full p-5 rounded-bl-[5rem]">
          <Navbar />
          <Hero />
        </section>
        <Details1 />
        <Details2 />
        <Details3 />
        <Footer />
      </div>
    </>
  );
}

export default App;
