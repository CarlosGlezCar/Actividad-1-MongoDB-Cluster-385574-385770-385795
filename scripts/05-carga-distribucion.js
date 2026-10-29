// Agrega 300 usuarios para evidenciar el reparto entre shard1, shard2 y shard3.
// IDs elegidos fuera del ejemplo CRUD; se puede ejecutar una vez por base vacia.
const usuarios = db.getSiblingDB("practica_distribuida").getCollection("usuarios");
const nuevos = Array.from({ length: 300 }, (_, i) => ({
  usuarioId: i + 1000,
  nombre: `Usuario ${i + 1000}`,
  correo: `usuario${i + 1000}@example.com`,
  ciudad: ["Juarez", "Chihuahua", "Delicias"][i % 3],
  edad: 18 + (i % 30),
  activo: i % 2 === 0
}));
print("== Insertando 300 documentos ==");
printjson(usuarios.insertMany(nuevos));
print("== Total en la coleccion ==");
print(usuarios.countDocuments({}));
print("== Distribucion por shard ==");
usuarios.getShardDistribution();
print("== Estado de sharding ==");
sh.status();
