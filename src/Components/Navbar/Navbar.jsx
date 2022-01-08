import React, { useEffect, useState } from "react";

const Navbar = ({ update, setStatus }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    dataLastItem();
  }, [update]);

  const dataLastItem = async () => {
    let ultUpdate = await update?.status?.apis[1]?.authenticacion?.days;
    let { [Object.keys(ultUpdate).pop()]: lastItem } = ultUpdate;
    setItem(lastItem);
    setStatus(lastItem);
  };

  return (
    <>
      <img
        src="https://res.cloudinary.com/yhonamc/image/upload/v1641583006/logo-coordnadora-353x60_mjox33.png"
        alt="logo"
        className="mb-4 logo"
      />
      <nav className="navbar navbar-dark bg-blue ">
        <div className="container-fluid d-flex aling-item-center justify-content-center">
          <div className="d-flex aling-item-center">
            <div
              id="circulo"
              className={
                item < 60
                  ? "background-one"
                  : item === 60
                  ? "background-two"
                  : item <= 80
                  ? "background-two"
                  : item > 80
                  ? "background-tree"
                  : ""
              }
            ></div>
            <div>
              <h5 className="text-white me-3 text">All system operacional</h5>
            </div>
            <div id="your_col"> </div>
            <div>
              <h5 className="text-white mx-3 text light">
                Refreshed: {update.last_updated}
              </h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
