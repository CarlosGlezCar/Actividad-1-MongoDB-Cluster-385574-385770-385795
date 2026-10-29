// CRUD de ejemplo. Ejecutar desde mongos (no desde un shard individual).
const base = db.getSiblingDB("practica_distribuida");
const usuarios = base.getCollection("usuarios");

print("== CREATE: insertar usuarios ==");
printjson(usuarios.insertMany([
  { usuarioId: 101, nombre: "Ana",   correo: "ana@example.com",   ciudad: "Chihuahua", edad: 21, activo: true },
  { usuarioId: 102, nombre: "Luis",  correo: "luis@example.com",  ciudad: "Juarez",    edad: 24, activo: true },
  { usuarioId: 103, nombre: "Maria", correo: "maria@example.com", ciudad: "Delicias",  edad: 20, activo: true },
  { usuarioId: 104, nombre: "Pablo", correo: "pablo@example.com", ciudad: "Parral",    edad: 23, activo: false }
]));

print("== READ: buscar por shard key ==");
printjson(usuarios.findOne({ usuarioId: 102 }));
print("== READ: listar todos ==");
printjson(usuarios.find({}, { _id: 0 }).sort({ usuarioId: 1 }).toArray());

print("== UPDATE: actualizar a Luis ==");
printjson(usuarios.updateOne(
  { usuarioId: 102 },
  { $set: { ciudad: "Chihuahua", activo: false } }
));
printjson(usuarios.findOne({ usuarioId: 102 }, { projection: { _id: 0 } }));

print("== DELETE: eliminar a Pablo ==");
printjson(usuarios.deleteOne({ usuarioId: 104 }));

print("== Resultado final ==");
printjson(usuarios.find({}, { _id: 0 }).sort({ usuarioId: 1 }).toArray());
print("Total de documentos: " + usuarios.countDocuments({}));
