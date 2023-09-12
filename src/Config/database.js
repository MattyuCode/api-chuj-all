const mongoose = require("mongoose");

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

module.exports = { connectToMongoDB };
