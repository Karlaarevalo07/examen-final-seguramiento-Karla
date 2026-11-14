
export const CLAVE_VALIDA = 'Qa#2026Ex';   // es aceptable según las especificaciones
export const CLAVE_7_CARACTERES = 'Qa#2026'; //especificaciones pero no cumple con la logintud 

export const nuevoUsuario = () => {
  const id = Date.now().toString().slice(-8);
  return {
    login: `qa_${id}`,
    firstName: 'Prueba',
    lastName: 'Examen',
    password: CLAVE_VALIDA,
  };
};
