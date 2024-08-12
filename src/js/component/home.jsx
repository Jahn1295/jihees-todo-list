import React, { useState } from "react";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const handleAddTodo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTodos([...todos, inputValue.trim()]);
			setInputValue('');
		}
	}
	const handleDeleteTodo = (index) => {
		setTodos(todos.filter((todo, i) => index !== i))
	}
	return (
		<div className="todoListBody">
			<h1 className="title">My ToDo's List</h1>
			<ul className="list-group">
				<li className="list-group-item">
					<input
						type='text'
						value={inputValue}
						onKeyDown={handleAddTodo}
						placeholder="What Needs to be Done?"
						onChange={(e) => setInputValue(e.target.value)}
					/>
				</li>
				{todos.length === 0 ? (
					<li className="list-group-item">No tasks. Add a task.</li>

				) : (
					todos.map((todo, index) => (
						<li className="list-group-item" key={index}>
							<div className="list-group-item-todo" id="screen">
								{todo}
							</div>
							<span className="x-container" onClick={() => handleDeleteTodo(index)}><i className="fa-solid fa-trash-can"></i></span>
						</li>
					))
				)}
			</ul>
			<div>
				{todos.length} {todos.length === 1 ? "item" : "items"} left
			</div>
		</div>
	);
};

export default Home;
