const bookModel = require("../Models/bookModel");

const createBook = async function (req, res, next) {
  try {
    let data = req.body;
    let bookCreated = await bookModel.create(data);
    res.status(201).send({ status: true, data: bookCreated });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {createBook}