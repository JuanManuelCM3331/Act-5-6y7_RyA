import React from "react";

function ToggleHabilidades({ visible, onToggle }) {
  return (
    <button onClick={onToggle} style={{ margin: "1rem 0" }}>
      {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
    </button>
  );
}

export default ToggleHabilidades;