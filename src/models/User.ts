import {Schema,model} from "mongoose";

//defining the User Schema

const userSchema = new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})

//Exporting the User Model
export default model("User",userSchema);