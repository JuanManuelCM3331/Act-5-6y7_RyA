import React from "react";

function StackTecnologias({ tecnologias }) {
  return (
    <ul style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: 0, listStyle: "none" }}>
      {tecnologias.map((tec, idx) => (
        <li key={idx} style={{ background: "#eee", borderRadius: "8px", padding: "4px 10px" }}>
          {tec}
        </li>
      ))}
    </ul>
  );
}

export default StackTecnologias;