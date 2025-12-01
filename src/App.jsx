import React, { useState } from "react";
import Header from "./componentes/Header";
import Info from "./componentes/Info";
import Educacion from "./componentes/Educacion";
import Experiencia from "./componentes/Experiencia";
import Habilidades from "./componentes/Habilidades";
import Footer from "./componentes/Footer";
import ToggleHabilidades from "./componentes/ToggleHabilidades";
import FormularioTecnologia from "./componentes/FormularioTecnologia";
import StackTecnologias from "./componentes/StackTecnologias";
import { estudios, tecnologiasIniciales } from "./cvData";

function App() {
  const [habilidadesVisible, setHabilidadesVisible] = useState(false);
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const toggleHabilidades = () => setHabilidadesVisible((v) => !v);

  const agregarTecnologia = (nuevaTec) => {
    setTecnologias((prev) => [...prev, nuevaTec]);
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
        <Educacion estudios={estudios} />
        <Experiencia empresa="N/A" cargo="Frontend Developer" años="N/A" />

        <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
        <StackTecnologias tecnologias={tecnologias} />

        <ToggleHabilidades
          visible={habilidadesVisible}
          onToggle={toggleHabilidades}
        />
        {habilidadesVisible && (
          <Habilidades tecnologias={tecnologias} />
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


