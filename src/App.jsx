import "./App.css";
import { Suspense } from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("PricingData.json").then((res) => res.json());
const marksPromise = axios.get("MarksData.json");

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
        <ResultChart />
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-lg"></span>
          }
        >
          <MarksChart marksPromise={marksPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
