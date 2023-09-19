// DICCIONARIO DE ESTADOS DE UN SERVICIO //
const TYPE_OF_FILE = Object.freeze({
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
  EJECUTABLE: "EJECUTABLE",
});

//Obtener la key de un diccionario por su value
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export { TYPE_OF_FILE, getKeyByValue };
