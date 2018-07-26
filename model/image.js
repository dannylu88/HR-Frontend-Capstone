const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	product:{type:String, required:true},
	imageUrl:{type:[String], required:true}
});

module.exports = mongoose.model('Image', imageSchema);