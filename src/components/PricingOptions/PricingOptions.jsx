import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);
  return (
    <div className="mx-10 mt-10">
      <div className="text-center mb-16">
        <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">
          Pricing
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-200 mt-2 mb-">
          Choose the plan that fits your needs
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Unlock all features and get started today. Upgrade or cancel anytime.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
