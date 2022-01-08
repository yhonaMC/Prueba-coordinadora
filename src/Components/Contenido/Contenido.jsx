import React, { useState, useEffect } from "react";

const Contenido = ({ setUpdate, status }) => {
  const [bar, setBar] = useState([]);

  const data = async () => {
    const response = await fetch(
      "https://us-central1-cm-devops-294019.cloudfunctions.net/status"
    );
    const info = await response.json();
    setBar(info?.status?.apis);
    setUpdate(info);
  };

  useEffect(() => {
    data();
    setInterval(() => {
      data();
    }, 120000);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="update">
          <h5 className="color2 text light">
            <small className="color text ">UPTIME</small> last 30 days
          </h5>
        </div>
        <div className="mt-3">
          <h3 className="text">
            Sigo App
            <div className="float-end">
              <span className=" ligth color3 d-flex">
                <div
                  id="circulo"
                  className={
                    status < 60
                      ? "background-one"
                      : status === 60
                      ? "background-two"
                      : status <= 80
                      ? "background-two"
                      : status > 80
                      ? "background-tree"
                      : ""
                  }
                ></div>
                Up
              </span>
            </div>
          </h3>
          {bar[1]?.authenticacion?.days?.map((barras, index) => (
            <div className="container-bar mt-2" key={index}>
              <div
                id="Barra"
                className={
                  barras < 60
                    ? "background-one"
                    : barras === 60
                    ? "background-two"
                    : barras <= 80
                    ? "background-two"
                    : barras > 80
                    ? "background-tree"
                    : ""
                }
              ></div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <h3 className="text">
            Tracking
            <div className="float-end">
              <div id="your_col_1"></div>
              <span className=" ligth color3 d-flex">
                <div
                  id="circulo"
                  className={
                    status < 60
                      ? "background-one"
                      : status === 60
                      ? "background-two"
                      : status <= 80
                      ? "background-two"
                      : status > 80
                      ? "background-tree"
                      : ""
                  }
                ></div>{" "}
                Up
              </span>
            </div>
          </h3>
          {bar[0]?.tracking?.days?.map((trackings, index) => (
            <div className="container-bar mt-2" key={index}>
              <div
                id="Barra"
                className={
                  trackings < 60
                    ? "background-one"
                    : trackings === 60
                    ? "background-two"
                    : trackings <= 80
                    ? "background-two"
                    : trackings > 80
                    ? "background-tree"
                    : ""
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contenido;
