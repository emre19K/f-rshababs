import AutoList from "../components/AutoList";

function HomePage() {
  /* 
        1. Hauptziel:
            -Autos erstellen können
        2. Hauptziel
            -Autos anzeigen
        3. Auto komponente nutzen

        INFO:
        Jedes Auto ist ein Objekt und besteht aus:
            - name
            - marke
            - baujahr
            - ps
            - fotolink

        Beispiel:

        let bmw = {
            name: "520d",
            marke: "BMW",
            baujahr: 2010,
            ps: 170
            fotolink: "irgendeinlinkvondemauto.de/bmw/520d"
        }
    */
  return (
    <>
      <h1>HomePage</h1>
      <AutoList />
    </>
  );
}

export default HomePage;
