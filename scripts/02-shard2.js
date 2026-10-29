// Ejecutar UNICA vez desde el contenedor shard2 en una instalacion nueva.
printjson(rs.initiate({
  _id: "shard2rs",
  members: [{ _id: 0, host: "shard2:27018" }]
}));
