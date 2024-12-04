const Object = require('../models/objectModel');

exports.createObject = async (req, res) => {
  try {
    const newObject = new Object(req.body);
    const savedObject = await newObject.save();
    res.status(201).json(savedObject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getObjects = async (req, res) => {
  try {
    const objects = await Object.find();
    res.status(200).json(objects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteObject = async (req, res) => {
  try {
    await Object.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Object deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
