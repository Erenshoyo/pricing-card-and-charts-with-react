import React from "react";

const PricingCard = ({ pricing }) => {
//   console.log(pricing);
  return (
    <div className="card w-96 bg-base-100 shadow-sm border rounded-xl border-slate-500">
      <div className="card-body flex flex-col justify-around">
        <span className="badge badge-xs badge-warning">
          {pricing.isPopular ? "Most Popular" : "Recommended"}
        </span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{pricing.name}</h2>
          <span className="text-xl">
            {pricing.price.currency}
            {pricing.price.amount}
            {pricing.price.period}
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {pricing.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
