const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI;

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
