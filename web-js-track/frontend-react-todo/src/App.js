import { useState } from 'react';
import './App.css';

function App() {
    let [toDos, setToDos] = useState([])

    let toDoElements = toDos.map((toDo) => {
        return (
            <div className="todo-item" key={toDo}>
                <p>{toDo}</p>
                <button data-testid={`eval-intem-done-${toDo}`} onClick={() => setAsDone(toDo)} className="check-button">✅</button>
            </div>
        )
    })

    function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = formData.get("todo")
        setToDos(prev => {
            return [...prev, data]
        })

        e.target.reset()
    }

    function setAsDone(toDo) {
        setToDos(prev => {
            const index = prev.indexOf(toDo)
            if (index === -1) {
                return prev
            }
            const newToDos = [
                ...prev.slice(0, index),
                ...prev.slice(index + 1)
            ]
            return newToDos
        })
    }
  return (
    <main>
        <h1>My First Todo List</h1>
        {toDoElements}

        <form onSubmit={submitHandler} className="todo-form">
            <input data-testid="eval-input-field" type="text" name="todo" placeholder="Enter New Todo"></input>
            <button data-testid="eval-add-todo-button" type="submit">+</button>
        </form>

      <div data-testid="email">andreaswelly.2002@gmail.com</div>
    </main>
  );
}

export default App;
