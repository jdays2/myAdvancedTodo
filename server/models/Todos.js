const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	priority: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	created: {
		type: String,
		required: true,
	},
	deadline: {
		type: String,
		required: true,
	},
});

const TodoModel = mongoose.model('Todos', TodoSchema);
module.exports = TodoModel;
