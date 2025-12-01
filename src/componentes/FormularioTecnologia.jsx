import React, { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      agregarTecnologia(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Agregar tecnología"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;