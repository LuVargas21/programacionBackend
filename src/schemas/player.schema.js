import mongoose from "mongoose";
export const playersColelction = "Players";

const playerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	sport: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
	},
	image: {
		type: String,
		default: "",
	},
});

const playerModel = mongoose.model(playersColelction, playerSchema);
export default playerModel;
