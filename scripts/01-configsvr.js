// Ejecutar UNICA vez desde el contenedor configsvr en una instalacion nueva.
const resultado = rs.initiate({
  _id: "configReplSet",
  configsvr: true,
  members: [{ _id: 0, host: "configsvr:27019" }]
});
printjson(resultado);
