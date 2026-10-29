// Ejecutar UNICA vez desde el contenedor shard1 en una instalacion nueva.
printjson(rs.initiate({
  _id: "shard1rs",
  members: [{ _id: 0, host: "shard1:27018" }]
}));
