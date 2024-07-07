// src/controllers/exampleController.js
import Example from '../models/exampleModel.js';
import { formatResponse } from '../utils/helpers.js';
import { data } from '../data.js';

// const getExample = async (req, res) => {
//   try {
//     const examples = await Example.find();
//     res.json(formatResponse(examples));
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// };

// const createExample = async (req, res) => {
//   try {
//     const newExample = new Example(req.body);
//     const example = await newExample.save();
//     res.json(formatResponse(example));
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// };

const getHello = async (req, res) => {
  try {
    // const examples = await Example.find();
    // res.json(formatResponse(examples));
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export default {
  //   getExample,
  //   createExample,
  getHello,
};
