// src/models/exampleModel.js
import mongoose from 'mongoose';

const ExampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Example = mongoose.model('Example', ExampleSchema);

export default Example;
