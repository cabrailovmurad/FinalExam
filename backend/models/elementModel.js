import mongoose, { Schema } from "mongoose";

const exampleSchema = new Schema({
    image: String,
    title: String,
    price: Number,
    description: String,
    rating: String
});

export const Example = mongoose.model('Example', exampleSchema);