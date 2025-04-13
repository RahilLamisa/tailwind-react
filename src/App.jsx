import { Suspense } from "react";
import "./App.css";
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultData from "./Components/ResultData/ResultData";

const fetchPricingData = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <PricingOptions fetchPricingData={fetchPricingData}></PricingOptions>
        </Suspense>

        <ResultData></ResultData>
      </main>
    </>
  );
}

export default App;
