import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProjectSchema = mongoose.Schema({
  _id: Number,
  ptitle: {
    type: String,
    required: [true, "Project title is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  pstream: {
    type: String,
    required: [true, "Project stream is required"],
    lowercase: true,
    trim: true
  },
  pdescription: {
    type: String,
    required: [true, "Project description is required"],
    lowercase: true,
    trim: true
  },
  pdocname: {
    type: String,
    required: [true, "Project doc name is required"],
    lowercase: true,
    trim: true
  }
});

// Apply the uniqueValidator plugin to ProjectSchema
ProjectSchema.plugin(uniqueValidator);

// compile schema to model
const ProjectSchemaModel = mongoose.model('project_collection', ProjectSchema);

export default ProjectSchemaModel