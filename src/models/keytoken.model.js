const mongoose = require("mongoose"); // Erase if already required

const { Schema, model } = mongoose;
const DOCUMENT_NAME = "Key";
const COLLECTION_NAME = "Keys";
// Declare the Schema of the Mongo model
const KeyTokenSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Shop",
		},
		publicKey: {
			type: String,
			required: true,
		},
		refreshToken: {
			type: Array,
			default: [],
		},
	},
	{
		collation: COLLECTION_NAME,
		timestamps: true,
	}
);

//Export the model
module.exports = model(DOCUMENT_NAME, KeyTokenSchema);
