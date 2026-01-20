import "./App.css";
import { Suspense } from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";

const pricingPromise = fetch("PricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar />
        {/* <DaisyNav /> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
        <ResultChart/>
      </main>
    </>
  );
}

export default App;
