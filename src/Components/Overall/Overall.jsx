import React, { useEffect, useState } from "react";

const Overall = ({ update, status }) => {
  const [porcent, setporcent] = useState([]);
  const [porcentaje, setPorcentaje] = useState([]);
  const [porcenttwo, setporcenttwo] = useState([]);

  const daySeven = async () => {
    const lastDaySeven =
      (await porcent.slice(0, 6).reduce((acu, num) => acu + num)) / 7;
    let x = lastDaySeven.toFixed(2);
    setPorcentaje(x);
  };

  const dayThirty = async () => {
    const lastDaytwo =
      (await porcenttwo.slice(0, 29).reduce((acu, num) => acu + num)) / 30;
    let x = lastDaytwo.toFixed(2);
    setporcenttwo(x);
  };

  useEffect(() => {
    if (update.status !== undefined) {
      setporcent(update?.status?.apis[1]?.authenticacion?.days);
      setporcenttwo(update?.status?.apis[1]?.authenticacion?.days);
    }
  }, [update]);

  useEffect(() => {
    if (porcent !== [] && porcenttwo !== []) {
      daySeven();
      dayThirty();
    }
  }, [porcent, porcenttwo]);

  console.log(porcentaje);

  return (
    <>
      <h3 id="title">Overall Uptime</h3>

      <div className="d-flex justify-content-center mt-2">
        <div className=" bg-blues">
          <div className="porcent-1">
            <h1>{status}%</h1>
            <span>Last 24 hour</span>
          </div>
          <div id="your_col"></div>
          <div className="porcent-2">
            <h1>{porcentaje}%</h1>
            <span>Last 7 days</span>
          </div>
          <div id="your_col"></div>
          <div className="poncent-2">
            <h1>{porcenttwo}%</h1>
            <span>Last 30 days</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overall;
