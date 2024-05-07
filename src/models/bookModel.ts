import {Schema, model ,Document} from 'mongoose'
interface Book extends Document {
	title:string;
	author:string;
	category:string;
}

const bookSchema :Schema = new Schema({
	title:{type:String,required:true},
	author:{type:String,required:true},
	category:{type:String,required:true}

})

export default model <Book>('Book',bookSchema)