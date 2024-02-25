import Auto from "./Auto";
import { useState } from "react";

function AutoList() {
  const [autos, setAutos] = useState([{}]);

  // für formular
  const [name, setName] = useState("");
  const [marke, setMarke] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [ps, setPs] = useState("");
  const [fotolink, setFotolink] = useState("");

  function handleSubmit() {
    let newCar = {
      name: name,
      marke: marke,
      baujahr: baujahr,
      ps: ps,
      fotolink: fotolink,
    };
    setAutos([...autos, newCar]);
  }

  return (
    <>
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <label>Marke</label>
      <input onChange={(e) => setMarke(e.target.value)} type="text" />
      <label>Baujahr</label>
      <input onChange={(e) => setBaujahr(e.target.value)} type="text" />
      <label>PS</label>
      <input onChange={(e) => setPs(e.target.value)} type="text" />
      <label>Fotolink</label>
      <input onChange={(e) => setFotolink(e.target.value)} type="text" />
      <button onClick={handleSubmit}>Auto hinzufügen</button>
      {autos.map((auto) => (
        <>
          <br />
          {/* HIER PROPS EINFÜGEN BITTE BITTE BITTE GOOGLEN NICHT SAGEN ICH WEISS NICHT JA DAS IST NORMAL!!!!!!!!!!!!!!!!!!! */}
          <Auto/>
          <br />
        </>
      ))}
    </>
  );
}

export default AutoList;
