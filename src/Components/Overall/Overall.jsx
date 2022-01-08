import React from "react";

const Overall = () => {
  return (
    <>
      <h3 id="title">Overall Uptime</h3>

      <div className="d-flex justify-content-center mt-2">
        <div className=" bg-blues">
          <div className="porcent-1">
            <h1>100%</h1>
            <span>Last 24 hour</span>
          </div>
          <div id="your_col"></div>
          <div className="porcent-2">
            <h1>96%</h1>
            <span>Last 7 days</span>
          </div>
          <div id="your_col"></div>
          <div className="poncent-2">
            <h1>96.8%</h1>
            <span>Last 30 days</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overall;
