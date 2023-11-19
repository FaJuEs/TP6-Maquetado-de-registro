// import React from 'react';
// import Registro from "/components/registro";

const Registro = () => {
  return (
    <div className="registro-form">
      <h2>Registro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
