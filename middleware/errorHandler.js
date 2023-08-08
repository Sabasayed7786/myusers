const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Handle different types of errors and send an appropriate response to the client
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
  
    // Handle other types of errors as needed
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;
