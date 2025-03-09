import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Headers } from "./Components/Headers";
import { Sales } from "./Components/salesTax";
import { Articles } from "./Components/Articles";
import { HomePage } from "./Components/MainPage";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <div className="px-4 pt-8 w-screen  flex flex-col items-center space-y-8 ">
        <Navbar />
        <Headers />
        <Sales />
        <Articles />
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
