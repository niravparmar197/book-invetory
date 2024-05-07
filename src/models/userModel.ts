import {Schema, model ,Document} from 'mongoose'
interface User extends Document {
	fullname:string;
	email:string;
	username:string;
	password:string;
}

const userSchema :Schema = new Schema({
	fullname:{type:String,required:true},
	email:{type:String,required:true,unique:true},
	username:{type:String,required:true},
	password:{type:String,required:true}

})

export default model <User>('User',userSchema)