import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Contenido from "../Contenido/Contenido";
import Overall from "../Overall/Overall";

function App() {
  const [update, setUpdate] = useState({});
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="mt-4">
        <Navbar update={update} setStatus={setStatus} />
      </div>
      <div className="mt-5">
        <Contenido setUpdate={setUpdate} status={status} />
      </div>
      <div>
        <Overall />
      </div>
    </>
  );
}

export default App;
