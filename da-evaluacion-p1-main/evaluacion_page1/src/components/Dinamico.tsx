import { useEffect, useState } from "react";

const Dinamico = () => {
  const [contenido, setContenido] = useState("");

  useEffect(() => {
    const mostrarAnimal1 = () => {
      const s1 = "Perro";
      const m1 = "La nariz de cada perro es única, al igual que las huellas dactilares de los humanos";
      setContenido(`<b>Nombre del animal: ${s1}</b><br>Dato curioso: ${m1}`);
    };

    const mostrarAnimal2 = () => {
      const s2 = "Gato";
      const m2 = "Su ronroneo puede tener efectos calmantes para los humanos";
      setContenido(`<b>Nombre del animal: ${s2}</b><br>Dato curioso: ${m2}`);
    };

    const mostrarAnimal3 = () => {
      const s3 = "Hamster";
      const m3 = "Son inteligentes y pueden aprender a reconocer a sus dueños";
      setContenido(`<b>Nombre del animal: ${s3}</b><br>Dato curioso: ${m3}`);
    };

    const t1 = setTimeout(mostrarAnimal1, 1000);
    const t2 = setTimeout(mostrarAnimal2, 4000);
    const t3 = setTimeout(mostrarAnimal3, 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="w3-container w3-card w3-light-grey w3-round-large w3-padding">
      <h2>Títulos Dinámicos</h2>
      <p id="animales" dangerouslySetInnerHTML={{ __html: contenido }} />
    </div>
  );
};

export default Dinamico;
