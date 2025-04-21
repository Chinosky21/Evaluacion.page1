import { useEffect, useState } from "react";

const Dinamico = () => {
  const [contenido, setContenido] = useState("");
  const animales = [
    {
      nombre: "Perro",
      dato: "La nariz de cada perro es única, al igual que las huellas dactilares de los humanos",
    },
    {
      nombre: "Gato",
      dato: "Su ronroneo puede tener efectos calmantes para los humanos",
    },
    {
      nombre: "Hamster",
      dato: "Son inteligentes y pueden aprender a reconocer a sus dueños",
    },
  ];

  useEffect(() => {
    let index = 0;

    const intervalo = setInterval(() => {
      const { nombre, dato } = animales[index];
      setContenido(
        `<b>Nombre del animal: ${nombre}</b><br>Dato curioso: ${dato}`
      );
      index = (index + 1) % animales.length; // vuelve a 0 cuando llega al final
    }, 3000); // cada 3 segundos cambia

    return () => clearInterval(intervalo); // limpieza
  }, []);

  return (
    <div className="concenter">
    <div className="login-form w3-container w3-card w3-light-grey w3-round-large w3-padding">
      <h2>Animales</h2>
      <p
        className="letras"
        id="animales"
        dangerouslySetInnerHTML={{ __html: contenido }}
        style={{ fontSize: "18px" }}
      />
    </div></div>
  );
};

export default Dinamico;
