var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	name: { type: String, required: true, unique: true },
	city: { type: String },
	details: [{
		fieldName: String,
		fieldContent: String,
	}],
	color: { type: String, required: true},
	position: { type: Number, required: true},
	comingSoon: {type: Boolean, required: true},
	images:[{
            type: String,
        }],
});

module.exports = mongoose.model('Project', ProjectSchema);