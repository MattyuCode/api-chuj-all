# ¿Cuáles son los métodos disponibles en Mongoose?

## Estos son algunos de los métodos del modelo que pueden ser invocados en Mongoose.

```txt 

Model.create(data, callback(err, doc))

Crea un nuevo documento y guarda la información en la base de datos.

Model.remove(query, callback(err))

Remueve documentos de una colección que coincida con el query.

Model.find(query, campos, callback(err, docs))

Localiza los documentos que coincidan con el query provisto.

Model.update(query, update, options, callback(err, num, raw))

Actualiza los documentos que coincidan con el query.

Model.populate(docs, options, callback(err, doc))

Popula los documentos utilizando referencias de otras colecciones.

Model.findOne(query, campos, options, callback(err, doc))

Realiza una consulta entre los documentos que coincidan con el query pero regresa solo uno.

Model.findOneAndUpdate(query, update, options, callback(err, doc))

Localiza el primer documento que coincida con el query y lo actualiza para finalizar regresa el documento actualizado.

Model.findOneAndRemove(query, options, callback(err, doc))

Localiza el primer documento que coincida con el query y lo remueve cuando lo localiza.

Model.findByIdAndUpdate(id, update, options, callback(err, doc))

A diferencia de findAndUpdate recibe directamente el Id para localizar el documento.

Model.findByIdAndRemove(id, options, callback(err, doc))

Similar a findOneAndRemove pero utiliza el id para encontrar directamente el documento.

```