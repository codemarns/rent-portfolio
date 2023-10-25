import { Routes, Route } from "react-router-dom";
import { About, Home, NotFound } from "./pages";
import { Header, Footer } from "./layouts";

function App() {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="w-full min-h-[calc(100%-80px)]">
        <Routes>
          <Route path="/rent-portfolio/" element={<Home />} />
          <Route path="/rent-portfolio/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
