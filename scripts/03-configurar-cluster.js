// Ejecutar en el router mongos SOLO tras iniciar los cuatro replica sets.
// El write concern explicito es importante para shards de un unico miembro.
print("== Write concern del cluster ==");
printjson(db.getSiblingDB("admin").runCommand({
  setDefaultRWConcern: 1,
  defaultWriteConcern: { w: 1 }
}));

print("== Agregar shard1 ==");
printjson(sh.addShard("shard1rs/shard1:27018"));
print("== Agregar shard2 ==");
printjson(sh.addShard("shard2rs/shard2:27018"));
print("== Agregar shard3 ==");
printjson(sh.addShard("shard3rs/shard3:27018"));

print("== Habilitar sharding para la base ==");
printjson(sh.enableSharding("practica_distribuida"));

print("== Crear coleccion shardeada por usuarioId (hashed) ==");
printjson(sh.shardCollection("practica_distribuida.usuarios", { usuarioId: "hashed" }));

print("== Estado del cluster ==");
sh.status();
