import React from "react";

const Analysis = () => {
  return (
    <div className="w-full">
      <h1 className="text-center my-5 testi-title ">Product analysis</h1>
      <div className="grid grid-cols-1 mx-auto">
        <div className="w-full  flex justify-center my-10 ">
          <div className="stats stats-vertical lg:stats-horizontal shadow full-form text-center text-gray-700">
            <div className="stat">
              <div className="stat-title">Customer Served</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">Reviews</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Annual Revenue</div>
              <div className="stat-value">$120M+</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
            <div className="stat">
              <div className="stat-title">Products</div>
              <div className="stat-value">20+</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
