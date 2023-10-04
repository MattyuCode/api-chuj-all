const mongoose = require("mongoose");

//NOTE: TO RETRIEVE DATA IN THE MAIN MONGODB
const connectToMongoDB = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `👨‍💻 Conectado a MONGODB ${connectionDB.connection.host} - en puerto ${connectionDB.connection.port}`;
    console.log(url);
    return url;
  } catch (error) {
    console.log("Error al conectar a MongoDB", error);
  }
};


//NOTE: to register user in the other MONGODB
const MongoDBCreateUser = mongoose.createConnection(process.env.MONGODB_URI2, {
  useNewUrlParser: true,
});

module.exports = { connectToMongoDB, MongoDBCreateUser };
