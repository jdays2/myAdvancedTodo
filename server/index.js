const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3001;

mongoose.connect(
	'mongodb+srv://markgorsharik:A4efZ66BrMuT6Gno@todo.eufq04p.mongodb.net/Stud?retryWrites=true&w=majority',
);

app.use(cors());

app.use(express.json());

const TodoModel = require('./models/Todos');

app.get('/getTodos', async (req, res) => {
	try {
		const result = await TodoModel.find({});
		res.json(result);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error' });
	}
});

app.post('/createTodo', async (req, res) => {
	try {
		const todo = req.body;
		const newTodo = new TodoModel(todo);
		await newTodo.save();
		res.json(newTodo);
	} catch (error) {
		console.error('Ошибка при сохранении данных:', error);
		res.status(500).json({ message: 'Внутренняя ошибка сервера' });
	}
});

app.put('/editTodo/:id', async (req, res) => {
	try {
		const todoId = req.params.id;
		const updatedTodoData = req.body;
		const updatedTodo = await TodoModel.findByIdAndUpdate(
			todoId,
			updatedTodoData,
			{ new: true },
		);

		if (!updatedTodo) {
			return res.status(404).json({ message: 'Задача не найдена' });
		}

		res.json(updatedTodo);
	} catch (error) {
		console.error('Ошибка при обновлении данных:', error);
		res.status(500).json({ message: 'Внутренняя ошибка сервера' });
	}
});

app.delete('/deleteTodo/:id', async (req, res) => {
	try {
		const todoId = req.params.id;

		const deletedTodo = await TodoModel.findByIdAndDelete(todoId);

		if (!deletedTodo) {
			return res.status(404).json({ message: 'Задача не найдена' });
		}

		res.json({ id: deletedTodo._id });
	} catch (error) {
		console.error('Ошибка при удалении задачи:', error);
		res.status(500).json({ message: 'Внутренняя ошибка сервера' });
	}
});

app.listen(port, () => {
	console.log('Сервер запущен на порту 3001');
});
