const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position name'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.TypesObjectId,
      ref: 'User',
      required: [true, 'Please provide'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobsSchema);
