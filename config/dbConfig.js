const mongoose = require("mongoose");
const mongoConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://depthSearch:${process.env.db_password}@cluster0.hmzjmgz.mongodb.net/?retryWrites=true&w=majority`
    )
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB @ 27017');
  });
};
module.exports = mongoConnection();
