import React from "react";

const Navbar = () => {
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
            <div className="circulo me-2 "></div>
            <div>
              <h5 className="text-white me-3 text">All system operacional</h5>
            </div>
            <div id="your_col"> </div>
            <div>
              <h5 className="text-white mx-3 text light">Refreshed:</h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
