// Ejecutar UNICA vez desde el contenedor shard3 en una instalacion nueva.
printjson(rs.initiate({
  _id: "shard3rs",
  members: [{ _id: 0, host: "shard3:27018" }]
}));
