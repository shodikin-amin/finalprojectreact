import Nav from "./components/molecules/Nav";
import Hero from "./components/molecules/Hero";
import Footer from "./components/molecules/Footer";
function App() {
  return (
    <>
      <div className="absolute w-screen bg-hijau1">
        <Nav />
      </div>
    
      <div>
        <Hero />
      </div>
    
      <div>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
