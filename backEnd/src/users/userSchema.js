import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    cnic : {type : Number, required: true},
    name : {type : String, required: true},
    email : {type : String, required: true, unique: true},
    password : {type : String,required: true}
},
{timestamps: true}
);

const User = mongoose.model("User", userSchema)

export default User;
