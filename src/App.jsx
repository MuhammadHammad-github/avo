import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import useGetScrollPos from "./hooks/useGetScrollPos";
import Footer from "./components/Footer";
import AboutPage from "./Pages/AboutPage";
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  const scrollPos = useGetScrollPos();
  const showSecondHeader = scrollPos > 20;
  return (
    <div>
      <Header />
      <Header secondType={true} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<Work />} path="/work" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
