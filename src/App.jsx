import React, { useState } from "react";
import Header from "./componentes/Header";
import Info from "./componentes/Info";
import Educacion from "./componentes/Educacion";
import Experiencia from "./componentes/Experiencia";
import Habilidades from "./componentes/Habilidades";
import Footer from "./componentes/Footer";
import ToggleHabilidades from "./componentes/ToggleHabilidades";

function App() {
  const [habilidadesVisible, setHabilidadesVisible] = useState(false);

  const toggleHabilidades = () => {
    setHabilidadesVisible(!habilidadesVisible);
  };

  return (
    <div className="container">
      <Header nombre="Juan M. Cardona M." cargo="Desarrollador Frontend" />
      <main>
        <Info
          nombre="Juan M. Cardona M."
          cargo="Desarrollador Frontend"
          ubicacion="Itagui, Antioquia, Colombia"
          descripcion="Apasionado por la tecnología, con experiencia en React, Node.js y desarrollo web moderno."
        />
        <Educacion
          estudios={[
            {
              titulo: "Tecnólogo en Análisis y Desarrollo de Software",
              institucion: "SENA",
              año: "2025",
            },
            {
              titulo: "Tecnica en Operacion de Eventos",
              institucion: "SENA",
              año: "2024",
            },
          ]}
        />

        <Experiencia empresa="N/A" cargo="Frontend Developer" años="N/A" />
        <ToggleHabilidades
          visible={habilidadesVisible}
          onToggle={toggleHabilidades}
        />
        {habilidadesVisible && (
          <Habilidades
            tecnologias={["React", "Node.js", "JavaScript", "HTML", "CSS"]}
          />
        )}
      </main>
      <Footer
        email="juanma3331@gmail.com"
        telefono="+57 312 864 7249"
        github="https://github.com/JuanManuelCM3331"
        linkedin="https://www.linkedin.com/in/juan-manuel-cardona-molina-b0958a311/"
      />
    </div>
  );
}

export default App;
