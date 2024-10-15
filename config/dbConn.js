const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        tls: true,
      };
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
