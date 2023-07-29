import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };
  const onClick = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, currentIndex) => {
        return currentIndex !== index;
      })
    );
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onClick(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
