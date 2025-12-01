import React from "react";

function Educacion({ estudios }) {
  return (
    <section>
      <h3>Educación</h3>
      {estudios && estudios.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {estudios.map((edu, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                borderLeft: "4px solid #007bff",
                paddingLeft: "10px",
              }}
            >
              <h4>{edu.titulo}</h4>
              <p>{edu.institucion}</p>
              <small>{edu.año}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay registros educativos.</p>
      )}
    </section>
  );
}

export default Educacion;
