import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const GroupSchema = mongoose.Schema({
  _id: Number,
  gname: {
    type: String,
    required: [true,"Group name is required"],
    lowercase: true,
    unique: true,
    trim: true,
  }
});

// Apply the uniqueValidator plugin to ProjectSchema
GroupSchema.plugin(uniqueValidator);

// compile schema to model
const GroupSchemaModel = mongoose.model('group_collection',GroupSchema);

export default GroupSchemaModel