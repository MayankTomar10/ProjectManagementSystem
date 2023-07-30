import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

var userSchema = mongoose.Schema({
    _id : Number,
    name : {
        type : String,
        required : [true, "Name is require"],
        lowercase : true,
        trim : true
    },
    email : {
        type : String,
        required : [true, "email is require"],
        lowercase : true,
        unique : true,
        trim : true
    },
    
    password : {
        type : String,
        required : [true, "Password is require"],
        minlenth : 5,
        maxlength : 10,
        trim : true
    },

    mobile : {
        type : String,
        required : [true, "Mobile is require"],
        minlenth : 10,
        maxlength : 10,
        trim : true
    },
    address : {
        type : String,
        required : [true, "address is require"],
        trim : true
    },
    city : {
        type : String,
        required : [true, "city is require"],
        trim : true
    },
    gender : {
        type : String,
        required : [true, "gender is require"],
        trim : true
    },
    role : String,
    status : Number,
    info : String

});

userSchema.plugin(UniqueValidator);

const userSchemaModel = mongoose.model("user_collection",userSchema);

export default userSchemaModel;
